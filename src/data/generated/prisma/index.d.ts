
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
 * Model aluno
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type aluno = $Result.DefaultSelection<Prisma.$alunoPayload>
/**
 * Model cursa
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type cursa = $Result.DefaultSelection<Prisma.$cursaPayload>
/**
 * Model curso
 * 
 */
export type curso = $Result.DefaultSelection<Prisma.$cursoPayload>
/**
 * Model disciplina
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type disciplina = $Result.DefaultSelection<Prisma.$disciplinaPayload>
/**
 * Model instituicao
 * 
 */
export type instituicao = $Result.DefaultSelection<Prisma.$instituicaoPayload>
/**
 * Model leciona
 * 
 */
export type leciona = $Result.DefaultSelection<Prisma.$lecionaPayload>
/**
 * Model professor
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type professor = $Result.DefaultSelection<Prisma.$professorPayload>
/**
 * Model tipo_curso
 * 
 */
export type tipo_curso = $Result.DefaultSelection<Prisma.$tipo_cursoPayload>
/**
 * Model tipo_disciplina
 * 
 */
export type tipo_disciplina = $Result.DefaultSelection<Prisma.$tipo_disciplinaPayload>
/**
 * Model titulo
 * 
 */
export type titulo = $Result.DefaultSelection<Prisma.$tituloPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.aluno.findMany()
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
   * // Fetch zero or more Alunos
   * const alunos = await prisma.aluno.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.aluno`: Exposes CRUD operations for the **aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.alunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursa`: Exposes CRUD operations for the **cursa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursas
    * const cursas = await prisma.cursa.findMany()
    * ```
    */
  get cursa(): Prisma.cursaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.cursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.disciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instituicao`: Exposes CRUD operations for the **instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.instituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leciona`: Exposes CRUD operations for the **leciona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecionas
    * const lecionas = await prisma.leciona.findMany()
    * ```
    */
  get leciona(): Prisma.lecionaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.professorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_curso`: Exposes CRUD operations for the **tipo_curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_cursos
    * const tipo_cursos = await prisma.tipo_curso.findMany()
    * ```
    */
  get tipo_curso(): Prisma.tipo_cursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_disciplina`: Exposes CRUD operations for the **tipo_disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_disciplinas
    * const tipo_disciplinas = await prisma.tipo_disciplina.findMany()
    * ```
    */
  get tipo_disciplina(): Prisma.tipo_disciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.titulo`: Exposes CRUD operations for the **titulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Titulos
    * const titulos = await prisma.titulo.findMany()
    * ```
    */
  get titulo(): Prisma.tituloDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    aluno: 'aluno',
    cursa: 'cursa',
    curso: 'curso',
    disciplina: 'disciplina',
    instituicao: 'instituicao',
    leciona: 'leciona',
    professor: 'professor',
    tipo_curso: 'tipo_curso',
    tipo_disciplina: 'tipo_disciplina',
    titulo: 'titulo'
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
      modelProps: "aluno" | "cursa" | "curso" | "disciplina" | "instituicao" | "leciona" | "professor" | "tipo_curso" | "tipo_disciplina" | "titulo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      aluno: {
        payload: Prisma.$alunoPayload<ExtArgs>
        fields: Prisma.alunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          findFirst: {
            args: Prisma.alunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          findMany: {
            args: Prisma.alunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>[]
          }
          create: {
            args: Prisma.alunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          createMany: {
            args: Prisma.alunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>[]
          }
          delete: {
            args: Prisma.alunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          update: {
            args: Prisma.alunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          deleteMany: {
            args: Prisma.alunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>[]
          }
          upsert: {
            args: Prisma.alunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.alunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.alunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      cursa: {
        payload: Prisma.$cursaPayload<ExtArgs>
        fields: Prisma.cursaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          findFirst: {
            args: Prisma.cursaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          findMany: {
            args: Prisma.cursaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>[]
          }
          create: {
            args: Prisma.cursaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          createMany: {
            args: Prisma.cursaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cursaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>[]
          }
          delete: {
            args: Prisma.cursaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          update: {
            args: Prisma.cursaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          deleteMany: {
            args: Prisma.cursaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cursaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>[]
          }
          upsert: {
            args: Prisma.cursaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursaPayload>
          }
          aggregate: {
            args: Prisma.CursaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursa>
          }
          groupBy: {
            args: Prisma.cursaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursaCountArgs<ExtArgs>
            result: $Utils.Optional<CursaCountAggregateOutputType> | number
          }
        }
      }
      curso: {
        payload: Prisma.$cursoPayload<ExtArgs>
        fields: Prisma.cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findFirst: {
            args: Prisma.cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findMany: {
            args: Prisma.cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          create: {
            args: Prisma.cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          createMany: {
            args: Prisma.cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          delete: {
            args: Prisma.cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          update: {
            args: Prisma.cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          deleteMany: {
            args: Prisma.cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          upsert: {
            args: Prisma.cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      disciplina: {
        payload: Prisma.$disciplinaPayload<ExtArgs>
        fields: Prisma.disciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          findFirst: {
            args: Prisma.disciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          findMany: {
            args: Prisma.disciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>[]
          }
          create: {
            args: Prisma.disciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          createMany: {
            args: Prisma.disciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.disciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>[]
          }
          delete: {
            args: Prisma.disciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          update: {
            args: Prisma.disciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          deleteMany: {
            args: Prisma.disciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.disciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>[]
          }
          upsert: {
            args: Prisma.disciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.disciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.disciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      instituicao: {
        payload: Prisma.$instituicaoPayload<ExtArgs>
        fields: Prisma.instituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          findFirst: {
            args: Prisma.instituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          findMany: {
            args: Prisma.instituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>[]
          }
          create: {
            args: Prisma.instituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          createMany: {
            args: Prisma.instituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instituicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>[]
          }
          delete: {
            args: Prisma.instituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          update: {
            args: Prisma.instituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          deleteMany: {
            args: Prisma.instituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instituicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>[]
          }
          upsert: {
            args: Prisma.instituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.instituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.instituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      leciona: {
        payload: Prisma.$lecionaPayload<ExtArgs>
        fields: Prisma.lecionaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lecionaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lecionaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          findFirst: {
            args: Prisma.lecionaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lecionaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          findMany: {
            args: Prisma.lecionaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>[]
          }
          create: {
            args: Prisma.lecionaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          createMany: {
            args: Prisma.lecionaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lecionaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>[]
          }
          delete: {
            args: Prisma.lecionaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          update: {
            args: Prisma.lecionaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          deleteMany: {
            args: Prisma.lecionaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lecionaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lecionaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>[]
          }
          upsert: {
            args: Prisma.lecionaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecionaPayload>
          }
          aggregate: {
            args: Prisma.LecionaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeciona>
          }
          groupBy: {
            args: Prisma.lecionaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecionaGroupByOutputType>[]
          }
          count: {
            args: Prisma.lecionaCountArgs<ExtArgs>
            result: $Utils.Optional<LecionaCountAggregateOutputType> | number
          }
        }
      }
      professor: {
        payload: Prisma.$professorPayload<ExtArgs>
        fields: Prisma.professorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          findFirst: {
            args: Prisma.professorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          findMany: {
            args: Prisma.professorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          create: {
            args: Prisma.professorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          createMany: {
            args: Prisma.professorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          delete: {
            args: Prisma.professorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          update: {
            args: Prisma.professorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          deleteMany: {
            args: Prisma.professorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          upsert: {
            args: Prisma.professorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.professorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.professorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      tipo_curso: {
        payload: Prisma.$tipo_cursoPayload<ExtArgs>
        fields: Prisma.tipo_cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          findFirst: {
            args: Prisma.tipo_cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          findMany: {
            args: Prisma.tipo_cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>[]
          }
          create: {
            args: Prisma.tipo_cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          createMany: {
            args: Prisma.tipo_cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_cursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>[]
          }
          delete: {
            args: Prisma.tipo_cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          update: {
            args: Prisma.tipo_cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          deleteMany: {
            args: Prisma.tipo_cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_cursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>[]
          }
          upsert: {
            args: Prisma.tipo_cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cursoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_cursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_curso>
          }
          groupBy: {
            args: Prisma.tipo_cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_cursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_cursoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_cursoCountAggregateOutputType> | number
          }
        }
      }
      tipo_disciplina: {
        payload: Prisma.$tipo_disciplinaPayload<ExtArgs>
        fields: Prisma.tipo_disciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_disciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_disciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          findFirst: {
            args: Prisma.tipo_disciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_disciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          findMany: {
            args: Prisma.tipo_disciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>[]
          }
          create: {
            args: Prisma.tipo_disciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          createMany: {
            args: Prisma.tipo_disciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_disciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>[]
          }
          delete: {
            args: Prisma.tipo_disciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          update: {
            args: Prisma.tipo_disciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          deleteMany: {
            args: Prisma.tipo_disciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_disciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_disciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>[]
          }
          upsert: {
            args: Prisma.tipo_disciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_disciplinaPayload>
          }
          aggregate: {
            args: Prisma.Tipo_disciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_disciplina>
          }
          groupBy: {
            args: Prisma.tipo_disciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_disciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_disciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_disciplinaCountAggregateOutputType> | number
          }
        }
      }
      titulo: {
        payload: Prisma.$tituloPayload<ExtArgs>
        fields: Prisma.tituloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tituloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tituloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          findFirst: {
            args: Prisma.tituloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tituloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          findMany: {
            args: Prisma.tituloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>[]
          }
          create: {
            args: Prisma.tituloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          createMany: {
            args: Prisma.tituloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tituloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>[]
          }
          delete: {
            args: Prisma.tituloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          update: {
            args: Prisma.tituloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          deleteMany: {
            args: Prisma.tituloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tituloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tituloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>[]
          }
          upsert: {
            args: Prisma.tituloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tituloPayload>
          }
          aggregate: {
            args: Prisma.TituloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTitulo>
          }
          groupBy: {
            args: Prisma.tituloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TituloGroupByOutputType>[]
          }
          count: {
            args: Prisma.tituloCountArgs<ExtArgs>
            result: $Utils.Optional<TituloCountAggregateOutputType> | number
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
    aluno?: alunoOmit
    cursa?: cursaOmit
    curso?: cursoOmit
    disciplina?: disciplinaOmit
    instituicao?: instituicaoOmit
    leciona?: lecionaOmit
    professor?: professorOmit
    tipo_curso?: tipo_cursoOmit
    tipo_disciplina?: tipo_disciplinaOmit
    titulo?: tituloOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    cursa: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursa?: boolean | AlunoCountOutputTypeCountCursaArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountCursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    disciplina: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | CursoCountOutputTypeCountDisciplinaArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountDisciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinaWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    cursa: number
    leciona: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursa?: boolean | DisciplinaCountOutputTypeCountCursaArgs
    leciona?: boolean | DisciplinaCountOutputTypeCountLecionaArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountCursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursaWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountLecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecionaWhereInput
  }


  /**
   * Count Type InstituicaoCountOutputType
   */

  export type InstituicaoCountOutputType = {
    curso: number
  }

  export type InstituicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | InstituicaoCountOutputTypeCountCursoArgs
  }

  // Custom InputTypes
  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstituicaoCountOutputType
     */
    select?: InstituicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountCursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    leciona: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leciona?: boolean | ProfessorCountOutputTypeCountLecionaArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountLecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecionaWhereInput
  }


  /**
   * Count Type Tipo_cursoCountOutputType
   */

  export type Tipo_cursoCountOutputType = {
    curso: number
  }

  export type Tipo_cursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | Tipo_cursoCountOutputTypeCountCursoArgs
  }

  // Custom InputTypes
  /**
   * Tipo_cursoCountOutputType without action
   */
  export type Tipo_cursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_cursoCountOutputType
     */
    select?: Tipo_cursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_cursoCountOutputType without action
   */
  export type Tipo_cursoCountOutputTypeCountCursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursoWhereInput
  }


  /**
   * Count Type Tipo_disciplinaCountOutputType
   */

  export type Tipo_disciplinaCountOutputType = {
    disciplina: number
  }

  export type Tipo_disciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | Tipo_disciplinaCountOutputTypeCountDisciplinaArgs
  }

  // Custom InputTypes
  /**
   * Tipo_disciplinaCountOutputType without action
   */
  export type Tipo_disciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_disciplinaCountOutputType
     */
    select?: Tipo_disciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_disciplinaCountOutputType without action
   */
  export type Tipo_disciplinaCountOutputTypeCountDisciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinaWhereInput
  }


  /**
   * Count Type TituloCountOutputType
   */

  export type TituloCountOutputType = {
    professor: number
  }

  export type TituloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | TituloCountOutputTypeCountProfessorArgs
  }

  // Custom InputTypes
  /**
   * TituloCountOutputType without action
   */
  export type TituloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TituloCountOutputType
     */
    select?: TituloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TituloCountOutputType without action
   */
  export type TituloCountOutputTypeCountProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id_aluno: number | null
  }

  export type AlunoSumAggregateOutputType = {
    id_aluno: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id_aluno: number | null
    tx_nome: string | null
    tx_sexo: string | null
    dt_nascimento: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id_aluno: number | null
    tx_nome: string | null
    tx_sexo: string | null
    dt_nascimento: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id_aluno: number
    tx_nome: number
    tx_sexo: number
    dt_nascimento: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id_aluno?: true
  }

  export type AlunoSumAggregateInputType = {
    id_aluno?: true
  }

  export type AlunoMinAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
  }

  export type AlunoMaxAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
  }

  export type AlunoCountAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aluno to aggregate.
     */
    where?: alunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunoOrderByWithRelationInput | alunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type alunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunoWhereInput
    orderBy?: alunoOrderByWithAggregationInput | alunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: alunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id_aluno: number
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends alunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type alunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
    cursa?: boolean | aluno$cursaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type alunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type alunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type alunoSelectScalar = {
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }

  export type alunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aluno" | "tx_nome" | "tx_sexo" | "dt_nascimento", ExtArgs["result"]["aluno"]>
  export type alunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursa?: boolean | aluno$cursaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type alunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type alunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $alunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aluno"
    objects: {
      cursa: Prisma.$cursaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aluno: number
      tx_nome: string
      tx_sexo: string
      dt_nascimento: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type alunoGetPayload<S extends boolean | null | undefined | alunoDefaultArgs> = $Result.GetResult<Prisma.$alunoPayload, S>

  type alunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface alunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aluno'], meta: { name: 'aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {alunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alunoFindUniqueArgs>(args: SelectSubset<T, alunoFindUniqueArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alunoFindUniqueOrThrowArgs>(args: SelectSubset<T, alunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alunoFindFirstArgs>(args?: SelectSubset<T, alunoFindFirstArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alunoFindFirstOrThrowArgs>(args?: SelectSubset<T, alunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.findMany({ select: { id_aluno: true } })
     * 
     */
    findMany<T extends alunoFindManyArgs>(args?: SelectSubset<T, alunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {alunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends alunoCreateArgs>(args: SelectSubset<T, alunoCreateArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {alunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alunoCreateManyArgs>(args?: SelectSubset<T, alunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {alunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id_aluno: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alunoCreateManyAndReturnArgs>(args?: SelectSubset<T, alunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {alunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends alunoDeleteArgs>(args: SelectSubset<T, alunoDeleteArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {alunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alunoUpdateArgs>(args: SelectSubset<T, alunoUpdateArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {alunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alunoDeleteManyArgs>(args?: SelectSubset<T, alunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alunoUpdateManyArgs>(args: SelectSubset<T, alunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {alunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id_aluno: true },
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
    updateManyAndReturn<T extends alunoUpdateManyAndReturnArgs>(args: SelectSubset<T, alunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {alunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends alunoUpsertArgs>(args: SelectSubset<T, alunoUpsertArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends alunoCountArgs>(
      args?: Subset<T, alunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoGroupByArgs} args - Group by arguments.
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
      T extends alunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alunoGroupByArgs['orderBy'] }
        : { orderBy?: alunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aluno model
   */
  readonly fields: alunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursa<T extends aluno$cursaArgs<ExtArgs> = {}>(args?: Subset<T, aluno$cursaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the aluno model
   */
  interface alunoFieldRefs {
    readonly id_aluno: FieldRef<"aluno", 'Int'>
    readonly tx_nome: FieldRef<"aluno", 'String'>
    readonly tx_sexo: FieldRef<"aluno", 'String'>
    readonly dt_nascimento: FieldRef<"aluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * aluno findUnique
   */
  export type alunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter, which aluno to fetch.
     */
    where: alunoWhereUniqueInput
  }

  /**
   * aluno findUniqueOrThrow
   */
  export type alunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter, which aluno to fetch.
     */
    where: alunoWhereUniqueInput
  }

  /**
   * aluno findFirst
   */
  export type alunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter, which aluno to fetch.
     */
    where?: alunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunoOrderByWithRelationInput | alunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * aluno findFirstOrThrow
   */
  export type alunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter, which aluno to fetch.
     */
    where?: alunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunoOrderByWithRelationInput | alunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * aluno findMany
   */
  export type alunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunoOrderByWithRelationInput | alunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alunos.
     */
    cursor?: alunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * aluno create
   */
  export type alunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * The data needed to create a aluno.
     */
    data: XOR<alunoCreateInput, alunoUncheckedCreateInput>
  }

  /**
   * aluno createMany
   */
  export type alunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alunos.
     */
    data: alunoCreateManyInput | alunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aluno createManyAndReturn
   */
  export type alunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * The data used to create many alunos.
     */
    data: alunoCreateManyInput | alunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aluno update
   */
  export type alunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * The data needed to update a aluno.
     */
    data: XOR<alunoUpdateInput, alunoUncheckedUpdateInput>
    /**
     * Choose, which aluno to update.
     */
    where: alunoWhereUniqueInput
  }

  /**
   * aluno updateMany
   */
  export type alunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alunos.
     */
    data: XOR<alunoUpdateManyMutationInput, alunoUncheckedUpdateManyInput>
    /**
     * Filter which alunos to update
     */
    where?: alunoWhereInput
    /**
     * Limit how many alunos to update.
     */
    limit?: number
  }

  /**
   * aluno updateManyAndReturn
   */
  export type alunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * The data used to update alunos.
     */
    data: XOR<alunoUpdateManyMutationInput, alunoUncheckedUpdateManyInput>
    /**
     * Filter which alunos to update
     */
    where?: alunoWhereInput
    /**
     * Limit how many alunos to update.
     */
    limit?: number
  }

  /**
   * aluno upsert
   */
  export type alunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * The filter to search for the aluno to update in case it exists.
     */
    where: alunoWhereUniqueInput
    /**
     * In case the aluno found by the `where` argument doesn't exist, create a new aluno with this data.
     */
    create: XOR<alunoCreateInput, alunoUncheckedCreateInput>
    /**
     * In case the aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alunoUpdateInput, alunoUncheckedUpdateInput>
  }

  /**
   * aluno delete
   */
  export type alunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
    /**
     * Filter which aluno to delete.
     */
    where: alunoWhereUniqueInput
  }

  /**
   * aluno deleteMany
   */
  export type alunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunos to delete
     */
    where?: alunoWhereInput
    /**
     * Limit how many alunos to delete.
     */
    limit?: number
  }

  /**
   * aluno.cursa
   */
  export type aluno$cursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    where?: cursaWhereInput
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    cursor?: cursaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * aluno without action
   */
  export type alunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno
     */
    select?: alunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno
     */
    omit?: alunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoInclude<ExtArgs> | null
  }


  /**
   * Model cursa
   */

  export type AggregateCursa = {
    _count: CursaCountAggregateOutputType | null
    _avg: CursaAvgAggregateOutputType | null
    _sum: CursaSumAggregateOutputType | null
    _min: CursaMinAggregateOutputType | null
    _max: CursaMaxAggregateOutputType | null
  }

  export type CursaAvgAggregateOutputType = {
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nr_nota1: Decimal | null
    nr_nota2: Decimal | null
    nr_nota3: Decimal | null
  }

  export type CursaSumAggregateOutputType = {
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nr_nota1: Decimal | null
    nr_nota2: Decimal | null
    nr_nota3: Decimal | null
  }

  export type CursaMinAggregateOutputType = {
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nr_nota1: Decimal | null
    nr_nota2: Decimal | null
    nr_nota3: Decimal | null
    bl_aprovado: boolean | null
  }

  export type CursaMaxAggregateOutputType = {
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nr_nota1: Decimal | null
    nr_nota2: Decimal | null
    nr_nota3: Decimal | null
    bl_aprovado: boolean | null
  }

  export type CursaCountAggregateOutputType = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas: number
    nr_nota1: number
    nr_nota2: number
    nr_nota3: number
    bl_aprovado: number
    _all: number
  }


  export type CursaAvgAggregateInputType = {
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nr_nota1?: true
    nr_nota2?: true
    nr_nota3?: true
  }

  export type CursaSumAggregateInputType = {
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nr_nota1?: true
    nr_nota2?: true
    nr_nota3?: true
  }

  export type CursaMinAggregateInputType = {
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nr_nota1?: true
    nr_nota2?: true
    nr_nota3?: true
    bl_aprovado?: true
  }

  export type CursaMaxAggregateInputType = {
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nr_nota1?: true
    nr_nota2?: true
    nr_nota3?: true
    bl_aprovado?: true
  }

  export type CursaCountAggregateInputType = {
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nr_nota1?: true
    nr_nota2?: true
    nr_nota3?: true
    bl_aprovado?: true
    _all?: true
  }

  export type CursaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursa to aggregate.
     */
    where?: cursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursas to fetch.
     */
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursas
    **/
    _count?: true | CursaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursaMaxAggregateInputType
  }

  export type GetCursaAggregateType<T extends CursaAggregateArgs> = {
        [P in keyof T & keyof AggregateCursa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursa[P]>
      : GetScalarType<T[P], AggregateCursa[P]>
  }




  export type cursaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursaWhereInput
    orderBy?: cursaOrderByWithAggregationInput | cursaOrderByWithAggregationInput[]
    by: CursaScalarFieldEnum[] | CursaScalarFieldEnum
    having?: cursaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursaCountAggregateInputType | true
    _avg?: CursaAvgAggregateInputType
    _sum?: CursaSumAggregateInputType
    _min?: CursaMinAggregateInputType
    _max?: CursaMaxAggregateInputType
  }

  export type CursaGroupByOutputType = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas: number | null
    nr_nota1: Decimal | null
    nr_nota2: Decimal | null
    nr_nota3: Decimal | null
    bl_aprovado: boolean
    _count: CursaCountAggregateOutputType | null
    _avg: CursaAvgAggregateOutputType | null
    _sum: CursaSumAggregateOutputType | null
    _min: CursaMinAggregateOutputType | null
    _max: CursaMaxAggregateOutputType | null
  }

  type GetCursaGroupByPayload<T extends cursaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursaGroupByOutputType[P]>
            : GetScalarType<T[P], CursaGroupByOutputType[P]>
        }
      >
    >


  export type cursaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nr_nota1?: boolean
    nr_nota2?: boolean
    nr_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type cursaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nr_nota1?: boolean
    nr_nota2?: boolean
    nr_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type cursaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nr_nota1?: boolean
    nr_nota2?: boolean
    nr_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type cursaSelectScalar = {
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nr_nota1?: boolean
    nr_nota2?: boolean
    nr_nota3?: boolean
    bl_aprovado?: boolean
  }

  export type cursaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aluno" | "id_disciplina" | "in_ano" | "in_semestre" | "in_faltas" | "nr_nota1" | "nr_nota2" | "nr_nota3" | "bl_aprovado", ExtArgs["result"]["cursa"]>
  export type cursaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }
  export type cursaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }
  export type cursaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | alunoDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }

  export type $cursaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cursa"
    objects: {
      aluno: Prisma.$alunoPayload<ExtArgs>
      disciplina: Prisma.$disciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aluno: number
      id_disciplina: number
      in_ano: number
      in_semestre: number
      in_faltas: number | null
      nr_nota1: Prisma.Decimal | null
      nr_nota2: Prisma.Decimal | null
      nr_nota3: Prisma.Decimal | null
      bl_aprovado: boolean
    }, ExtArgs["result"]["cursa"]>
    composites: {}
  }

  type cursaGetPayload<S extends boolean | null | undefined | cursaDefaultArgs> = $Result.GetResult<Prisma.$cursaPayload, S>

  type cursaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursaCountAggregateInputType | true
    }

  export interface cursaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cursa'], meta: { name: 'cursa' } }
    /**
     * Find zero or one Cursa that matches the filter.
     * @param {cursaFindUniqueArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursaFindUniqueArgs>(args: SelectSubset<T, cursaFindUniqueArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursaFindUniqueOrThrowArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursaFindUniqueOrThrowArgs>(args: SelectSubset<T, cursaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaFindFirstArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursaFindFirstArgs>(args?: SelectSubset<T, cursaFindFirstArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaFindFirstOrThrowArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursaFindFirstOrThrowArgs>(args?: SelectSubset<T, cursaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursas
     * const cursas = await prisma.cursa.findMany()
     * 
     * // Get first 10 Cursas
     * const cursas = await prisma.cursa.findMany({ take: 10 })
     * 
     * // Only select the `id_aluno`
     * const cursaWithId_alunoOnly = await prisma.cursa.findMany({ select: { id_aluno: true } })
     * 
     */
    findMany<T extends cursaFindManyArgs>(args?: SelectSubset<T, cursaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursa.
     * @param {cursaCreateArgs} args - Arguments to create a Cursa.
     * @example
     * // Create one Cursa
     * const Cursa = await prisma.cursa.create({
     *   data: {
     *     // ... data to create a Cursa
     *   }
     * })
     * 
     */
    create<T extends cursaCreateArgs>(args: SelectSubset<T, cursaCreateArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursas.
     * @param {cursaCreateManyArgs} args - Arguments to create many Cursas.
     * @example
     * // Create many Cursas
     * const cursa = await prisma.cursa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursaCreateManyArgs>(args?: SelectSubset<T, cursaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursas and returns the data saved in the database.
     * @param {cursaCreateManyAndReturnArgs} args - Arguments to create many Cursas.
     * @example
     * // Create many Cursas
     * const cursa = await prisma.cursa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursas and only return the `id_aluno`
     * const cursaWithId_alunoOnly = await prisma.cursa.createManyAndReturn({
     *   select: { id_aluno: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cursaCreateManyAndReturnArgs>(args?: SelectSubset<T, cursaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cursa.
     * @param {cursaDeleteArgs} args - Arguments to delete one Cursa.
     * @example
     * // Delete one Cursa
     * const Cursa = await prisma.cursa.delete({
     *   where: {
     *     // ... filter to delete one Cursa
     *   }
     * })
     * 
     */
    delete<T extends cursaDeleteArgs>(args: SelectSubset<T, cursaDeleteArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursa.
     * @param {cursaUpdateArgs} args - Arguments to update one Cursa.
     * @example
     * // Update one Cursa
     * const cursa = await prisma.cursa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursaUpdateArgs>(args: SelectSubset<T, cursaUpdateArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursas.
     * @param {cursaDeleteManyArgs} args - Arguments to filter Cursas to delete.
     * @example
     * // Delete a few Cursas
     * const { count } = await prisma.cursa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursaDeleteManyArgs>(args?: SelectSubset<T, cursaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursas
     * const cursa = await prisma.cursa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursaUpdateManyArgs>(args: SelectSubset<T, cursaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursas and returns the data updated in the database.
     * @param {cursaUpdateManyAndReturnArgs} args - Arguments to update many Cursas.
     * @example
     * // Update many Cursas
     * const cursa = await prisma.cursa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursas and only return the `id_aluno`
     * const cursaWithId_alunoOnly = await prisma.cursa.updateManyAndReturn({
     *   select: { id_aluno: true },
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
    updateManyAndReturn<T extends cursaUpdateManyAndReturnArgs>(args: SelectSubset<T, cursaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cursa.
     * @param {cursaUpsertArgs} args - Arguments to update or create a Cursa.
     * @example
     * // Update or create a Cursa
     * const cursa = await prisma.cursa.upsert({
     *   create: {
     *     // ... data to create a Cursa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursa we want to update
     *   }
     * })
     */
    upsert<T extends cursaUpsertArgs>(args: SelectSubset<T, cursaUpsertArgs<ExtArgs>>): Prisma__cursaClient<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaCountArgs} args - Arguments to filter Cursas to count.
     * @example
     * // Count the number of Cursas
     * const count = await prisma.cursa.count({
     *   where: {
     *     // ... the filter for the Cursas we want to count
     *   }
     * })
    **/
    count<T extends cursaCountArgs>(
      args?: Subset<T, cursaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursaAggregateArgs>(args: Subset<T, CursaAggregateArgs>): Prisma.PrismaPromise<GetCursaAggregateType<T>>

    /**
     * Group by Cursa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursaGroupByArgs} args - Group by arguments.
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
      T extends cursaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursaGroupByArgs['orderBy'] }
        : { orderBy?: cursaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cursaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cursa model
   */
  readonly fields: cursaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cursa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends alunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, alunoDefaultArgs<ExtArgs>>): Prisma__alunoClient<$Result.GetResult<Prisma.$alunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends disciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinaDefaultArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cursa model
   */
  interface cursaFieldRefs {
    readonly id_aluno: FieldRef<"cursa", 'Int'>
    readonly id_disciplina: FieldRef<"cursa", 'Int'>
    readonly in_ano: FieldRef<"cursa", 'Int'>
    readonly in_semestre: FieldRef<"cursa", 'Int'>
    readonly in_faltas: FieldRef<"cursa", 'Int'>
    readonly nr_nota1: FieldRef<"cursa", 'Decimal'>
    readonly nr_nota2: FieldRef<"cursa", 'Decimal'>
    readonly nr_nota3: FieldRef<"cursa", 'Decimal'>
    readonly bl_aprovado: FieldRef<"cursa", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cursa findUnique
   */
  export type cursaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter, which cursa to fetch.
     */
    where: cursaWhereUniqueInput
  }

  /**
   * cursa findUniqueOrThrow
   */
  export type cursaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter, which cursa to fetch.
     */
    where: cursaWhereUniqueInput
  }

  /**
   * cursa findFirst
   */
  export type cursaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter, which cursa to fetch.
     */
    where?: cursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursas to fetch.
     */
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursas.
     */
    cursor?: cursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursas.
     */
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * cursa findFirstOrThrow
   */
  export type cursaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter, which cursa to fetch.
     */
    where?: cursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursas to fetch.
     */
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursas.
     */
    cursor?: cursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursas.
     */
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * cursa findMany
   */
  export type cursaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter, which cursas to fetch.
     */
    where?: cursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursas to fetch.
     */
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursas.
     */
    cursor?: cursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursas.
     */
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * cursa create
   */
  export type cursaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * The data needed to create a cursa.
     */
    data: XOR<cursaCreateInput, cursaUncheckedCreateInput>
  }

  /**
   * cursa createMany
   */
  export type cursaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursas.
     */
    data: cursaCreateManyInput | cursaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cursa createManyAndReturn
   */
  export type cursaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * The data used to create many cursas.
     */
    data: cursaCreateManyInput | cursaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cursa update
   */
  export type cursaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * The data needed to update a cursa.
     */
    data: XOR<cursaUpdateInput, cursaUncheckedUpdateInput>
    /**
     * Choose, which cursa to update.
     */
    where: cursaWhereUniqueInput
  }

  /**
   * cursa updateMany
   */
  export type cursaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursas.
     */
    data: XOR<cursaUpdateManyMutationInput, cursaUncheckedUpdateManyInput>
    /**
     * Filter which cursas to update
     */
    where?: cursaWhereInput
    /**
     * Limit how many cursas to update.
     */
    limit?: number
  }

  /**
   * cursa updateManyAndReturn
   */
  export type cursaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * The data used to update cursas.
     */
    data: XOR<cursaUpdateManyMutationInput, cursaUncheckedUpdateManyInput>
    /**
     * Filter which cursas to update
     */
    where?: cursaWhereInput
    /**
     * Limit how many cursas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cursa upsert
   */
  export type cursaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * The filter to search for the cursa to update in case it exists.
     */
    where: cursaWhereUniqueInput
    /**
     * In case the cursa found by the `where` argument doesn't exist, create a new cursa with this data.
     */
    create: XOR<cursaCreateInput, cursaUncheckedCreateInput>
    /**
     * In case the cursa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursaUpdateInput, cursaUncheckedUpdateInput>
  }

  /**
   * cursa delete
   */
  export type cursaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    /**
     * Filter which cursa to delete.
     */
    where: cursaWhereUniqueInput
  }

  /**
   * cursa deleteMany
   */
  export type cursaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursas to delete
     */
    where?: cursaWhereInput
    /**
     * Limit how many cursas to delete.
     */
    limit?: number
  }

  /**
   * cursa without action
   */
  export type cursaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
  }


  /**
   * Model curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
  }

  export type CursoSumAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
  }

  export type CursoMinAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type CursoMaxAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type CursoCountAggregateOutputType = {
    id_curso: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
  }

  export type CursoSumAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
  }

  export type CursoMinAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type CursoMaxAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type CursoCountAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curso to aggregate.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursoWhereInput
    orderBy?: cursoOrderByWithAggregationInput | cursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id_curso: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
    disciplina?: boolean | curso$disciplinaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectScalar = {
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }

  export type cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_curso" | "id_instituicao" | "id_tipo_curso" | "tx_descricao", ExtArgs["result"]["curso"]>
  export type cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
    disciplina?: boolean | curso$disciplinaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
  }
  export type cursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | instituicaoDefaultArgs<ExtArgs>
    tipo_curso?: boolean | tipo_cursoDefaultArgs<ExtArgs>
  }

  export type $cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curso"
    objects: {
      instituicao: Prisma.$instituicaoPayload<ExtArgs>
      tipo_curso: Prisma.$tipo_cursoPayload<ExtArgs>
      disciplina: Prisma.$disciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_curso: number
      id_instituicao: number
      id_tipo_curso: number
      tx_descricao: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type cursoGetPayload<S extends boolean | null | undefined | cursoDefaultArgs> = $Result.GetResult<Prisma.$cursoPayload, S>

  type cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curso'], meta: { name: 'curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {cursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursoFindUniqueArgs>(args: SelectSubset<T, cursoFindUniqueArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursoFindFirstArgs>(args?: SelectSubset<T, cursoFindFirstArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.findMany({ select: { id_curso: true } })
     * 
     */
    findMany<T extends cursoFindManyArgs>(args?: SelectSubset<T, cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {cursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends cursoCreateArgs>(args: SelectSubset<T, cursoCreateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursoCreateManyArgs>(args?: SelectSubset<T, cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {cursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.createManyAndReturn({
     *   select: { id_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cursoCreateManyAndReturnArgs>(args?: SelectSubset<T, cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {cursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends cursoDeleteArgs>(args: SelectSubset<T, cursoDeleteArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {cursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursoUpdateArgs>(args: SelectSubset<T, cursoUpdateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursoDeleteManyArgs>(args?: SelectSubset<T, cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursoUpdateManyArgs>(args: SelectSubset<T, cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {cursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id_curso: true },
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
    updateManyAndReturn<T extends cursoUpdateManyAndReturnArgs>(args: SelectSubset<T, cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {cursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends cursoUpsertArgs>(args: SelectSubset<T, cursoUpsertArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursoCountArgs>(
      args?: Subset<T, cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoGroupByArgs} args - Group by arguments.
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
      T extends cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursoGroupByArgs['orderBy'] }
        : { orderBy?: cursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curso model
   */
  readonly fields: cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends instituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, instituicaoDefaultArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipo_curso<T extends tipo_cursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_cursoDefaultArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends curso$disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, curso$disciplinaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the curso model
   */
  interface cursoFieldRefs {
    readonly id_curso: FieldRef<"curso", 'Int'>
    readonly id_instituicao: FieldRef<"curso", 'Int'>
    readonly id_tipo_curso: FieldRef<"curso", 'Int'>
    readonly tx_descricao: FieldRef<"curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * curso findUnique
   */
  export type cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findUniqueOrThrow
   */
  export type cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findFirst
   */
  export type cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findFirstOrThrow
   */
  export type cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findMany
   */
  export type cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso create
   */
  export type cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a curso.
     */
    data: XOR<cursoCreateInput, cursoUncheckedCreateInput>
  }

  /**
   * curso createMany
   */
  export type cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursoCreateManyInput | cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curso createManyAndReturn
   */
  export type cursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * The data used to create many cursos.
     */
    data: cursoCreateManyInput | cursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * curso update
   */
  export type cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a curso.
     */
    data: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
    /**
     * Choose, which curso to update.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso updateMany
   */
  export type cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * curso updateManyAndReturn
   */
  export type cursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * The data used to update cursos.
     */
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * curso upsert
   */
  export type cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the curso to update in case it exists.
     */
    where: cursoWhereUniqueInput
    /**
     * In case the curso found by the `where` argument doesn't exist, create a new curso with this data.
     */
    create: XOR<cursoCreateInput, cursoUncheckedCreateInput>
    /**
     * In case the curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
  }

  /**
   * curso delete
   */
  export type cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter which curso to delete.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso deleteMany
   */
  export type cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * curso.disciplina
   */
  export type curso$disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    where?: disciplinaWhereInput
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    cursor?: disciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * curso without action
   */
  export type cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
  }


  /**
   * Model disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    tx_sigla: string | null
    tx_descricao: string | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    tx_sigla: string | null
    tx_descricao: string | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id_disciplina: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: number
    tx_descricao: number
    in_periodo: number
    in_carga_horaria: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaSumAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplina to aggregate.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type disciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinaWhereInput
    orderBy?: disciplinaOrderByWithAggregationInput | disciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: disciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id_disciplina: number
    id_curso: number | null
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends disciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type disciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    cursa?: boolean | disciplina$cursaArgs<ExtArgs>
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
    leciona?: boolean | disciplina$lecionaArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type disciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type disciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type disciplinaSelectScalar = {
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
  }

  export type disciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_disciplina" | "id_curso" | "id_tipo_disciplina" | "tx_sigla" | "tx_descricao" | "in_periodo" | "in_carga_horaria", ExtArgs["result"]["disciplina"]>
  export type disciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursa?: boolean | disciplina$cursaArgs<ExtArgs>
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
    leciona?: boolean | disciplina$lecionaArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type disciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
  }
  export type disciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | disciplina$cursoArgs<ExtArgs>
    tipo_disciplina?: boolean | tipo_disciplinaDefaultArgs<ExtArgs>
  }

  export type $disciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disciplina"
    objects: {
      cursa: Prisma.$cursaPayload<ExtArgs>[]
      curso: Prisma.$cursoPayload<ExtArgs> | null
      tipo_disciplina: Prisma.$tipo_disciplinaPayload<ExtArgs>
      leciona: Prisma.$lecionaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_disciplina: number
      id_curso: number | null
      id_tipo_disciplina: number
      tx_sigla: string
      tx_descricao: string
      in_periodo: number
      in_carga_horaria: number
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type disciplinaGetPayload<S extends boolean | null | undefined | disciplinaDefaultArgs> = $Result.GetResult<Prisma.$disciplinaPayload, S>

  type disciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface disciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disciplina'], meta: { name: 'disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {disciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disciplinaFindUniqueArgs>(args: SelectSubset<T, disciplinaFindUniqueArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, disciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disciplinaFindFirstArgs>(args?: SelectSubset<T, disciplinaFindFirstArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, disciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.findMany({ select: { id_disciplina: true } })
     * 
     */
    findMany<T extends disciplinaFindManyArgs>(args?: SelectSubset<T, disciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {disciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends disciplinaCreateArgs>(args: SelectSubset<T, disciplinaCreateArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {disciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disciplinaCreateManyArgs>(args?: SelectSubset<T, disciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {disciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { id_disciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends disciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, disciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {disciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends disciplinaDeleteArgs>(args: SelectSubset<T, disciplinaDeleteArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {disciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends disciplinaUpdateArgs>(args: SelectSubset<T, disciplinaUpdateArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {disciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disciplinaDeleteManyArgs>(args?: SelectSubset<T, disciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends disciplinaUpdateManyArgs>(args: SelectSubset<T, disciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {disciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { id_disciplina: true },
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
    updateManyAndReturn<T extends disciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, disciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {disciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends disciplinaUpsertArgs>(args: SelectSubset<T, disciplinaUpsertArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends disciplinaCountArgs>(
      args?: Subset<T, disciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaGroupByArgs} args - Group by arguments.
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
      T extends disciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disciplinaGroupByArgs['orderBy'] }
        : { orderBy?: disciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, disciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disciplina model
   */
  readonly fields: disciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursa<T extends disciplina$cursaArgs<ExtArgs> = {}>(args?: Subset<T, disciplina$cursaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curso<T extends disciplina$cursoArgs<ExtArgs> = {}>(args?: Subset<T, disciplina$cursoArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipo_disciplina<T extends tipo_disciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_disciplinaDefaultArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leciona<T extends disciplina$lecionaArgs<ExtArgs> = {}>(args?: Subset<T, disciplina$lecionaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the disciplina model
   */
  interface disciplinaFieldRefs {
    readonly id_disciplina: FieldRef<"disciplina", 'Int'>
    readonly id_curso: FieldRef<"disciplina", 'Int'>
    readonly id_tipo_disciplina: FieldRef<"disciplina", 'Int'>
    readonly tx_sigla: FieldRef<"disciplina", 'String'>
    readonly tx_descricao: FieldRef<"disciplina", 'String'>
    readonly in_periodo: FieldRef<"disciplina", 'Int'>
    readonly in_carga_horaria: FieldRef<"disciplina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * disciplina findUnique
   */
  export type disciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina findUniqueOrThrow
   */
  export type disciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina findFirst
   */
  export type disciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina findFirstOrThrow
   */
  export type disciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina findMany
   */
  export type disciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina create
   */
  export type disciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a disciplina.
     */
    data: XOR<disciplinaCreateInput, disciplinaUncheckedCreateInput>
  }

  /**
   * disciplina createMany
   */
  export type disciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disciplinas.
     */
    data: disciplinaCreateManyInput | disciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disciplina createManyAndReturn
   */
  export type disciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many disciplinas.
     */
    data: disciplinaCreateManyInput | disciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * disciplina update
   */
  export type disciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a disciplina.
     */
    data: XOR<disciplinaUpdateInput, disciplinaUncheckedUpdateInput>
    /**
     * Choose, which disciplina to update.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina updateMany
   */
  export type disciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disciplinas.
     */
    data: XOR<disciplinaUpdateManyMutationInput, disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     */
    where?: disciplinaWhereInput
    /**
     * Limit how many disciplinas to update.
     */
    limit?: number
  }

  /**
   * disciplina updateManyAndReturn
   */
  export type disciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * The data used to update disciplinas.
     */
    data: XOR<disciplinaUpdateManyMutationInput, disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     */
    where?: disciplinaWhereInput
    /**
     * Limit how many disciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * disciplina upsert
   */
  export type disciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the disciplina to update in case it exists.
     */
    where: disciplinaWhereUniqueInput
    /**
     * In case the disciplina found by the `where` argument doesn't exist, create a new disciplina with this data.
     */
    create: XOR<disciplinaCreateInput, disciplinaUncheckedCreateInput>
    /**
     * In case the disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplinaUpdateInput, disciplinaUncheckedUpdateInput>
  }

  /**
   * disciplina delete
   */
  export type disciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter which disciplina to delete.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina deleteMany
   */
  export type disciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to delete
     */
    where?: disciplinaWhereInput
    /**
     * Limit how many disciplinas to delete.
     */
    limit?: number
  }

  /**
   * disciplina.cursa
   */
  export type disciplina$cursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursa
     */
    select?: cursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursa
     */
    omit?: cursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursaInclude<ExtArgs> | null
    where?: cursaWhereInput
    orderBy?: cursaOrderByWithRelationInput | cursaOrderByWithRelationInput[]
    cursor?: cursaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * disciplina.curso
   */
  export type disciplina$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    where?: cursoWhereInput
  }

  /**
   * disciplina.leciona
   */
  export type disciplina$lecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    where?: lecionaWhereInput
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    cursor?: lecionaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * disciplina without action
   */
  export type disciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
  }


  /**
   * Model instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoAvgAggregateOutputType = {
    id_instituicao: number | null
  }

  export type InstituicaoSumAggregateOutputType = {
    id_instituicao: number | null
  }

  export type InstituicaoMinAggregateOutputType = {
    id_instituicao: number | null
    tx_sigla: string | null
    tx_descricao: string | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    id_instituicao: number | null
    tx_sigla: string | null
    tx_descricao: string | null
  }

  export type InstituicaoCountAggregateOutputType = {
    id_instituicao: number
    tx_sigla: number
    tx_descricao: number
    _all: number
  }


  export type InstituicaoAvgAggregateInputType = {
    id_instituicao?: true
  }

  export type InstituicaoSumAggregateInputType = {
    id_instituicao?: true
  }

  export type InstituicaoMinAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
  }

  export type InstituicaoCountAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instituicao to aggregate.
     */
    where?: instituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instituicaos to fetch.
     */
    orderBy?: instituicaoOrderByWithRelationInput | instituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstituicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstituicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type instituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instituicaoWhereInput
    orderBy?: instituicaoOrderByWithAggregationInput | instituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: instituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _avg?: InstituicaoAvgAggregateInputType
    _sum?: InstituicaoSumAggregateInputType
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    id_instituicao: number
    tx_sigla: string
    tx_descricao: string
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends instituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type instituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    curso?: boolean | instituicao$cursoArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type instituicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type instituicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type instituicaoSelectScalar = {
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }

  export type instituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_instituicao" | "tx_sigla" | "tx_descricao", ExtArgs["result"]["instituicao"]>
  export type instituicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | instituicao$cursoArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type instituicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type instituicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $instituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instituicao"
    objects: {
      curso: Prisma.$cursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_instituicao: number
      tx_sigla: string
      tx_descricao: string
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type instituicaoGetPayload<S extends boolean | null | undefined | instituicaoDefaultArgs> = $Result.GetResult<Prisma.$instituicaoPayload, S>

  type instituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface instituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instituicao'], meta: { name: 'instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {instituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instituicaoFindUniqueArgs>(args: SelectSubset<T, instituicaoFindUniqueArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, instituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instituicaoFindFirstArgs>(args?: SelectSubset<T, instituicaoFindFirstArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, instituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.findMany({ select: { id_instituicao: true } })
     * 
     */
    findMany<T extends instituicaoFindManyArgs>(args?: SelectSubset<T, instituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {instituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends instituicaoCreateArgs>(args: SelectSubset<T, instituicaoCreateArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {instituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instituicaoCreateManyArgs>(args?: SelectSubset<T, instituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instituicaos and returns the data saved in the database.
     * @param {instituicaoCreateManyAndReturnArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instituicaos and only return the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.createManyAndReturn({
     *   select: { id_instituicao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instituicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, instituicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instituicao.
     * @param {instituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends instituicaoDeleteArgs>(args: SelectSubset<T, instituicaoDeleteArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {instituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instituicaoUpdateArgs>(args: SelectSubset<T, instituicaoUpdateArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {instituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instituicaoDeleteManyArgs>(args?: SelectSubset<T, instituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instituicaoUpdateManyArgs>(args: SelectSubset<T, instituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos and returns the data updated in the database.
     * @param {instituicaoUpdateManyAndReturnArgs} args - Arguments to update many Instituicaos.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instituicaos and only return the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.updateManyAndReturn({
     *   select: { id_instituicao: true },
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
    updateManyAndReturn<T extends instituicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, instituicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instituicao.
     * @param {instituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends instituicaoUpsertArgs>(args: SelectSubset<T, instituicaoUpsertArgs<ExtArgs>>): Prisma__instituicaoClient<$Result.GetResult<Prisma.$instituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends instituicaoCountArgs>(
      args?: Subset<T, instituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instituicaoGroupByArgs} args - Group by arguments.
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
      T extends instituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instituicaoGroupByArgs['orderBy'] }
        : { orderBy?: instituicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, instituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instituicao model
   */
  readonly fields: instituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends instituicao$cursoArgs<ExtArgs> = {}>(args?: Subset<T, instituicao$cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the instituicao model
   */
  interface instituicaoFieldRefs {
    readonly id_instituicao: FieldRef<"instituicao", 'Int'>
    readonly tx_sigla: FieldRef<"instituicao", 'String'>
    readonly tx_descricao: FieldRef<"instituicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * instituicao findUnique
   */
  export type instituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter, which instituicao to fetch.
     */
    where: instituicaoWhereUniqueInput
  }

  /**
   * instituicao findUniqueOrThrow
   */
  export type instituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter, which instituicao to fetch.
     */
    where: instituicaoWhereUniqueInput
  }

  /**
   * instituicao findFirst
   */
  export type instituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter, which instituicao to fetch.
     */
    where?: instituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instituicaos to fetch.
     */
    orderBy?: instituicaoOrderByWithRelationInput | instituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instituicaos.
     */
    cursor?: instituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * instituicao findFirstOrThrow
   */
  export type instituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter, which instituicao to fetch.
     */
    where?: instituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instituicaos to fetch.
     */
    orderBy?: instituicaoOrderByWithRelationInput | instituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instituicaos.
     */
    cursor?: instituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * instituicao findMany
   */
  export type instituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter, which instituicaos to fetch.
     */
    where?: instituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instituicaos to fetch.
     */
    orderBy?: instituicaoOrderByWithRelationInput | instituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instituicaos.
     */
    cursor?: instituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instituicaos.
     */
    skip?: number
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * instituicao create
   */
  export type instituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a instituicao.
     */
    data: XOR<instituicaoCreateInput, instituicaoUncheckedCreateInput>
  }

  /**
   * instituicao createMany
   */
  export type instituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instituicaos.
     */
    data: instituicaoCreateManyInput | instituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instituicao createManyAndReturn
   */
  export type instituicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * The data used to create many instituicaos.
     */
    data: instituicaoCreateManyInput | instituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instituicao update
   */
  export type instituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a instituicao.
     */
    data: XOR<instituicaoUpdateInput, instituicaoUncheckedUpdateInput>
    /**
     * Choose, which instituicao to update.
     */
    where: instituicaoWhereUniqueInput
  }

  /**
   * instituicao updateMany
   */
  export type instituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instituicaos.
     */
    data: XOR<instituicaoUpdateManyMutationInput, instituicaoUncheckedUpdateManyInput>
    /**
     * Filter which instituicaos to update
     */
    where?: instituicaoWhereInput
    /**
     * Limit how many instituicaos to update.
     */
    limit?: number
  }

  /**
   * instituicao updateManyAndReturn
   */
  export type instituicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * The data used to update instituicaos.
     */
    data: XOR<instituicaoUpdateManyMutationInput, instituicaoUncheckedUpdateManyInput>
    /**
     * Filter which instituicaos to update
     */
    where?: instituicaoWhereInput
    /**
     * Limit how many instituicaos to update.
     */
    limit?: number
  }

  /**
   * instituicao upsert
   */
  export type instituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the instituicao to update in case it exists.
     */
    where: instituicaoWhereUniqueInput
    /**
     * In case the instituicao found by the `where` argument doesn't exist, create a new instituicao with this data.
     */
    create: XOR<instituicaoCreateInput, instituicaoUncheckedCreateInput>
    /**
     * In case the instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instituicaoUpdateInput, instituicaoUncheckedUpdateInput>
  }

  /**
   * instituicao delete
   */
  export type instituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
    /**
     * Filter which instituicao to delete.
     */
    where: instituicaoWhereUniqueInput
  }

  /**
   * instituicao deleteMany
   */
  export type instituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instituicaos to delete
     */
    where?: instituicaoWhereInput
    /**
     * Limit how many instituicaos to delete.
     */
    limit?: number
  }

  /**
   * instituicao.curso
   */
  export type instituicao$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    where?: cursoWhereInput
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    cursor?: cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * instituicao without action
   */
  export type instituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instituicao
     */
    select?: instituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instituicao
     */
    omit?: instituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instituicaoInclude<ExtArgs> | null
  }


  /**
   * Model leciona
   */

  export type AggregateLeciona = {
    _count: LecionaCountAggregateOutputType | null
    _avg: LecionaAvgAggregateOutputType | null
    _sum: LecionaSumAggregateOutputType | null
    _min: LecionaMinAggregateOutputType | null
    _max: LecionaMaxAggregateOutputType | null
  }

  export type LecionaAvgAggregateOutputType = {
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaSumAggregateOutputType = {
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaMinAggregateOutputType = {
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaMaxAggregateOutputType = {
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaCountAggregateOutputType = {
    id_professor: number
    id_disciplina: number
    _all: number
  }


  export type LecionaAvgAggregateInputType = {
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaSumAggregateInputType = {
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaMinAggregateInputType = {
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaMaxAggregateInputType = {
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaCountAggregateInputType = {
    id_professor?: true
    id_disciplina?: true
    _all?: true
  }

  export type LecionaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leciona to aggregate.
     */
    where?: lecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecionas to fetch.
     */
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lecionas
    **/
    _count?: true | LecionaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecionaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecionaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecionaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecionaMaxAggregateInputType
  }

  export type GetLecionaAggregateType<T extends LecionaAggregateArgs> = {
        [P in keyof T & keyof AggregateLeciona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeciona[P]>
      : GetScalarType<T[P], AggregateLeciona[P]>
  }




  export type lecionaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecionaWhereInput
    orderBy?: lecionaOrderByWithAggregationInput | lecionaOrderByWithAggregationInput[]
    by: LecionaScalarFieldEnum[] | LecionaScalarFieldEnum
    having?: lecionaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecionaCountAggregateInputType | true
    _avg?: LecionaAvgAggregateInputType
    _sum?: LecionaSumAggregateInputType
    _min?: LecionaMinAggregateInputType
    _max?: LecionaMaxAggregateInputType
  }

  export type LecionaGroupByOutputType = {
    id_professor: number
    id_disciplina: number
    _count: LecionaCountAggregateOutputType | null
    _avg: LecionaAvgAggregateOutputType | null
    _sum: LecionaSumAggregateOutputType | null
    _min: LecionaMinAggregateOutputType | null
    _max: LecionaMaxAggregateOutputType | null
  }

  type GetLecionaGroupByPayload<T extends lecionaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecionaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecionaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecionaGroupByOutputType[P]>
            : GetScalarType<T[P], LecionaGroupByOutputType[P]>
        }
      >
    >


  export type lecionaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_disciplina?: boolean
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type lecionaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_disciplina?: boolean
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type lecionaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_disciplina?: boolean
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type lecionaSelectScalar = {
    id_professor?: boolean
    id_disciplina?: boolean
  }

  export type lecionaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_professor" | "id_disciplina", ExtArgs["result"]["leciona"]>
  export type lecionaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }
  export type lecionaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }
  export type lecionaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
    professor?: boolean | professorDefaultArgs<ExtArgs>
  }

  export type $lecionaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leciona"
    objects: {
      disciplina: Prisma.$disciplinaPayload<ExtArgs>
      professor: Prisma.$professorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_professor: number
      id_disciplina: number
    }, ExtArgs["result"]["leciona"]>
    composites: {}
  }

  type lecionaGetPayload<S extends boolean | null | undefined | lecionaDefaultArgs> = $Result.GetResult<Prisma.$lecionaPayload, S>

  type lecionaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lecionaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecionaCountAggregateInputType | true
    }

  export interface lecionaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leciona'], meta: { name: 'leciona' } }
    /**
     * Find zero or one Leciona that matches the filter.
     * @param {lecionaFindUniqueArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lecionaFindUniqueArgs>(args: SelectSubset<T, lecionaFindUniqueArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leciona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lecionaFindUniqueOrThrowArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lecionaFindUniqueOrThrowArgs>(args: SelectSubset<T, lecionaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leciona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaFindFirstArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lecionaFindFirstArgs>(args?: SelectSubset<T, lecionaFindFirstArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leciona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaFindFirstOrThrowArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lecionaFindFirstOrThrowArgs>(args?: SelectSubset<T, lecionaFindFirstOrThrowArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecionas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecionas
     * const lecionas = await prisma.leciona.findMany()
     * 
     * // Get first 10 Lecionas
     * const lecionas = await prisma.leciona.findMany({ take: 10 })
     * 
     * // Only select the `id_professor`
     * const lecionaWithId_professorOnly = await prisma.leciona.findMany({ select: { id_professor: true } })
     * 
     */
    findMany<T extends lecionaFindManyArgs>(args?: SelectSubset<T, lecionaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leciona.
     * @param {lecionaCreateArgs} args - Arguments to create a Leciona.
     * @example
     * // Create one Leciona
     * const Leciona = await prisma.leciona.create({
     *   data: {
     *     // ... data to create a Leciona
     *   }
     * })
     * 
     */
    create<T extends lecionaCreateArgs>(args: SelectSubset<T, lecionaCreateArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecionas.
     * @param {lecionaCreateManyArgs} args - Arguments to create many Lecionas.
     * @example
     * // Create many Lecionas
     * const leciona = await prisma.leciona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lecionaCreateManyArgs>(args?: SelectSubset<T, lecionaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecionas and returns the data saved in the database.
     * @param {lecionaCreateManyAndReturnArgs} args - Arguments to create many Lecionas.
     * @example
     * // Create many Lecionas
     * const leciona = await prisma.leciona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecionas and only return the `id_professor`
     * const lecionaWithId_professorOnly = await prisma.leciona.createManyAndReturn({
     *   select: { id_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lecionaCreateManyAndReturnArgs>(args?: SelectSubset<T, lecionaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leciona.
     * @param {lecionaDeleteArgs} args - Arguments to delete one Leciona.
     * @example
     * // Delete one Leciona
     * const Leciona = await prisma.leciona.delete({
     *   where: {
     *     // ... filter to delete one Leciona
     *   }
     * })
     * 
     */
    delete<T extends lecionaDeleteArgs>(args: SelectSubset<T, lecionaDeleteArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leciona.
     * @param {lecionaUpdateArgs} args - Arguments to update one Leciona.
     * @example
     * // Update one Leciona
     * const leciona = await prisma.leciona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lecionaUpdateArgs>(args: SelectSubset<T, lecionaUpdateArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecionas.
     * @param {lecionaDeleteManyArgs} args - Arguments to filter Lecionas to delete.
     * @example
     * // Delete a few Lecionas
     * const { count } = await prisma.leciona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lecionaDeleteManyArgs>(args?: SelectSubset<T, lecionaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecionas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecionas
     * const leciona = await prisma.leciona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lecionaUpdateManyArgs>(args: SelectSubset<T, lecionaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecionas and returns the data updated in the database.
     * @param {lecionaUpdateManyAndReturnArgs} args - Arguments to update many Lecionas.
     * @example
     * // Update many Lecionas
     * const leciona = await prisma.leciona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecionas and only return the `id_professor`
     * const lecionaWithId_professorOnly = await prisma.leciona.updateManyAndReturn({
     *   select: { id_professor: true },
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
    updateManyAndReturn<T extends lecionaUpdateManyAndReturnArgs>(args: SelectSubset<T, lecionaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leciona.
     * @param {lecionaUpsertArgs} args - Arguments to update or create a Leciona.
     * @example
     * // Update or create a Leciona
     * const leciona = await prisma.leciona.upsert({
     *   create: {
     *     // ... data to create a Leciona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leciona we want to update
     *   }
     * })
     */
    upsert<T extends lecionaUpsertArgs>(args: SelectSubset<T, lecionaUpsertArgs<ExtArgs>>): Prisma__lecionaClient<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecionas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaCountArgs} args - Arguments to filter Lecionas to count.
     * @example
     * // Count the number of Lecionas
     * const count = await prisma.leciona.count({
     *   where: {
     *     // ... the filter for the Lecionas we want to count
     *   }
     * })
    **/
    count<T extends lecionaCountArgs>(
      args?: Subset<T, lecionaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecionaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leciona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecionaAggregateArgs>(args: Subset<T, LecionaAggregateArgs>): Prisma.PrismaPromise<GetLecionaAggregateType<T>>

    /**
     * Group by Leciona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecionaGroupByArgs} args - Group by arguments.
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
      T extends lecionaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lecionaGroupByArgs['orderBy'] }
        : { orderBy?: lecionaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lecionaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecionaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leciona model
   */
  readonly fields: lecionaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leciona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lecionaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends disciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinaDefaultArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends professorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, professorDefaultArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the leciona model
   */
  interface lecionaFieldRefs {
    readonly id_professor: FieldRef<"leciona", 'Int'>
    readonly id_disciplina: FieldRef<"leciona", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * leciona findUnique
   */
  export type lecionaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter, which leciona to fetch.
     */
    where: lecionaWhereUniqueInput
  }

  /**
   * leciona findUniqueOrThrow
   */
  export type lecionaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter, which leciona to fetch.
     */
    where: lecionaWhereUniqueInput
  }

  /**
   * leciona findFirst
   */
  export type lecionaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter, which leciona to fetch.
     */
    where?: lecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecionas to fetch.
     */
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecionas.
     */
    cursor?: lecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecionas.
     */
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * leciona findFirstOrThrow
   */
  export type lecionaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter, which leciona to fetch.
     */
    where?: lecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecionas to fetch.
     */
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecionas.
     */
    cursor?: lecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecionas.
     */
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * leciona findMany
   */
  export type lecionaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter, which lecionas to fetch.
     */
    where?: lecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecionas to fetch.
     */
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lecionas.
     */
    cursor?: lecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecionas.
     */
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * leciona create
   */
  export type lecionaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * The data needed to create a leciona.
     */
    data: XOR<lecionaCreateInput, lecionaUncheckedCreateInput>
  }

  /**
   * leciona createMany
   */
  export type lecionaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lecionas.
     */
    data: lecionaCreateManyInput | lecionaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leciona createManyAndReturn
   */
  export type lecionaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * The data used to create many lecionas.
     */
    data: lecionaCreateManyInput | lecionaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leciona update
   */
  export type lecionaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * The data needed to update a leciona.
     */
    data: XOR<lecionaUpdateInput, lecionaUncheckedUpdateInput>
    /**
     * Choose, which leciona to update.
     */
    where: lecionaWhereUniqueInput
  }

  /**
   * leciona updateMany
   */
  export type lecionaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lecionas.
     */
    data: XOR<lecionaUpdateManyMutationInput, lecionaUncheckedUpdateManyInput>
    /**
     * Filter which lecionas to update
     */
    where?: lecionaWhereInput
    /**
     * Limit how many lecionas to update.
     */
    limit?: number
  }

  /**
   * leciona updateManyAndReturn
   */
  export type lecionaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * The data used to update lecionas.
     */
    data: XOR<lecionaUpdateManyMutationInput, lecionaUncheckedUpdateManyInput>
    /**
     * Filter which lecionas to update
     */
    where?: lecionaWhereInput
    /**
     * Limit how many lecionas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leciona upsert
   */
  export type lecionaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * The filter to search for the leciona to update in case it exists.
     */
    where: lecionaWhereUniqueInput
    /**
     * In case the leciona found by the `where` argument doesn't exist, create a new leciona with this data.
     */
    create: XOR<lecionaCreateInput, lecionaUncheckedCreateInput>
    /**
     * In case the leciona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lecionaUpdateInput, lecionaUncheckedUpdateInput>
  }

  /**
   * leciona delete
   */
  export type lecionaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    /**
     * Filter which leciona to delete.
     */
    where: lecionaWhereUniqueInput
  }

  /**
   * leciona deleteMany
   */
  export type lecionaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecionas to delete
     */
    where?: lecionaWhereInput
    /**
     * Limit how many lecionas to delete.
     */
    limit?: number
  }

  /**
   * leciona without action
   */
  export type lecionaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
  }


  /**
   * Model professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
    tx_nome: string | null
    tx_sexo: string | null
    tx_estado_civil: string | null
    dt_nascimento: Date | null
    tx_telefone: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
    tx_nome: string | null
    tx_sexo: string | null
    tx_estado_civil: string | null
    dt_nascimento: Date | null
    tx_telefone: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id_professor: number
    id_titulo: number
    tx_nome: number
    tx_sexo: number
    tx_estado_civil: number
    dt_nascimento: number
    tx_telefone: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id_professor?: true
    id_titulo?: true
  }

  export type ProfessorSumAggregateInputType = {
    id_professor?: true
    id_titulo?: true
  }

  export type ProfessorMinAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
  }

  export type ProfessorCountAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professor to aggregate.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type professorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professorWhereInput
    orderBy?: professorOrderByWithAggregationInput | professorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: professorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id_professor: number
    id_titulo: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date
    tx_telefone: string
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends professorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type professorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    leciona?: boolean | professor$lecionaArgs<ExtArgs>
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type professorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type professorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type professorSelectScalar = {
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
  }

  export type professorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_professor" | "id_titulo" | "tx_nome" | "tx_sexo" | "tx_estado_civil" | "dt_nascimento" | "tx_telefone", ExtArgs["result"]["professor"]>
  export type professorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leciona?: boolean | professor$lecionaArgs<ExtArgs>
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type professorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
  }
  export type professorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titulo?: boolean | tituloDefaultArgs<ExtArgs>
  }

  export type $professorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professor"
    objects: {
      leciona: Prisma.$lecionaPayload<ExtArgs>[]
      titulo: Prisma.$tituloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_professor: number
      id_titulo: number
      tx_nome: string
      tx_sexo: string
      tx_estado_civil: string
      dt_nascimento: Date
      tx_telefone: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type professorGetPayload<S extends boolean | null | undefined | professorDefaultArgs> = $Result.GetResult<Prisma.$professorPayload, S>

  type professorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface professorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professor'], meta: { name: 'professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {professorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professorFindUniqueArgs>(args: SelectSubset<T, professorFindUniqueArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professorFindUniqueOrThrowArgs>(args: SelectSubset<T, professorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professorFindFirstArgs>(args?: SelectSubset<T, professorFindFirstArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professorFindFirstOrThrowArgs>(args?: SelectSubset<T, professorFindFirstOrThrowArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.findMany({ select: { id_professor: true } })
     * 
     */
    findMany<T extends professorFindManyArgs>(args?: SelectSubset<T, professorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {professorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends professorCreateArgs>(args: SelectSubset<T, professorCreateArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {professorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professorCreateManyArgs>(args?: SelectSubset<T, professorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {professorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.createManyAndReturn({
     *   select: { id_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professorCreateManyAndReturnArgs>(args?: SelectSubset<T, professorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {professorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends professorDeleteArgs>(args: SelectSubset<T, professorDeleteArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {professorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professorUpdateArgs>(args: SelectSubset<T, professorUpdateArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {professorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professorDeleteManyArgs>(args?: SelectSubset<T, professorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professorUpdateManyArgs>(args: SelectSubset<T, professorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {professorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id_professor: true },
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
    updateManyAndReturn<T extends professorUpdateManyAndReturnArgs>(args: SelectSubset<T, professorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {professorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends professorUpsertArgs>(args: SelectSubset<T, professorUpsertArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends professorCountArgs>(
      args?: Subset<T, professorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorGroupByArgs} args - Group by arguments.
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
      T extends professorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professorGroupByArgs['orderBy'] }
        : { orderBy?: professorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, professorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professor model
   */
  readonly fields: professorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leciona<T extends professor$lecionaArgs<ExtArgs> = {}>(args?: Subset<T, professor$lecionaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    titulo<T extends tituloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tituloDefaultArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the professor model
   */
  interface professorFieldRefs {
    readonly id_professor: FieldRef<"professor", 'Int'>
    readonly id_titulo: FieldRef<"professor", 'Int'>
    readonly tx_nome: FieldRef<"professor", 'String'>
    readonly tx_sexo: FieldRef<"professor", 'String'>
    readonly tx_estado_civil: FieldRef<"professor", 'String'>
    readonly dt_nascimento: FieldRef<"professor", 'DateTime'>
    readonly tx_telefone: FieldRef<"professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * professor findUnique
   */
  export type professorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor findUniqueOrThrow
   */
  export type professorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor findFirst
   */
  export type professorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor findFirstOrThrow
   */
  export type professorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor findMany
   */
  export type professorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor create
   */
  export type professorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The data needed to create a professor.
     */
    data: XOR<professorCreateInput, professorUncheckedCreateInput>
  }

  /**
   * professor createMany
   */
  export type professorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professors.
     */
    data: professorCreateManyInput | professorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professor createManyAndReturn
   */
  export type professorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * The data used to create many professors.
     */
    data: professorCreateManyInput | professorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * professor update
   */
  export type professorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The data needed to update a professor.
     */
    data: XOR<professorUpdateInput, professorUncheckedUpdateInput>
    /**
     * Choose, which professor to update.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor updateMany
   */
  export type professorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professors.
     */
    data: XOR<professorUpdateManyMutationInput, professorUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
  }

  /**
   * professor updateManyAndReturn
   */
  export type professorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * The data used to update professors.
     */
    data: XOR<professorUpdateManyMutationInput, professorUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * professor upsert
   */
  export type professorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The filter to search for the professor to update in case it exists.
     */
    where: professorWhereUniqueInput
    /**
     * In case the professor found by the `where` argument doesn't exist, create a new professor with this data.
     */
    create: XOR<professorCreateInput, professorUncheckedCreateInput>
    /**
     * In case the professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professorUpdateInput, professorUncheckedUpdateInput>
  }

  /**
   * professor delete
   */
  export type professorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter which professor to delete.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor deleteMany
   */
  export type professorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professors to delete
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to delete.
     */
    limit?: number
  }

  /**
   * professor.leciona
   */
  export type professor$lecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leciona
     */
    select?: lecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leciona
     */
    omit?: lecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecionaInclude<ExtArgs> | null
    where?: lecionaWhereInput
    orderBy?: lecionaOrderByWithRelationInput | lecionaOrderByWithRelationInput[]
    cursor?: lecionaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * professor without action
   */
  export type professorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
  }


  /**
   * Model tipo_curso
   */

  export type AggregateTipo_curso = {
    _count: Tipo_cursoCountAggregateOutputType | null
    _avg: Tipo_cursoAvgAggregateOutputType | null
    _sum: Tipo_cursoSumAggregateOutputType | null
    _min: Tipo_cursoMinAggregateOutputType | null
    _max: Tipo_cursoMaxAggregateOutputType | null
  }

  export type Tipo_cursoAvgAggregateOutputType = {
    id_tipo_curso: number | null
  }

  export type Tipo_cursoSumAggregateOutputType = {
    id_tipo_curso: number | null
  }

  export type Tipo_cursoMinAggregateOutputType = {
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type Tipo_cursoMaxAggregateOutputType = {
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type Tipo_cursoCountAggregateOutputType = {
    id_tipo_curso: number
    tx_descricao: number
    _all: number
  }


  export type Tipo_cursoAvgAggregateInputType = {
    id_tipo_curso?: true
  }

  export type Tipo_cursoSumAggregateInputType = {
    id_tipo_curso?: true
  }

  export type Tipo_cursoMinAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type Tipo_cursoMaxAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type Tipo_cursoCountAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
    _all?: true
  }

  export type Tipo_cursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_curso to aggregate.
     */
    where?: tipo_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cursos to fetch.
     */
    orderBy?: tipo_cursoOrderByWithRelationInput | tipo_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_cursos
    **/
    _count?: true | Tipo_cursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_cursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_cursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_cursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_cursoMaxAggregateInputType
  }

  export type GetTipo_cursoAggregateType<T extends Tipo_cursoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_curso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_curso[P]>
      : GetScalarType<T[P], AggregateTipo_curso[P]>
  }




  export type tipo_cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_cursoWhereInput
    orderBy?: tipo_cursoOrderByWithAggregationInput | tipo_cursoOrderByWithAggregationInput[]
    by: Tipo_cursoScalarFieldEnum[] | Tipo_cursoScalarFieldEnum
    having?: tipo_cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_cursoCountAggregateInputType | true
    _avg?: Tipo_cursoAvgAggregateInputType
    _sum?: Tipo_cursoSumAggregateInputType
    _min?: Tipo_cursoMinAggregateInputType
    _max?: Tipo_cursoMaxAggregateInputType
  }

  export type Tipo_cursoGroupByOutputType = {
    id_tipo_curso: number
    tx_descricao: string
    _count: Tipo_cursoCountAggregateOutputType | null
    _avg: Tipo_cursoAvgAggregateOutputType | null
    _sum: Tipo_cursoSumAggregateOutputType | null
    _min: Tipo_cursoMinAggregateOutputType | null
    _max: Tipo_cursoMaxAggregateOutputType | null
  }

  type GetTipo_cursoGroupByPayload<T extends tipo_cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_cursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_cursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_cursoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_cursoGroupByOutputType[P]>
        }
      >
    >


  export type tipo_cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    curso?: boolean | tipo_curso$cursoArgs<ExtArgs>
    _count?: boolean | Tipo_cursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_curso"]>

  export type tipo_cursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipo_curso"]>

  export type tipo_cursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipo_curso"]>

  export type tipo_cursoSelectScalar = {
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }

  export type tipo_cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_curso" | "tx_descricao", ExtArgs["result"]["tipo_curso"]>
  export type tipo_cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | tipo_curso$cursoArgs<ExtArgs>
    _count?: boolean | Tipo_cursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_cursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_cursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_curso"
    objects: {
      curso: Prisma.$cursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_curso: number
      tx_descricao: string
    }, ExtArgs["result"]["tipo_curso"]>
    composites: {}
  }

  type tipo_cursoGetPayload<S extends boolean | null | undefined | tipo_cursoDefaultArgs> = $Result.GetResult<Prisma.$tipo_cursoPayload, S>

  type tipo_cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_cursoCountAggregateInputType | true
    }

  export interface tipo_cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_curso'], meta: { name: 'tipo_curso' } }
    /**
     * Find zero or one Tipo_curso that matches the filter.
     * @param {tipo_cursoFindUniqueArgs} args - Arguments to find a Tipo_curso
     * @example
     * // Get one Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_cursoFindUniqueArgs>(args: SelectSubset<T, tipo_cursoFindUniqueArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_cursoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_curso
     * @example
     * // Get one Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoFindFirstArgs} args - Arguments to find a Tipo_curso
     * @example
     * // Get one Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_cursoFindFirstArgs>(args?: SelectSubset<T, tipo_cursoFindFirstArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoFindFirstOrThrowArgs} args - Arguments to find a Tipo_curso
     * @example
     * // Get one Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_cursos
     * const tipo_cursos = await prisma.tipo_curso.findMany()
     * 
     * // Get first 10 Tipo_cursos
     * const tipo_cursos = await prisma.tipo_curso.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_curso`
     * const tipo_cursoWithId_tipo_cursoOnly = await prisma.tipo_curso.findMany({ select: { id_tipo_curso: true } })
     * 
     */
    findMany<T extends tipo_cursoFindManyArgs>(args?: SelectSubset<T, tipo_cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_curso.
     * @param {tipo_cursoCreateArgs} args - Arguments to create a Tipo_curso.
     * @example
     * // Create one Tipo_curso
     * const Tipo_curso = await prisma.tipo_curso.create({
     *   data: {
     *     // ... data to create a Tipo_curso
     *   }
     * })
     * 
     */
    create<T extends tipo_cursoCreateArgs>(args: SelectSubset<T, tipo_cursoCreateArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_cursos.
     * @param {tipo_cursoCreateManyArgs} args - Arguments to create many Tipo_cursos.
     * @example
     * // Create many Tipo_cursos
     * const tipo_curso = await prisma.tipo_curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_cursoCreateManyArgs>(args?: SelectSubset<T, tipo_cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_cursos and returns the data saved in the database.
     * @param {tipo_cursoCreateManyAndReturnArgs} args - Arguments to create many Tipo_cursos.
     * @example
     * // Create many Tipo_cursos
     * const tipo_curso = await prisma.tipo_curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_cursos and only return the `id_tipo_curso`
     * const tipo_cursoWithId_tipo_cursoOnly = await prisma.tipo_curso.createManyAndReturn({
     *   select: { id_tipo_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_cursoCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_curso.
     * @param {tipo_cursoDeleteArgs} args - Arguments to delete one Tipo_curso.
     * @example
     * // Delete one Tipo_curso
     * const Tipo_curso = await prisma.tipo_curso.delete({
     *   where: {
     *     // ... filter to delete one Tipo_curso
     *   }
     * })
     * 
     */
    delete<T extends tipo_cursoDeleteArgs>(args: SelectSubset<T, tipo_cursoDeleteArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_curso.
     * @param {tipo_cursoUpdateArgs} args - Arguments to update one Tipo_curso.
     * @example
     * // Update one Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_cursoUpdateArgs>(args: SelectSubset<T, tipo_cursoUpdateArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_cursos.
     * @param {tipo_cursoDeleteManyArgs} args - Arguments to filter Tipo_cursos to delete.
     * @example
     * // Delete a few Tipo_cursos
     * const { count } = await prisma.tipo_curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_cursoDeleteManyArgs>(args?: SelectSubset<T, tipo_cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_cursos
     * const tipo_curso = await prisma.tipo_curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_cursoUpdateManyArgs>(args: SelectSubset<T, tipo_cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_cursos and returns the data updated in the database.
     * @param {tipo_cursoUpdateManyAndReturnArgs} args - Arguments to update many Tipo_cursos.
     * @example
     * // Update many Tipo_cursos
     * const tipo_curso = await prisma.tipo_curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_cursos and only return the `id_tipo_curso`
     * const tipo_cursoWithId_tipo_cursoOnly = await prisma.tipo_curso.updateManyAndReturn({
     *   select: { id_tipo_curso: true },
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
    updateManyAndReturn<T extends tipo_cursoUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_curso.
     * @param {tipo_cursoUpsertArgs} args - Arguments to update or create a Tipo_curso.
     * @example
     * // Update or create a Tipo_curso
     * const tipo_curso = await prisma.tipo_curso.upsert({
     *   create: {
     *     // ... data to create a Tipo_curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_curso we want to update
     *   }
     * })
     */
    upsert<T extends tipo_cursoUpsertArgs>(args: SelectSubset<T, tipo_cursoUpsertArgs<ExtArgs>>): Prisma__tipo_cursoClient<$Result.GetResult<Prisma.$tipo_cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoCountArgs} args - Arguments to filter Tipo_cursos to count.
     * @example
     * // Count the number of Tipo_cursos
     * const count = await prisma.tipo_curso.count({
     *   where: {
     *     // ... the filter for the Tipo_cursos we want to count
     *   }
     * })
    **/
    count<T extends tipo_cursoCountArgs>(
      args?: Subset<T, tipo_cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_cursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_cursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_cursoAggregateArgs>(args: Subset<T, Tipo_cursoAggregateArgs>): Prisma.PrismaPromise<GetTipo_cursoAggregateType<T>>

    /**
     * Group by Tipo_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cursoGroupByArgs} args - Group by arguments.
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
      T extends tipo_cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_cursoGroupByArgs['orderBy'] }
        : { orderBy?: tipo_cursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_cursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_curso model
   */
  readonly fields: tipo_cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends tipo_curso$cursoArgs<ExtArgs> = {}>(args?: Subset<T, tipo_curso$cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_curso model
   */
  interface tipo_cursoFieldRefs {
    readonly id_tipo_curso: FieldRef<"tipo_curso", 'Int'>
    readonly tx_descricao: FieldRef<"tipo_curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_curso findUnique
   */
  export type tipo_cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_curso to fetch.
     */
    where: tipo_cursoWhereUniqueInput
  }

  /**
   * tipo_curso findUniqueOrThrow
   */
  export type tipo_cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_curso to fetch.
     */
    where: tipo_cursoWhereUniqueInput
  }

  /**
   * tipo_curso findFirst
   */
  export type tipo_cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_curso to fetch.
     */
    where?: tipo_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cursos to fetch.
     */
    orderBy?: tipo_cursoOrderByWithRelationInput | tipo_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_cursos.
     */
    cursor?: tipo_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_cursos.
     */
    distinct?: Tipo_cursoScalarFieldEnum | Tipo_cursoScalarFieldEnum[]
  }

  /**
   * tipo_curso findFirstOrThrow
   */
  export type tipo_cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_curso to fetch.
     */
    where?: tipo_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cursos to fetch.
     */
    orderBy?: tipo_cursoOrderByWithRelationInput | tipo_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_cursos.
     */
    cursor?: tipo_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_cursos.
     */
    distinct?: Tipo_cursoScalarFieldEnum | Tipo_cursoScalarFieldEnum[]
  }

  /**
   * tipo_curso findMany
   */
  export type tipo_cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cursos to fetch.
     */
    where?: tipo_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cursos to fetch.
     */
    orderBy?: tipo_cursoOrderByWithRelationInput | tipo_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_cursos.
     */
    cursor?: tipo_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cursos.
     */
    skip?: number
    distinct?: Tipo_cursoScalarFieldEnum | Tipo_cursoScalarFieldEnum[]
  }

  /**
   * tipo_curso create
   */
  export type tipo_cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_curso.
     */
    data: XOR<tipo_cursoCreateInput, tipo_cursoUncheckedCreateInput>
  }

  /**
   * tipo_curso createMany
   */
  export type tipo_cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_cursos.
     */
    data: tipo_cursoCreateManyInput | tipo_cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_curso createManyAndReturn
   */
  export type tipo_cursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_cursos.
     */
    data: tipo_cursoCreateManyInput | tipo_cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_curso update
   */
  export type tipo_cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_curso.
     */
    data: XOR<tipo_cursoUpdateInput, tipo_cursoUncheckedUpdateInput>
    /**
     * Choose, which tipo_curso to update.
     */
    where: tipo_cursoWhereUniqueInput
  }

  /**
   * tipo_curso updateMany
   */
  export type tipo_cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_cursos.
     */
    data: XOR<tipo_cursoUpdateManyMutationInput, tipo_cursoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_cursos to update
     */
    where?: tipo_cursoWhereInput
    /**
     * Limit how many tipo_cursos to update.
     */
    limit?: number
  }

  /**
   * tipo_curso updateManyAndReturn
   */
  export type tipo_cursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * The data used to update tipo_cursos.
     */
    data: XOR<tipo_cursoUpdateManyMutationInput, tipo_cursoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_cursos to update
     */
    where?: tipo_cursoWhereInput
    /**
     * Limit how many tipo_cursos to update.
     */
    limit?: number
  }

  /**
   * tipo_curso upsert
   */
  export type tipo_cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_curso to update in case it exists.
     */
    where: tipo_cursoWhereUniqueInput
    /**
     * In case the tipo_curso found by the `where` argument doesn't exist, create a new tipo_curso with this data.
     */
    create: XOR<tipo_cursoCreateInput, tipo_cursoUncheckedCreateInput>
    /**
     * In case the tipo_curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_cursoUpdateInput, tipo_cursoUncheckedUpdateInput>
  }

  /**
   * tipo_curso delete
   */
  export type tipo_cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
    /**
     * Filter which tipo_curso to delete.
     */
    where: tipo_cursoWhereUniqueInput
  }

  /**
   * tipo_curso deleteMany
   */
  export type tipo_cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_cursos to delete
     */
    where?: tipo_cursoWhereInput
    /**
     * Limit how many tipo_cursos to delete.
     */
    limit?: number
  }

  /**
   * tipo_curso.curso
   */
  export type tipo_curso$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    where?: cursoWhereInput
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    cursor?: cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * tipo_curso without action
   */
  export type tipo_cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_curso
     */
    select?: tipo_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_curso
     */
    omit?: tipo_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cursoInclude<ExtArgs> | null
  }


  /**
   * Model tipo_disciplina
   */

  export type AggregateTipo_disciplina = {
    _count: Tipo_disciplinaCountAggregateOutputType | null
    _avg: Tipo_disciplinaAvgAggregateOutputType | null
    _sum: Tipo_disciplinaSumAggregateOutputType | null
    _min: Tipo_disciplinaMinAggregateOutputType | null
    _max: Tipo_disciplinaMaxAggregateOutputType | null
  }

  export type Tipo_disciplinaAvgAggregateOutputType = {
    id_tipo_disciplina: number | null
  }

  export type Tipo_disciplinaSumAggregateOutputType = {
    id_tipo_disciplina: number | null
  }

  export type Tipo_disciplinaMinAggregateOutputType = {
    id_tipo_disciplina: number | null
    tx_descricao: string | null
  }

  export type Tipo_disciplinaMaxAggregateOutputType = {
    id_tipo_disciplina: number | null
    tx_descricao: string | null
  }

  export type Tipo_disciplinaCountAggregateOutputType = {
    id_tipo_disciplina: number
    tx_descricao: number
    _all: number
  }


  export type Tipo_disciplinaAvgAggregateInputType = {
    id_tipo_disciplina?: true
  }

  export type Tipo_disciplinaSumAggregateInputType = {
    id_tipo_disciplina?: true
  }

  export type Tipo_disciplinaMinAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
  }

  export type Tipo_disciplinaMaxAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
  }

  export type Tipo_disciplinaCountAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
    _all?: true
  }

  export type Tipo_disciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_disciplina to aggregate.
     */
    where?: tipo_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_disciplinas to fetch.
     */
    orderBy?: tipo_disciplinaOrderByWithRelationInput | tipo_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_disciplinas
    **/
    _count?: true | Tipo_disciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_disciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_disciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_disciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_disciplinaMaxAggregateInputType
  }

  export type GetTipo_disciplinaAggregateType<T extends Tipo_disciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_disciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_disciplina[P]>
      : GetScalarType<T[P], AggregateTipo_disciplina[P]>
  }




  export type tipo_disciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_disciplinaWhereInput
    orderBy?: tipo_disciplinaOrderByWithAggregationInput | tipo_disciplinaOrderByWithAggregationInput[]
    by: Tipo_disciplinaScalarFieldEnum[] | Tipo_disciplinaScalarFieldEnum
    having?: tipo_disciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_disciplinaCountAggregateInputType | true
    _avg?: Tipo_disciplinaAvgAggregateInputType
    _sum?: Tipo_disciplinaSumAggregateInputType
    _min?: Tipo_disciplinaMinAggregateInputType
    _max?: Tipo_disciplinaMaxAggregateInputType
  }

  export type Tipo_disciplinaGroupByOutputType = {
    id_tipo_disciplina: number
    tx_descricao: string
    _count: Tipo_disciplinaCountAggregateOutputType | null
    _avg: Tipo_disciplinaAvgAggregateOutputType | null
    _sum: Tipo_disciplinaSumAggregateOutputType | null
    _min: Tipo_disciplinaMinAggregateOutputType | null
    _max: Tipo_disciplinaMaxAggregateOutputType | null
  }

  type GetTipo_disciplinaGroupByPayload<T extends tipo_disciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_disciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_disciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_disciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_disciplinaGroupByOutputType[P]>
        }
      >
    >


  export type tipo_disciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
    disciplina?: boolean | tipo_disciplina$disciplinaArgs<ExtArgs>
    _count?: boolean | Tipo_disciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_disciplina"]>

  export type tipo_disciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipo_disciplina"]>

  export type tipo_disciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipo_disciplina"]>

  export type tipo_disciplinaSelectScalar = {
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }

  export type tipo_disciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_disciplina" | "tx_descricao", ExtArgs["result"]["tipo_disciplina"]>
  export type tipo_disciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | tipo_disciplina$disciplinaArgs<ExtArgs>
    _count?: boolean | Tipo_disciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_disciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_disciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_disciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_disciplina"
    objects: {
      disciplina: Prisma.$disciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_disciplina: number
      tx_descricao: string
    }, ExtArgs["result"]["tipo_disciplina"]>
    composites: {}
  }

  type tipo_disciplinaGetPayload<S extends boolean | null | undefined | tipo_disciplinaDefaultArgs> = $Result.GetResult<Prisma.$tipo_disciplinaPayload, S>

  type tipo_disciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_disciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_disciplinaCountAggregateInputType | true
    }

  export interface tipo_disciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_disciplina'], meta: { name: 'tipo_disciplina' } }
    /**
     * Find zero or one Tipo_disciplina that matches the filter.
     * @param {tipo_disciplinaFindUniqueArgs} args - Arguments to find a Tipo_disciplina
     * @example
     * // Get one Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_disciplinaFindUniqueArgs>(args: SelectSubset<T, tipo_disciplinaFindUniqueArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_disciplinaFindUniqueOrThrowArgs} args - Arguments to find a Tipo_disciplina
     * @example
     * // Get one Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_disciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_disciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaFindFirstArgs} args - Arguments to find a Tipo_disciplina
     * @example
     * // Get one Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_disciplinaFindFirstArgs>(args?: SelectSubset<T, tipo_disciplinaFindFirstArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaFindFirstOrThrowArgs} args - Arguments to find a Tipo_disciplina
     * @example
     * // Get one Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_disciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_disciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_disciplinas
     * const tipo_disciplinas = await prisma.tipo_disciplina.findMany()
     * 
     * // Get first 10 Tipo_disciplinas
     * const tipo_disciplinas = await prisma.tipo_disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_disciplina`
     * const tipo_disciplinaWithId_tipo_disciplinaOnly = await prisma.tipo_disciplina.findMany({ select: { id_tipo_disciplina: true } })
     * 
     */
    findMany<T extends tipo_disciplinaFindManyArgs>(args?: SelectSubset<T, tipo_disciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_disciplina.
     * @param {tipo_disciplinaCreateArgs} args - Arguments to create a Tipo_disciplina.
     * @example
     * // Create one Tipo_disciplina
     * const Tipo_disciplina = await prisma.tipo_disciplina.create({
     *   data: {
     *     // ... data to create a Tipo_disciplina
     *   }
     * })
     * 
     */
    create<T extends tipo_disciplinaCreateArgs>(args: SelectSubset<T, tipo_disciplinaCreateArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_disciplinas.
     * @param {tipo_disciplinaCreateManyArgs} args - Arguments to create many Tipo_disciplinas.
     * @example
     * // Create many Tipo_disciplinas
     * const tipo_disciplina = await prisma.tipo_disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_disciplinaCreateManyArgs>(args?: SelectSubset<T, tipo_disciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_disciplinas and returns the data saved in the database.
     * @param {tipo_disciplinaCreateManyAndReturnArgs} args - Arguments to create many Tipo_disciplinas.
     * @example
     * // Create many Tipo_disciplinas
     * const tipo_disciplina = await prisma.tipo_disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_disciplinas and only return the `id_tipo_disciplina`
     * const tipo_disciplinaWithId_tipo_disciplinaOnly = await prisma.tipo_disciplina.createManyAndReturn({
     *   select: { id_tipo_disciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_disciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_disciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_disciplina.
     * @param {tipo_disciplinaDeleteArgs} args - Arguments to delete one Tipo_disciplina.
     * @example
     * // Delete one Tipo_disciplina
     * const Tipo_disciplina = await prisma.tipo_disciplina.delete({
     *   where: {
     *     // ... filter to delete one Tipo_disciplina
     *   }
     * })
     * 
     */
    delete<T extends tipo_disciplinaDeleteArgs>(args: SelectSubset<T, tipo_disciplinaDeleteArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_disciplina.
     * @param {tipo_disciplinaUpdateArgs} args - Arguments to update one Tipo_disciplina.
     * @example
     * // Update one Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_disciplinaUpdateArgs>(args: SelectSubset<T, tipo_disciplinaUpdateArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_disciplinas.
     * @param {tipo_disciplinaDeleteManyArgs} args - Arguments to filter Tipo_disciplinas to delete.
     * @example
     * // Delete a few Tipo_disciplinas
     * const { count } = await prisma.tipo_disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_disciplinaDeleteManyArgs>(args?: SelectSubset<T, tipo_disciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_disciplinas
     * const tipo_disciplina = await prisma.tipo_disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_disciplinaUpdateManyArgs>(args: SelectSubset<T, tipo_disciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_disciplinas and returns the data updated in the database.
     * @param {tipo_disciplinaUpdateManyAndReturnArgs} args - Arguments to update many Tipo_disciplinas.
     * @example
     * // Update many Tipo_disciplinas
     * const tipo_disciplina = await prisma.tipo_disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_disciplinas and only return the `id_tipo_disciplina`
     * const tipo_disciplinaWithId_tipo_disciplinaOnly = await prisma.tipo_disciplina.updateManyAndReturn({
     *   select: { id_tipo_disciplina: true },
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
    updateManyAndReturn<T extends tipo_disciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_disciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_disciplina.
     * @param {tipo_disciplinaUpsertArgs} args - Arguments to update or create a Tipo_disciplina.
     * @example
     * // Update or create a Tipo_disciplina
     * const tipo_disciplina = await prisma.tipo_disciplina.upsert({
     *   create: {
     *     // ... data to create a Tipo_disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_disciplina we want to update
     *   }
     * })
     */
    upsert<T extends tipo_disciplinaUpsertArgs>(args: SelectSubset<T, tipo_disciplinaUpsertArgs<ExtArgs>>): Prisma__tipo_disciplinaClient<$Result.GetResult<Prisma.$tipo_disciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaCountArgs} args - Arguments to filter Tipo_disciplinas to count.
     * @example
     * // Count the number of Tipo_disciplinas
     * const count = await prisma.tipo_disciplina.count({
     *   where: {
     *     // ... the filter for the Tipo_disciplinas we want to count
     *   }
     * })
    **/
    count<T extends tipo_disciplinaCountArgs>(
      args?: Subset<T, tipo_disciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_disciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_disciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_disciplinaAggregateArgs>(args: Subset<T, Tipo_disciplinaAggregateArgs>): Prisma.PrismaPromise<GetTipo_disciplinaAggregateType<T>>

    /**
     * Group by Tipo_disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_disciplinaGroupByArgs} args - Group by arguments.
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
      T extends tipo_disciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_disciplinaGroupByArgs['orderBy'] }
        : { orderBy?: tipo_disciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_disciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_disciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_disciplina model
   */
  readonly fields: tipo_disciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_disciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends tipo_disciplina$disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, tipo_disciplina$disciplinaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_disciplina model
   */
  interface tipo_disciplinaFieldRefs {
    readonly id_tipo_disciplina: FieldRef<"tipo_disciplina", 'Int'>
    readonly tx_descricao: FieldRef<"tipo_disciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_disciplina findUnique
   */
  export type tipo_disciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_disciplina to fetch.
     */
    where: tipo_disciplinaWhereUniqueInput
  }

  /**
   * tipo_disciplina findUniqueOrThrow
   */
  export type tipo_disciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_disciplina to fetch.
     */
    where: tipo_disciplinaWhereUniqueInput
  }

  /**
   * tipo_disciplina findFirst
   */
  export type tipo_disciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_disciplina to fetch.
     */
    where?: tipo_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_disciplinas to fetch.
     */
    orderBy?: tipo_disciplinaOrderByWithRelationInput | tipo_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_disciplinas.
     */
    cursor?: tipo_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_disciplinas.
     */
    distinct?: Tipo_disciplinaScalarFieldEnum | Tipo_disciplinaScalarFieldEnum[]
  }

  /**
   * tipo_disciplina findFirstOrThrow
   */
  export type tipo_disciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_disciplina to fetch.
     */
    where?: tipo_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_disciplinas to fetch.
     */
    orderBy?: tipo_disciplinaOrderByWithRelationInput | tipo_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_disciplinas.
     */
    cursor?: tipo_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_disciplinas.
     */
    distinct?: Tipo_disciplinaScalarFieldEnum | Tipo_disciplinaScalarFieldEnum[]
  }

  /**
   * tipo_disciplina findMany
   */
  export type tipo_disciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_disciplinas to fetch.
     */
    where?: tipo_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_disciplinas to fetch.
     */
    orderBy?: tipo_disciplinaOrderByWithRelationInput | tipo_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_disciplinas.
     */
    cursor?: tipo_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_disciplinas.
     */
    skip?: number
    distinct?: Tipo_disciplinaScalarFieldEnum | Tipo_disciplinaScalarFieldEnum[]
  }

  /**
   * tipo_disciplina create
   */
  export type tipo_disciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_disciplina.
     */
    data: XOR<tipo_disciplinaCreateInput, tipo_disciplinaUncheckedCreateInput>
  }

  /**
   * tipo_disciplina createMany
   */
  export type tipo_disciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_disciplinas.
     */
    data: tipo_disciplinaCreateManyInput | tipo_disciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_disciplina createManyAndReturn
   */
  export type tipo_disciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_disciplinas.
     */
    data: tipo_disciplinaCreateManyInput | tipo_disciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_disciplina update
   */
  export type tipo_disciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_disciplina.
     */
    data: XOR<tipo_disciplinaUpdateInput, tipo_disciplinaUncheckedUpdateInput>
    /**
     * Choose, which tipo_disciplina to update.
     */
    where: tipo_disciplinaWhereUniqueInput
  }

  /**
   * tipo_disciplina updateMany
   */
  export type tipo_disciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_disciplinas.
     */
    data: XOR<tipo_disciplinaUpdateManyMutationInput, tipo_disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which tipo_disciplinas to update
     */
    where?: tipo_disciplinaWhereInput
    /**
     * Limit how many tipo_disciplinas to update.
     */
    limit?: number
  }

  /**
   * tipo_disciplina updateManyAndReturn
   */
  export type tipo_disciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * The data used to update tipo_disciplinas.
     */
    data: XOR<tipo_disciplinaUpdateManyMutationInput, tipo_disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which tipo_disciplinas to update
     */
    where?: tipo_disciplinaWhereInput
    /**
     * Limit how many tipo_disciplinas to update.
     */
    limit?: number
  }

  /**
   * tipo_disciplina upsert
   */
  export type tipo_disciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_disciplina to update in case it exists.
     */
    where: tipo_disciplinaWhereUniqueInput
    /**
     * In case the tipo_disciplina found by the `where` argument doesn't exist, create a new tipo_disciplina with this data.
     */
    create: XOR<tipo_disciplinaCreateInput, tipo_disciplinaUncheckedCreateInput>
    /**
     * In case the tipo_disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_disciplinaUpdateInput, tipo_disciplinaUncheckedUpdateInput>
  }

  /**
   * tipo_disciplina delete
   */
  export type tipo_disciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
    /**
     * Filter which tipo_disciplina to delete.
     */
    where: tipo_disciplinaWhereUniqueInput
  }

  /**
   * tipo_disciplina deleteMany
   */
  export type tipo_disciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_disciplinas to delete
     */
    where?: tipo_disciplinaWhereInput
    /**
     * Limit how many tipo_disciplinas to delete.
     */
    limit?: number
  }

  /**
   * tipo_disciplina.disciplina
   */
  export type tipo_disciplina$disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    where?: disciplinaWhereInput
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    cursor?: disciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * tipo_disciplina without action
   */
  export type tipo_disciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_disciplina
     */
    select?: tipo_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_disciplina
     */
    omit?: tipo_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_disciplinaInclude<ExtArgs> | null
  }


  /**
   * Model titulo
   */

  export type AggregateTitulo = {
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  export type TituloAvgAggregateOutputType = {
    id_titulo: number | null
  }

  export type TituloSumAggregateOutputType = {
    id_titulo: number | null
  }

  export type TituloMinAggregateOutputType = {
    id_titulo: number | null
    tx_descricao: string | null
  }

  export type TituloMaxAggregateOutputType = {
    id_titulo: number | null
    tx_descricao: string | null
  }

  export type TituloCountAggregateOutputType = {
    id_titulo: number
    tx_descricao: number
    _all: number
  }


  export type TituloAvgAggregateInputType = {
    id_titulo?: true
  }

  export type TituloSumAggregateInputType = {
    id_titulo?: true
  }

  export type TituloMinAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
  }

  export type TituloMaxAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
  }

  export type TituloCountAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
    _all?: true
  }

  export type TituloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which titulo to aggregate.
     */
    where?: tituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titulos to fetch.
     */
    orderBy?: tituloOrderByWithRelationInput | tituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned titulos
    **/
    _count?: true | TituloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TituloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TituloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TituloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TituloMaxAggregateInputType
  }

  export type GetTituloAggregateType<T extends TituloAggregateArgs> = {
        [P in keyof T & keyof AggregateTitulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitulo[P]>
      : GetScalarType<T[P], AggregateTitulo[P]>
  }




  export type tituloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tituloWhereInput
    orderBy?: tituloOrderByWithAggregationInput | tituloOrderByWithAggregationInput[]
    by: TituloScalarFieldEnum[] | TituloScalarFieldEnum
    having?: tituloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TituloCountAggregateInputType | true
    _avg?: TituloAvgAggregateInputType
    _sum?: TituloSumAggregateInputType
    _min?: TituloMinAggregateInputType
    _max?: TituloMaxAggregateInputType
  }

  export type TituloGroupByOutputType = {
    id_titulo: number
    tx_descricao: string
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  type GetTituloGroupByPayload<T extends tituloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TituloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TituloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TituloGroupByOutputType[P]>
            : GetScalarType<T[P], TituloGroupByOutputType[P]>
        }
      >
    >


  export type tituloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
    professor?: boolean | titulo$professorArgs<ExtArgs>
    _count?: boolean | TituloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titulo"]>

  export type tituloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["titulo"]>

  export type tituloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["titulo"]>

  export type tituloSelectScalar = {
    id_titulo?: boolean
    tx_descricao?: boolean
  }

  export type tituloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_titulo" | "tx_descricao", ExtArgs["result"]["titulo"]>
  export type tituloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | titulo$professorArgs<ExtArgs>
    _count?: boolean | TituloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tituloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tituloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tituloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "titulo"
    objects: {
      professor: Prisma.$professorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_titulo: number
      tx_descricao: string
    }, ExtArgs["result"]["titulo"]>
    composites: {}
  }

  type tituloGetPayload<S extends boolean | null | undefined | tituloDefaultArgs> = $Result.GetResult<Prisma.$tituloPayload, S>

  type tituloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tituloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TituloCountAggregateInputType | true
    }

  export interface tituloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['titulo'], meta: { name: 'titulo' } }
    /**
     * Find zero or one Titulo that matches the filter.
     * @param {tituloFindUniqueArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tituloFindUniqueArgs>(args: SelectSubset<T, tituloFindUniqueArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Titulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tituloFindUniqueOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tituloFindUniqueOrThrowArgs>(args: SelectSubset<T, tituloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloFindFirstArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tituloFindFirstArgs>(args?: SelectSubset<T, tituloFindFirstArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloFindFirstOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tituloFindFirstOrThrowArgs>(args?: SelectSubset<T, tituloFindFirstOrThrowArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Titulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Titulos
     * const titulos = await prisma.titulo.findMany()
     * 
     * // Get first 10 Titulos
     * const titulos = await prisma.titulo.findMany({ take: 10 })
     * 
     * // Only select the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.findMany({ select: { id_titulo: true } })
     * 
     */
    findMany<T extends tituloFindManyArgs>(args?: SelectSubset<T, tituloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Titulo.
     * @param {tituloCreateArgs} args - Arguments to create a Titulo.
     * @example
     * // Create one Titulo
     * const Titulo = await prisma.titulo.create({
     *   data: {
     *     // ... data to create a Titulo
     *   }
     * })
     * 
     */
    create<T extends tituloCreateArgs>(args: SelectSubset<T, tituloCreateArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Titulos.
     * @param {tituloCreateManyArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tituloCreateManyArgs>(args?: SelectSubset<T, tituloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Titulos and returns the data saved in the database.
     * @param {tituloCreateManyAndReturnArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Titulos and only return the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.createManyAndReturn({
     *   select: { id_titulo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tituloCreateManyAndReturnArgs>(args?: SelectSubset<T, tituloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Titulo.
     * @param {tituloDeleteArgs} args - Arguments to delete one Titulo.
     * @example
     * // Delete one Titulo
     * const Titulo = await prisma.titulo.delete({
     *   where: {
     *     // ... filter to delete one Titulo
     *   }
     * })
     * 
     */
    delete<T extends tituloDeleteArgs>(args: SelectSubset<T, tituloDeleteArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Titulo.
     * @param {tituloUpdateArgs} args - Arguments to update one Titulo.
     * @example
     * // Update one Titulo
     * const titulo = await prisma.titulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tituloUpdateArgs>(args: SelectSubset<T, tituloUpdateArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Titulos.
     * @param {tituloDeleteManyArgs} args - Arguments to filter Titulos to delete.
     * @example
     * // Delete a few Titulos
     * const { count } = await prisma.titulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tituloDeleteManyArgs>(args?: SelectSubset<T, tituloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Titulos
     * const titulo = await prisma.titulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tituloUpdateManyArgs>(args: SelectSubset<T, tituloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titulos and returns the data updated in the database.
     * @param {tituloUpdateManyAndReturnArgs} args - Arguments to update many Titulos.
     * @example
     * // Update many Titulos
     * const titulo = await prisma.titulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Titulos and only return the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.updateManyAndReturn({
     *   select: { id_titulo: true },
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
    updateManyAndReturn<T extends tituloUpdateManyAndReturnArgs>(args: SelectSubset<T, tituloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Titulo.
     * @param {tituloUpsertArgs} args - Arguments to update or create a Titulo.
     * @example
     * // Update or create a Titulo
     * const titulo = await prisma.titulo.upsert({
     *   create: {
     *     // ... data to create a Titulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Titulo we want to update
     *   }
     * })
     */
    upsert<T extends tituloUpsertArgs>(args: SelectSubset<T, tituloUpsertArgs<ExtArgs>>): Prisma__tituloClient<$Result.GetResult<Prisma.$tituloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloCountArgs} args - Arguments to filter Titulos to count.
     * @example
     * // Count the number of Titulos
     * const count = await prisma.titulo.count({
     *   where: {
     *     // ... the filter for the Titulos we want to count
     *   }
     * })
    **/
    count<T extends tituloCountArgs>(
      args?: Subset<T, tituloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TituloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TituloAggregateArgs>(args: Subset<T, TituloAggregateArgs>): Prisma.PrismaPromise<GetTituloAggregateType<T>>

    /**
     * Group by Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tituloGroupByArgs} args - Group by arguments.
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
      T extends tituloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tituloGroupByArgs['orderBy'] }
        : { orderBy?: tituloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tituloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTituloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the titulo model
   */
  readonly fields: tituloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for titulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tituloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends titulo$professorArgs<ExtArgs> = {}>(args?: Subset<T, titulo$professorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the titulo model
   */
  interface tituloFieldRefs {
    readonly id_titulo: FieldRef<"titulo", 'Int'>
    readonly tx_descricao: FieldRef<"titulo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * titulo findUnique
   */
  export type tituloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter, which titulo to fetch.
     */
    where: tituloWhereUniqueInput
  }

  /**
   * titulo findUniqueOrThrow
   */
  export type tituloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter, which titulo to fetch.
     */
    where: tituloWhereUniqueInput
  }

  /**
   * titulo findFirst
   */
  export type tituloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter, which titulo to fetch.
     */
    where?: tituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titulos to fetch.
     */
    orderBy?: tituloOrderByWithRelationInput | tituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for titulos.
     */
    cursor?: tituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * titulo findFirstOrThrow
   */
  export type tituloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter, which titulo to fetch.
     */
    where?: tituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titulos to fetch.
     */
    orderBy?: tituloOrderByWithRelationInput | tituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for titulos.
     */
    cursor?: tituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * titulo findMany
   */
  export type tituloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter, which titulos to fetch.
     */
    where?: tituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titulos to fetch.
     */
    orderBy?: tituloOrderByWithRelationInput | tituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing titulos.
     */
    cursor?: tituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titulos.
     */
    skip?: number
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * titulo create
   */
  export type tituloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * The data needed to create a titulo.
     */
    data: XOR<tituloCreateInput, tituloUncheckedCreateInput>
  }

  /**
   * titulo createMany
   */
  export type tituloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many titulos.
     */
    data: tituloCreateManyInput | tituloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * titulo createManyAndReturn
   */
  export type tituloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * The data used to create many titulos.
     */
    data: tituloCreateManyInput | tituloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * titulo update
   */
  export type tituloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * The data needed to update a titulo.
     */
    data: XOR<tituloUpdateInput, tituloUncheckedUpdateInput>
    /**
     * Choose, which titulo to update.
     */
    where: tituloWhereUniqueInput
  }

  /**
   * titulo updateMany
   */
  export type tituloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update titulos.
     */
    data: XOR<tituloUpdateManyMutationInput, tituloUncheckedUpdateManyInput>
    /**
     * Filter which titulos to update
     */
    where?: tituloWhereInput
    /**
     * Limit how many titulos to update.
     */
    limit?: number
  }

  /**
   * titulo updateManyAndReturn
   */
  export type tituloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * The data used to update titulos.
     */
    data: XOR<tituloUpdateManyMutationInput, tituloUncheckedUpdateManyInput>
    /**
     * Filter which titulos to update
     */
    where?: tituloWhereInput
    /**
     * Limit how many titulos to update.
     */
    limit?: number
  }

  /**
   * titulo upsert
   */
  export type tituloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * The filter to search for the titulo to update in case it exists.
     */
    where: tituloWhereUniqueInput
    /**
     * In case the titulo found by the `where` argument doesn't exist, create a new titulo with this data.
     */
    create: XOR<tituloCreateInput, tituloUncheckedCreateInput>
    /**
     * In case the titulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tituloUpdateInput, tituloUncheckedUpdateInput>
  }

  /**
   * titulo delete
   */
  export type tituloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
    /**
     * Filter which titulo to delete.
     */
    where: tituloWhereUniqueInput
  }

  /**
   * titulo deleteMany
   */
  export type tituloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which titulos to delete
     */
    where?: tituloWhereInput
    /**
     * Limit how many titulos to delete.
     */
    limit?: number
  }

  /**
   * titulo.professor
   */
  export type titulo$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    where?: professorWhereInput
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    cursor?: professorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * titulo without action
   */
  export type tituloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titulo
     */
    select?: tituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titulo
     */
    omit?: tituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tituloInclude<ExtArgs> | null
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


  export const AlunoScalarFieldEnum: {
    id_aluno: 'id_aluno',
    tx_nome: 'tx_nome',
    tx_sexo: 'tx_sexo',
    dt_nascimento: 'dt_nascimento'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const CursaScalarFieldEnum: {
    id_aluno: 'id_aluno',
    id_disciplina: 'id_disciplina',
    in_ano: 'in_ano',
    in_semestre: 'in_semestre',
    in_faltas: 'in_faltas',
    nr_nota1: 'nr_nota1',
    nr_nota2: 'nr_nota2',
    nr_nota3: 'nr_nota3',
    bl_aprovado: 'bl_aprovado'
  };

  export type CursaScalarFieldEnum = (typeof CursaScalarFieldEnum)[keyof typeof CursaScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id_curso: 'id_curso',
    id_instituicao: 'id_instituicao',
    id_tipo_curso: 'id_tipo_curso',
    tx_descricao: 'tx_descricao'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id_disciplina: 'id_disciplina',
    id_curso: 'id_curso',
    id_tipo_disciplina: 'id_tipo_disciplina',
    tx_sigla: 'tx_sigla',
    tx_descricao: 'tx_descricao',
    in_periodo: 'in_periodo',
    in_carga_horaria: 'in_carga_horaria'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const InstituicaoScalarFieldEnum: {
    id_instituicao: 'id_instituicao',
    tx_sigla: 'tx_sigla',
    tx_descricao: 'tx_descricao'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const LecionaScalarFieldEnum: {
    id_professor: 'id_professor',
    id_disciplina: 'id_disciplina'
  };

  export type LecionaScalarFieldEnum = (typeof LecionaScalarFieldEnum)[keyof typeof LecionaScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id_professor: 'id_professor',
    id_titulo: 'id_titulo',
    tx_nome: 'tx_nome',
    tx_sexo: 'tx_sexo',
    tx_estado_civil: 'tx_estado_civil',
    dt_nascimento: 'dt_nascimento',
    tx_telefone: 'tx_telefone'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const Tipo_cursoScalarFieldEnum: {
    id_tipo_curso: 'id_tipo_curso',
    tx_descricao: 'tx_descricao'
  };

  export type Tipo_cursoScalarFieldEnum = (typeof Tipo_cursoScalarFieldEnum)[keyof typeof Tipo_cursoScalarFieldEnum]


  export const Tipo_disciplinaScalarFieldEnum: {
    id_tipo_disciplina: 'id_tipo_disciplina',
    tx_descricao: 'tx_descricao'
  };

  export type Tipo_disciplinaScalarFieldEnum = (typeof Tipo_disciplinaScalarFieldEnum)[keyof typeof Tipo_disciplinaScalarFieldEnum]


  export const TituloScalarFieldEnum: {
    id_titulo: 'id_titulo',
    tx_descricao: 'tx_descricao'
  };

  export type TituloScalarFieldEnum = (typeof TituloScalarFieldEnum)[keyof typeof TituloScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type alunoWhereInput = {
    AND?: alunoWhereInput | alunoWhereInput[]
    OR?: alunoWhereInput[]
    NOT?: alunoWhereInput | alunoWhereInput[]
    id_aluno?: IntFilter<"aluno"> | number
    tx_nome?: StringFilter<"aluno"> | string
    tx_sexo?: StringFilter<"aluno"> | string
    dt_nascimento?: DateTimeFilter<"aluno"> | Date | string
    cursa?: CursaListRelationFilter
  }

  export type alunoOrderByWithRelationInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
    cursa?: cursaOrderByRelationAggregateInput
  }

  export type alunoWhereUniqueInput = Prisma.AtLeast<{
    id_aluno?: number
    AND?: alunoWhereInput | alunoWhereInput[]
    OR?: alunoWhereInput[]
    NOT?: alunoWhereInput | alunoWhereInput[]
    tx_nome?: StringFilter<"aluno"> | string
    tx_sexo?: StringFilter<"aluno"> | string
    dt_nascimento?: DateTimeFilter<"aluno"> | Date | string
    cursa?: CursaListRelationFilter
  }, "id_aluno">

  export type alunoOrderByWithAggregationInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
    _count?: alunoCountOrderByAggregateInput
    _avg?: alunoAvgOrderByAggregateInput
    _max?: alunoMaxOrderByAggregateInput
    _min?: alunoMinOrderByAggregateInput
    _sum?: alunoSumOrderByAggregateInput
  }

  export type alunoScalarWhereWithAggregatesInput = {
    AND?: alunoScalarWhereWithAggregatesInput | alunoScalarWhereWithAggregatesInput[]
    OR?: alunoScalarWhereWithAggregatesInput[]
    NOT?: alunoScalarWhereWithAggregatesInput | alunoScalarWhereWithAggregatesInput[]
    id_aluno?: IntWithAggregatesFilter<"aluno"> | number
    tx_nome?: StringWithAggregatesFilter<"aluno"> | string
    tx_sexo?: StringWithAggregatesFilter<"aluno"> | string
    dt_nascimento?: DateTimeWithAggregatesFilter<"aluno"> | Date | string
  }

  export type cursaWhereInput = {
    AND?: cursaWhereInput | cursaWhereInput[]
    OR?: cursaWhereInput[]
    NOT?: cursaWhereInput | cursaWhereInput[]
    id_aluno?: IntFilter<"cursa"> | number
    id_disciplina?: IntFilter<"cursa"> | number
    in_ano?: IntFilter<"cursa"> | number
    in_semestre?: IntFilter<"cursa"> | number
    in_faltas?: IntNullableFilter<"cursa"> | number | null
    nr_nota1?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFilter<"cursa"> | boolean
    aluno?: XOR<AlunoScalarRelationFilter, alunoWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
  }

  export type cursaOrderByWithRelationInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrderInput | SortOrder
    nr_nota1?: SortOrderInput | SortOrder
    nr_nota2?: SortOrderInput | SortOrder
    nr_nota3?: SortOrderInput | SortOrder
    bl_aprovado?: SortOrder
    aluno?: alunoOrderByWithRelationInput
    disciplina?: disciplinaOrderByWithRelationInput
  }

  export type cursaWhereUniqueInput = Prisma.AtLeast<{
    id_aluno_id_disciplina_in_ano_in_semestre?: cursaId_alunoId_disciplinaIn_anoIn_semestreCompoundUniqueInput
    AND?: cursaWhereInput | cursaWhereInput[]
    OR?: cursaWhereInput[]
    NOT?: cursaWhereInput | cursaWhereInput[]
    id_aluno?: IntFilter<"cursa"> | number
    id_disciplina?: IntFilter<"cursa"> | number
    in_ano?: IntFilter<"cursa"> | number
    in_semestre?: IntFilter<"cursa"> | number
    in_faltas?: IntNullableFilter<"cursa"> | number | null
    nr_nota1?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFilter<"cursa"> | boolean
    aluno?: XOR<AlunoScalarRelationFilter, alunoWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
  }, "id_aluno_id_disciplina_in_ano_in_semestre">

  export type cursaOrderByWithAggregationInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrderInput | SortOrder
    nr_nota1?: SortOrderInput | SortOrder
    nr_nota2?: SortOrderInput | SortOrder
    nr_nota3?: SortOrderInput | SortOrder
    bl_aprovado?: SortOrder
    _count?: cursaCountOrderByAggregateInput
    _avg?: cursaAvgOrderByAggregateInput
    _max?: cursaMaxOrderByAggregateInput
    _min?: cursaMinOrderByAggregateInput
    _sum?: cursaSumOrderByAggregateInput
  }

  export type cursaScalarWhereWithAggregatesInput = {
    AND?: cursaScalarWhereWithAggregatesInput | cursaScalarWhereWithAggregatesInput[]
    OR?: cursaScalarWhereWithAggregatesInput[]
    NOT?: cursaScalarWhereWithAggregatesInput | cursaScalarWhereWithAggregatesInput[]
    id_aluno?: IntWithAggregatesFilter<"cursa"> | number
    id_disciplina?: IntWithAggregatesFilter<"cursa"> | number
    in_ano?: IntWithAggregatesFilter<"cursa"> | number
    in_semestre?: IntWithAggregatesFilter<"cursa"> | number
    in_faltas?: IntNullableWithAggregatesFilter<"cursa"> | number | null
    nr_nota1?: DecimalNullableWithAggregatesFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: DecimalNullableWithAggregatesFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: DecimalNullableWithAggregatesFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolWithAggregatesFilter<"cursa"> | boolean
  }

  export type cursoWhereInput = {
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    id_curso?: IntFilter<"curso"> | number
    id_instituicao?: IntFilter<"curso"> | number
    id_tipo_curso?: IntFilter<"curso"> | number
    tx_descricao?: StringFilter<"curso"> | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, instituicaoWhereInput>
    tipo_curso?: XOR<Tipo_cursoScalarRelationFilter, tipo_cursoWhereInput>
    disciplina?: DisciplinaListRelationFilter
  }

  export type cursoOrderByWithRelationInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    instituicao?: instituicaoOrderByWithRelationInput
    tipo_curso?: tipo_cursoOrderByWithRelationInput
    disciplina?: disciplinaOrderByRelationAggregateInput
  }

  export type cursoWhereUniqueInput = Prisma.AtLeast<{
    id_curso?: number
    id_instituicao_id_tipo_curso_tx_descricao?: cursoId_instituicaoId_tipo_cursoTx_descricaoCompoundUniqueInput
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    id_instituicao?: IntFilter<"curso"> | number
    id_tipo_curso?: IntFilter<"curso"> | number
    tx_descricao?: StringFilter<"curso"> | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, instituicaoWhereInput>
    tipo_curso?: XOR<Tipo_cursoScalarRelationFilter, tipo_cursoWhereInput>
    disciplina?: DisciplinaListRelationFilter
  }, "id_curso" | "id_instituicao_id_tipo_curso_tx_descricao">

  export type cursoOrderByWithAggregationInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    _count?: cursoCountOrderByAggregateInput
    _avg?: cursoAvgOrderByAggregateInput
    _max?: cursoMaxOrderByAggregateInput
    _min?: cursoMinOrderByAggregateInput
    _sum?: cursoSumOrderByAggregateInput
  }

  export type cursoScalarWhereWithAggregatesInput = {
    AND?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    OR?: cursoScalarWhereWithAggregatesInput[]
    NOT?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    id_curso?: IntWithAggregatesFilter<"curso"> | number
    id_instituicao?: IntWithAggregatesFilter<"curso"> | number
    id_tipo_curso?: IntWithAggregatesFilter<"curso"> | number
    tx_descricao?: StringWithAggregatesFilter<"curso"> | string
  }

  export type disciplinaWhereInput = {
    AND?: disciplinaWhereInput | disciplinaWhereInput[]
    OR?: disciplinaWhereInput[]
    NOT?: disciplinaWhereInput | disciplinaWhereInput[]
    id_disciplina?: IntFilter<"disciplina"> | number
    id_curso?: IntNullableFilter<"disciplina"> | number | null
    id_tipo_disciplina?: IntFilter<"disciplina"> | number
    tx_sigla?: StringFilter<"disciplina"> | string
    tx_descricao?: StringFilter<"disciplina"> | string
    in_periodo?: IntFilter<"disciplina"> | number
    in_carga_horaria?: IntFilter<"disciplina"> | number
    cursa?: CursaListRelationFilter
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
    tipo_disciplina?: XOR<Tipo_disciplinaScalarRelationFilter, tipo_disciplinaWhereInput>
    leciona?: LecionaListRelationFilter
  }

  export type disciplinaOrderByWithRelationInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrderInput | SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
    cursa?: cursaOrderByRelationAggregateInput
    curso?: cursoOrderByWithRelationInput
    tipo_disciplina?: tipo_disciplinaOrderByWithRelationInput
    leciona?: lecionaOrderByRelationAggregateInput
  }

  export type disciplinaWhereUniqueInput = Prisma.AtLeast<{
    id_disciplina?: number
    tx_sigla?: string
    tx_descricao?: string
    AND?: disciplinaWhereInput | disciplinaWhereInput[]
    OR?: disciplinaWhereInput[]
    NOT?: disciplinaWhereInput | disciplinaWhereInput[]
    id_curso?: IntNullableFilter<"disciplina"> | number | null
    id_tipo_disciplina?: IntFilter<"disciplina"> | number
    in_periodo?: IntFilter<"disciplina"> | number
    in_carga_horaria?: IntFilter<"disciplina"> | number
    cursa?: CursaListRelationFilter
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
    tipo_disciplina?: XOR<Tipo_disciplinaScalarRelationFilter, tipo_disciplinaWhereInput>
    leciona?: LecionaListRelationFilter
  }, "id_disciplina" | "tx_sigla" | "tx_descricao">

  export type disciplinaOrderByWithAggregationInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrderInput | SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
    _count?: disciplinaCountOrderByAggregateInput
    _avg?: disciplinaAvgOrderByAggregateInput
    _max?: disciplinaMaxOrderByAggregateInput
    _min?: disciplinaMinOrderByAggregateInput
    _sum?: disciplinaSumOrderByAggregateInput
  }

  export type disciplinaScalarWhereWithAggregatesInput = {
    AND?: disciplinaScalarWhereWithAggregatesInput | disciplinaScalarWhereWithAggregatesInput[]
    OR?: disciplinaScalarWhereWithAggregatesInput[]
    NOT?: disciplinaScalarWhereWithAggregatesInput | disciplinaScalarWhereWithAggregatesInput[]
    id_disciplina?: IntWithAggregatesFilter<"disciplina"> | number
    id_curso?: IntNullableWithAggregatesFilter<"disciplina"> | number | null
    id_tipo_disciplina?: IntWithAggregatesFilter<"disciplina"> | number
    tx_sigla?: StringWithAggregatesFilter<"disciplina"> | string
    tx_descricao?: StringWithAggregatesFilter<"disciplina"> | string
    in_periodo?: IntWithAggregatesFilter<"disciplina"> | number
    in_carga_horaria?: IntWithAggregatesFilter<"disciplina"> | number
  }

  export type instituicaoWhereInput = {
    AND?: instituicaoWhereInput | instituicaoWhereInput[]
    OR?: instituicaoWhereInput[]
    NOT?: instituicaoWhereInput | instituicaoWhereInput[]
    id_instituicao?: IntFilter<"instituicao"> | number
    tx_sigla?: StringFilter<"instituicao"> | string
    tx_descricao?: StringFilter<"instituicao"> | string
    curso?: CursoListRelationFilter
  }

  export type instituicaoOrderByWithRelationInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    curso?: cursoOrderByRelationAggregateInput
  }

  export type instituicaoWhereUniqueInput = Prisma.AtLeast<{
    id_instituicao?: number
    tx_sigla?: string
    tx_descricao?: string
    AND?: instituicaoWhereInput | instituicaoWhereInput[]
    OR?: instituicaoWhereInput[]
    NOT?: instituicaoWhereInput | instituicaoWhereInput[]
    curso?: CursoListRelationFilter
  }, "id_instituicao" | "tx_sigla" | "tx_descricao">

  export type instituicaoOrderByWithAggregationInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    _count?: instituicaoCountOrderByAggregateInput
    _avg?: instituicaoAvgOrderByAggregateInput
    _max?: instituicaoMaxOrderByAggregateInput
    _min?: instituicaoMinOrderByAggregateInput
    _sum?: instituicaoSumOrderByAggregateInput
  }

  export type instituicaoScalarWhereWithAggregatesInput = {
    AND?: instituicaoScalarWhereWithAggregatesInput | instituicaoScalarWhereWithAggregatesInput[]
    OR?: instituicaoScalarWhereWithAggregatesInput[]
    NOT?: instituicaoScalarWhereWithAggregatesInput | instituicaoScalarWhereWithAggregatesInput[]
    id_instituicao?: IntWithAggregatesFilter<"instituicao"> | number
    tx_sigla?: StringWithAggregatesFilter<"instituicao"> | string
    tx_descricao?: StringWithAggregatesFilter<"instituicao"> | string
  }

  export type lecionaWhereInput = {
    AND?: lecionaWhereInput | lecionaWhereInput[]
    OR?: lecionaWhereInput[]
    NOT?: lecionaWhereInput | lecionaWhereInput[]
    id_professor?: IntFilter<"leciona"> | number
    id_disciplina?: IntFilter<"leciona"> | number
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, professorWhereInput>
  }

  export type lecionaOrderByWithRelationInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
    disciplina?: disciplinaOrderByWithRelationInput
    professor?: professorOrderByWithRelationInput
  }

  export type lecionaWhereUniqueInput = Prisma.AtLeast<{
    id_professor_id_disciplina?: lecionaId_professorId_disciplinaCompoundUniqueInput
    AND?: lecionaWhereInput | lecionaWhereInput[]
    OR?: lecionaWhereInput[]
    NOT?: lecionaWhereInput | lecionaWhereInput[]
    id_professor?: IntFilter<"leciona"> | number
    id_disciplina?: IntFilter<"leciona"> | number
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, professorWhereInput>
  }, "id_professor_id_disciplina">

  export type lecionaOrderByWithAggregationInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
    _count?: lecionaCountOrderByAggregateInput
    _avg?: lecionaAvgOrderByAggregateInput
    _max?: lecionaMaxOrderByAggregateInput
    _min?: lecionaMinOrderByAggregateInput
    _sum?: lecionaSumOrderByAggregateInput
  }

  export type lecionaScalarWhereWithAggregatesInput = {
    AND?: lecionaScalarWhereWithAggregatesInput | lecionaScalarWhereWithAggregatesInput[]
    OR?: lecionaScalarWhereWithAggregatesInput[]
    NOT?: lecionaScalarWhereWithAggregatesInput | lecionaScalarWhereWithAggregatesInput[]
    id_professor?: IntWithAggregatesFilter<"leciona"> | number
    id_disciplina?: IntWithAggregatesFilter<"leciona"> | number
  }

  export type professorWhereInput = {
    AND?: professorWhereInput | professorWhereInput[]
    OR?: professorWhereInput[]
    NOT?: professorWhereInput | professorWhereInput[]
    id_professor?: IntFilter<"professor"> | number
    id_titulo?: IntFilter<"professor"> | number
    tx_nome?: StringFilter<"professor"> | string
    tx_sexo?: StringFilter<"professor"> | string
    tx_estado_civil?: StringFilter<"professor"> | string
    dt_nascimento?: DateTimeFilter<"professor"> | Date | string
    tx_telefone?: StringFilter<"professor"> | string
    leciona?: LecionaListRelationFilter
    titulo?: XOR<TituloScalarRelationFilter, tituloWhereInput>
  }

  export type professorOrderByWithRelationInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
    leciona?: lecionaOrderByRelationAggregateInput
    titulo?: tituloOrderByWithRelationInput
  }

  export type professorWhereUniqueInput = Prisma.AtLeast<{
    id_professor?: number
    AND?: professorWhereInput | professorWhereInput[]
    OR?: professorWhereInput[]
    NOT?: professorWhereInput | professorWhereInput[]
    id_titulo?: IntFilter<"professor"> | number
    tx_nome?: StringFilter<"professor"> | string
    tx_sexo?: StringFilter<"professor"> | string
    tx_estado_civil?: StringFilter<"professor"> | string
    dt_nascimento?: DateTimeFilter<"professor"> | Date | string
    tx_telefone?: StringFilter<"professor"> | string
    leciona?: LecionaListRelationFilter
    titulo?: XOR<TituloScalarRelationFilter, tituloWhereInput>
  }, "id_professor">

  export type professorOrderByWithAggregationInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
    _count?: professorCountOrderByAggregateInput
    _avg?: professorAvgOrderByAggregateInput
    _max?: professorMaxOrderByAggregateInput
    _min?: professorMinOrderByAggregateInput
    _sum?: professorSumOrderByAggregateInput
  }

  export type professorScalarWhereWithAggregatesInput = {
    AND?: professorScalarWhereWithAggregatesInput | professorScalarWhereWithAggregatesInput[]
    OR?: professorScalarWhereWithAggregatesInput[]
    NOT?: professorScalarWhereWithAggregatesInput | professorScalarWhereWithAggregatesInput[]
    id_professor?: IntWithAggregatesFilter<"professor"> | number
    id_titulo?: IntWithAggregatesFilter<"professor"> | number
    tx_nome?: StringWithAggregatesFilter<"professor"> | string
    tx_sexo?: StringWithAggregatesFilter<"professor"> | string
    tx_estado_civil?: StringWithAggregatesFilter<"professor"> | string
    dt_nascimento?: DateTimeWithAggregatesFilter<"professor"> | Date | string
    tx_telefone?: StringWithAggregatesFilter<"professor"> | string
  }

  export type tipo_cursoWhereInput = {
    AND?: tipo_cursoWhereInput | tipo_cursoWhereInput[]
    OR?: tipo_cursoWhereInput[]
    NOT?: tipo_cursoWhereInput | tipo_cursoWhereInput[]
    id_tipo_curso?: IntFilter<"tipo_curso"> | number
    tx_descricao?: StringFilter<"tipo_curso"> | string
    curso?: CursoListRelationFilter
  }

  export type tipo_cursoOrderByWithRelationInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    curso?: cursoOrderByRelationAggregateInput
  }

  export type tipo_cursoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_curso?: number
    tx_descricao?: string
    AND?: tipo_cursoWhereInput | tipo_cursoWhereInput[]
    OR?: tipo_cursoWhereInput[]
    NOT?: tipo_cursoWhereInput | tipo_cursoWhereInput[]
    curso?: CursoListRelationFilter
  }, "id_tipo_curso" | "tx_descricao">

  export type tipo_cursoOrderByWithAggregationInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    _count?: tipo_cursoCountOrderByAggregateInput
    _avg?: tipo_cursoAvgOrderByAggregateInput
    _max?: tipo_cursoMaxOrderByAggregateInput
    _min?: tipo_cursoMinOrderByAggregateInput
    _sum?: tipo_cursoSumOrderByAggregateInput
  }

  export type tipo_cursoScalarWhereWithAggregatesInput = {
    AND?: tipo_cursoScalarWhereWithAggregatesInput | tipo_cursoScalarWhereWithAggregatesInput[]
    OR?: tipo_cursoScalarWhereWithAggregatesInput[]
    NOT?: tipo_cursoScalarWhereWithAggregatesInput | tipo_cursoScalarWhereWithAggregatesInput[]
    id_tipo_curso?: IntWithAggregatesFilter<"tipo_curso"> | number
    tx_descricao?: StringWithAggregatesFilter<"tipo_curso"> | string
  }

  export type tipo_disciplinaWhereInput = {
    AND?: tipo_disciplinaWhereInput | tipo_disciplinaWhereInput[]
    OR?: tipo_disciplinaWhereInput[]
    NOT?: tipo_disciplinaWhereInput | tipo_disciplinaWhereInput[]
    id_tipo_disciplina?: IntFilter<"tipo_disciplina"> | number
    tx_descricao?: StringFilter<"tipo_disciplina"> | string
    disciplina?: DisciplinaListRelationFilter
  }

  export type tipo_disciplinaOrderByWithRelationInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
    disciplina?: disciplinaOrderByRelationAggregateInput
  }

  export type tipo_disciplinaWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_disciplina?: number
    tx_descricao?: string
    AND?: tipo_disciplinaWhereInput | tipo_disciplinaWhereInput[]
    OR?: tipo_disciplinaWhereInput[]
    NOT?: tipo_disciplinaWhereInput | tipo_disciplinaWhereInput[]
    disciplina?: DisciplinaListRelationFilter
  }, "id_tipo_disciplina" | "tx_descricao">

  export type tipo_disciplinaOrderByWithAggregationInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
    _count?: tipo_disciplinaCountOrderByAggregateInput
    _avg?: tipo_disciplinaAvgOrderByAggregateInput
    _max?: tipo_disciplinaMaxOrderByAggregateInput
    _min?: tipo_disciplinaMinOrderByAggregateInput
    _sum?: tipo_disciplinaSumOrderByAggregateInput
  }

  export type tipo_disciplinaScalarWhereWithAggregatesInput = {
    AND?: tipo_disciplinaScalarWhereWithAggregatesInput | tipo_disciplinaScalarWhereWithAggregatesInput[]
    OR?: tipo_disciplinaScalarWhereWithAggregatesInput[]
    NOT?: tipo_disciplinaScalarWhereWithAggregatesInput | tipo_disciplinaScalarWhereWithAggregatesInput[]
    id_tipo_disciplina?: IntWithAggregatesFilter<"tipo_disciplina"> | number
    tx_descricao?: StringWithAggregatesFilter<"tipo_disciplina"> | string
  }

  export type tituloWhereInput = {
    AND?: tituloWhereInput | tituloWhereInput[]
    OR?: tituloWhereInput[]
    NOT?: tituloWhereInput | tituloWhereInput[]
    id_titulo?: IntFilter<"titulo"> | number
    tx_descricao?: StringFilter<"titulo"> | string
    professor?: ProfessorListRelationFilter
  }

  export type tituloOrderByWithRelationInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
    professor?: professorOrderByRelationAggregateInput
  }

  export type tituloWhereUniqueInput = Prisma.AtLeast<{
    id_titulo?: number
    tx_descricao?: string
    AND?: tituloWhereInput | tituloWhereInput[]
    OR?: tituloWhereInput[]
    NOT?: tituloWhereInput | tituloWhereInput[]
    professor?: ProfessorListRelationFilter
  }, "id_titulo" | "tx_descricao">

  export type tituloOrderByWithAggregationInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
    _count?: tituloCountOrderByAggregateInput
    _avg?: tituloAvgOrderByAggregateInput
    _max?: tituloMaxOrderByAggregateInput
    _min?: tituloMinOrderByAggregateInput
    _sum?: tituloSumOrderByAggregateInput
  }

  export type tituloScalarWhereWithAggregatesInput = {
    AND?: tituloScalarWhereWithAggregatesInput | tituloScalarWhereWithAggregatesInput[]
    OR?: tituloScalarWhereWithAggregatesInput[]
    NOT?: tituloScalarWhereWithAggregatesInput | tituloScalarWhereWithAggregatesInput[]
    id_titulo?: IntWithAggregatesFilter<"titulo"> | number
    tx_descricao?: StringWithAggregatesFilter<"titulo"> | string
  }

  export type alunoCreateInput = {
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date | string
    cursa?: cursaCreateNestedManyWithoutAlunoInput
  }

  export type alunoUncheckedCreateInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date | string
    cursa?: cursaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type alunoUpdateInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cursa?: cursaUpdateManyWithoutAlunoNestedInput
  }

  export type alunoUncheckedUpdateInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cursa?: cursaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type alunoCreateManyInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date | string
  }

  export type alunoUpdateManyMutationInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alunoUncheckedUpdateManyInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursaCreateInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
    aluno: alunoCreateNestedOneWithoutCursaInput
    disciplina: disciplinaCreateNestedOneWithoutCursaInput
  }

  export type cursaUncheckedCreateInput = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type cursaUpdateInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    aluno?: alunoUpdateOneRequiredWithoutCursaNestedInput
    disciplina?: disciplinaUpdateOneRequiredWithoutCursaNestedInput
  }

  export type cursaUncheckedUpdateInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cursaCreateManyInput = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type cursaUpdateManyMutationInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cursaUncheckedUpdateManyInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cursoCreateInput = {
    tx_descricao: string
    instituicao: instituicaoCreateNestedOneWithoutCursoInput
    tipo_curso: tipo_cursoCreateNestedOneWithoutCursoInput
    disciplina?: disciplinaCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
    disciplina?: disciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: instituicaoUpdateOneRequiredWithoutCursoNestedInput
    tipo_curso?: tipo_cursoUpdateOneRequiredWithoutCursoNestedInput
    disciplina?: disciplinaUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplina?: disciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type cursoCreateManyInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type cursoUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type cursoUncheckedUpdateManyInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaCreateInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaCreateNestedManyWithoutDisciplinaInput
    curso?: cursoCreateNestedOneWithoutDisciplinaInput
    tipo_disciplina: tipo_disciplinaCreateNestedOneWithoutDisciplinaInput
    leciona?: lecionaCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateInput = {
    id_disciplina?: number
    id_curso?: number | null
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaUncheckedCreateNestedManyWithoutDisciplinaInput
    leciona?: lecionaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUpdateInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUpdateManyWithoutDisciplinaNestedInput
    curso?: cursoUpdateOneWithoutDisciplinaNestedInput
    tipo_disciplina?: tipo_disciplinaUpdateOneRequiredWithoutDisciplinaNestedInput
    leciona?: lecionaUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUncheckedUpdateManyWithoutDisciplinaNestedInput
    leciona?: lecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaCreateManyInput = {
    id_disciplina?: number
    id_curso?: number | null
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type disciplinaUpdateManyMutationInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type disciplinaUncheckedUpdateManyInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type instituicaoCreateInput = {
    tx_sigla: string
    tx_descricao: string
    curso?: cursoCreateNestedManyWithoutInstituicaoInput
  }

  export type instituicaoUncheckedCreateInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
    curso?: cursoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type instituicaoUpdateInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    curso?: cursoUpdateManyWithoutInstituicaoNestedInput
  }

  export type instituicaoUncheckedUpdateInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    curso?: cursoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type instituicaoCreateManyInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
  }

  export type instituicaoUpdateManyMutationInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type instituicaoUncheckedUpdateManyInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type lecionaCreateInput = {
    disciplina: disciplinaCreateNestedOneWithoutLecionaInput
    professor: professorCreateNestedOneWithoutLecionaInput
  }

  export type lecionaUncheckedCreateInput = {
    id_professor: number
    id_disciplina: number
  }

  export type lecionaUpdateInput = {
    disciplina?: disciplinaUpdateOneRequiredWithoutLecionaNestedInput
    professor?: professorUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type lecionaUncheckedUpdateInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type lecionaCreateManyInput = {
    id_professor: number
    id_disciplina: number
  }

  export type lecionaUpdateManyMutationInput = {

  }

  export type lecionaUncheckedUpdateManyInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type professorCreateInput = {
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: lecionaCreateNestedManyWithoutProfessorInput
    titulo: tituloCreateNestedOneWithoutProfessorInput
  }

  export type professorUncheckedCreateInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: lecionaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type professorUpdateInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: lecionaUpdateManyWithoutProfessorNestedInput
    titulo?: tituloUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: lecionaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type professorCreateManyInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type professorUpdateManyMutationInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type professorUncheckedUpdateManyInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_cursoCreateInput = {
    tx_descricao: string
    curso?: cursoCreateNestedManyWithoutTipo_cursoInput
  }

  export type tipo_cursoUncheckedCreateInput = {
    id_tipo_curso?: number
    tx_descricao: string
    curso?: cursoUncheckedCreateNestedManyWithoutTipo_cursoInput
  }

  export type tipo_cursoUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    curso?: cursoUpdateManyWithoutTipo_cursoNestedInput
  }

  export type tipo_cursoUncheckedUpdateInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    curso?: cursoUncheckedUpdateManyWithoutTipo_cursoNestedInput
  }

  export type tipo_cursoCreateManyInput = {
    id_tipo_curso?: number
    tx_descricao: string
  }

  export type tipo_cursoUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_cursoUncheckedUpdateManyInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_disciplinaCreateInput = {
    tx_descricao: string
    disciplina?: disciplinaCreateNestedManyWithoutTipo_disciplinaInput
  }

  export type tipo_disciplinaUncheckedCreateInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
    disciplina?: disciplinaUncheckedCreateNestedManyWithoutTipo_disciplinaInput
  }

  export type tipo_disciplinaUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplina?: disciplinaUpdateManyWithoutTipo_disciplinaNestedInput
  }

  export type tipo_disciplinaUncheckedUpdateInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplina?: disciplinaUncheckedUpdateManyWithoutTipo_disciplinaNestedInput
  }

  export type tipo_disciplinaCreateManyInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
  }

  export type tipo_disciplinaUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_disciplinaUncheckedUpdateManyInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tituloCreateInput = {
    tx_descricao: string
    professor?: professorCreateNestedManyWithoutTituloInput
  }

  export type tituloUncheckedCreateInput = {
    id_titulo?: number
    tx_descricao: string
    professor?: professorUncheckedCreateNestedManyWithoutTituloInput
  }

  export type tituloUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    professor?: professorUpdateManyWithoutTituloNestedInput
  }

  export type tituloUncheckedUpdateInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    professor?: professorUncheckedUpdateManyWithoutTituloNestedInput
  }

  export type tituloCreateManyInput = {
    id_titulo?: number
    tx_descricao: string
  }

  export type tituloUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tituloUncheckedUpdateManyInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
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

  export type CursaListRelationFilter = {
    every?: cursaWhereInput
    some?: cursaWhereInput
    none?: cursaWhereInput
  }

  export type cursaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type alunoCountOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type alunoAvgOrderByAggregateInput = {
    id_aluno?: SortOrder
  }

  export type alunoMaxOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type alunoMinOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type alunoSumOrderByAggregateInput = {
    id_aluno?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlunoScalarRelationFilter = {
    is?: alunoWhereInput
    isNot?: alunoWhereInput
  }

  export type DisciplinaScalarRelationFilter = {
    is?: disciplinaWhereInput
    isNot?: disciplinaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cursaId_alunoId_disciplinaIn_anoIn_semestreCompoundUniqueInput = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
  }

  export type cursaCountOrderByAggregateInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nr_nota1?: SortOrder
    nr_nota2?: SortOrder
    nr_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type cursaAvgOrderByAggregateInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nr_nota1?: SortOrder
    nr_nota2?: SortOrder
    nr_nota3?: SortOrder
  }

  export type cursaMaxOrderByAggregateInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nr_nota1?: SortOrder
    nr_nota2?: SortOrder
    nr_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type cursaMinOrderByAggregateInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nr_nota1?: SortOrder
    nr_nota2?: SortOrder
    nr_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type cursaSumOrderByAggregateInput = {
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nr_nota1?: SortOrder
    nr_nota2?: SortOrder
    nr_nota3?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InstituicaoScalarRelationFilter = {
    is?: instituicaoWhereInput
    isNot?: instituicaoWhereInput
  }

  export type Tipo_cursoScalarRelationFilter = {
    is?: tipo_cursoWhereInput
    isNot?: tipo_cursoWhereInput
  }

  export type DisciplinaListRelationFilter = {
    every?: disciplinaWhereInput
    some?: disciplinaWhereInput
    none?: disciplinaWhereInput
  }

  export type disciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursoId_instituicaoId_tipo_cursoTx_descricaoCompoundUniqueInput = {
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type cursoCountOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type cursoAvgOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
  }

  export type cursoMaxOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type cursoMinOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type cursoSumOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
  }

  export type CursoNullableScalarRelationFilter = {
    is?: cursoWhereInput | null
    isNot?: cursoWhereInput | null
  }

  export type Tipo_disciplinaScalarRelationFilter = {
    is?: tipo_disciplinaWhereInput
    isNot?: tipo_disciplinaWhereInput
  }

  export type LecionaListRelationFilter = {
    every?: lecionaWhereInput
    some?: lecionaWhereInput
    none?: lecionaWhereInput
  }

  export type lecionaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type disciplinaCountOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type disciplinaAvgOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type disciplinaMaxOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type disciplinaMinOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type disciplinaSumOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type CursoListRelationFilter = {
    every?: cursoWhereInput
    some?: cursoWhereInput
    none?: cursoWhereInput
  }

  export type cursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instituicaoCountOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type instituicaoAvgOrderByAggregateInput = {
    id_instituicao?: SortOrder
  }

  export type instituicaoMaxOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type instituicaoMinOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type instituicaoSumOrderByAggregateInput = {
    id_instituicao?: SortOrder
  }

  export type ProfessorScalarRelationFilter = {
    is?: professorWhereInput
    isNot?: professorWhereInput
  }

  export type lecionaId_professorId_disciplinaCompoundUniqueInput = {
    id_professor: number
    id_disciplina: number
  }

  export type lecionaCountOrderByAggregateInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type lecionaAvgOrderByAggregateInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type lecionaMaxOrderByAggregateInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type lecionaMinOrderByAggregateInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type lecionaSumOrderByAggregateInput = {
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type TituloScalarRelationFilter = {
    is?: tituloWhereInput
    isNot?: tituloWhereInput
  }

  export type professorCountOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type professorAvgOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
  }

  export type professorMaxOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type professorMinOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type professorSumOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
  }

  export type tipo_cursoCountOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_cursoAvgOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
  }

  export type tipo_cursoMaxOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_cursoMinOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_cursoSumOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
  }

  export type tipo_disciplinaCountOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_disciplinaAvgOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
  }

  export type tipo_disciplinaMaxOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_disciplinaMinOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tipo_disciplinaSumOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
  }

  export type ProfessorListRelationFilter = {
    every?: professorWhereInput
    some?: professorWhereInput
    none?: professorWhereInput
  }

  export type professorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tituloCountOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tituloAvgOrderByAggregateInput = {
    id_titulo?: SortOrder
  }

  export type tituloMaxOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tituloMinOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type tituloSumOrderByAggregateInput = {
    id_titulo?: SortOrder
  }

  export type cursaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput> | cursaCreateWithoutAlunoInput[] | cursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutAlunoInput | cursaCreateOrConnectWithoutAlunoInput[]
    createMany?: cursaCreateManyAlunoInputEnvelope
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
  }

  export type cursaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput> | cursaCreateWithoutAlunoInput[] | cursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutAlunoInput | cursaCreateOrConnectWithoutAlunoInput[]
    createMany?: cursaCreateManyAlunoInputEnvelope
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cursaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput> | cursaCreateWithoutAlunoInput[] | cursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutAlunoInput | cursaCreateOrConnectWithoutAlunoInput[]
    upsert?: cursaUpsertWithWhereUniqueWithoutAlunoInput | cursaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: cursaCreateManyAlunoInputEnvelope
    set?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    disconnect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    delete?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    update?: cursaUpdateWithWhereUniqueWithoutAlunoInput | cursaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: cursaUpdateManyWithWhereWithoutAlunoInput | cursaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: cursaScalarWhereInput | cursaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cursaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput> | cursaCreateWithoutAlunoInput[] | cursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutAlunoInput | cursaCreateOrConnectWithoutAlunoInput[]
    upsert?: cursaUpsertWithWhereUniqueWithoutAlunoInput | cursaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: cursaCreateManyAlunoInputEnvelope
    set?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    disconnect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    delete?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    update?: cursaUpdateWithWhereUniqueWithoutAlunoInput | cursaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: cursaUpdateManyWithWhereWithoutAlunoInput | cursaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: cursaScalarWhereInput | cursaScalarWhereInput[]
  }

  export type alunoCreateNestedOneWithoutCursaInput = {
    create?: XOR<alunoCreateWithoutCursaInput, alunoUncheckedCreateWithoutCursaInput>
    connectOrCreate?: alunoCreateOrConnectWithoutCursaInput
    connect?: alunoWhereUniqueInput
  }

  export type disciplinaCreateNestedOneWithoutCursaInput = {
    create?: XOR<disciplinaCreateWithoutCursaInput, disciplinaUncheckedCreateWithoutCursaInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursaInput
    connect?: disciplinaWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type alunoUpdateOneRequiredWithoutCursaNestedInput = {
    create?: XOR<alunoCreateWithoutCursaInput, alunoUncheckedCreateWithoutCursaInput>
    connectOrCreate?: alunoCreateOrConnectWithoutCursaInput
    upsert?: alunoUpsertWithoutCursaInput
    connect?: alunoWhereUniqueInput
    update?: XOR<XOR<alunoUpdateToOneWithWhereWithoutCursaInput, alunoUpdateWithoutCursaInput>, alunoUncheckedUpdateWithoutCursaInput>
  }

  export type disciplinaUpdateOneRequiredWithoutCursaNestedInput = {
    create?: XOR<disciplinaCreateWithoutCursaInput, disciplinaUncheckedCreateWithoutCursaInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursaInput
    upsert?: disciplinaUpsertWithoutCursaInput
    connect?: disciplinaWhereUniqueInput
    update?: XOR<XOR<disciplinaUpdateToOneWithWhereWithoutCursaInput, disciplinaUpdateWithoutCursaInput>, disciplinaUncheckedUpdateWithoutCursaInput>
  }

  export type instituicaoCreateNestedOneWithoutCursoInput = {
    create?: XOR<instituicaoCreateWithoutCursoInput, instituicaoUncheckedCreateWithoutCursoInput>
    connectOrCreate?: instituicaoCreateOrConnectWithoutCursoInput
    connect?: instituicaoWhereUniqueInput
  }

  export type tipo_cursoCreateNestedOneWithoutCursoInput = {
    create?: XOR<tipo_cursoCreateWithoutCursoInput, tipo_cursoUncheckedCreateWithoutCursoInput>
    connectOrCreate?: tipo_cursoCreateOrConnectWithoutCursoInput
    connect?: tipo_cursoWhereUniqueInput
  }

  export type disciplinaCreateNestedManyWithoutCursoInput = {
    create?: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput> | disciplinaCreateWithoutCursoInput[] | disciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursoInput | disciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: disciplinaCreateManyCursoInputEnvelope
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
  }

  export type disciplinaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput> | disciplinaCreateWithoutCursoInput[] | disciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursoInput | disciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: disciplinaCreateManyCursoInputEnvelope
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
  }

  export type instituicaoUpdateOneRequiredWithoutCursoNestedInput = {
    create?: XOR<instituicaoCreateWithoutCursoInput, instituicaoUncheckedCreateWithoutCursoInput>
    connectOrCreate?: instituicaoCreateOrConnectWithoutCursoInput
    upsert?: instituicaoUpsertWithoutCursoInput
    connect?: instituicaoWhereUniqueInput
    update?: XOR<XOR<instituicaoUpdateToOneWithWhereWithoutCursoInput, instituicaoUpdateWithoutCursoInput>, instituicaoUncheckedUpdateWithoutCursoInput>
  }

  export type tipo_cursoUpdateOneRequiredWithoutCursoNestedInput = {
    create?: XOR<tipo_cursoCreateWithoutCursoInput, tipo_cursoUncheckedCreateWithoutCursoInput>
    connectOrCreate?: tipo_cursoCreateOrConnectWithoutCursoInput
    upsert?: tipo_cursoUpsertWithoutCursoInput
    connect?: tipo_cursoWhereUniqueInput
    update?: XOR<XOR<tipo_cursoUpdateToOneWithWhereWithoutCursoInput, tipo_cursoUpdateWithoutCursoInput>, tipo_cursoUncheckedUpdateWithoutCursoInput>
  }

  export type disciplinaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput> | disciplinaCreateWithoutCursoInput[] | disciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursoInput | disciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: disciplinaUpsertWithWhereUniqueWithoutCursoInput | disciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: disciplinaCreateManyCursoInputEnvelope
    set?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    disconnect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    delete?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    update?: disciplinaUpdateWithWhereUniqueWithoutCursoInput | disciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: disciplinaUpdateManyWithWhereWithoutCursoInput | disciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
  }

  export type disciplinaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput> | disciplinaCreateWithoutCursoInput[] | disciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutCursoInput | disciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: disciplinaUpsertWithWhereUniqueWithoutCursoInput | disciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: disciplinaCreateManyCursoInputEnvelope
    set?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    disconnect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    delete?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    update?: disciplinaUpdateWithWhereUniqueWithoutCursoInput | disciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: disciplinaUpdateManyWithWhereWithoutCursoInput | disciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
  }

  export type cursaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput> | cursaCreateWithoutDisciplinaInput[] | cursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutDisciplinaInput | cursaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: cursaCreateManyDisciplinaInputEnvelope
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
  }

  export type cursoCreateNestedOneWithoutDisciplinaInput = {
    create?: XOR<cursoCreateWithoutDisciplinaInput, cursoUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: cursoCreateOrConnectWithoutDisciplinaInput
    connect?: cursoWhereUniqueInput
  }

  export type tipo_disciplinaCreateNestedOneWithoutDisciplinaInput = {
    create?: XOR<tipo_disciplinaCreateWithoutDisciplinaInput, tipo_disciplinaUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: tipo_disciplinaCreateOrConnectWithoutDisciplinaInput
    connect?: tipo_disciplinaWhereUniqueInput
  }

  export type lecionaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput> | lecionaCreateWithoutDisciplinaInput[] | lecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutDisciplinaInput | lecionaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: lecionaCreateManyDisciplinaInputEnvelope
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
  }

  export type cursaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput> | cursaCreateWithoutDisciplinaInput[] | cursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutDisciplinaInput | cursaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: cursaCreateManyDisciplinaInputEnvelope
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
  }

  export type lecionaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput> | lecionaCreateWithoutDisciplinaInput[] | lecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutDisciplinaInput | lecionaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: lecionaCreateManyDisciplinaInputEnvelope
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
  }

  export type cursaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput> | cursaCreateWithoutDisciplinaInput[] | cursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutDisciplinaInput | cursaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: cursaUpsertWithWhereUniqueWithoutDisciplinaInput | cursaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: cursaCreateManyDisciplinaInputEnvelope
    set?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    disconnect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    delete?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    update?: cursaUpdateWithWhereUniqueWithoutDisciplinaInput | cursaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: cursaUpdateManyWithWhereWithoutDisciplinaInput | cursaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: cursaScalarWhereInput | cursaScalarWhereInput[]
  }

  export type cursoUpdateOneWithoutDisciplinaNestedInput = {
    create?: XOR<cursoCreateWithoutDisciplinaInput, cursoUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: cursoCreateOrConnectWithoutDisciplinaInput
    upsert?: cursoUpsertWithoutDisciplinaInput
    disconnect?: cursoWhereInput | boolean
    delete?: cursoWhereInput | boolean
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutDisciplinaInput, cursoUpdateWithoutDisciplinaInput>, cursoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type tipo_disciplinaUpdateOneRequiredWithoutDisciplinaNestedInput = {
    create?: XOR<tipo_disciplinaCreateWithoutDisciplinaInput, tipo_disciplinaUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: tipo_disciplinaCreateOrConnectWithoutDisciplinaInput
    upsert?: tipo_disciplinaUpsertWithoutDisciplinaInput
    connect?: tipo_disciplinaWhereUniqueInput
    update?: XOR<XOR<tipo_disciplinaUpdateToOneWithWhereWithoutDisciplinaInput, tipo_disciplinaUpdateWithoutDisciplinaInput>, tipo_disciplinaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type lecionaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput> | lecionaCreateWithoutDisciplinaInput[] | lecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutDisciplinaInput | lecionaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: lecionaUpsertWithWhereUniqueWithoutDisciplinaInput | lecionaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: lecionaCreateManyDisciplinaInputEnvelope
    set?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    disconnect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    delete?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    update?: lecionaUpdateWithWhereUniqueWithoutDisciplinaInput | lecionaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: lecionaUpdateManyWithWhereWithoutDisciplinaInput | lecionaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
  }

  export type cursaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput> | cursaCreateWithoutDisciplinaInput[] | cursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: cursaCreateOrConnectWithoutDisciplinaInput | cursaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: cursaUpsertWithWhereUniqueWithoutDisciplinaInput | cursaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: cursaCreateManyDisciplinaInputEnvelope
    set?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    disconnect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    delete?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    connect?: cursaWhereUniqueInput | cursaWhereUniqueInput[]
    update?: cursaUpdateWithWhereUniqueWithoutDisciplinaInput | cursaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: cursaUpdateManyWithWhereWithoutDisciplinaInput | cursaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: cursaScalarWhereInput | cursaScalarWhereInput[]
  }

  export type lecionaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput> | lecionaCreateWithoutDisciplinaInput[] | lecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutDisciplinaInput | lecionaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: lecionaUpsertWithWhereUniqueWithoutDisciplinaInput | lecionaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: lecionaCreateManyDisciplinaInputEnvelope
    set?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    disconnect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    delete?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    update?: lecionaUpdateWithWhereUniqueWithoutDisciplinaInput | lecionaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: lecionaUpdateManyWithWhereWithoutDisciplinaInput | lecionaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
  }

  export type cursoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput> | cursoCreateWithoutInstituicaoInput[] | cursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutInstituicaoInput | cursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: cursoCreateManyInstituicaoInputEnvelope
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
  }

  export type cursoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput> | cursoCreateWithoutInstituicaoInput[] | cursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutInstituicaoInput | cursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: cursoCreateManyInstituicaoInputEnvelope
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
  }

  export type cursoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput> | cursoCreateWithoutInstituicaoInput[] | cursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutInstituicaoInput | cursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: cursoUpsertWithWhereUniqueWithoutInstituicaoInput | cursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: cursoCreateManyInstituicaoInputEnvelope
    set?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    disconnect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    delete?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    update?: cursoUpdateWithWhereUniqueWithoutInstituicaoInput | cursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: cursoUpdateManyWithWhereWithoutInstituicaoInput | cursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: cursoScalarWhereInput | cursoScalarWhereInput[]
  }

  export type cursoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput> | cursoCreateWithoutInstituicaoInput[] | cursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutInstituicaoInput | cursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: cursoUpsertWithWhereUniqueWithoutInstituicaoInput | cursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: cursoCreateManyInstituicaoInputEnvelope
    set?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    disconnect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    delete?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    update?: cursoUpdateWithWhereUniqueWithoutInstituicaoInput | cursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: cursoUpdateManyWithWhereWithoutInstituicaoInput | cursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: cursoScalarWhereInput | cursoScalarWhereInput[]
  }

  export type disciplinaCreateNestedOneWithoutLecionaInput = {
    create?: XOR<disciplinaCreateWithoutLecionaInput, disciplinaUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutLecionaInput
    connect?: disciplinaWhereUniqueInput
  }

  export type professorCreateNestedOneWithoutLecionaInput = {
    create?: XOR<professorCreateWithoutLecionaInput, professorUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: professorCreateOrConnectWithoutLecionaInput
    connect?: professorWhereUniqueInput
  }

  export type disciplinaUpdateOneRequiredWithoutLecionaNestedInput = {
    create?: XOR<disciplinaCreateWithoutLecionaInput, disciplinaUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutLecionaInput
    upsert?: disciplinaUpsertWithoutLecionaInput
    connect?: disciplinaWhereUniqueInput
    update?: XOR<XOR<disciplinaUpdateToOneWithWhereWithoutLecionaInput, disciplinaUpdateWithoutLecionaInput>, disciplinaUncheckedUpdateWithoutLecionaInput>
  }

  export type professorUpdateOneRequiredWithoutLecionaNestedInput = {
    create?: XOR<professorCreateWithoutLecionaInput, professorUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: professorCreateOrConnectWithoutLecionaInput
    upsert?: professorUpsertWithoutLecionaInput
    connect?: professorWhereUniqueInput
    update?: XOR<XOR<professorUpdateToOneWithWhereWithoutLecionaInput, professorUpdateWithoutLecionaInput>, professorUncheckedUpdateWithoutLecionaInput>
  }

  export type lecionaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput> | lecionaCreateWithoutProfessorInput[] | lecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutProfessorInput | lecionaCreateOrConnectWithoutProfessorInput[]
    createMany?: lecionaCreateManyProfessorInputEnvelope
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
  }

  export type tituloCreateNestedOneWithoutProfessorInput = {
    create?: XOR<tituloCreateWithoutProfessorInput, tituloUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: tituloCreateOrConnectWithoutProfessorInput
    connect?: tituloWhereUniqueInput
  }

  export type lecionaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput> | lecionaCreateWithoutProfessorInput[] | lecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutProfessorInput | lecionaCreateOrConnectWithoutProfessorInput[]
    createMany?: lecionaCreateManyProfessorInputEnvelope
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
  }

  export type lecionaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput> | lecionaCreateWithoutProfessorInput[] | lecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutProfessorInput | lecionaCreateOrConnectWithoutProfessorInput[]
    upsert?: lecionaUpsertWithWhereUniqueWithoutProfessorInput | lecionaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: lecionaCreateManyProfessorInputEnvelope
    set?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    disconnect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    delete?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    update?: lecionaUpdateWithWhereUniqueWithoutProfessorInput | lecionaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: lecionaUpdateManyWithWhereWithoutProfessorInput | lecionaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
  }

  export type tituloUpdateOneRequiredWithoutProfessorNestedInput = {
    create?: XOR<tituloCreateWithoutProfessorInput, tituloUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: tituloCreateOrConnectWithoutProfessorInput
    upsert?: tituloUpsertWithoutProfessorInput
    connect?: tituloWhereUniqueInput
    update?: XOR<XOR<tituloUpdateToOneWithWhereWithoutProfessorInput, tituloUpdateWithoutProfessorInput>, tituloUncheckedUpdateWithoutProfessorInput>
  }

  export type lecionaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput> | lecionaCreateWithoutProfessorInput[] | lecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: lecionaCreateOrConnectWithoutProfessorInput | lecionaCreateOrConnectWithoutProfessorInput[]
    upsert?: lecionaUpsertWithWhereUniqueWithoutProfessorInput | lecionaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: lecionaCreateManyProfessorInputEnvelope
    set?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    disconnect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    delete?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    connect?: lecionaWhereUniqueInput | lecionaWhereUniqueInput[]
    update?: lecionaUpdateWithWhereUniqueWithoutProfessorInput | lecionaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: lecionaUpdateManyWithWhereWithoutProfessorInput | lecionaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
  }

  export type cursoCreateNestedManyWithoutTipo_cursoInput = {
    create?: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput> | cursoCreateWithoutTipo_cursoInput[] | cursoUncheckedCreateWithoutTipo_cursoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutTipo_cursoInput | cursoCreateOrConnectWithoutTipo_cursoInput[]
    createMany?: cursoCreateManyTipo_cursoInputEnvelope
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
  }

  export type cursoUncheckedCreateNestedManyWithoutTipo_cursoInput = {
    create?: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput> | cursoCreateWithoutTipo_cursoInput[] | cursoUncheckedCreateWithoutTipo_cursoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutTipo_cursoInput | cursoCreateOrConnectWithoutTipo_cursoInput[]
    createMany?: cursoCreateManyTipo_cursoInputEnvelope
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
  }

  export type cursoUpdateManyWithoutTipo_cursoNestedInput = {
    create?: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput> | cursoCreateWithoutTipo_cursoInput[] | cursoUncheckedCreateWithoutTipo_cursoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutTipo_cursoInput | cursoCreateOrConnectWithoutTipo_cursoInput[]
    upsert?: cursoUpsertWithWhereUniqueWithoutTipo_cursoInput | cursoUpsertWithWhereUniqueWithoutTipo_cursoInput[]
    createMany?: cursoCreateManyTipo_cursoInputEnvelope
    set?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    disconnect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    delete?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    update?: cursoUpdateWithWhereUniqueWithoutTipo_cursoInput | cursoUpdateWithWhereUniqueWithoutTipo_cursoInput[]
    updateMany?: cursoUpdateManyWithWhereWithoutTipo_cursoInput | cursoUpdateManyWithWhereWithoutTipo_cursoInput[]
    deleteMany?: cursoScalarWhereInput | cursoScalarWhereInput[]
  }

  export type cursoUncheckedUpdateManyWithoutTipo_cursoNestedInput = {
    create?: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput> | cursoCreateWithoutTipo_cursoInput[] | cursoUncheckedCreateWithoutTipo_cursoInput[]
    connectOrCreate?: cursoCreateOrConnectWithoutTipo_cursoInput | cursoCreateOrConnectWithoutTipo_cursoInput[]
    upsert?: cursoUpsertWithWhereUniqueWithoutTipo_cursoInput | cursoUpsertWithWhereUniqueWithoutTipo_cursoInput[]
    createMany?: cursoCreateManyTipo_cursoInputEnvelope
    set?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    disconnect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    delete?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    connect?: cursoWhereUniqueInput | cursoWhereUniqueInput[]
    update?: cursoUpdateWithWhereUniqueWithoutTipo_cursoInput | cursoUpdateWithWhereUniqueWithoutTipo_cursoInput[]
    updateMany?: cursoUpdateManyWithWhereWithoutTipo_cursoInput | cursoUpdateManyWithWhereWithoutTipo_cursoInput[]
    deleteMany?: cursoScalarWhereInput | cursoScalarWhereInput[]
  }

  export type disciplinaCreateNestedManyWithoutTipo_disciplinaInput = {
    create?: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput> | disciplinaCreateWithoutTipo_disciplinaInput[] | disciplinaUncheckedCreateWithoutTipo_disciplinaInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutTipo_disciplinaInput | disciplinaCreateOrConnectWithoutTipo_disciplinaInput[]
    createMany?: disciplinaCreateManyTipo_disciplinaInputEnvelope
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
  }

  export type disciplinaUncheckedCreateNestedManyWithoutTipo_disciplinaInput = {
    create?: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput> | disciplinaCreateWithoutTipo_disciplinaInput[] | disciplinaUncheckedCreateWithoutTipo_disciplinaInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutTipo_disciplinaInput | disciplinaCreateOrConnectWithoutTipo_disciplinaInput[]
    createMany?: disciplinaCreateManyTipo_disciplinaInputEnvelope
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
  }

  export type disciplinaUpdateManyWithoutTipo_disciplinaNestedInput = {
    create?: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput> | disciplinaCreateWithoutTipo_disciplinaInput[] | disciplinaUncheckedCreateWithoutTipo_disciplinaInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutTipo_disciplinaInput | disciplinaCreateOrConnectWithoutTipo_disciplinaInput[]
    upsert?: disciplinaUpsertWithWhereUniqueWithoutTipo_disciplinaInput | disciplinaUpsertWithWhereUniqueWithoutTipo_disciplinaInput[]
    createMany?: disciplinaCreateManyTipo_disciplinaInputEnvelope
    set?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    disconnect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    delete?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    update?: disciplinaUpdateWithWhereUniqueWithoutTipo_disciplinaInput | disciplinaUpdateWithWhereUniqueWithoutTipo_disciplinaInput[]
    updateMany?: disciplinaUpdateManyWithWhereWithoutTipo_disciplinaInput | disciplinaUpdateManyWithWhereWithoutTipo_disciplinaInput[]
    deleteMany?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
  }

  export type disciplinaUncheckedUpdateManyWithoutTipo_disciplinaNestedInput = {
    create?: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput> | disciplinaCreateWithoutTipo_disciplinaInput[] | disciplinaUncheckedCreateWithoutTipo_disciplinaInput[]
    connectOrCreate?: disciplinaCreateOrConnectWithoutTipo_disciplinaInput | disciplinaCreateOrConnectWithoutTipo_disciplinaInput[]
    upsert?: disciplinaUpsertWithWhereUniqueWithoutTipo_disciplinaInput | disciplinaUpsertWithWhereUniqueWithoutTipo_disciplinaInput[]
    createMany?: disciplinaCreateManyTipo_disciplinaInputEnvelope
    set?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    disconnect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    delete?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    connect?: disciplinaWhereUniqueInput | disciplinaWhereUniqueInput[]
    update?: disciplinaUpdateWithWhereUniqueWithoutTipo_disciplinaInput | disciplinaUpdateWithWhereUniqueWithoutTipo_disciplinaInput[]
    updateMany?: disciplinaUpdateManyWithWhereWithoutTipo_disciplinaInput | disciplinaUpdateManyWithWhereWithoutTipo_disciplinaInput[]
    deleteMany?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
  }

  export type professorCreateNestedManyWithoutTituloInput = {
    create?: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput> | professorCreateWithoutTituloInput[] | professorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: professorCreateOrConnectWithoutTituloInput | professorCreateOrConnectWithoutTituloInput[]
    createMany?: professorCreateManyTituloInputEnvelope
    connect?: professorWhereUniqueInput | professorWhereUniqueInput[]
  }

  export type professorUncheckedCreateNestedManyWithoutTituloInput = {
    create?: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput> | professorCreateWithoutTituloInput[] | professorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: professorCreateOrConnectWithoutTituloInput | professorCreateOrConnectWithoutTituloInput[]
    createMany?: professorCreateManyTituloInputEnvelope
    connect?: professorWhereUniqueInput | professorWhereUniqueInput[]
  }

  export type professorUpdateManyWithoutTituloNestedInput = {
    create?: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput> | professorCreateWithoutTituloInput[] | professorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: professorCreateOrConnectWithoutTituloInput | professorCreateOrConnectWithoutTituloInput[]
    upsert?: professorUpsertWithWhereUniqueWithoutTituloInput | professorUpsertWithWhereUniqueWithoutTituloInput[]
    createMany?: professorCreateManyTituloInputEnvelope
    set?: professorWhereUniqueInput | professorWhereUniqueInput[]
    disconnect?: professorWhereUniqueInput | professorWhereUniqueInput[]
    delete?: professorWhereUniqueInput | professorWhereUniqueInput[]
    connect?: professorWhereUniqueInput | professorWhereUniqueInput[]
    update?: professorUpdateWithWhereUniqueWithoutTituloInput | professorUpdateWithWhereUniqueWithoutTituloInput[]
    updateMany?: professorUpdateManyWithWhereWithoutTituloInput | professorUpdateManyWithWhereWithoutTituloInput[]
    deleteMany?: professorScalarWhereInput | professorScalarWhereInput[]
  }

  export type professorUncheckedUpdateManyWithoutTituloNestedInput = {
    create?: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput> | professorCreateWithoutTituloInput[] | professorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: professorCreateOrConnectWithoutTituloInput | professorCreateOrConnectWithoutTituloInput[]
    upsert?: professorUpsertWithWhereUniqueWithoutTituloInput | professorUpsertWithWhereUniqueWithoutTituloInput[]
    createMany?: professorCreateManyTituloInputEnvelope
    set?: professorWhereUniqueInput | professorWhereUniqueInput[]
    disconnect?: professorWhereUniqueInput | professorWhereUniqueInput[]
    delete?: professorWhereUniqueInput | professorWhereUniqueInput[]
    connect?: professorWhereUniqueInput | professorWhereUniqueInput[]
    update?: professorUpdateWithWhereUniqueWithoutTituloInput | professorUpdateWithWhereUniqueWithoutTituloInput[]
    updateMany?: professorUpdateManyWithWhereWithoutTituloInput | professorUpdateManyWithWhereWithoutTituloInput[]
    deleteMany?: professorScalarWhereInput | professorScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type cursaCreateWithoutAlunoInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
    disciplina: disciplinaCreateNestedOneWithoutCursaInput
  }

  export type cursaUncheckedCreateWithoutAlunoInput = {
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type cursaCreateOrConnectWithoutAlunoInput = {
    where: cursaWhereUniqueInput
    create: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput>
  }

  export type cursaCreateManyAlunoInputEnvelope = {
    data: cursaCreateManyAlunoInput | cursaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type cursaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: cursaWhereUniqueInput
    update: XOR<cursaUpdateWithoutAlunoInput, cursaUncheckedUpdateWithoutAlunoInput>
    create: XOR<cursaCreateWithoutAlunoInput, cursaUncheckedCreateWithoutAlunoInput>
  }

  export type cursaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: cursaWhereUniqueInput
    data: XOR<cursaUpdateWithoutAlunoInput, cursaUncheckedUpdateWithoutAlunoInput>
  }

  export type cursaUpdateManyWithWhereWithoutAlunoInput = {
    where: cursaScalarWhereInput
    data: XOR<cursaUpdateManyMutationInput, cursaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type cursaScalarWhereInput = {
    AND?: cursaScalarWhereInput | cursaScalarWhereInput[]
    OR?: cursaScalarWhereInput[]
    NOT?: cursaScalarWhereInput | cursaScalarWhereInput[]
    id_aluno?: IntFilter<"cursa"> | number
    id_disciplina?: IntFilter<"cursa"> | number
    in_ano?: IntFilter<"cursa"> | number
    in_semestre?: IntFilter<"cursa"> | number
    in_faltas?: IntNullableFilter<"cursa"> | number | null
    nr_nota1?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: DecimalNullableFilter<"cursa"> | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFilter<"cursa"> | boolean
  }

  export type alunoCreateWithoutCursaInput = {
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date | string
  }

  export type alunoUncheckedCreateWithoutCursaInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: string
    dt_nascimento: Date | string
  }

  export type alunoCreateOrConnectWithoutCursaInput = {
    where: alunoWhereUniqueInput
    create: XOR<alunoCreateWithoutCursaInput, alunoUncheckedCreateWithoutCursaInput>
  }

  export type disciplinaCreateWithoutCursaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    curso?: cursoCreateNestedOneWithoutDisciplinaInput
    tipo_disciplina: tipo_disciplinaCreateNestedOneWithoutDisciplinaInput
    leciona?: lecionaCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateWithoutCursaInput = {
    id_disciplina?: number
    id_curso?: number | null
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    leciona?: lecionaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaCreateOrConnectWithoutCursaInput = {
    where: disciplinaWhereUniqueInput
    create: XOR<disciplinaCreateWithoutCursaInput, disciplinaUncheckedCreateWithoutCursaInput>
  }

  export type alunoUpsertWithoutCursaInput = {
    update: XOR<alunoUpdateWithoutCursaInput, alunoUncheckedUpdateWithoutCursaInput>
    create: XOR<alunoCreateWithoutCursaInput, alunoUncheckedCreateWithoutCursaInput>
    where?: alunoWhereInput
  }

  export type alunoUpdateToOneWithWhereWithoutCursaInput = {
    where?: alunoWhereInput
    data: XOR<alunoUpdateWithoutCursaInput, alunoUncheckedUpdateWithoutCursaInput>
  }

  export type alunoUpdateWithoutCursaInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alunoUncheckedUpdateWithoutCursaInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type disciplinaUpsertWithoutCursaInput = {
    update: XOR<disciplinaUpdateWithoutCursaInput, disciplinaUncheckedUpdateWithoutCursaInput>
    create: XOR<disciplinaCreateWithoutCursaInput, disciplinaUncheckedCreateWithoutCursaInput>
    where?: disciplinaWhereInput
  }

  export type disciplinaUpdateToOneWithWhereWithoutCursaInput = {
    where?: disciplinaWhereInput
    data: XOR<disciplinaUpdateWithoutCursaInput, disciplinaUncheckedUpdateWithoutCursaInput>
  }

  export type disciplinaUpdateWithoutCursaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    curso?: cursoUpdateOneWithoutDisciplinaNestedInput
    tipo_disciplina?: tipo_disciplinaUpdateOneRequiredWithoutDisciplinaNestedInput
    leciona?: lecionaUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateWithoutCursaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    leciona?: lecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type instituicaoCreateWithoutCursoInput = {
    tx_sigla: string
    tx_descricao: string
  }

  export type instituicaoUncheckedCreateWithoutCursoInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
  }

  export type instituicaoCreateOrConnectWithoutCursoInput = {
    where: instituicaoWhereUniqueInput
    create: XOR<instituicaoCreateWithoutCursoInput, instituicaoUncheckedCreateWithoutCursoInput>
  }

  export type tipo_cursoCreateWithoutCursoInput = {
    tx_descricao: string
  }

  export type tipo_cursoUncheckedCreateWithoutCursoInput = {
    id_tipo_curso?: number
    tx_descricao: string
  }

  export type tipo_cursoCreateOrConnectWithoutCursoInput = {
    where: tipo_cursoWhereUniqueInput
    create: XOR<tipo_cursoCreateWithoutCursoInput, tipo_cursoUncheckedCreateWithoutCursoInput>
  }

  export type disciplinaCreateWithoutCursoInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaCreateNestedManyWithoutDisciplinaInput
    tipo_disciplina: tipo_disciplinaCreateNestedOneWithoutDisciplinaInput
    leciona?: lecionaCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateWithoutCursoInput = {
    id_disciplina?: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaUncheckedCreateNestedManyWithoutDisciplinaInput
    leciona?: lecionaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaCreateOrConnectWithoutCursoInput = {
    where: disciplinaWhereUniqueInput
    create: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput>
  }

  export type disciplinaCreateManyCursoInputEnvelope = {
    data: disciplinaCreateManyCursoInput | disciplinaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type instituicaoUpsertWithoutCursoInput = {
    update: XOR<instituicaoUpdateWithoutCursoInput, instituicaoUncheckedUpdateWithoutCursoInput>
    create: XOR<instituicaoCreateWithoutCursoInput, instituicaoUncheckedCreateWithoutCursoInput>
    where?: instituicaoWhereInput
  }

  export type instituicaoUpdateToOneWithWhereWithoutCursoInput = {
    where?: instituicaoWhereInput
    data: XOR<instituicaoUpdateWithoutCursoInput, instituicaoUncheckedUpdateWithoutCursoInput>
  }

  export type instituicaoUpdateWithoutCursoInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type instituicaoUncheckedUpdateWithoutCursoInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_cursoUpsertWithoutCursoInput = {
    update: XOR<tipo_cursoUpdateWithoutCursoInput, tipo_cursoUncheckedUpdateWithoutCursoInput>
    create: XOR<tipo_cursoCreateWithoutCursoInput, tipo_cursoUncheckedCreateWithoutCursoInput>
    where?: tipo_cursoWhereInput
  }

  export type tipo_cursoUpdateToOneWithWhereWithoutCursoInput = {
    where?: tipo_cursoWhereInput
    data: XOR<tipo_cursoUpdateWithoutCursoInput, tipo_cursoUncheckedUpdateWithoutCursoInput>
  }

  export type tipo_cursoUpdateWithoutCursoInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_cursoUncheckedUpdateWithoutCursoInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaUpsertWithWhereUniqueWithoutCursoInput = {
    where: disciplinaWhereUniqueInput
    update: XOR<disciplinaUpdateWithoutCursoInput, disciplinaUncheckedUpdateWithoutCursoInput>
    create: XOR<disciplinaCreateWithoutCursoInput, disciplinaUncheckedCreateWithoutCursoInput>
  }

  export type disciplinaUpdateWithWhereUniqueWithoutCursoInput = {
    where: disciplinaWhereUniqueInput
    data: XOR<disciplinaUpdateWithoutCursoInput, disciplinaUncheckedUpdateWithoutCursoInput>
  }

  export type disciplinaUpdateManyWithWhereWithoutCursoInput = {
    where: disciplinaScalarWhereInput
    data: XOR<disciplinaUpdateManyMutationInput, disciplinaUncheckedUpdateManyWithoutCursoInput>
  }

  export type disciplinaScalarWhereInput = {
    AND?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
    OR?: disciplinaScalarWhereInput[]
    NOT?: disciplinaScalarWhereInput | disciplinaScalarWhereInput[]
    id_disciplina?: IntFilter<"disciplina"> | number
    id_curso?: IntNullableFilter<"disciplina"> | number | null
    id_tipo_disciplina?: IntFilter<"disciplina"> | number
    tx_sigla?: StringFilter<"disciplina"> | string
    tx_descricao?: StringFilter<"disciplina"> | string
    in_periodo?: IntFilter<"disciplina"> | number
    in_carga_horaria?: IntFilter<"disciplina"> | number
  }

  export type cursaCreateWithoutDisciplinaInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
    aluno: alunoCreateNestedOneWithoutCursaInput
  }

  export type cursaUncheckedCreateWithoutDisciplinaInput = {
    id_aluno: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type cursaCreateOrConnectWithoutDisciplinaInput = {
    where: cursaWhereUniqueInput
    create: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput>
  }

  export type cursaCreateManyDisciplinaInputEnvelope = {
    data: cursaCreateManyDisciplinaInput | cursaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type cursoCreateWithoutDisciplinaInput = {
    tx_descricao: string
    instituicao: instituicaoCreateNestedOneWithoutCursoInput
    tipo_curso: tipo_cursoCreateNestedOneWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutDisciplinaInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type cursoCreateOrConnectWithoutDisciplinaInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutDisciplinaInput, cursoUncheckedCreateWithoutDisciplinaInput>
  }

  export type tipo_disciplinaCreateWithoutDisciplinaInput = {
    tx_descricao: string
  }

  export type tipo_disciplinaUncheckedCreateWithoutDisciplinaInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
  }

  export type tipo_disciplinaCreateOrConnectWithoutDisciplinaInput = {
    where: tipo_disciplinaWhereUniqueInput
    create: XOR<tipo_disciplinaCreateWithoutDisciplinaInput, tipo_disciplinaUncheckedCreateWithoutDisciplinaInput>
  }

  export type lecionaCreateWithoutDisciplinaInput = {
    professor: professorCreateNestedOneWithoutLecionaInput
  }

  export type lecionaUncheckedCreateWithoutDisciplinaInput = {
    id_professor: number
  }

  export type lecionaCreateOrConnectWithoutDisciplinaInput = {
    where: lecionaWhereUniqueInput
    create: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput>
  }

  export type lecionaCreateManyDisciplinaInputEnvelope = {
    data: lecionaCreateManyDisciplinaInput | lecionaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type cursaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: cursaWhereUniqueInput
    update: XOR<cursaUpdateWithoutDisciplinaInput, cursaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<cursaCreateWithoutDisciplinaInput, cursaUncheckedCreateWithoutDisciplinaInput>
  }

  export type cursaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: cursaWhereUniqueInput
    data: XOR<cursaUpdateWithoutDisciplinaInput, cursaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type cursaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: cursaScalarWhereInput
    data: XOR<cursaUpdateManyMutationInput, cursaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type cursoUpsertWithoutDisciplinaInput = {
    update: XOR<cursoUpdateWithoutDisciplinaInput, cursoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<cursoCreateWithoutDisciplinaInput, cursoUncheckedCreateWithoutDisciplinaInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutDisciplinaInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutDisciplinaInput, cursoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type cursoUpdateWithoutDisciplinaInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: instituicaoUpdateOneRequiredWithoutCursoNestedInput
    tipo_curso?: tipo_cursoUpdateOneRequiredWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutDisciplinaInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_disciplinaUpsertWithoutDisciplinaInput = {
    update: XOR<tipo_disciplinaUpdateWithoutDisciplinaInput, tipo_disciplinaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<tipo_disciplinaCreateWithoutDisciplinaInput, tipo_disciplinaUncheckedCreateWithoutDisciplinaInput>
    where?: tipo_disciplinaWhereInput
  }

  export type tipo_disciplinaUpdateToOneWithWhereWithoutDisciplinaInput = {
    where?: tipo_disciplinaWhereInput
    data: XOR<tipo_disciplinaUpdateWithoutDisciplinaInput, tipo_disciplinaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type tipo_disciplinaUpdateWithoutDisciplinaInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_disciplinaUncheckedUpdateWithoutDisciplinaInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type lecionaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: lecionaWhereUniqueInput
    update: XOR<lecionaUpdateWithoutDisciplinaInput, lecionaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<lecionaCreateWithoutDisciplinaInput, lecionaUncheckedCreateWithoutDisciplinaInput>
  }

  export type lecionaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: lecionaWhereUniqueInput
    data: XOR<lecionaUpdateWithoutDisciplinaInput, lecionaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type lecionaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: lecionaScalarWhereInput
    data: XOR<lecionaUpdateManyMutationInput, lecionaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type lecionaScalarWhereInput = {
    AND?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
    OR?: lecionaScalarWhereInput[]
    NOT?: lecionaScalarWhereInput | lecionaScalarWhereInput[]
    id_professor?: IntFilter<"leciona"> | number
    id_disciplina?: IntFilter<"leciona"> | number
  }

  export type cursoCreateWithoutInstituicaoInput = {
    tx_descricao: string
    tipo_curso: tipo_cursoCreateNestedOneWithoutCursoInput
    disciplina?: disciplinaCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutInstituicaoInput = {
    id_curso?: number
    id_tipo_curso: number
    tx_descricao: string
    disciplina?: disciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutInstituicaoInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type cursoCreateManyInstituicaoInputEnvelope = {
    data: cursoCreateManyInstituicaoInput | cursoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type cursoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: cursoWhereUniqueInput
    update: XOR<cursoUpdateWithoutInstituicaoInput, cursoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<cursoCreateWithoutInstituicaoInput, cursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type cursoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: cursoWhereUniqueInput
    data: XOR<cursoUpdateWithoutInstituicaoInput, cursoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type cursoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: cursoScalarWhereInput
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type cursoScalarWhereInput = {
    AND?: cursoScalarWhereInput | cursoScalarWhereInput[]
    OR?: cursoScalarWhereInput[]
    NOT?: cursoScalarWhereInput | cursoScalarWhereInput[]
    id_curso?: IntFilter<"curso"> | number
    id_instituicao?: IntFilter<"curso"> | number
    id_tipo_curso?: IntFilter<"curso"> | number
    tx_descricao?: StringFilter<"curso"> | string
  }

  export type disciplinaCreateWithoutLecionaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaCreateNestedManyWithoutDisciplinaInput
    curso?: cursoCreateNestedOneWithoutDisciplinaInput
    tipo_disciplina: tipo_disciplinaCreateNestedOneWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateWithoutLecionaInput = {
    id_disciplina?: number
    id_curso?: number | null
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaCreateOrConnectWithoutLecionaInput = {
    where: disciplinaWhereUniqueInput
    create: XOR<disciplinaCreateWithoutLecionaInput, disciplinaUncheckedCreateWithoutLecionaInput>
  }

  export type professorCreateWithoutLecionaInput = {
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
    titulo: tituloCreateNestedOneWithoutProfessorInput
  }

  export type professorUncheckedCreateWithoutLecionaInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type professorCreateOrConnectWithoutLecionaInput = {
    where: professorWhereUniqueInput
    create: XOR<professorCreateWithoutLecionaInput, professorUncheckedCreateWithoutLecionaInput>
  }

  export type disciplinaUpsertWithoutLecionaInput = {
    update: XOR<disciplinaUpdateWithoutLecionaInput, disciplinaUncheckedUpdateWithoutLecionaInput>
    create: XOR<disciplinaCreateWithoutLecionaInput, disciplinaUncheckedCreateWithoutLecionaInput>
    where?: disciplinaWhereInput
  }

  export type disciplinaUpdateToOneWithWhereWithoutLecionaInput = {
    where?: disciplinaWhereInput
    data: XOR<disciplinaUpdateWithoutLecionaInput, disciplinaUncheckedUpdateWithoutLecionaInput>
  }

  export type disciplinaUpdateWithoutLecionaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUpdateManyWithoutDisciplinaNestedInput
    curso?: cursoUpdateOneWithoutDisciplinaNestedInput
    tipo_disciplina?: tipo_disciplinaUpdateOneRequiredWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateWithoutLecionaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type professorUpsertWithoutLecionaInput = {
    update: XOR<professorUpdateWithoutLecionaInput, professorUncheckedUpdateWithoutLecionaInput>
    create: XOR<professorCreateWithoutLecionaInput, professorUncheckedCreateWithoutLecionaInput>
    where?: professorWhereInput
  }

  export type professorUpdateToOneWithWhereWithoutLecionaInput = {
    where?: professorWhereInput
    data: XOR<professorUpdateWithoutLecionaInput, professorUncheckedUpdateWithoutLecionaInput>
  }

  export type professorUpdateWithoutLecionaInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    titulo?: tituloUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateWithoutLecionaInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type lecionaCreateWithoutProfessorInput = {
    disciplina: disciplinaCreateNestedOneWithoutLecionaInput
  }

  export type lecionaUncheckedCreateWithoutProfessorInput = {
    id_disciplina: number
  }

  export type lecionaCreateOrConnectWithoutProfessorInput = {
    where: lecionaWhereUniqueInput
    create: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput>
  }

  export type lecionaCreateManyProfessorInputEnvelope = {
    data: lecionaCreateManyProfessorInput | lecionaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type tituloCreateWithoutProfessorInput = {
    tx_descricao: string
  }

  export type tituloUncheckedCreateWithoutProfessorInput = {
    id_titulo?: number
    tx_descricao: string
  }

  export type tituloCreateOrConnectWithoutProfessorInput = {
    where: tituloWhereUniqueInput
    create: XOR<tituloCreateWithoutProfessorInput, tituloUncheckedCreateWithoutProfessorInput>
  }

  export type lecionaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: lecionaWhereUniqueInput
    update: XOR<lecionaUpdateWithoutProfessorInput, lecionaUncheckedUpdateWithoutProfessorInput>
    create: XOR<lecionaCreateWithoutProfessorInput, lecionaUncheckedCreateWithoutProfessorInput>
  }

  export type lecionaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: lecionaWhereUniqueInput
    data: XOR<lecionaUpdateWithoutProfessorInput, lecionaUncheckedUpdateWithoutProfessorInput>
  }

  export type lecionaUpdateManyWithWhereWithoutProfessorInput = {
    where: lecionaScalarWhereInput
    data: XOR<lecionaUpdateManyMutationInput, lecionaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type tituloUpsertWithoutProfessorInput = {
    update: XOR<tituloUpdateWithoutProfessorInput, tituloUncheckedUpdateWithoutProfessorInput>
    create: XOR<tituloCreateWithoutProfessorInput, tituloUncheckedCreateWithoutProfessorInput>
    where?: tituloWhereInput
  }

  export type tituloUpdateToOneWithWhereWithoutProfessorInput = {
    where?: tituloWhereInput
    data: XOR<tituloUpdateWithoutProfessorInput, tituloUncheckedUpdateWithoutProfessorInput>
  }

  export type tituloUpdateWithoutProfessorInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tituloUncheckedUpdateWithoutProfessorInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type cursoCreateWithoutTipo_cursoInput = {
    tx_descricao: string
    instituicao: instituicaoCreateNestedOneWithoutCursoInput
    disciplina?: disciplinaCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutTipo_cursoInput = {
    id_curso?: number
    id_instituicao: number
    tx_descricao: string
    disciplina?: disciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutTipo_cursoInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput>
  }

  export type cursoCreateManyTipo_cursoInputEnvelope = {
    data: cursoCreateManyTipo_cursoInput | cursoCreateManyTipo_cursoInput[]
    skipDuplicates?: boolean
  }

  export type cursoUpsertWithWhereUniqueWithoutTipo_cursoInput = {
    where: cursoWhereUniqueInput
    update: XOR<cursoUpdateWithoutTipo_cursoInput, cursoUncheckedUpdateWithoutTipo_cursoInput>
    create: XOR<cursoCreateWithoutTipo_cursoInput, cursoUncheckedCreateWithoutTipo_cursoInput>
  }

  export type cursoUpdateWithWhereUniqueWithoutTipo_cursoInput = {
    where: cursoWhereUniqueInput
    data: XOR<cursoUpdateWithoutTipo_cursoInput, cursoUncheckedUpdateWithoutTipo_cursoInput>
  }

  export type cursoUpdateManyWithWhereWithoutTipo_cursoInput = {
    where: cursoScalarWhereInput
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyWithoutTipo_cursoInput>
  }

  export type disciplinaCreateWithoutTipo_disciplinaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaCreateNestedManyWithoutDisciplinaInput
    curso?: cursoCreateNestedOneWithoutDisciplinaInput
    leciona?: lecionaCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateWithoutTipo_disciplinaInput = {
    id_disciplina?: number
    id_curso?: number | null
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: cursaUncheckedCreateNestedManyWithoutDisciplinaInput
    leciona?: lecionaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaCreateOrConnectWithoutTipo_disciplinaInput = {
    where: disciplinaWhereUniqueInput
    create: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput>
  }

  export type disciplinaCreateManyTipo_disciplinaInputEnvelope = {
    data: disciplinaCreateManyTipo_disciplinaInput | disciplinaCreateManyTipo_disciplinaInput[]
    skipDuplicates?: boolean
  }

  export type disciplinaUpsertWithWhereUniqueWithoutTipo_disciplinaInput = {
    where: disciplinaWhereUniqueInput
    update: XOR<disciplinaUpdateWithoutTipo_disciplinaInput, disciplinaUncheckedUpdateWithoutTipo_disciplinaInput>
    create: XOR<disciplinaCreateWithoutTipo_disciplinaInput, disciplinaUncheckedCreateWithoutTipo_disciplinaInput>
  }

  export type disciplinaUpdateWithWhereUniqueWithoutTipo_disciplinaInput = {
    where: disciplinaWhereUniqueInput
    data: XOR<disciplinaUpdateWithoutTipo_disciplinaInput, disciplinaUncheckedUpdateWithoutTipo_disciplinaInput>
  }

  export type disciplinaUpdateManyWithWhereWithoutTipo_disciplinaInput = {
    where: disciplinaScalarWhereInput
    data: XOR<disciplinaUpdateManyMutationInput, disciplinaUncheckedUpdateManyWithoutTipo_disciplinaInput>
  }

  export type professorCreateWithoutTituloInput = {
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: lecionaCreateNestedManyWithoutProfessorInput
  }

  export type professorUncheckedCreateWithoutTituloInput = {
    id_professor?: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: lecionaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type professorCreateOrConnectWithoutTituloInput = {
    where: professorWhereUniqueInput
    create: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput>
  }

  export type professorCreateManyTituloInputEnvelope = {
    data: professorCreateManyTituloInput | professorCreateManyTituloInput[]
    skipDuplicates?: boolean
  }

  export type professorUpsertWithWhereUniqueWithoutTituloInput = {
    where: professorWhereUniqueInput
    update: XOR<professorUpdateWithoutTituloInput, professorUncheckedUpdateWithoutTituloInput>
    create: XOR<professorCreateWithoutTituloInput, professorUncheckedCreateWithoutTituloInput>
  }

  export type professorUpdateWithWhereUniqueWithoutTituloInput = {
    where: professorWhereUniqueInput
    data: XOR<professorUpdateWithoutTituloInput, professorUncheckedUpdateWithoutTituloInput>
  }

  export type professorUpdateManyWithWhereWithoutTituloInput = {
    where: professorScalarWhereInput
    data: XOR<professorUpdateManyMutationInput, professorUncheckedUpdateManyWithoutTituloInput>
  }

  export type professorScalarWhereInput = {
    AND?: professorScalarWhereInput | professorScalarWhereInput[]
    OR?: professorScalarWhereInput[]
    NOT?: professorScalarWhereInput | professorScalarWhereInput[]
    id_professor?: IntFilter<"professor"> | number
    id_titulo?: IntFilter<"professor"> | number
    tx_nome?: StringFilter<"professor"> | string
    tx_sexo?: StringFilter<"professor"> | string
    tx_estado_civil?: StringFilter<"professor"> | string
    dt_nascimento?: DateTimeFilter<"professor"> | Date | string
    tx_telefone?: StringFilter<"professor"> | string
  }

  export type cursaCreateManyAlunoInput = {
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type cursaUpdateWithoutAlunoInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    disciplina?: disciplinaUpdateOneRequiredWithoutCursaNestedInput
  }

  export type cursaUncheckedUpdateWithoutAlunoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cursaUncheckedUpdateManyWithoutAlunoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type disciplinaCreateManyCursoInput = {
    id_disciplina?: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type disciplinaUpdateWithoutCursoInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUpdateManyWithoutDisciplinaNestedInput
    tipo_disciplina?: tipo_disciplinaUpdateOneRequiredWithoutDisciplinaNestedInput
    leciona?: lecionaUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateWithoutCursoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUncheckedUpdateManyWithoutDisciplinaNestedInput
    leciona?: lecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateManyWithoutCursoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type cursaCreateManyDisciplinaInput = {
    id_aluno: number
    in_ano: number
    in_semestre: number
    in_faltas?: number | null
    nr_nota1?: Decimal | DecimalJsLike | number | string | null
    nr_nota2?: Decimal | DecimalJsLike | number | string | null
    nr_nota3?: Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: boolean
  }

  export type lecionaCreateManyDisciplinaInput = {
    id_professor: number
  }

  export type cursaUpdateWithoutDisciplinaInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    aluno?: alunoUpdateOneRequiredWithoutCursaNestedInput
  }

  export type cursaUncheckedUpdateWithoutDisciplinaInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cursaUncheckedUpdateManyWithoutDisciplinaInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: NullableIntFieldUpdateOperationsInput | number | null
    nr_nota1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_nota3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lecionaUpdateWithoutDisciplinaInput = {
    professor?: professorUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type lecionaUncheckedUpdateWithoutDisciplinaInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type lecionaUncheckedUpdateManyWithoutDisciplinaInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type cursoCreateManyInstituicaoInput = {
    id_curso?: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type cursoUpdateWithoutInstituicaoInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    tipo_curso?: tipo_cursoUpdateOneRequiredWithoutCursoNestedInput
    disciplina?: disciplinaUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutInstituicaoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplina?: disciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateManyWithoutInstituicaoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type lecionaCreateManyProfessorInput = {
    id_disciplina: number
  }

  export type lecionaUpdateWithoutProfessorInput = {
    disciplina?: disciplinaUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type lecionaUncheckedUpdateWithoutProfessorInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type lecionaUncheckedUpdateManyWithoutProfessorInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type cursoCreateManyTipo_cursoInput = {
    id_curso?: number
    id_instituicao: number
    tx_descricao: string
  }

  export type cursoUpdateWithoutTipo_cursoInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: instituicaoUpdateOneRequiredWithoutCursoNestedInput
    disciplina?: disciplinaUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutTipo_cursoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplina?: disciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateManyWithoutTipo_cursoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaCreateManyTipo_disciplinaInput = {
    id_disciplina?: number
    id_curso?: number | null
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type disciplinaUpdateWithoutTipo_disciplinaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUpdateManyWithoutDisciplinaNestedInput
    curso?: cursoUpdateOneWithoutDisciplinaNestedInput
    leciona?: lecionaUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateWithoutTipo_disciplinaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: cursaUncheckedUpdateManyWithoutDisciplinaNestedInput
    leciona?: lecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateManyWithoutTipo_disciplinaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: NullableIntFieldUpdateOperationsInput | number | null
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type professorCreateManyTituloInput = {
    id_professor?: number
    tx_nome: string
    tx_sexo: string
    tx_estado_civil: string
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type professorUpdateWithoutTituloInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: lecionaUpdateManyWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateWithoutTituloInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: lecionaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateManyWithoutTituloInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: StringFieldUpdateOperationsInput | string
    tx_estado_civil?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
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