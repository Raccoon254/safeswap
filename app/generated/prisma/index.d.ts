
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Escrow
 * 
 */
export type Escrow = $Result.DefaultSelection<Prisma.$EscrowPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CodeType: {
  LOGIN: 'LOGIN',
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type CodeType = (typeof CodeType)[keyof typeof CodeType]


export const EscrowStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DISPUTED: 'DISPUTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type EscrowStatus = (typeof EscrowStatus)[keyof typeof EscrowStatus]

}

export type CodeType = $Enums.CodeType

export const CodeType: typeof $Enums.CodeType

export type EscrowStatus = $Enums.EscrowStatus

export const EscrowStatus: typeof $Enums.EscrowStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escrow`: Exposes CRUD operations for the **Escrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escrows
    * const escrows = await prisma.escrow.findMany()
    * ```
    */
  get escrow(): Prisma.EscrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    VerificationCode: 'VerificationCode',
    Escrow: 'Escrow',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "verificationCode" | "escrow" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      Escrow: {
        payload: Prisma.$EscrowPayload<ExtArgs>
        fields: Prisma.EscrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          findFirst: {
            args: Prisma.EscrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          findMany: {
            args: Prisma.EscrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>[]
          }
          create: {
            args: Prisma.EscrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          createMany: {
            args: Prisma.EscrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>[]
          }
          delete: {
            args: Prisma.EscrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          update: {
            args: Prisma.EscrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          deleteMany: {
            args: Prisma.EscrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>[]
          }
          upsert: {
            args: Prisma.EscrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowPayload>
          }
          aggregate: {
            args: Prisma.EscrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscrow>
          }
          groupBy: {
            args: Prisma.EscrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscrowCountArgs<ExtArgs>
            result: $Utils.Optional<EscrowCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    verificationCode?: VerificationCodeOmit
    escrow?: EscrowOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    escrowsCreated: number
    escrowsReceived: number
    sessions: number
    verificationCodes: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrowsCreated?: boolean | UserCountOutputTypeCountEscrowsCreatedArgs
    escrowsReceived?: boolean | UserCountOutputTypeCountEscrowsReceivedArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    verificationCodes?: boolean | UserCountOutputTypeCountVerificationCodesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEscrowsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscrowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEscrowsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscrowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type EscrowCountOutputType
   */

  export type EscrowCountOutputType = {
    messages: number
  }

  export type EscrowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | EscrowCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * EscrowCountOutputType without action
   */
  export type EscrowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowCountOutputType
     */
    select?: EscrowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EscrowCountOutputType without action
   */
  export type EscrowCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    walletAddress: string | null
    isVerified: boolean | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    walletAddress: string | null
    isVerified: boolean | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    walletAddress: number
    isVerified: number
    name: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    walletAddress?: true
    isVerified?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    walletAddress?: true
    isVerified?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    walletAddress?: true
    isVerified?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    walletAddress: string | null
    isVerified: boolean
    name: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    walletAddress?: boolean
    isVerified?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    escrowsCreated?: boolean | User$escrowsCreatedArgs<ExtArgs>
    escrowsReceived?: boolean | User$escrowsReceivedArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    walletAddress?: boolean
    isVerified?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    walletAddress?: boolean
    isVerified?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    walletAddress?: boolean
    isVerified?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "walletAddress" | "isVerified" | "name" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrowsCreated?: boolean | User$escrowsCreatedArgs<ExtArgs>
    escrowsReceived?: boolean | User$escrowsReceivedArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      escrowsCreated: Prisma.$EscrowPayload<ExtArgs>[]
      escrowsReceived: Prisma.$EscrowPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      verificationCodes: Prisma.$VerificationCodePayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      walletAddress: string | null
      isVerified: boolean
      name: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escrowsCreated<T extends User$escrowsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$escrowsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    escrowsReceived<T extends User$escrowsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$escrowsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationCodes<T extends User$verificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.escrowsCreated
   */
  export type User$escrowsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    where?: EscrowWhereInput
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    cursor?: EscrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscrowScalarFieldEnum | EscrowScalarFieldEnum[]
  }

  /**
   * User.escrowsReceived
   */
  export type User$escrowsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    where?: EscrowWhereInput
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    cursor?: EscrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscrowScalarFieldEnum | EscrowScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.verificationCodes
   */
  export type User$verificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    cursor?: VerificationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    type: $Enums.CodeType | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    type: $Enums.CodeType | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    type: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    userId: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "type" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["verificationCode"]>
  export type VerificationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string
      type: $Enums.CodeType
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly userId: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly type: FieldRef<"VerificationCode", 'CodeType'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly used: FieldRef<"VerificationCode", 'Boolean'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
  }


  /**
   * Model Escrow
   */

  export type AggregateEscrow = {
    _count: EscrowCountAggregateOutputType | null
    _avg: EscrowAvgAggregateOutputType | null
    _sum: EscrowSumAggregateOutputType | null
    _min: EscrowMinAggregateOutputType | null
    _max: EscrowMaxAggregateOutputType | null
  }

  export type EscrowAvgAggregateOutputType = {
    chainId: number | null
  }

  export type EscrowSumAggregateOutputType = {
    chainId: number | null
  }

  export type EscrowMinAggregateOutputType = {
    id: string | null
    contractAddress: string | null
    chainId: number | null
    tokenAddress: string | null
    tokenSymbol: string | null
    amount: string | null
    status: $Enums.EscrowStatus | null
    description: string | null
    terms: string | null
    creatorId: string | null
    creatorWallet: string | null
    recipientEmail: string | null
    recipientId: string | null
    recipientWallet: string | null
    buyerConfirmed: boolean | null
    sellerConfirmed: boolean | null
    disputed: boolean | null
    disputeReason: string | null
    transactionHash: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscrowMaxAggregateOutputType = {
    id: string | null
    contractAddress: string | null
    chainId: number | null
    tokenAddress: string | null
    tokenSymbol: string | null
    amount: string | null
    status: $Enums.EscrowStatus | null
    description: string | null
    terms: string | null
    creatorId: string | null
    creatorWallet: string | null
    recipientEmail: string | null
    recipientId: string | null
    recipientWallet: string | null
    buyerConfirmed: boolean | null
    sellerConfirmed: boolean | null
    disputed: boolean | null
    disputeReason: string | null
    transactionHash: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscrowCountAggregateOutputType = {
    id: number
    contractAddress: number
    chainId: number
    tokenAddress: number
    tokenSymbol: number
    amount: number
    status: number
    description: number
    terms: number
    creatorId: number
    creatorWallet: number
    recipientEmail: number
    recipientId: number
    recipientWallet: number
    buyerConfirmed: number
    sellerConfirmed: number
    disputed: number
    disputeReason: number
    transactionHash: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EscrowAvgAggregateInputType = {
    chainId?: true
  }

  export type EscrowSumAggregateInputType = {
    chainId?: true
  }

  export type EscrowMinAggregateInputType = {
    id?: true
    contractAddress?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    amount?: true
    status?: true
    description?: true
    terms?: true
    creatorId?: true
    creatorWallet?: true
    recipientEmail?: true
    recipientId?: true
    recipientWallet?: true
    buyerConfirmed?: true
    sellerConfirmed?: true
    disputed?: true
    disputeReason?: true
    transactionHash?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscrowMaxAggregateInputType = {
    id?: true
    contractAddress?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    amount?: true
    status?: true
    description?: true
    terms?: true
    creatorId?: true
    creatorWallet?: true
    recipientEmail?: true
    recipientId?: true
    recipientWallet?: true
    buyerConfirmed?: true
    sellerConfirmed?: true
    disputed?: true
    disputeReason?: true
    transactionHash?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscrowCountAggregateInputType = {
    id?: true
    contractAddress?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    amount?: true
    status?: true
    description?: true
    terms?: true
    creatorId?: true
    creatorWallet?: true
    recipientEmail?: true
    recipientId?: true
    recipientWallet?: true
    buyerConfirmed?: true
    sellerConfirmed?: true
    disputed?: true
    disputeReason?: true
    transactionHash?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EscrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escrow to aggregate.
     */
    where?: EscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escrows to fetch.
     */
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escrows
    **/
    _count?: true | EscrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscrowMaxAggregateInputType
  }

  export type GetEscrowAggregateType<T extends EscrowAggregateArgs> = {
        [P in keyof T & keyof AggregateEscrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscrow[P]>
      : GetScalarType<T[P], AggregateEscrow[P]>
  }




  export type EscrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscrowWhereInput
    orderBy?: EscrowOrderByWithAggregationInput | EscrowOrderByWithAggregationInput[]
    by: EscrowScalarFieldEnum[] | EscrowScalarFieldEnum
    having?: EscrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscrowCountAggregateInputType | true
    _avg?: EscrowAvgAggregateInputType
    _sum?: EscrowSumAggregateInputType
    _min?: EscrowMinAggregateInputType
    _max?: EscrowMaxAggregateInputType
  }

  export type EscrowGroupByOutputType = {
    id: string
    contractAddress: string | null
    chainId: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status: $Enums.EscrowStatus
    description: string
    terms: string | null
    creatorId: string
    creatorWallet: string | null
    recipientEmail: string
    recipientId: string | null
    recipientWallet: string | null
    buyerConfirmed: boolean
    sellerConfirmed: boolean
    disputed: boolean
    disputeReason: string | null
    transactionHash: string | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EscrowCountAggregateOutputType | null
    _avg: EscrowAvgAggregateOutputType | null
    _sum: EscrowSumAggregateOutputType | null
    _min: EscrowMinAggregateOutputType | null
    _max: EscrowMaxAggregateOutputType | null
  }

  type GetEscrowGroupByPayload<T extends EscrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscrowGroupByOutputType[P]>
            : GetScalarType<T[P], EscrowGroupByOutputType[P]>
        }
      >
    >


  export type EscrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractAddress?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    amount?: boolean
    status?: boolean
    description?: boolean
    terms?: boolean
    creatorId?: boolean
    creatorWallet?: boolean
    recipientEmail?: boolean
    recipientId?: boolean
    recipientWallet?: boolean
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: boolean
    transactionHash?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
    messages?: boolean | Escrow$messagesArgs<ExtArgs>
    _count?: boolean | EscrowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escrow"]>

  export type EscrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractAddress?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    amount?: boolean
    status?: boolean
    description?: boolean
    terms?: boolean
    creatorId?: boolean
    creatorWallet?: boolean
    recipientEmail?: boolean
    recipientId?: boolean
    recipientWallet?: boolean
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: boolean
    transactionHash?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["escrow"]>

  export type EscrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractAddress?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    amount?: boolean
    status?: boolean
    description?: boolean
    terms?: boolean
    creatorId?: boolean
    creatorWallet?: boolean
    recipientEmail?: boolean
    recipientId?: boolean
    recipientWallet?: boolean
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: boolean
    transactionHash?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["escrow"]>

  export type EscrowSelectScalar = {
    id?: boolean
    contractAddress?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    amount?: boolean
    status?: boolean
    description?: boolean
    terms?: boolean
    creatorId?: boolean
    creatorWallet?: boolean
    recipientEmail?: boolean
    recipientId?: boolean
    recipientWallet?: boolean
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: boolean
    transactionHash?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EscrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractAddress" | "chainId" | "tokenAddress" | "tokenSymbol" | "amount" | "status" | "description" | "terms" | "creatorId" | "creatorWallet" | "recipientEmail" | "recipientId" | "recipientWallet" | "buyerConfirmed" | "sellerConfirmed" | "disputed" | "disputeReason" | "transactionHash" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["escrow"]>
  export type EscrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
    messages?: boolean | Escrow$messagesArgs<ExtArgs>
    _count?: boolean | EscrowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EscrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
  }
  export type EscrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | Escrow$recipientArgs<ExtArgs>
  }

  export type $EscrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escrow"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractAddress: string | null
      chainId: number
      tokenAddress: string
      tokenSymbol: string
      amount: string
      status: $Enums.EscrowStatus
      description: string
      terms: string | null
      creatorId: string
      creatorWallet: string | null
      recipientEmail: string
      recipientId: string | null
      recipientWallet: string | null
      buyerConfirmed: boolean
      sellerConfirmed: boolean
      disputed: boolean
      disputeReason: string | null
      transactionHash: string | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["escrow"]>
    composites: {}
  }

  type EscrowGetPayload<S extends boolean | null | undefined | EscrowDefaultArgs> = $Result.GetResult<Prisma.$EscrowPayload, S>

  type EscrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscrowCountAggregateInputType | true
    }

  export interface EscrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escrow'], meta: { name: 'Escrow' } }
    /**
     * Find zero or one Escrow that matches the filter.
     * @param {EscrowFindUniqueArgs} args - Arguments to find a Escrow
     * @example
     * // Get one Escrow
     * const escrow = await prisma.escrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscrowFindUniqueArgs>(args: SelectSubset<T, EscrowFindUniqueArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Escrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscrowFindUniqueOrThrowArgs} args - Arguments to find a Escrow
     * @example
     * // Get one Escrow
     * const escrow = await prisma.escrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscrowFindUniqueOrThrowArgs>(args: SelectSubset<T, EscrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowFindFirstArgs} args - Arguments to find a Escrow
     * @example
     * // Get one Escrow
     * const escrow = await prisma.escrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscrowFindFirstArgs>(args?: SelectSubset<T, EscrowFindFirstArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowFindFirstOrThrowArgs} args - Arguments to find a Escrow
     * @example
     * // Get one Escrow
     * const escrow = await prisma.escrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscrowFindFirstOrThrowArgs>(args?: SelectSubset<T, EscrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Escrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escrows
     * const escrows = await prisma.escrow.findMany()
     * 
     * // Get first 10 Escrows
     * const escrows = await prisma.escrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escrowWithIdOnly = await prisma.escrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscrowFindManyArgs>(args?: SelectSubset<T, EscrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Escrow.
     * @param {EscrowCreateArgs} args - Arguments to create a Escrow.
     * @example
     * // Create one Escrow
     * const Escrow = await prisma.escrow.create({
     *   data: {
     *     // ... data to create a Escrow
     *   }
     * })
     * 
     */
    create<T extends EscrowCreateArgs>(args: SelectSubset<T, EscrowCreateArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Escrows.
     * @param {EscrowCreateManyArgs} args - Arguments to create many Escrows.
     * @example
     * // Create many Escrows
     * const escrow = await prisma.escrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscrowCreateManyArgs>(args?: SelectSubset<T, EscrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escrows and returns the data saved in the database.
     * @param {EscrowCreateManyAndReturnArgs} args - Arguments to create many Escrows.
     * @example
     * // Create many Escrows
     * const escrow = await prisma.escrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escrows and only return the `id`
     * const escrowWithIdOnly = await prisma.escrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscrowCreateManyAndReturnArgs>(args?: SelectSubset<T, EscrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Escrow.
     * @param {EscrowDeleteArgs} args - Arguments to delete one Escrow.
     * @example
     * // Delete one Escrow
     * const Escrow = await prisma.escrow.delete({
     *   where: {
     *     // ... filter to delete one Escrow
     *   }
     * })
     * 
     */
    delete<T extends EscrowDeleteArgs>(args: SelectSubset<T, EscrowDeleteArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Escrow.
     * @param {EscrowUpdateArgs} args - Arguments to update one Escrow.
     * @example
     * // Update one Escrow
     * const escrow = await prisma.escrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscrowUpdateArgs>(args: SelectSubset<T, EscrowUpdateArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Escrows.
     * @param {EscrowDeleteManyArgs} args - Arguments to filter Escrows to delete.
     * @example
     * // Delete a few Escrows
     * const { count } = await prisma.escrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscrowDeleteManyArgs>(args?: SelectSubset<T, EscrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escrows
     * const escrow = await prisma.escrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscrowUpdateManyArgs>(args: SelectSubset<T, EscrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escrows and returns the data updated in the database.
     * @param {EscrowUpdateManyAndReturnArgs} args - Arguments to update many Escrows.
     * @example
     * // Update many Escrows
     * const escrow = await prisma.escrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Escrows and only return the `id`
     * const escrowWithIdOnly = await prisma.escrow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EscrowUpdateManyAndReturnArgs>(args: SelectSubset<T, EscrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Escrow.
     * @param {EscrowUpsertArgs} args - Arguments to update or create a Escrow.
     * @example
     * // Update or create a Escrow
     * const escrow = await prisma.escrow.upsert({
     *   create: {
     *     // ... data to create a Escrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escrow we want to update
     *   }
     * })
     */
    upsert<T extends EscrowUpsertArgs>(args: SelectSubset<T, EscrowUpsertArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowCountArgs} args - Arguments to filter Escrows to count.
     * @example
     * // Count the number of Escrows
     * const count = await prisma.escrow.count({
     *   where: {
     *     // ... the filter for the Escrows we want to count
     *   }
     * })
    **/
    count<T extends EscrowCountArgs>(
      args?: Subset<T, EscrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EscrowAggregateArgs>(args: Subset<T, EscrowAggregateArgs>): Prisma.PrismaPromise<GetEscrowAggregateType<T>>

    /**
     * Group by Escrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EscrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscrowGroupByArgs['orderBy'] }
        : { orderBy?: EscrowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EscrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escrow model
   */
  readonly fields: EscrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends Escrow$recipientArgs<ExtArgs> = {}>(args?: Subset<T, Escrow$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Escrow$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Escrow$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Escrow model
   */
  interface EscrowFieldRefs {
    readonly id: FieldRef<"Escrow", 'String'>
    readonly contractAddress: FieldRef<"Escrow", 'String'>
    readonly chainId: FieldRef<"Escrow", 'Int'>
    readonly tokenAddress: FieldRef<"Escrow", 'String'>
    readonly tokenSymbol: FieldRef<"Escrow", 'String'>
    readonly amount: FieldRef<"Escrow", 'String'>
    readonly status: FieldRef<"Escrow", 'EscrowStatus'>
    readonly description: FieldRef<"Escrow", 'String'>
    readonly terms: FieldRef<"Escrow", 'String'>
    readonly creatorId: FieldRef<"Escrow", 'String'>
    readonly creatorWallet: FieldRef<"Escrow", 'String'>
    readonly recipientEmail: FieldRef<"Escrow", 'String'>
    readonly recipientId: FieldRef<"Escrow", 'String'>
    readonly recipientWallet: FieldRef<"Escrow", 'String'>
    readonly buyerConfirmed: FieldRef<"Escrow", 'Boolean'>
    readonly sellerConfirmed: FieldRef<"Escrow", 'Boolean'>
    readonly disputed: FieldRef<"Escrow", 'Boolean'>
    readonly disputeReason: FieldRef<"Escrow", 'String'>
    readonly transactionHash: FieldRef<"Escrow", 'String'>
    readonly completedAt: FieldRef<"Escrow", 'DateTime'>
    readonly createdAt: FieldRef<"Escrow", 'DateTime'>
    readonly updatedAt: FieldRef<"Escrow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Escrow findUnique
   */
  export type EscrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter, which Escrow to fetch.
     */
    where: EscrowWhereUniqueInput
  }

  /**
   * Escrow findUniqueOrThrow
   */
  export type EscrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter, which Escrow to fetch.
     */
    where: EscrowWhereUniqueInput
  }

  /**
   * Escrow findFirst
   */
  export type EscrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter, which Escrow to fetch.
     */
    where?: EscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escrows to fetch.
     */
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escrows.
     */
    cursor?: EscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escrows.
     */
    distinct?: EscrowScalarFieldEnum | EscrowScalarFieldEnum[]
  }

  /**
   * Escrow findFirstOrThrow
   */
  export type EscrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter, which Escrow to fetch.
     */
    where?: EscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escrows to fetch.
     */
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escrows.
     */
    cursor?: EscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escrows.
     */
    distinct?: EscrowScalarFieldEnum | EscrowScalarFieldEnum[]
  }

  /**
   * Escrow findMany
   */
  export type EscrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter, which Escrows to fetch.
     */
    where?: EscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escrows to fetch.
     */
    orderBy?: EscrowOrderByWithRelationInput | EscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escrows.
     */
    cursor?: EscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escrows.
     */
    skip?: number
    distinct?: EscrowScalarFieldEnum | EscrowScalarFieldEnum[]
  }

  /**
   * Escrow create
   */
  export type EscrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * The data needed to create a Escrow.
     */
    data: XOR<EscrowCreateInput, EscrowUncheckedCreateInput>
  }

  /**
   * Escrow createMany
   */
  export type EscrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escrows.
     */
    data: EscrowCreateManyInput | EscrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escrow createManyAndReturn
   */
  export type EscrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * The data used to create many Escrows.
     */
    data: EscrowCreateManyInput | EscrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escrow update
   */
  export type EscrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * The data needed to update a Escrow.
     */
    data: XOR<EscrowUpdateInput, EscrowUncheckedUpdateInput>
    /**
     * Choose, which Escrow to update.
     */
    where: EscrowWhereUniqueInput
  }

  /**
   * Escrow updateMany
   */
  export type EscrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escrows.
     */
    data: XOR<EscrowUpdateManyMutationInput, EscrowUncheckedUpdateManyInput>
    /**
     * Filter which Escrows to update
     */
    where?: EscrowWhereInput
    /**
     * Limit how many Escrows to update.
     */
    limit?: number
  }

  /**
   * Escrow updateManyAndReturn
   */
  export type EscrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * The data used to update Escrows.
     */
    data: XOR<EscrowUpdateManyMutationInput, EscrowUncheckedUpdateManyInput>
    /**
     * Filter which Escrows to update
     */
    where?: EscrowWhereInput
    /**
     * Limit how many Escrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escrow upsert
   */
  export type EscrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * The filter to search for the Escrow to update in case it exists.
     */
    where: EscrowWhereUniqueInput
    /**
     * In case the Escrow found by the `where` argument doesn't exist, create a new Escrow with this data.
     */
    create: XOR<EscrowCreateInput, EscrowUncheckedCreateInput>
    /**
     * In case the Escrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscrowUpdateInput, EscrowUncheckedUpdateInput>
  }

  /**
   * Escrow delete
   */
  export type EscrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
    /**
     * Filter which Escrow to delete.
     */
    where: EscrowWhereUniqueInput
  }

  /**
   * Escrow deleteMany
   */
  export type EscrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escrows to delete
     */
    where?: EscrowWhereInput
    /**
     * Limit how many Escrows to delete.
     */
    limit?: number
  }

  /**
   * Escrow.recipient
   */
  export type Escrow$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Escrow.messages
   */
  export type Escrow$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Escrow without action
   */
  export type EscrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escrow
     */
    select?: EscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escrow
     */
    omit?: EscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    escrowId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    escrowId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    escrowId: number
    senderId: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    escrowId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    escrowId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    escrowId?: true
    senderId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    escrowId: string
    senderId: string
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    escrowId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "escrowId" | "senderId" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      escrow: Prisma.$EscrowPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      escrowId: string
      senderId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escrow<T extends EscrowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscrowDefaultArgs<ExtArgs>>): Prisma__EscrowClient<$Result.GetResult<Prisma.$EscrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly escrowId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    walletAddress: 'walletAddress',
    isVerified: 'isVerified',
    name: 'name',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    type: 'type',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const EscrowScalarFieldEnum: {
    id: 'id',
    contractAddress: 'contractAddress',
    chainId: 'chainId',
    tokenAddress: 'tokenAddress',
    tokenSymbol: 'tokenSymbol',
    amount: 'amount',
    status: 'status',
    description: 'description',
    terms: 'terms',
    creatorId: 'creatorId',
    creatorWallet: 'creatorWallet',
    recipientEmail: 'recipientEmail',
    recipientId: 'recipientId',
    recipientWallet: 'recipientWallet',
    buyerConfirmed: 'buyerConfirmed',
    sellerConfirmed: 'sellerConfirmed',
    disputed: 'disputed',
    disputeReason: 'disputeReason',
    transactionHash: 'transactionHash',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EscrowScalarFieldEnum = (typeof EscrowScalarFieldEnum)[keyof typeof EscrowScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    escrowId: 'escrowId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CodeType'
   */
  export type EnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType'>
    


  /**
   * Reference to a field of type 'CodeType[]'
   */
  export type ListEnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EscrowStatus'
   */
  export type EnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus'>
    


  /**
   * Reference to a field of type 'EscrowStatus[]'
   */
  export type ListEnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    walletAddress?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    escrowsCreated?: EscrowListRelationFilter
    escrowsReceived?: EscrowListRelationFilter
    sessions?: SessionListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    escrowsCreated?: EscrowOrderByRelationAggregateInput
    escrowsReceived?: EscrowOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    verificationCodes?: VerificationCodeOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isVerified?: BoolFilter<"User"> | boolean
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    escrowsCreated?: EscrowListRelationFilter
    escrowsReceived?: EscrowListRelationFilter
    sessions?: SessionListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    userId?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    used?: BoolFilter<"VerificationCode"> | boolean
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    userId?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    used?: BoolFilter<"VerificationCode"> | boolean
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    userId?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    type?: EnumCodeTypeWithAggregatesFilter<"VerificationCode"> | $Enums.CodeType
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    used?: BoolWithAggregatesFilter<"VerificationCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type EscrowWhereInput = {
    AND?: EscrowWhereInput | EscrowWhereInput[]
    OR?: EscrowWhereInput[]
    NOT?: EscrowWhereInput | EscrowWhereInput[]
    id?: StringFilter<"Escrow"> | string
    contractAddress?: StringNullableFilter<"Escrow"> | string | null
    chainId?: IntFilter<"Escrow"> | number
    tokenAddress?: StringFilter<"Escrow"> | string
    tokenSymbol?: StringFilter<"Escrow"> | string
    amount?: StringFilter<"Escrow"> | string
    status?: EnumEscrowStatusFilter<"Escrow"> | $Enums.EscrowStatus
    description?: StringFilter<"Escrow"> | string
    terms?: StringNullableFilter<"Escrow"> | string | null
    creatorId?: StringFilter<"Escrow"> | string
    creatorWallet?: StringNullableFilter<"Escrow"> | string | null
    recipientEmail?: StringFilter<"Escrow"> | string
    recipientId?: StringNullableFilter<"Escrow"> | string | null
    recipientWallet?: StringNullableFilter<"Escrow"> | string | null
    buyerConfirmed?: BoolFilter<"Escrow"> | boolean
    sellerConfirmed?: BoolFilter<"Escrow"> | boolean
    disputed?: BoolFilter<"Escrow"> | boolean
    disputeReason?: StringNullableFilter<"Escrow"> | string | null
    transactionHash?: StringNullableFilter<"Escrow"> | string | null
    completedAt?: DateTimeNullableFilter<"Escrow"> | Date | string | null
    createdAt?: DateTimeFilter<"Escrow"> | Date | string
    updatedAt?: DateTimeFilter<"Escrow"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: MessageListRelationFilter
  }

  export type EscrowOrderByWithRelationInput = {
    id?: SortOrder
    contractAddress?: SortOrderInput | SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    description?: SortOrder
    terms?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    creatorWallet?: SortOrderInput | SortOrder
    recipientEmail?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    recipientWallet?: SortOrderInput | SortOrder
    buyerConfirmed?: SortOrder
    sellerConfirmed?: SortOrder
    disputed?: SortOrder
    disputeReason?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type EscrowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscrowWhereInput | EscrowWhereInput[]
    OR?: EscrowWhereInput[]
    NOT?: EscrowWhereInput | EscrowWhereInput[]
    contractAddress?: StringNullableFilter<"Escrow"> | string | null
    chainId?: IntFilter<"Escrow"> | number
    tokenAddress?: StringFilter<"Escrow"> | string
    tokenSymbol?: StringFilter<"Escrow"> | string
    amount?: StringFilter<"Escrow"> | string
    status?: EnumEscrowStatusFilter<"Escrow"> | $Enums.EscrowStatus
    description?: StringFilter<"Escrow"> | string
    terms?: StringNullableFilter<"Escrow"> | string | null
    creatorId?: StringFilter<"Escrow"> | string
    creatorWallet?: StringNullableFilter<"Escrow"> | string | null
    recipientEmail?: StringFilter<"Escrow"> | string
    recipientId?: StringNullableFilter<"Escrow"> | string | null
    recipientWallet?: StringNullableFilter<"Escrow"> | string | null
    buyerConfirmed?: BoolFilter<"Escrow"> | boolean
    sellerConfirmed?: BoolFilter<"Escrow"> | boolean
    disputed?: BoolFilter<"Escrow"> | boolean
    disputeReason?: StringNullableFilter<"Escrow"> | string | null
    transactionHash?: StringNullableFilter<"Escrow"> | string | null
    completedAt?: DateTimeNullableFilter<"Escrow"> | Date | string | null
    createdAt?: DateTimeFilter<"Escrow"> | Date | string
    updatedAt?: DateTimeFilter<"Escrow"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: MessageListRelationFilter
  }, "id">

  export type EscrowOrderByWithAggregationInput = {
    id?: SortOrder
    contractAddress?: SortOrderInput | SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    description?: SortOrder
    terms?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    creatorWallet?: SortOrderInput | SortOrder
    recipientEmail?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    recipientWallet?: SortOrderInput | SortOrder
    buyerConfirmed?: SortOrder
    sellerConfirmed?: SortOrder
    disputed?: SortOrder
    disputeReason?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EscrowCountOrderByAggregateInput
    _avg?: EscrowAvgOrderByAggregateInput
    _max?: EscrowMaxOrderByAggregateInput
    _min?: EscrowMinOrderByAggregateInput
    _sum?: EscrowSumOrderByAggregateInput
  }

  export type EscrowScalarWhereWithAggregatesInput = {
    AND?: EscrowScalarWhereWithAggregatesInput | EscrowScalarWhereWithAggregatesInput[]
    OR?: EscrowScalarWhereWithAggregatesInput[]
    NOT?: EscrowScalarWhereWithAggregatesInput | EscrowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Escrow"> | string
    contractAddress?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    chainId?: IntWithAggregatesFilter<"Escrow"> | number
    tokenAddress?: StringWithAggregatesFilter<"Escrow"> | string
    tokenSymbol?: StringWithAggregatesFilter<"Escrow"> | string
    amount?: StringWithAggregatesFilter<"Escrow"> | string
    status?: EnumEscrowStatusWithAggregatesFilter<"Escrow"> | $Enums.EscrowStatus
    description?: StringWithAggregatesFilter<"Escrow"> | string
    terms?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    creatorId?: StringWithAggregatesFilter<"Escrow"> | string
    creatorWallet?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    recipientEmail?: StringWithAggregatesFilter<"Escrow"> | string
    recipientId?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    recipientWallet?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    buyerConfirmed?: BoolWithAggregatesFilter<"Escrow"> | boolean
    sellerConfirmed?: BoolWithAggregatesFilter<"Escrow"> | boolean
    disputed?: BoolWithAggregatesFilter<"Escrow"> | boolean
    disputeReason?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    transactionHash?: StringNullableWithAggregatesFilter<"Escrow"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Escrow"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Escrow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Escrow"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    escrowId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    escrow?: XOR<EscrowScalarRelationFilter, EscrowWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    escrow?: EscrowOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    escrowId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    escrow?: XOR<EscrowScalarRelationFilter, EscrowWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    escrowId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowCreateNestedManyWithoutRecipientInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowUncheckedCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowUncheckedCreateNestedManyWithoutRecipientInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUncheckedUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUncheckedUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    id?: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationCodesInput
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    userId: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationCodesNestedInput
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    userId: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscrowCreateInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutEscrowsCreatedInput
    recipient?: UserCreateNestedOneWithoutEscrowsReceivedInput
    messages?: MessageCreateNestedManyWithoutEscrowInput
  }

  export type EscrowUncheckedCreateInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorId: string
    creatorWallet?: string | null
    recipientEmail: string
    recipientId?: string | null
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEscrowsCreatedNestedInput
    recipient?: UserUpdateOneWithoutEscrowsReceivedNestedInput
    messages?: MessageUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowCreateManyInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorId: string
    creatorWallet?: string | null
    recipientEmail: string
    recipientId?: string | null
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscrowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscrowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    escrow: EscrowCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    escrowId: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrow?: EscrowUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    escrowId: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EscrowListRelationFilter = {
    every?: EscrowWhereInput
    some?: EscrowWhereInput
    none?: EscrowWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type VerificationCodeListRelationFilter = {
    every?: VerificationCodeWhereInput
    some?: VerificationCodeWhereInput
    none?: VerificationCodeWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EscrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    isVerified?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    isVerified?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    isVerified?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EscrowCountOrderByAggregateInput = {
    id?: SortOrder
    contractAddress?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    description?: SortOrder
    terms?: SortOrder
    creatorId?: SortOrder
    creatorWallet?: SortOrder
    recipientEmail?: SortOrder
    recipientId?: SortOrder
    recipientWallet?: SortOrder
    buyerConfirmed?: SortOrder
    sellerConfirmed?: SortOrder
    disputed?: SortOrder
    disputeReason?: SortOrder
    transactionHash?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowAvgOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type EscrowMaxOrderByAggregateInput = {
    id?: SortOrder
    contractAddress?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    description?: SortOrder
    terms?: SortOrder
    creatorId?: SortOrder
    creatorWallet?: SortOrder
    recipientEmail?: SortOrder
    recipientId?: SortOrder
    recipientWallet?: SortOrder
    buyerConfirmed?: SortOrder
    sellerConfirmed?: SortOrder
    disputed?: SortOrder
    disputeReason?: SortOrder
    transactionHash?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowMinOrderByAggregateInput = {
    id?: SortOrder
    contractAddress?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    description?: SortOrder
    terms?: SortOrder
    creatorId?: SortOrder
    creatorWallet?: SortOrder
    recipientEmail?: SortOrder
    recipientId?: SortOrder
    recipientWallet?: SortOrder
    buyerConfirmed?: SortOrder
    sellerConfirmed?: SortOrder
    disputed?: SortOrder
    disputeReason?: SortOrder
    transactionHash?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowSumOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EscrowScalarRelationFilter = {
    is?: EscrowWhereInput
    isNot?: EscrowWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EscrowCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput> | EscrowCreateWithoutCreatorInput[] | EscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutCreatorInput | EscrowCreateOrConnectWithoutCreatorInput[]
    createMany?: EscrowCreateManyCreatorInputEnvelope
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
  }

  export type EscrowCreateNestedManyWithoutRecipientInput = {
    create?: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput> | EscrowCreateWithoutRecipientInput[] | EscrowUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutRecipientInput | EscrowCreateOrConnectWithoutRecipientInput[]
    createMany?: EscrowCreateManyRecipientInputEnvelope
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type VerificationCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EscrowUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput> | EscrowCreateWithoutCreatorInput[] | EscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutCreatorInput | EscrowCreateOrConnectWithoutCreatorInput[]
    createMany?: EscrowCreateManyCreatorInputEnvelope
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
  }

  export type EscrowUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput> | EscrowCreateWithoutRecipientInput[] | EscrowUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutRecipientInput | EscrowCreateOrConnectWithoutRecipientInput[]
    createMany?: EscrowCreateManyRecipientInputEnvelope
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type VerificationCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EscrowUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput> | EscrowCreateWithoutCreatorInput[] | EscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutCreatorInput | EscrowCreateOrConnectWithoutCreatorInput[]
    upsert?: EscrowUpsertWithWhereUniqueWithoutCreatorInput | EscrowUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EscrowCreateManyCreatorInputEnvelope
    set?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    disconnect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    delete?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    update?: EscrowUpdateWithWhereUniqueWithoutCreatorInput | EscrowUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EscrowUpdateManyWithWhereWithoutCreatorInput | EscrowUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
  }

  export type EscrowUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput> | EscrowCreateWithoutRecipientInput[] | EscrowUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutRecipientInput | EscrowCreateOrConnectWithoutRecipientInput[]
    upsert?: EscrowUpsertWithWhereUniqueWithoutRecipientInput | EscrowUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: EscrowCreateManyRecipientInputEnvelope
    set?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    disconnect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    delete?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    update?: EscrowUpdateWithWhereUniqueWithoutRecipientInput | EscrowUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: EscrowUpdateManyWithWhereWithoutRecipientInput | EscrowUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type VerificationCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type EscrowUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput> | EscrowCreateWithoutCreatorInput[] | EscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutCreatorInput | EscrowCreateOrConnectWithoutCreatorInput[]
    upsert?: EscrowUpsertWithWhereUniqueWithoutCreatorInput | EscrowUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EscrowCreateManyCreatorInputEnvelope
    set?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    disconnect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    delete?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    update?: EscrowUpdateWithWhereUniqueWithoutCreatorInput | EscrowUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EscrowUpdateManyWithWhereWithoutCreatorInput | EscrowUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
  }

  export type EscrowUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput> | EscrowCreateWithoutRecipientInput[] | EscrowUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: EscrowCreateOrConnectWithoutRecipientInput | EscrowCreateOrConnectWithoutRecipientInput[]
    upsert?: EscrowUpsertWithWhereUniqueWithoutRecipientInput | EscrowUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: EscrowCreateManyRecipientInputEnvelope
    set?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    disconnect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    delete?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    connect?: EscrowWhereUniqueInput | EscrowWhereUniqueInput[]
    update?: EscrowUpdateWithWhereUniqueWithoutRecipientInput | EscrowUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: EscrowUpdateManyWithWhereWithoutRecipientInput | EscrowUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutVerificationCodesInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.CodeType
  }

  export type UserUpdateOneRequiredWithoutVerificationCodesNestedInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    upsert?: UserUpsertWithoutVerificationCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationCodesInput, UserUpdateWithoutVerificationCodesInput>, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UserCreateNestedOneWithoutEscrowsCreatedInput = {
    create?: XOR<UserCreateWithoutEscrowsCreatedInput, UserUncheckedCreateWithoutEscrowsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscrowsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEscrowsReceivedInput = {
    create?: XOR<UserCreateWithoutEscrowsReceivedInput, UserUncheckedCreateWithoutEscrowsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscrowsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutEscrowInput = {
    create?: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput> | MessageCreateWithoutEscrowInput[] | MessageUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEscrowInput | MessageCreateOrConnectWithoutEscrowInput[]
    createMany?: MessageCreateManyEscrowInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutEscrowInput = {
    create?: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput> | MessageCreateWithoutEscrowInput[] | MessageUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEscrowInput | MessageCreateOrConnectWithoutEscrowInput[]
    createMany?: MessageCreateManyEscrowInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEscrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.EscrowStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEscrowsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutEscrowsCreatedInput, UserUncheckedCreateWithoutEscrowsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscrowsCreatedInput
    upsert?: UserUpsertWithoutEscrowsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEscrowsCreatedInput, UserUpdateWithoutEscrowsCreatedInput>, UserUncheckedUpdateWithoutEscrowsCreatedInput>
  }

  export type UserUpdateOneWithoutEscrowsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutEscrowsReceivedInput, UserUncheckedCreateWithoutEscrowsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscrowsReceivedInput
    upsert?: UserUpsertWithoutEscrowsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEscrowsReceivedInput, UserUpdateWithoutEscrowsReceivedInput>, UserUncheckedUpdateWithoutEscrowsReceivedInput>
  }

  export type MessageUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput> | MessageCreateWithoutEscrowInput[] | MessageUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEscrowInput | MessageCreateOrConnectWithoutEscrowInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutEscrowInput | MessageUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: MessageCreateManyEscrowInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutEscrowInput | MessageUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutEscrowInput | MessageUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput> | MessageCreateWithoutEscrowInput[] | MessageUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEscrowInput | MessageCreateOrConnectWithoutEscrowInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutEscrowInput | MessageUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: MessageCreateManyEscrowInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutEscrowInput | MessageUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutEscrowInput | MessageUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type EscrowCreateNestedOneWithoutMessagesInput = {
    create?: XOR<EscrowCreateWithoutMessagesInput, EscrowUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: EscrowCreateOrConnectWithoutMessagesInput
    connect?: EscrowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EscrowUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<EscrowCreateWithoutMessagesInput, EscrowUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: EscrowCreateOrConnectWithoutMessagesInput
    upsert?: EscrowUpsertWithoutMessagesInput
    connect?: EscrowWhereUniqueInput
    update?: XOR<XOR<EscrowUpdateToOneWithWhereWithoutMessagesInput, EscrowUpdateWithoutMessagesInput>, EscrowUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
  }

  export type NestedEnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EscrowCreateWithoutCreatorInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipient?: UserCreateNestedOneWithoutEscrowsReceivedInput
    messages?: MessageCreateNestedManyWithoutEscrowInput
  }

  export type EscrowUncheckedCreateWithoutCreatorInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientId?: string | null
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowCreateOrConnectWithoutCreatorInput = {
    where: EscrowWhereUniqueInput
    create: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput>
  }

  export type EscrowCreateManyCreatorInputEnvelope = {
    data: EscrowCreateManyCreatorInput | EscrowCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EscrowCreateWithoutRecipientInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutEscrowsCreatedInput
    messages?: MessageCreateNestedManyWithoutEscrowInput
  }

  export type EscrowUncheckedCreateWithoutRecipientInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorId: string
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowCreateOrConnectWithoutRecipientInput = {
    where: EscrowWhereUniqueInput
    create: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput>
  }

  export type EscrowCreateManyRecipientInputEnvelope = {
    data: EscrowCreateManyRecipientInput | EscrowCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodeCreateWithoutUserInput = {
    id?: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type VerificationCodeCreateOrConnectWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeCreateManyUserInputEnvelope = {
    data: VerificationCodeCreateManyUserInput | VerificationCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    escrow: EscrowCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    escrowId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type EscrowUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EscrowWhereUniqueInput
    update: XOR<EscrowUpdateWithoutCreatorInput, EscrowUncheckedUpdateWithoutCreatorInput>
    create: XOR<EscrowCreateWithoutCreatorInput, EscrowUncheckedCreateWithoutCreatorInput>
  }

  export type EscrowUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EscrowWhereUniqueInput
    data: XOR<EscrowUpdateWithoutCreatorInput, EscrowUncheckedUpdateWithoutCreatorInput>
  }

  export type EscrowUpdateManyWithWhereWithoutCreatorInput = {
    where: EscrowScalarWhereInput
    data: XOR<EscrowUpdateManyMutationInput, EscrowUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EscrowScalarWhereInput = {
    AND?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
    OR?: EscrowScalarWhereInput[]
    NOT?: EscrowScalarWhereInput | EscrowScalarWhereInput[]
    id?: StringFilter<"Escrow"> | string
    contractAddress?: StringNullableFilter<"Escrow"> | string | null
    chainId?: IntFilter<"Escrow"> | number
    tokenAddress?: StringFilter<"Escrow"> | string
    tokenSymbol?: StringFilter<"Escrow"> | string
    amount?: StringFilter<"Escrow"> | string
    status?: EnumEscrowStatusFilter<"Escrow"> | $Enums.EscrowStatus
    description?: StringFilter<"Escrow"> | string
    terms?: StringNullableFilter<"Escrow"> | string | null
    creatorId?: StringFilter<"Escrow"> | string
    creatorWallet?: StringNullableFilter<"Escrow"> | string | null
    recipientEmail?: StringFilter<"Escrow"> | string
    recipientId?: StringNullableFilter<"Escrow"> | string | null
    recipientWallet?: StringNullableFilter<"Escrow"> | string | null
    buyerConfirmed?: BoolFilter<"Escrow"> | boolean
    sellerConfirmed?: BoolFilter<"Escrow"> | boolean
    disputed?: BoolFilter<"Escrow"> | boolean
    disputeReason?: StringNullableFilter<"Escrow"> | string | null
    transactionHash?: StringNullableFilter<"Escrow"> | string | null
    completedAt?: DateTimeNullableFilter<"Escrow"> | Date | string | null
    createdAt?: DateTimeFilter<"Escrow"> | Date | string
    updatedAt?: DateTimeFilter<"Escrow"> | Date | string
  }

  export type EscrowUpsertWithWhereUniqueWithoutRecipientInput = {
    where: EscrowWhereUniqueInput
    update: XOR<EscrowUpdateWithoutRecipientInput, EscrowUncheckedUpdateWithoutRecipientInput>
    create: XOR<EscrowCreateWithoutRecipientInput, EscrowUncheckedCreateWithoutRecipientInput>
  }

  export type EscrowUpdateWithWhereUniqueWithoutRecipientInput = {
    where: EscrowWhereUniqueInput
    data: XOR<EscrowUpdateWithoutRecipientInput, EscrowUncheckedUpdateWithoutRecipientInput>
  }

  export type EscrowUpdateManyWithWhereWithoutRecipientInput = {
    where: EscrowScalarWhereInput
    data: XOR<EscrowUpdateManyMutationInput, EscrowUncheckedUpdateManyWithoutRecipientInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type VerificationCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    update: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    data: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodeUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodeScalarWhereInput
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodeScalarWhereInput = {
    AND?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    OR?: VerificationCodeScalarWhereInput[]
    NOT?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    userId?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    used?: BoolFilter<"VerificationCode"> | boolean
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    escrowId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowCreateNestedManyWithoutRecipientInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowUncheckedCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowUncheckedCreateNestedManyWithoutRecipientInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUpdateManyWithoutRecipientNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUncheckedUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUncheckedUpdateManyWithoutRecipientNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutVerificationCodesInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowCreateNestedManyWithoutRecipientInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutVerificationCodesInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowUncheckedCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowUncheckedCreateNestedManyWithoutRecipientInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutVerificationCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
  }

  export type UserUpsertWithoutVerificationCodesInput = {
    update: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UserUpdateWithoutVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUncheckedUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUncheckedUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutEscrowsCreatedInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsReceived?: EscrowCreateNestedManyWithoutRecipientInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutEscrowsCreatedInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsReceived?: EscrowUncheckedCreateNestedManyWithoutRecipientInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutEscrowsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEscrowsCreatedInput, UserUncheckedCreateWithoutEscrowsCreatedInput>
  }

  export type UserCreateWithoutEscrowsReceivedInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutEscrowsReceivedInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutEscrowsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEscrowsReceivedInput, UserUncheckedCreateWithoutEscrowsReceivedInput>
  }

  export type MessageCreateWithoutEscrowInput = {
    id?: string
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutEscrowInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutEscrowInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput>
  }

  export type MessageCreateManyEscrowInputEnvelope = {
    data: MessageCreateManyEscrowInput | MessageCreateManyEscrowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEscrowsCreatedInput = {
    update: XOR<UserUpdateWithoutEscrowsCreatedInput, UserUncheckedUpdateWithoutEscrowsCreatedInput>
    create: XOR<UserCreateWithoutEscrowsCreatedInput, UserUncheckedCreateWithoutEscrowsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEscrowsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEscrowsCreatedInput, UserUncheckedUpdateWithoutEscrowsCreatedInput>
  }

  export type UserUpdateWithoutEscrowsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsReceived?: EscrowUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutEscrowsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsReceived?: EscrowUncheckedUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutEscrowsReceivedInput = {
    update: XOR<UserUpdateWithoutEscrowsReceivedInput, UserUncheckedUpdateWithoutEscrowsReceivedInput>
    create: XOR<UserCreateWithoutEscrowsReceivedInput, UserUncheckedCreateWithoutEscrowsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEscrowsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEscrowsReceivedInput, UserUncheckedUpdateWithoutEscrowsReceivedInput>
  }

  export type UserUpdateWithoutEscrowsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutEscrowsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutEscrowInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutEscrowInput, MessageUncheckedUpdateWithoutEscrowInput>
    create: XOR<MessageCreateWithoutEscrowInput, MessageUncheckedCreateWithoutEscrowInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutEscrowInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutEscrowInput, MessageUncheckedUpdateWithoutEscrowInput>
  }

  export type MessageUpdateManyWithWhereWithoutEscrowInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutEscrowInput>
  }

  export type EscrowCreateWithoutMessagesInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutEscrowsCreatedInput
    recipient?: UserCreateNestedOneWithoutEscrowsReceivedInput
  }

  export type EscrowUncheckedCreateWithoutMessagesInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorId: string
    creatorWallet?: string | null
    recipientEmail: string
    recipientId?: string | null
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscrowCreateOrConnectWithoutMessagesInput = {
    where: EscrowWhereUniqueInput
    create: XOR<EscrowCreateWithoutMessagesInput, EscrowUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowCreateNestedManyWithoutRecipientInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    walletAddress?: string | null
    isVerified?: boolean
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrowsCreated?: EscrowUncheckedCreateNestedManyWithoutCreatorInput
    escrowsReceived?: EscrowUncheckedCreateNestedManyWithoutRecipientInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type EscrowUpsertWithoutMessagesInput = {
    update: XOR<EscrowUpdateWithoutMessagesInput, EscrowUncheckedUpdateWithoutMessagesInput>
    create: XOR<EscrowCreateWithoutMessagesInput, EscrowUncheckedCreateWithoutMessagesInput>
    where?: EscrowWhereInput
  }

  export type EscrowUpdateToOneWithWhereWithoutMessagesInput = {
    where?: EscrowWhereInput
    data: XOR<EscrowUpdateWithoutMessagesInput, EscrowUncheckedUpdateWithoutMessagesInput>
  }

  export type EscrowUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEscrowsCreatedNestedInput
    recipient?: UserUpdateOneWithoutEscrowsReceivedNestedInput
  }

  export type EscrowUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrowsCreated?: EscrowUncheckedUpdateManyWithoutCreatorNestedInput
    escrowsReceived?: EscrowUncheckedUpdateManyWithoutRecipientNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EscrowCreateManyCreatorInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorWallet?: string | null
    recipientEmail: string
    recipientId?: string | null
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscrowCreateManyRecipientInput = {
    id?: string
    contractAddress?: string | null
    chainId?: number
    tokenAddress: string
    tokenSymbol: string
    amount: string
    status?: $Enums.EscrowStatus
    description: string
    terms?: string | null
    creatorId: string
    creatorWallet?: string | null
    recipientEmail: string
    recipientWallet?: string | null
    buyerConfirmed?: boolean
    sellerConfirmed?: boolean
    disputed?: boolean
    disputeReason?: string | null
    transactionHash?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeCreateManyUserInput = {
    id?: string
    code: string
    type: $Enums.CodeType
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    escrowId: string
    content: string
    createdAt?: Date | string
  }

  export type EscrowUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneWithoutEscrowsReceivedNestedInput
    messages?: MessageUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscrowUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEscrowsCreatedNestedInput
    messages?: MessageUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    description?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorWallet?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientWallet?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    sellerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    disputed?: BoolFieldUpdateOperationsInput | boolean
    disputeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrow?: EscrowUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyEscrowInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}