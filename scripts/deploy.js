const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting Escrow contract deployment...\n");

  // Get the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);

  // Get account balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", hre.ethers.formatEther(balance), "ETH\n");

  // Deploy the Escrow contract
  console.log("📦 Deploying Escrow contract...");
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();

  await escrow.waitForDeployment();

  const escrowAddress = await escrow.getAddress();
  console.log("✅ Escrow contract deployed to:", escrowAddress);

  // Get network information
  const network = await hre.ethers.provider.getNetwork();
  console.log("🌐 Network:", network.name);
  console.log("🔗 Chain ID:", network.chainId.toString());

  // Display contract information
  console.log("\n📋 Contract Details:");
  console.log("├─ Contract Address:", escrowAddress);
  console.log("├─ Deployer:", deployer.address);
  console.log("├─ Fee Percentage:", await escrow.feePercentage(), "basis points (1%)");
  console.log("└─ Owner:", await escrow.owner());

  // Save deployment information
  const fs = require("fs");
  const deploymentInfo = {
    network: network.name,
    chainId: network.chainId.toString(),
    contractAddress: escrowAddress,
    deployer: deployer.address,
    deploymentTime: new Date().toISOString(),
    blockNumber: await hre.ethers.provider.getBlockNumber(),
  };

  // Create deployments directory if it doesn't exist
  if (!fs.existsSync("./deployments")) {
    fs.mkdirSync("./deployments");
  }

  // Save deployment info
  const deploymentPath = `./deployments/${network.name}-${network.chainId}.json`;
  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
  console.log("\n💾 Deployment info saved to:", deploymentPath);

  // Update .env file
  console.log("\n⚙️  Updating .env file...");
  let envContent = "";
  if (fs.existsSync(".env")) {
    envContent = fs.readFileSync(".env", "utf8");
  }

  // Update or add the contract address
  const contractAddressRegex = /NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS=.*/;
  const newContractLine = `NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS=${escrowAddress}`;

  if (contractAddressRegex.test(envContent)) {
    envContent = envContent.replace(contractAddressRegex, newContractLine);
  } else {
    envContent += `\n${newContractLine}\n`;
  }

  fs.writeFileSync(".env", envContent);
  console.log("✅ .env file updated with contract address");

  // Display verification command
  console.log("\n🔍 To verify the contract on Etherscan, run:");
  console.log(
    `npx hardhat verify --network ${network.name} ${escrowAddress}`
  );

  // Display next steps
  console.log("\n✨ Deployment Complete! Next Steps:");
  console.log("1. Update your .env file with the contract address (already done)");
  console.log("2. Verify the contract on Etherscan using the command above");
  console.log("3. Update your frontend to use the new contract address");
  console.log("4. Test the escrow functionality on testnet before mainnet\n");

  return escrowAddress;
}

// Execute deployment
main()
  .then((address) => {
    console.log("🎉 Deployment successful!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
