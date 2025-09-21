/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals = config.externals.filter(
                (external) => external !== 'mjml-core'
            );
            config.externals.push('mjml', 'handlebars');
        }

        // Fix MetaMask SDK React Native dependencies
        config.resolve.fallback = {
            ...config.resolve.fallback,
            '@react-native-async-storage/async-storage': false,
            'react-native': false,
        };

        return config;
    },
};

export default nextConfig;
