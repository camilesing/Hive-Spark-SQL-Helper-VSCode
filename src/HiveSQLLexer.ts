// Generated from gen/HiveSQL.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class HiveSQLLexer extends antlr.Lexer {
    public static readonly KW_ABORT = 1;
    public static readonly KW_ACTIVATE = 2;
    public static readonly KW_ACTIVE = 3;
    public static readonly KW_ADD = 4;
    public static readonly KW_ADMIN = 5;
    public static readonly KW_AFTER = 6;
    public static readonly KW_ALL = 7;
    public static readonly KW_ALLOC_FRACTION = 8;
    public static readonly KW_ALTER = 9;
    public static readonly KW_ANALYZE = 10;
    public static readonly KW_AND = 11;
    public static readonly KW_ANTI = 12;
    public static readonly KW_ANY = 13;
    public static readonly KW_APPLICATION = 14;
    public static readonly KW_ARCHIVE = 15;
    public static readonly KW_ARRAY = 16;
    public static readonly KW_AS = 17;
    public static readonly KW_ASC = 18;
    public static readonly KW_AST = 19;
    public static readonly KW_AT = 20;
    public static readonly KW_AUTHORIZATION = 21;
    public static readonly KW_AUTOCOMMIT = 22;
    public static readonly KW_BATCH = 23;
    public static readonly KW_BEFORE = 24;
    public static readonly KW_BETWEEN = 25;
    public static readonly KW_BIGINT = 26;
    public static readonly KW_BINARY = 27;
    public static readonly KW_BOOLEAN = 28;
    public static readonly KW_BOTH = 29;
    public static readonly KW_BUCKET = 30;
    public static readonly KW_BUCKETS = 31;
    public static readonly KW_BY = 32;
    public static readonly KW_CACHE = 33;
    public static readonly KW_CASCADE = 34;
    public static readonly KW_CASE = 35;
    public static readonly KW_CAST = 36;
    public static readonly KW_CBO = 37;
    public static readonly KW_CHANGE = 38;
    public static readonly KW_CHAR = 39;
    public static readonly KW_CHECK = 40;
    public static readonly KW_CLUSTER = 41;
    public static readonly KW_CLUSTERED = 42;
    public static readonly KW_CLUSTERSTATUS = 43;
    public static readonly KW_COLLECTION = 44;
    public static readonly KW_COLUMN = 45;
    public static readonly KW_COLUMNS = 46;
    public static readonly KW_COMMENT = 47;
    public static readonly KW_COMMIT = 48;
    public static readonly KW_COMPACT = 49;
    public static readonly KW_COMPACTIONS = 50;
    public static readonly KW_COMPACT_ID = 51;
    public static readonly KW_COMPUTE = 52;
    public static readonly KW_CONCATENATE = 53;
    public static readonly KW_CONF = 54;
    public static readonly KW_CONSTRAINT = 55;
    public static readonly KW_CONTINUE = 56;
    public static readonly KW_COST = 57;
    public static readonly KW_CREATE = 58;
    public static readonly KW_CRON = 59;
    public static readonly KW_CROSS = 60;
    public static readonly KW_CUBE = 61;
    public static readonly KW_CURRENT = 62;
    public static readonly KW_CURRENT_DATE = 63;
    public static readonly KW_CURRENT_TIMESTAMP = 64;
    public static readonly KW_CURSOR = 65;
    public static readonly KW_DATA = 66;
    public static readonly KW_DATABASE = 67;
    public static readonly KW_DATABASES = 68;
    public static readonly KW_DATACONNECTOR = 69;
    public static readonly KW_DATACONNECTORS = 70;
    public static readonly KW_DATE = 71;
    public static readonly KW_DATETIME = 72;
    public static readonly KW_DAY = 73;
    public static readonly KW_DAYOFWEEK = 74;
    public static readonly KW_DBPROPERTIES = 75;
    public static readonly KW_DCPROPERTIES = 76;
    public static readonly KW_DDL = 77;
    public static readonly KW_DEBUG = 78;
    public static readonly KW_DECIMAL = 79;
    public static readonly KW_DEFAULT = 80;
    public static readonly KW_DEFERRED = 81;
    public static readonly KW_DEFINED = 82;
    public static readonly KW_DELETE = 83;
    public static readonly KW_DELIMITED = 84;
    public static readonly KW_DEPENDENCY = 85;
    public static readonly KW_DESC = 86;
    public static readonly KW_DESCRIBE = 87;
    public static readonly KW_DETAIL = 88;
    public static readonly KW_DIRECTORIES = 89;
    public static readonly KW_DIRECTORY = 90;
    public static readonly KW_DISABLE = 91;
    public static readonly KW_DISTINCT = 92;
    public static readonly KW_DISTRIBUTE = 93;
    public static readonly KW_DISTRIBUTED = 94;
    public static readonly KW_DO = 95;
    public static readonly KW_DOUBLE = 96;
    public static readonly KW_DOW = 97;
    public static readonly KW_DROP = 98;
    public static readonly KW_DUMP = 99;
    public static readonly KW_ELEM_TYPE = 100;
    public static readonly KW_ELSE = 101;
    public static readonly KW_ENABLE = 102;
    public static readonly KW_END = 103;
    public static readonly KW_ENFORCED = 104;
    public static readonly KW_ESCAPED = 105;
    public static readonly KW_EVERY = 106;
    public static readonly KW_EXCEPT = 107;
    public static readonly KW_EXCHANGE = 108;
    public static readonly KW_EXCLUSIVE = 109;
    public static readonly KW_EXECUTE = 110;
    public static readonly KW_EXECUTED = 111;
    public static readonly KW_EXISTS = 112;
    public static readonly KW_EXPIRE_SNAPSHOTS = 113;
    public static readonly KW_EXPLAIN = 114;
    public static readonly KW_EXPORT = 115;
    public static readonly KW_EXPRESSION = 116;
    public static readonly KW_EXTENDED = 117;
    public static readonly KW_EXTERNAL = 118;
    public static readonly KW_EXTRACT = 119;
    public static readonly KW_FALSE = 120;
    public static readonly KW_FETCH = 121;
    public static readonly KW_FIELDS = 122;
    public static readonly KW_FILE = 123;
    public static readonly KW_FILEFORMAT = 124;
    public static readonly KW_FIRST = 125;
    public static readonly KW_FLOAT = 126;
    public static readonly KW_FLOOR = 127;
    public static readonly KW_FOLLOWING = 128;
    public static readonly KW_FOR = 129;
    public static readonly KW_FORCE = 130;
    public static readonly KW_FOREIGN = 131;
    public static readonly KW_FORMAT = 132;
    public static readonly KW_FORMATTED = 133;
    public static readonly KW_FROM = 134;
    public static readonly KW_FULL = 135;
    public static readonly KW_FUNCTION = 136;
    public static readonly KW_FUNCTIONS = 137;
    public static readonly KW_GRANT = 138;
    public static readonly KW_GROUP = 139;
    public static readonly KW_GROUPING = 140;
    public static readonly KW_HAVING = 141;
    public static readonly KW_HDFS = 142;
    public static readonly KW_HOLD_DDLTIME = 143;
    public static readonly KW_HOUR = 144;
    public static readonly KW_IDXPROPERTIES = 145;
    public static readonly KW_IF = 146;
    public static readonly KW_IGNORE = 147;
    public static readonly KW_IMPORT = 148;
    public static readonly KW_IN = 149;
    public static readonly KW_INDEX = 150;
    public static readonly KW_INDEXES = 151;
    public static readonly KW_INNER = 152;
    public static readonly KW_INPATH = 153;
    public static readonly KW_INPUTDRIVER = 154;
    public static readonly KW_INPUTFORMAT = 155;
    public static readonly KW_INSERT = 156;
    public static readonly KW_INT = 157;
    public static readonly KW_INTERSECT = 158;
    public static readonly KW_INTERVAL = 159;
    public static readonly KW_INTO = 160;
    public static readonly KW_IS = 161;
    public static readonly KW_ISOLATION = 162;
    public static readonly KW_ITEMS = 163;
    public static readonly KW_JAR = 164;
    public static readonly KW_JOIN = 165;
    public static readonly KW_JOINCOST = 166;
    public static readonly KW_KEY = 167;
    public static readonly KW_KEYS = 168;
    public static readonly KW_KEY_TYPE = 169;
    public static readonly KW_KILL = 170;
    public static readonly KW_LAST = 171;
    public static readonly KW_LATERAL = 172;
    public static readonly KW_LEADING = 173;
    public static readonly KW_LEFT = 174;
    public static readonly KW_LESS = 175;
    public static readonly KW_LEVEL = 176;
    public static readonly KW_LIKE = 177;
    public static readonly KW_LIMIT = 178;
    public static readonly KW_LINES = 179;
    public static readonly KW_LOAD = 180;
    public static readonly KW_LOCAL = 181;
    public static readonly KW_LOCATION = 182;
    public static readonly KW_LOCK = 183;
    public static readonly KW_LOCKS = 184;
    public static readonly KW_LOGICAL = 185;
    public static readonly KW_LONG = 186;
    public static readonly KW_MACRO = 187;
    public static readonly KW_MANAGED = 188;
    public static readonly KW_MANAGEDLOCATION = 189;
    public static readonly KW_MANAGEMENT = 190;
    public static readonly KW_MAP = 191;
    public static readonly KW_MAPJOIN = 192;
    public static readonly KW_MAPPING = 193;
    public static readonly KW_MATCHED = 194;
    public static readonly KW_MATERIALIZED = 195;
    public static readonly KW_MERGE = 196;
    public static readonly KW_METADATA = 197;
    public static readonly KW_MINUS = 198;
    public static readonly KW_MINUTE = 199;
    public static readonly KW_MONTH = 200;
    public static readonly KW_MORE = 201;
    public static readonly KW_MOVE = 202;
    public static readonly KW_MSCK = 203;
    public static readonly KW_NONE = 204;
    public static readonly KW_NORELY = 205;
    public static readonly KW_NOSCAN = 206;
    public static readonly KW_NOT = 207;
    public static readonly KW_NOVALIDATE = 208;
    public static readonly KW_NO_DROP = 209;
    public static readonly KW_NULL = 210;
    public static readonly KW_NULLS = 211;
    public static readonly KW_OF = 212;
    public static readonly KW_OFFLINE = 213;
    public static readonly KW_OFFSET = 214;
    public static readonly KW_ON = 215;
    public static readonly KW_ONLY = 216;
    public static readonly KW_OPERATOR = 217;
    public static readonly KW_OPTION = 218;
    public static readonly KW_OR = 219;
    public static readonly KW_ORDER = 220;
    public static readonly KW_OUT = 221;
    public static readonly KW_OUTER = 222;
    public static readonly KW_OUTPUTDRIVER = 223;
    public static readonly KW_OUTPUTFORMAT = 224;
    public static readonly KW_OVER = 225;
    public static readonly KW_OVERWRITE = 226;
    public static readonly KW_OWNER = 227;
    public static readonly KW_PARTITION = 228;
    public static readonly KW_PARTITIONED = 229;
    public static readonly KW_PARTITIONS = 230;
    public static readonly KW_PATH = 231;
    public static readonly KW_PERCENT = 232;
    public static readonly KW_PKFK_JOIN = 233;
    public static readonly KW_PLAN = 234;
    public static readonly KW_PLANS = 235;
    public static readonly KW_PLUS = 236;
    public static readonly KW_POOL = 237;
    public static readonly KW_PRECEDING = 238;
    public static readonly KW_PRECISION = 239;
    public static readonly KW_PREPARE = 240;
    public static readonly KW_PRESERVE = 241;
    public static readonly KW_PRIMARY = 242;
    public static readonly KW_PRINCIPALS = 243;
    public static readonly KW_PROCEDURE = 244;
    public static readonly KW_PROTECTION = 245;
    public static readonly KW_PURGE = 246;
    public static readonly KW_QUALIFY = 247;
    public static readonly KW_QUARTER = 248;
    public static readonly KW_QUERY = 249;
    public static readonly KW_QUERY_PARALLELISM = 250;
    public static readonly KW_RANGE = 251;
    public static readonly KW_READ = 252;
    public static readonly KW_READONLY = 253;
    public static readonly KW_READS = 254;
    public static readonly KW_REAL = 255;
    public static readonly KW_REBUILD = 256;
    public static readonly KW_RECORDREADER = 257;
    public static readonly KW_RECORDWRITER = 258;
    public static readonly KW_REDUCE = 259;
    public static readonly KW_REFERENCES = 260;
    public static readonly KW_REGEXP = 261;
    public static readonly KW_RELOAD = 262;
    public static readonly KW_RELY = 263;
    public static readonly KW_REMOTE = 264;
    public static readonly KW_RENAME = 265;
    public static readonly KW_REOPTIMIZATION = 266;
    public static readonly KW_REPAIR = 267;
    public static readonly KW_REPL = 268;
    public static readonly KW_REPLACE = 269;
    public static readonly KW_REPLICATION = 270;
    public static readonly KW_RESOURCE = 271;
    public static readonly KW_RESPECT = 272;
    public static readonly KW_RESTRICT = 273;
    public static readonly KW_REVOKE = 274;
    public static readonly KW_REWRITE = 275;
    public static readonly KW_RIGHT = 276;
    public static readonly KW_RLIKE = 277;
    public static readonly KW_ROLE = 278;
    public static readonly KW_ROLES = 279;
    public static readonly KW_ROLLBACK = 280;
    public static readonly KW_ROLLUP = 281;
    public static readonly KW_ROW = 282;
    public static readonly KW_ROWS = 283;
    public static readonly KW_SCHEDULED = 284;
    public static readonly KW_SCHEDULING_POLICY = 285;
    public static readonly KW_SCHEMA = 286;
    public static readonly KW_SCHEMAS = 287;
    public static readonly KW_SECOND = 288;
    public static readonly KW_SELECT = 289;
    public static readonly KW_SEMI = 290;
    public static readonly KW_SERDE = 291;
    public static readonly KW_SERDEPROPERTIES = 292;
    public static readonly KW_SERVER = 293;
    public static readonly KW_SET = 294;
    public static readonly KW_SETS = 295;
    public static readonly KW_SET_CURRENT_SNAPSHOT = 296;
    public static readonly KW_SHARED = 297;
    public static readonly KW_SHOW = 298;
    public static readonly KW_SHOW_DATABASE = 299;
    public static readonly KW_SKEWED = 300;
    public static readonly KW_SMALLINT = 301;
    public static readonly KW_SNAPSHOT = 302;
    public static readonly KW_SOME = 303;
    public static readonly KW_SORT = 304;
    public static readonly KW_SORTED = 305;
    public static readonly KW_SPEC = 306;
    public static readonly KW_SSL = 307;
    public static readonly KW_START = 308;
    public static readonly KW_STATISTICS = 309;
    public static readonly KW_STATUS = 310;
    public static readonly KW_STORED = 311;
    public static readonly KW_STREAMTABLE = 312;
    public static readonly KW_STRING = 313;
    public static readonly KW_STRUCT = 314;
    public static readonly KW_SUMMARY = 315;
    public static readonly KW_SYNC = 316;
    public static readonly KW_SYSTEM_TIME = 317;
    public static readonly KW_SYSTEM_VERSION = 318;
    public static readonly KW_TABLE = 319;
    public static readonly KW_TABLES = 320;
    public static readonly KW_TABLESAMPLE = 321;
    public static readonly KW_TBLPROPERTIES = 322;
    public static readonly KW_TEMPORARY = 323;
    public static readonly KW_TERMINATED = 324;
    public static readonly KW_THEN = 325;
    public static readonly KW_TIME = 326;
    public static readonly KW_TIMESTAMP = 327;
    public static readonly KW_TIMESTAMPLOCALTZ = 328;
    public static readonly KW_TIMESTAMPTZ = 329;
    public static readonly KW_TINYINT = 330;
    public static readonly KW_TO = 331;
    public static readonly KW_TOUCH = 332;
    public static readonly KW_TRAILING = 333;
    public static readonly KW_TRANSACTION = 334;
    public static readonly KW_TRANSACTIONAL = 335;
    public static readonly KW_TRANSACTIONS = 336;
    public static readonly KW_TRANSFORM = 337;
    public static readonly KW_TRIGGER = 338;
    public static readonly KW_TRIM = 339;
    public static readonly KW_TRUE = 340;
    public static readonly KW_TRUNCATE = 341;
    public static readonly KW_TYPE = 342;
    public static readonly KW_UNARCHIVE = 343;
    public static readonly KW_UNBOUNDED = 344;
    public static readonly KW_UNDO = 345;
    public static readonly KW_UNION = 346;
    public static readonly KW_UNIONTYPE = 347;
    public static readonly KW_UNIQUE = 348;
    public static readonly KW_UNIQUEJOIN = 349;
    public static readonly KW_UNKNOWN = 350;
    public static readonly KW_UNLOCK = 351;
    public static readonly KW_UNMANAGED = 352;
    public static readonly KW_UNSET = 353;
    public static readonly KW_UNSIGNED = 354;
    public static readonly KW_UPDATE = 355;
    public static readonly KW_URI = 356;
    public static readonly KW_URL = 357;
    public static readonly KW_USE = 358;
    public static readonly KW_USER = 359;
    public static readonly KW_USING = 360;
    public static readonly KW_UTC = 361;
    public static readonly KW_UTCTIMESTAMP = 362;
    public static readonly KW_VALIDATE = 363;
    public static readonly KW_VALUES = 364;
    public static readonly KW_VALUE_TYPE = 365;
    public static readonly KW_VARCHAR = 366;
    public static readonly KW_VECTORIZATION = 367;
    public static readonly KW_VIEW = 368;
    public static readonly KW_VIEWS = 369;
    public static readonly KW_WAIT = 370;
    public static readonly KW_WEEK = 371;
    public static readonly KW_WHEN = 372;
    public static readonly KW_WHERE = 373;
    public static readonly KW_WHILE = 374;
    public static readonly KW_WINDOW = 375;
    public static readonly KW_WITH = 376;
    public static readonly KW_WITHIN = 377;
    public static readonly KW_WORK = 378;
    public static readonly KW_WORKLOAD = 379;
    public static readonly KW_WRITE = 380;
    public static readonly KW_YEAR = 381;
    public static readonly KW_ZONE = 382;
    public static readonly DOT = 383;
    public static readonly COLON = 384;
    public static readonly COMMA = 385;
    public static readonly SEMICOLON = 386;
    public static readonly LPAREN = 387;
    public static readonly RPAREN = 388;
    public static readonly LSQUARE = 389;
    public static readonly RSQUARE = 390;
    public static readonly LCURLY = 391;
    public static readonly RCURLY = 392;
    public static readonly UNDERLINE_SIGN = 393;
    public static readonly EQUAL = 394;
    public static readonly EQUAL_NS = 395;
    public static readonly NOTEQUAL = 396;
    public static readonly LESSTHANOREQUALTO = 397;
    public static readonly LESSTHAN = 398;
    public static readonly GREATERTHANOREQUALTO = 399;
    public static readonly GREATERTHAN = 400;
    public static readonly DIVIDE = 401;
    public static readonly PLUS = 402;
    public static readonly MINUS = 403;
    public static readonly STAR = 404;
    public static readonly MOD = 405;
    public static readonly DIV = 406;
    public static readonly AMPERSAND = 407;
    public static readonly TILDE = 408;
    public static readonly BITWISEOR = 409;
    public static readonly CONCATENATE = 410;
    public static readonly BITWISEXOR = 411;
    public static readonly QUESTION = 412;
    public static readonly DOLLAR = 413;
    public static readonly StringLiteral = 414;
    public static readonly CharSetLiteral = 415;
    public static readonly IntegralLiteral = 416;
    public static readonly NumberLiteral = 417;
    public static readonly ByteLengthLiteral = 418;
    public static readonly Number = 419;
    public static readonly Identifier = 420;
    public static readonly CharSetName = 421;
    public static readonly WHITE_SPACE = 422;
    public static readonly LINE_COMMENT = 423;
    public static readonly QUERY_HINT = 424;
    public static readonly SHOW_HINT = 425;
    public static readonly HIDDEN_HINT = 426;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "'.'", "':'", 
        "','", "';'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'_'", null, 
        "'<=>'", null, "'<='", "'<'", "'>='", "'>'", "'/'", "'+'", "'-'", 
        "'*'", "'%'", "'DIV'", "'&'", "'~'", "'|'", "'||'", "'^'", "'?'", 
        "'$'"
    ];

    public static readonly symbolicNames = [
        null, "KW_ABORT", "KW_ACTIVATE", "KW_ACTIVE", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ALL", "KW_ALLOC_FRACTION", "KW_ALTER", "KW_ANALYZE", 
        "KW_AND", "KW_ANTI", "KW_ANY", "KW_APPLICATION", "KW_ARCHIVE", "KW_ARRAY", 
        "KW_AS", "KW_ASC", "KW_AST", "KW_AT", "KW_AUTHORIZATION", "KW_AUTOCOMMIT", 
        "KW_BATCH", "KW_BEFORE", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", 
        "KW_BOOLEAN", "KW_BOTH", "KW_BUCKET", "KW_BUCKETS", "KW_BY", "KW_CACHE", 
        "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CBO", "KW_CHANGE", "KW_CHAR", 
        "KW_CHECK", "KW_CLUSTER", "KW_CLUSTERED", "KW_CLUSTERSTATUS", "KW_COLLECTION", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", "KW_COMPACT", 
        "KW_COMPACTIONS", "KW_COMPACT_ID", "KW_COMPUTE", "KW_CONCATENATE", 
        "KW_CONF", "KW_CONSTRAINT", "KW_CONTINUE", "KW_COST", "KW_CREATE", 
        "KW_CRON", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURRENT_DATE", 
        "KW_CURRENT_TIMESTAMP", "KW_CURSOR", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DATACONNECTOR", "KW_DATACONNECTORS", "KW_DATE", "KW_DATETIME", 
        "KW_DAY", "KW_DAYOFWEEK", "KW_DBPROPERTIES", "KW_DCPROPERTIES", 
        "KW_DDL", "KW_DEBUG", "KW_DECIMAL", "KW_DEFAULT", "KW_DEFERRED", 
        "KW_DEFINED", "KW_DELETE", "KW_DELIMITED", "KW_DEPENDENCY", "KW_DESC", 
        "KW_DESCRIBE", "KW_DETAIL", "KW_DIRECTORIES", "KW_DIRECTORY", "KW_DISABLE", 
        "KW_DISTINCT", "KW_DISTRIBUTE", "KW_DISTRIBUTED", "KW_DO", "KW_DOUBLE", 
        "KW_DOW", "KW_DROP", "KW_DUMP", "KW_ELEM_TYPE", "KW_ELSE", "KW_ENABLE", 
        "KW_END", "KW_ENFORCED", "KW_ESCAPED", "KW_EVERY", "KW_EXCEPT", 
        "KW_EXCHANGE", "KW_EXCLUSIVE", "KW_EXECUTE", "KW_EXECUTED", "KW_EXISTS", 
        "KW_EXPIRE_SNAPSHOTS", "KW_EXPLAIN", "KW_EXPORT", "KW_EXPRESSION", 
        "KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FETCH", 
        "KW_FIELDS", "KW_FILE", "KW_FILEFORMAT", "KW_FIRST", "KW_FLOAT", 
        "KW_FLOOR", "KW_FOLLOWING", "KW_FOR", "KW_FORCE", "KW_FOREIGN", 
        "KW_FORMAT", "KW_FORMATTED", "KW_FROM", "KW_FULL", "KW_FUNCTION", 
        "KW_FUNCTIONS", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HAVING", 
        "KW_HDFS", "KW_HOLD_DDLTIME", "KW_HOUR", "KW_IDXPROPERTIES", "KW_IF", 
        "KW_IGNORE", "KW_IMPORT", "KW_IN", "KW_INDEX", "KW_INDEXES", "KW_INNER", 
        "KW_INPATH", "KW_INPUTDRIVER", "KW_INPUTFORMAT", "KW_INSERT", "KW_INT", 
        "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_ISOLATION", 
        "KW_ITEMS", "KW_JAR", "KW_JOIN", "KW_JOINCOST", "KW_KEY", "KW_KEYS", 
        "KW_KEY_TYPE", "KW_KILL", "KW_LAST", "KW_LATERAL", "KW_LEADING", 
        "KW_LEFT", "KW_LESS", "KW_LEVEL", "KW_LIKE", "KW_LIMIT", "KW_LINES", 
        "KW_LOAD", "KW_LOCAL", "KW_LOCATION", "KW_LOCK", "KW_LOCKS", "KW_LOGICAL", 
        "KW_LONG", "KW_MACRO", "KW_MANAGED", "KW_MANAGEDLOCATION", "KW_MANAGEMENT", 
        "KW_MAP", "KW_MAPJOIN", "KW_MAPPING", "KW_MATCHED", "KW_MATERIALIZED", 
        "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MONTH", 
        "KW_MORE", "KW_MOVE", "KW_MSCK", "KW_NONE", "KW_NORELY", "KW_NOSCAN", 
        "KW_NOT", "KW_NOVALIDATE", "KW_NO_DROP", "KW_NULL", "KW_NULLS", 
        "KW_OF", "KW_OFFLINE", "KW_OFFSET", "KW_ON", "KW_ONLY", "KW_OPERATOR", 
        "KW_OPTION", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTDRIVER", 
        "KW_OUTPUTFORMAT", "KW_OVER", "KW_OVERWRITE", "KW_OWNER", "KW_PARTITION", 
        "KW_PARTITIONED", "KW_PARTITIONS", "KW_PATH", "KW_PERCENT", "KW_PKFK_JOIN", 
        "KW_PLAN", "KW_PLANS", "KW_PLUS", "KW_POOL", "KW_PRECEDING", "KW_PRECISION", 
        "KW_PREPARE", "KW_PRESERVE", "KW_PRIMARY", "KW_PRINCIPALS", "KW_PROCEDURE", 
        "KW_PROTECTION", "KW_PURGE", "KW_QUALIFY", "KW_QUARTER", "KW_QUERY", 
        "KW_QUERY_PARALLELISM", "KW_RANGE", "KW_READ", "KW_READONLY", "KW_READS", 
        "KW_REAL", "KW_REBUILD", "KW_RECORDREADER", "KW_RECORDWRITER", "KW_REDUCE", 
        "KW_REFERENCES", "KW_REGEXP", "KW_RELOAD", "KW_RELY", "KW_REMOTE", 
        "KW_RENAME", "KW_REOPTIMIZATION", "KW_REPAIR", "KW_REPL", "KW_REPLACE", 
        "KW_REPLICATION", "KW_RESOURCE", "KW_RESPECT", "KW_RESTRICT", "KW_REVOKE", 
        "KW_REWRITE", "KW_RIGHT", "KW_RLIKE", "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", 
        "KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SCHEDULED", "KW_SCHEDULING_POLICY", 
        "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SELECT", "KW_SEMI", 
        "KW_SERDE", "KW_SERDEPROPERTIES", "KW_SERVER", "KW_SET", "KW_SETS", 
        "KW_SET_CURRENT_SNAPSHOT", "KW_SHARED", "KW_SHOW", "KW_SHOW_DATABASE", 
        "KW_SKEWED", "KW_SMALLINT", "KW_SNAPSHOT", "KW_SOME", "KW_SORT", 
        "KW_SORTED", "KW_SPEC", "KW_SSL", "KW_START", "KW_STATISTICS", "KW_STATUS", 
        "KW_STORED", "KW_STREAMTABLE", "KW_STRING", "KW_STRUCT", "KW_SUMMARY", 
        "KW_SYNC", "KW_SYSTEM_TIME", "KW_SYSTEM_VERSION", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TBLPROPERTIES", "KW_TEMPORARY", "KW_TERMINATED", 
        "KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMPLOCALTZ", "KW_TIMESTAMPTZ", 
        "KW_TINYINT", "KW_TO", "KW_TOUCH", "KW_TRAILING", "KW_TRANSACTION", 
        "KW_TRANSACTIONAL", "KW_TRANSACTIONS", "KW_TRANSFORM", "KW_TRIGGER", 
        "KW_TRIM", "KW_TRUE", "KW_TRUNCATE", "KW_TYPE", "KW_UNARCHIVE", 
        "KW_UNBOUNDED", "KW_UNDO", "KW_UNION", "KW_UNIONTYPE", "KW_UNIQUE", 
        "KW_UNIQUEJOIN", "KW_UNKNOWN", "KW_UNLOCK", "KW_UNMANAGED", "KW_UNSET", 
        "KW_UNSIGNED", "KW_UPDATE", "KW_URI", "KW_URL", "KW_USE", "KW_USER", 
        "KW_USING", "KW_UTC", "KW_UTCTIMESTAMP", "KW_VALIDATE", "KW_VALUES", 
        "KW_VALUE_TYPE", "KW_VARCHAR", "KW_VECTORIZATION", "KW_VIEW", "KW_VIEWS", 
        "KW_WAIT", "KW_WEEK", "KW_WHEN", "KW_WHERE", "KW_WHILE", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WORK", "KW_WORKLOAD", "KW_WRITE", "KW_YEAR", 
        "KW_ZONE", "DOT", "COLON", "COMMA", "SEMICOLON", "LPAREN", "RPAREN", 
        "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "UNDERLINE_SIGN", "EQUAL", 
        "EQUAL_NS", "NOTEQUAL", "LESSTHANOREQUALTO", "LESSTHAN", "GREATERTHANOREQUALTO", 
        "GREATERTHAN", "DIVIDE", "PLUS", "MINUS", "STAR", "MOD", "DIV", 
        "AMPERSAND", "TILDE", "BITWISEOR", "CONCATENATE", "BITWISEXOR", 
        "QUESTION", "DOLLAR", "StringLiteral", "CharSetLiteral", "IntegralLiteral", 
        "NumberLiteral", "ByteLengthLiteral", "Number", "Identifier", "CharSetName", 
        "WHITE_SPACE", "LINE_COMMENT", "QUERY_HINT", "SHOW_HINT", "HIDDEN_HINT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "KW_ABORT", "KW_ACTIVATE", "KW_ACTIVE", "KW_ADD", "KW_ADMIN", "KW_AFTER", 
        "KW_ALL", "KW_ALLOC_FRACTION", "KW_ALTER", "KW_ANALYZE", "KW_AND", 
        "KW_ANTI", "KW_ANY", "KW_APPLICATION", "KW_ARCHIVE", "KW_ARRAY", 
        "KW_AS", "KW_ASC", "KW_AST", "KW_AT", "KW_AUTHORIZATION", "KW_AUTOCOMMIT", 
        "KW_BATCH", "KW_BEFORE", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", 
        "KW_BOOLEAN", "KW_BOTH", "KW_BUCKET", "KW_BUCKETS", "KW_BY", "KW_CACHE", 
        "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CBO", "KW_CHANGE", "KW_CHAR", 
        "KW_CHECK", "KW_CLUSTER", "KW_CLUSTERED", "KW_CLUSTERSTATUS", "KW_COLLECTION", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", "KW_COMPACT", 
        "KW_COMPACTIONS", "KW_COMPACT_ID", "KW_COMPUTE", "KW_CONCATENATE", 
        "KW_CONF", "KW_CONSTRAINT", "KW_CONTINUE", "KW_COST", "KW_CREATE", 
        "KW_CRON", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURRENT_DATE", 
        "KW_CURRENT_TIMESTAMP", "KW_CURSOR", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DATACONNECTOR", "KW_DATACONNECTORS", "KW_DATE", "KW_DATETIME", 
        "KW_DAY", "KW_DAYOFWEEK", "KW_DBPROPERTIES", "KW_DCPROPERTIES", 
        "KW_DDL", "KW_DEBUG", "KW_DECIMAL", "KW_DEFAULT", "KW_DEFERRED", 
        "KW_DEFINED", "KW_DELETE", "KW_DELIMITED", "KW_DEPENDENCY", "KW_DESC", 
        "KW_DESCRIBE", "KW_DETAIL", "KW_DIRECTORIES", "KW_DIRECTORY", "KW_DISABLE", 
        "KW_DISTINCT", "KW_DISTRIBUTE", "KW_DISTRIBUTED", "KW_DO", "KW_DOUBLE", 
        "KW_DOW", "KW_DROP", "KW_DUMP", "KW_ELEM_TYPE", "KW_ELSE", "KW_ENABLE", 
        "KW_END", "KW_ENFORCED", "KW_ESCAPED", "KW_EVERY", "KW_EXCEPT", 
        "KW_EXCHANGE", "KW_EXCLUSIVE", "KW_EXECUTE", "KW_EXECUTED", "KW_EXISTS", 
        "KW_EXPIRE_SNAPSHOTS", "KW_EXPLAIN", "KW_EXPORT", "KW_EXPRESSION", 
        "KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FETCH", 
        "KW_FIELDS", "KW_FILE", "KW_FILEFORMAT", "KW_FIRST", "KW_FLOAT", 
        "KW_FLOOR", "KW_FOLLOWING", "KW_FOR", "KW_FORCE", "KW_FOREIGN", 
        "KW_FORMAT", "KW_FORMATTED", "KW_FROM", "KW_FULL", "KW_FUNCTION", 
        "KW_FUNCTIONS", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HAVING", 
        "KW_HDFS", "KW_HOLD_DDLTIME", "KW_HOUR", "KW_IDXPROPERTIES", "KW_IF", 
        "KW_IGNORE", "KW_IMPORT", "KW_IN", "KW_INDEX", "KW_INDEXES", "KW_INNER", 
        "KW_INPATH", "KW_INPUTDRIVER", "KW_INPUTFORMAT", "KW_INSERT", "KW_INT", 
        "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_ISOLATION", 
        "KW_ITEMS", "KW_JAR", "KW_JOIN", "KW_JOINCOST", "KW_KEY", "KW_KEYS", 
        "KW_KEY_TYPE", "KW_KILL", "KW_LAST", "KW_LATERAL", "KW_LEADING", 
        "KW_LEFT", "KW_LESS", "KW_LEVEL", "KW_LIKE", "KW_LIMIT", "KW_LINES", 
        "KW_LOAD", "KW_LOCAL", "KW_LOCATION", "KW_LOCK", "KW_LOCKS", "KW_LOGICAL", 
        "KW_LONG", "KW_MACRO", "KW_MANAGED", "KW_MANAGEDLOCATION", "KW_MANAGEMENT", 
        "KW_MAP", "KW_MAPJOIN", "KW_MAPPING", "KW_MATCHED", "KW_MATERIALIZED", 
        "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MONTH", 
        "KW_MORE", "KW_MOVE", "KW_MSCK", "KW_NONE", "KW_NORELY", "KW_NOSCAN", 
        "KW_NOT", "KW_NOVALIDATE", "KW_NO_DROP", "KW_NULL", "KW_NULLS", 
        "KW_OF", "KW_OFFLINE", "KW_OFFSET", "KW_ON", "KW_ONLY", "KW_OPERATOR", 
        "KW_OPTION", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTDRIVER", 
        "KW_OUTPUTFORMAT", "KW_OVER", "KW_OVERWRITE", "KW_OWNER", "KW_PARTITION", 
        "KW_PARTITIONED", "KW_PARTITIONS", "KW_PATH", "KW_PERCENT", "KW_PKFK_JOIN", 
        "KW_PLAN", "KW_PLANS", "KW_PLUS", "KW_POOL", "KW_PRECEDING", "KW_PRECISION", 
        "KW_PREPARE", "KW_PRESERVE", "KW_PRIMARY", "KW_PRINCIPALS", "KW_PROCEDURE", 
        "KW_PROTECTION", "KW_PURGE", "KW_QUALIFY", "KW_QUARTER", "KW_QUERY", 
        "KW_QUERY_PARALLELISM", "KW_RANGE", "KW_READ", "KW_READONLY", "KW_READS", 
        "KW_REAL", "KW_REBUILD", "KW_RECORDREADER", "KW_RECORDWRITER", "KW_REDUCE", 
        "KW_REFERENCES", "KW_REGEXP", "KW_RELOAD", "KW_RELY", "KW_REMOTE", 
        "KW_RENAME", "KW_REOPTIMIZATION", "KW_REPAIR", "KW_REPL", "KW_REPLACE", 
        "KW_REPLICATION", "KW_RESOURCE", "KW_RESPECT", "KW_RESTRICT", "KW_REVOKE", 
        "KW_REWRITE", "KW_RIGHT", "KW_RLIKE", "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", 
        "KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SCHEDULED", "KW_SCHEDULING_POLICY", 
        "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SELECT", "KW_SEMI", 
        "KW_SERDE", "KW_SERDEPROPERTIES", "KW_SERVER", "KW_SET", "KW_SETS", 
        "KW_SET_CURRENT_SNAPSHOT", "KW_SHARED", "KW_SHOW", "KW_SHOW_DATABASE", 
        "KW_SKEWED", "KW_SMALLINT", "KW_SNAPSHOT", "KW_SOME", "KW_SORT", 
        "KW_SORTED", "KW_SPEC", "KW_SSL", "KW_START", "KW_STATISTICS", "KW_STATUS", 
        "KW_STORED", "KW_STREAMTABLE", "KW_STRING", "KW_STRUCT", "KW_SUMMARY", 
        "KW_SYNC", "KW_SYSTEM_TIME", "KW_SYSTEM_VERSION", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TBLPROPERTIES", "KW_TEMPORARY", "KW_TERMINATED", 
        "KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMPLOCALTZ", "KW_TIMESTAMPTZ", 
        "KW_TINYINT", "KW_TO", "KW_TOUCH", "KW_TRAILING", "KW_TRANSACTION", 
        "KW_TRANSACTIONAL", "KW_TRANSACTIONS", "KW_TRANSFORM", "KW_TRIGGER", 
        "KW_TRIM", "KW_TRUE", "KW_TRUNCATE", "KW_TYPE", "KW_UNARCHIVE", 
        "KW_UNBOUNDED", "KW_UNDO", "KW_UNION", "KW_UNIONTYPE", "KW_UNIQUE", 
        "KW_UNIQUEJOIN", "KW_UNKNOWN", "KW_UNLOCK", "KW_UNMANAGED", "KW_UNSET", 
        "KW_UNSIGNED", "KW_UPDATE", "KW_URI", "KW_URL", "KW_USE", "KW_USER", 
        "KW_USING", "KW_UTC", "KW_UTCTIMESTAMP", "KW_VALIDATE", "KW_VALUES", 
        "KW_VALUE_TYPE", "KW_VARCHAR", "KW_VECTORIZATION", "KW_VIEW", "KW_VIEWS", 
        "KW_WAIT", "KW_WEEK", "KW_WHEN", "KW_WHERE", "KW_WHILE", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WORK", "KW_WORKLOAD", "KW_WRITE", "KW_YEAR", 
        "KW_ZONE", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
        "Y", "Z", "DOT", "COLON", "COMMA", "SEMICOLON", "LPAREN", "RPAREN", 
        "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "UNDERLINE_SIGN", "EQUAL", 
        "EQUAL_NS", "NOTEQUAL", "LESSTHANOREQUALTO", "LESSTHAN", "GREATERTHANOREQUALTO", 
        "GREATERTHAN", "DIVIDE", "PLUS", "MINUS", "STAR", "MOD", "DIV", 
        "AMPERSAND", "TILDE", "BITWISEOR", "CONCATENATE", "BITWISEXOR", 
        "QUESTION", "DOLLAR", "StringLiteral", "CharSetLiteral", "IntegralLiteral", 
        "NumberLiteral", "ByteLengthLiteral", "Number", "Identifier", "QuotedIdentifier", 
        "Letter", "HexDigit", "Digit", "Exponent", "RegexComponent", "CharSetName", 
        "WHITE_SPACE", "LINE_COMMENT", "QUERY_HINT", "SHOW_HINT", "HIDDEN_HINT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, HiveSQLLexer._ATN, HiveSQLLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "HiveSQL.g4"; }

    public get literalNames(): (string | null)[] { return HiveSQLLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return HiveSQLLexer.symbolicNames; }
    public get ruleNames(): string[] { return HiveSQLLexer.ruleNames; }

    public get serializedATN(): number[] { return HiveSQLLexer._serializedATN; }

    public get channelNames(): string[] { return HiveSQLLexer.channelNames; }

    public get modeNames(): string[] { return HiveSQLLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,426,4225,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,
        2,340,7,340,2,341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,
        7,345,2,346,7,346,2,347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,
        2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,2,355,7,355,2,356,
        7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,2,361,7,361,
        2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,2,367,
        7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
        2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,
        7,378,2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,
        2,384,7,384,2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,
        7,389,2,390,7,390,2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,
        2,395,7,395,2,396,7,396,2,397,7,397,2,398,7,398,2,399,7,399,2,400,
        7,400,2,401,7,401,2,402,7,402,2,403,7,403,2,404,7,404,2,405,7,405,
        2,406,7,406,2,407,7,407,2,408,7,408,2,409,7,409,2,410,7,410,2,411,
        7,411,2,412,7,412,2,413,7,413,2,414,7,414,2,415,7,415,2,416,7,416,
        2,417,7,417,2,418,7,418,2,419,7,419,2,420,7,420,2,421,7,421,2,422,
        7,422,2,423,7,423,2,424,7,424,2,425,7,425,2,426,7,426,2,427,7,427,
        2,428,7,428,2,429,7,429,2,430,7,430,2,431,7,431,2,432,7,432,2,433,
        7,433,2,434,7,434,2,435,7,435,2,436,7,436,2,437,7,437,2,438,7,438,
        2,439,7,439,2,440,7,440,2,441,7,441,2,442,7,442,2,443,7,443,2,444,
        7,444,2,445,7,445,2,446,7,446,2,447,7,447,2,448,7,448,2,449,7,449,
        2,450,7,450,2,451,7,451,2,452,7,452,2,453,7,453,2,454,7,454,2,455,
        7,455,2,456,7,456,2,457,7,457,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
        3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,
        6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,
        10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,
        13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,
        14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,
        16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,
        20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
        20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,
        23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
        27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,
        29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
        31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,
        35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,
        38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,
        42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,
        45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,
        47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
        49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,
        50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,
        51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,
        52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,
        54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,
        57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,
        59,1,59,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,
        61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
        62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,
        63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,
        64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
        66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,
        68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,
        69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,71,1,
        71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,3,72,1470,
        8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
        1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,
        1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,3,78,1529,8,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,3,78,1539,8,78,1,79,1,79,1,79,1,79,1,79,1,79,
        1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,
        1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,
        1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,
        1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,
        1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,
        1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,
        1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1645,8,90,1,91,1,91,1,91,
        1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,
        1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,
        1,93,1,93,1,93,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,
        1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,
        1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,3,101,1728,8,101,1,102,1,102,1,102,1,102,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
        1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,115,
        1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,1,116,1,116,1,116,
        1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,
        1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,121,1,121,
        1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,124,
        1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,
        1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,1,128,1,128,1,128,1,128,1,129,1,129,
        1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
        1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,
        1,133,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
        1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,138,1,138,
        1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,
        1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,3,143,
        2054,8,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,146,1,146,1,146,
        1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,1,147,1,147,
        1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,
        1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,
        1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,
        1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,3,156,2156,8,156,1,157,1,157,1,157,1,157,1,157,
        1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,
        1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,
        1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,164,1,164,
        1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,
        1,165,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,168,
        1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,170,
        1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,173,1,173,
        1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,
        1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,177,1,177,1,177,
        1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,
        1,179,1,179,1,179,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,182,
        1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,184,1,184,1,184,1,184,
        1,184,1,184,1,184,1,184,1,185,1,185,1,185,1,185,1,185,1,186,1,186,
        1,186,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
        1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,
        1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,191,
        1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,
        1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,193,1,193,1,193,
        1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,196,
        1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,
        1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,3,198,2447,
        8,198,1,199,1,199,1,199,1,199,1,199,1,199,3,199,2455,8,199,1,200,
        1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,202,1,202,
        1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,
        1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,
        1,206,1,206,1,206,1,206,1,206,3,206,2496,8,206,1,207,1,207,1,207,
        1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,
        1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,
        1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,
        1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,215,
        1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,1,216,
        1,216,1,216,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,
        1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,
        1,221,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,
        1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,
        1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,
        1,224,1,224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,
        1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,226,1,227,1,227,
        1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,
        1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,
        1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,230,1,230,
        1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,
        1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,
        1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,235,
        1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,237,1,237,
        1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,
        1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,239,
        1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,240,1,240,
        1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,242,
        1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,243,
        1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,
        1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,
        1,244,1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,
        1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,
        1,247,1,248,1,248,1,248,1,248,1,248,1,248,1,249,1,249,1,249,1,249,
        1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,
        1,249,1,249,1,249,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,
        1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,252,
        1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,253,1,253,1,254,
        1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,1,255,
        1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,
        1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,257,1,257,1,257,1,257,
        1,257,1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,
        1,258,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,
        1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,261,1,261,1,261,
        1,261,1,261,1,261,1,261,1,262,1,262,1,262,1,262,1,262,1,263,1,263,
        1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,264,1,264,1,264,
        1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,
        1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,266,1,266,1,266,1,266,
        1,266,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,268,1,268,1,268,
        1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,
        1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,1,270,1,270,1,270,
        1,270,1,270,1,271,1,271,1,271,1,271,1,271,1,271,1,271,1,271,1,272,
        1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,
        1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,
        1,274,1,275,1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,276,1,276,
        1,276,1,276,1,277,1,277,1,277,1,277,1,277,1,278,1,278,1,278,1,278,
        1,278,1,278,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,
        1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,281,1,281,1,281,1,281,
        1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,
        3,287,3150,8,287,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,289,
        1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,291,
        1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,
        1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,292,1,292,
        1,293,1,293,1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,
        1,296,1,296,1,296,1,296,1,297,1,297,1,297,1,297,1,297,1,298,1,298,
        1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,
        1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,
        1,300,1,300,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,1,301,
        1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,303,1,303,
        1,303,1,303,1,303,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,305,
        1,305,1,305,1,305,1,305,1,306,1,306,1,306,1,306,1,307,1,307,1,307,
        1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,308,1,308,1,308,
        1,308,1,308,1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,310,
        1,310,1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,
        1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,312,1,312,1,312,1,312,
        1,312,1,312,1,312,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,314,
        1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,315,1,315,1,315,1,315,
        1,315,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,
        1,316,1,316,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,
        1,317,1,317,1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,1,318,
        1,318,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,1,320,
        1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,321,1,321,
        1,321,1,321,1,321,1,321,1,321,1,321,1,321,1,321,1,321,1,321,1,321,
        1,321,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,
        1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,323,
        1,324,1,324,1,324,1,324,1,324,1,325,1,325,1,325,1,325,1,325,1,326,
        1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,327,1,327,
        1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,
        1,327,1,327,1,327,1,327,1,328,1,328,1,328,1,328,1,328,1,328,1,328,
        1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,329,1,329,1,329,
        1,329,1,329,1,329,1,329,1,329,1,330,1,330,1,330,1,331,1,331,1,331,
        1,331,1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,
        1,332,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,
        1,333,1,333,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,
        1,334,1,334,1,334,1,334,1,334,1,335,1,335,1,335,1,335,1,335,1,335,
        1,335,1,335,1,335,1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,
        1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,1,337,1,337,1,337,
        1,337,1,337,1,337,1,338,1,338,1,338,1,338,1,338,1,339,1,339,1,339,
        1,339,1,339,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,340,
        1,341,1,341,1,341,1,341,1,341,1,342,1,342,1,342,1,342,1,342,1,342,
        1,342,1,342,1,342,1,342,1,343,1,343,1,343,1,343,1,343,1,343,1,343,
        1,343,1,343,1,343,1,344,1,344,1,344,1,344,1,344,1,345,1,345,1,345,
        1,345,1,345,1,345,1,346,1,346,1,346,1,346,1,346,1,346,1,346,1,346,
        1,346,1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,348,1,348,
        1,348,1,348,1,348,1,348,1,348,1,348,1,348,1,348,1,348,1,349,1,349,
        1,349,1,349,1,349,1,349,1,349,1,349,1,350,1,350,1,350,1,350,1,350,
        1,350,1,350,1,351,1,351,1,351,1,351,1,351,1,351,1,351,1,351,1,351,
        1,351,1,352,1,352,1,352,1,352,1,352,1,352,1,353,1,353,1,353,1,353,
        1,353,1,353,1,353,1,353,1,353,1,354,1,354,1,354,1,354,1,354,1,354,
        1,354,1,355,1,355,1,355,1,355,1,356,1,356,1,356,1,356,1,357,1,357,
        1,357,1,357,1,358,1,358,1,358,1,358,1,358,1,359,1,359,1,359,1,359,
        1,359,1,359,1,360,1,360,1,360,1,360,1,361,1,361,1,361,1,361,1,361,
        1,361,1,361,1,361,1,361,1,361,1,361,1,361,1,361,1,362,1,362,1,362,
        1,362,1,362,1,362,1,362,1,362,1,362,1,363,1,363,1,363,1,363,1,363,
        1,363,1,363,1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,365,
        1,365,1,365,1,365,1,365,1,365,1,365,1,365,1,366,1,366,1,366,1,366,
        1,366,1,366,1,366,1,366,1,366,1,366,1,366,1,366,1,366,1,366,1,367,
        1,367,1,367,1,367,1,367,1,368,1,368,1,368,1,368,1,368,1,368,1,369,
        1,369,1,369,1,369,1,369,1,370,1,370,1,370,1,370,1,370,3,370,3829,
        8,370,1,371,1,371,1,371,1,371,1,371,1,372,1,372,1,372,1,372,1,372,
        1,372,1,373,1,373,1,373,1,373,1,373,1,373,1,374,1,374,1,374,1,374,
        1,374,1,374,1,374,1,375,1,375,1,375,1,375,1,375,1,376,1,376,1,376,
        1,376,1,376,1,376,1,376,1,377,1,377,1,377,1,377,1,377,1,378,1,378,
        1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,379,1,379,1,379,1,379,
        1,379,1,379,1,380,1,380,1,380,1,380,1,380,3,380,3892,8,380,1,381,
        1,381,1,381,1,381,1,381,1,382,1,382,1,383,1,383,1,384,1,384,1,385,
        1,385,1,386,1,386,1,387,1,387,1,388,1,388,1,389,1,389,1,390,1,390,
        1,391,1,391,1,392,1,392,1,393,1,393,1,394,1,394,1,395,1,395,1,396,
        1,396,1,397,1,397,1,398,1,398,1,399,1,399,1,400,1,400,1,401,1,401,
        1,402,1,402,1,403,1,403,1,404,1,404,1,405,1,405,1,406,1,406,1,407,
        1,407,1,408,1,408,1,409,1,409,1,410,1,410,1,411,1,411,1,412,1,412,
        1,413,1,413,1,414,1,414,1,415,1,415,1,416,1,416,1,417,1,417,1,418,
        1,418,1,419,1,419,1,419,3,419,3976,8,419,1,420,1,420,1,420,1,420,
        1,421,1,421,1,421,1,421,3,421,3986,8,421,1,422,1,422,1,422,1,423,
        1,423,1,424,1,424,1,424,1,425,1,425,1,426,1,426,1,427,1,427,1,428,
        1,428,1,429,1,429,1,430,1,430,1,431,1,431,1,431,1,431,1,432,1,432,
        1,433,1,433,1,434,1,434,1,435,1,435,1,435,1,436,1,436,1,437,1,437,
        1,438,1,438,1,439,1,439,1,439,1,439,5,439,4031,8,439,10,439,12,439,
        4034,9,439,1,439,1,439,1,439,1,439,1,439,5,439,4041,8,439,10,439,
        12,439,4044,9,439,1,439,4,439,4047,8,439,11,439,12,439,4048,1,440,
        1,440,1,440,1,440,1,440,4,440,4056,8,440,11,440,12,440,4057,3,440,
        4060,8,440,1,441,4,441,4063,8,441,11,441,12,441,4064,1,441,1,441,
        1,442,1,442,3,442,4071,8,442,1,442,1,442,1,443,4,443,4076,8,443,
        11,443,12,443,4077,1,443,1,443,1,444,4,444,4083,8,444,11,444,12,
        444,4084,1,444,1,444,5,444,4089,8,444,10,444,12,444,4092,9,444,1,
        444,3,444,4095,8,444,1,444,3,444,4098,8,444,1,445,1,445,3,445,4102,
        8,445,1,445,1,445,1,445,5,445,4107,8,445,10,445,12,445,4110,9,445,
        1,445,1,445,1,445,4,445,4115,8,445,11,445,12,445,4116,1,445,1,445,
        3,445,4121,8,445,1,446,1,446,1,446,1,446,5,446,4127,8,446,10,446,
        12,446,4130,9,446,1,446,1,446,1,447,1,447,1,448,1,448,1,449,1,449,
        1,450,1,450,1,450,3,450,4143,8,450,1,450,4,450,4146,8,450,11,450,
        12,450,4147,1,451,1,451,1,451,1,451,1,451,1,451,1,451,1,451,1,451,
        1,451,1,451,1,451,1,451,1,451,1,451,1,451,3,451,4166,8,451,1,452,
        1,452,1,452,1,452,4,452,4172,8,452,11,452,12,452,4173,1,453,1,453,
        1,453,1,453,1,454,1,454,1,454,1,454,5,454,4184,8,454,10,454,12,454,
        4187,9,454,1,454,1,454,1,455,1,455,3,455,4193,8,455,1,456,1,456,
        1,456,1,456,1,456,1,456,5,456,4201,8,456,10,456,12,456,4204,9,456,
        1,456,1,456,1,456,1,456,1,456,1,457,1,457,1,457,1,457,1,457,5,457,
        4216,8,457,10,457,12,457,4219,9,457,1,457,1,457,1,457,1,457,1,457,
        2,4202,4217,0,458,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
        21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
        43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,
        65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,
        87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,
        54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,
        127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,
        73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,
        165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,
        92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,
        101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,
        109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,233,
        117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,249,
        125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,265,
        133,267,134,269,135,271,136,273,137,275,138,277,139,279,140,281,
        141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,297,
        149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,313,
        157,315,158,317,159,319,160,321,161,323,162,325,163,327,164,329,
        165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,345,
        173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,361,
        181,363,182,365,183,367,184,369,185,371,186,373,187,375,188,377,
        189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,393,
        197,395,198,397,199,399,200,401,201,403,202,405,203,407,204,409,
        205,411,206,413,207,415,208,417,209,419,210,421,211,423,212,425,
        213,427,214,429,215,431,216,433,217,435,218,437,219,439,220,441,
        221,443,222,445,223,447,224,449,225,451,226,453,227,455,228,457,
        229,459,230,461,231,463,232,465,233,467,234,469,235,471,236,473,
        237,475,238,477,239,479,240,481,241,483,242,485,243,487,244,489,
        245,491,246,493,247,495,248,497,249,499,250,501,251,503,252,505,
        253,507,254,509,255,511,256,513,257,515,258,517,259,519,260,521,
        261,523,262,525,263,527,264,529,265,531,266,533,267,535,268,537,
        269,539,270,541,271,543,272,545,273,547,274,549,275,551,276,553,
        277,555,278,557,279,559,280,561,281,563,282,565,283,567,284,569,
        285,571,286,573,287,575,288,577,289,579,290,581,291,583,292,585,
        293,587,294,589,295,591,296,593,297,595,298,597,299,599,300,601,
        301,603,302,605,303,607,304,609,305,611,306,613,307,615,308,617,
        309,619,310,621,311,623,312,625,313,627,314,629,315,631,316,633,
        317,635,318,637,319,639,320,641,321,643,322,645,323,647,324,649,
        325,651,326,653,327,655,328,657,329,659,330,661,331,663,332,665,
        333,667,334,669,335,671,336,673,337,675,338,677,339,679,340,681,
        341,683,342,685,343,687,344,689,345,691,346,693,347,695,348,697,
        349,699,350,701,351,703,352,705,353,707,354,709,355,711,356,713,
        357,715,358,717,359,719,360,721,361,723,362,725,363,727,364,729,
        365,731,366,733,367,735,368,737,369,739,370,741,371,743,372,745,
        373,747,374,749,375,751,376,753,377,755,378,757,379,759,380,761,
        381,763,382,765,0,767,0,769,0,771,0,773,0,775,0,777,0,779,0,781,
        0,783,0,785,0,787,0,789,0,791,0,793,0,795,0,797,0,799,0,801,0,803,
        0,805,0,807,0,809,0,811,0,813,0,815,0,817,383,819,384,821,385,823,
        386,825,387,827,388,829,389,831,390,833,391,835,392,837,393,839,
        394,841,395,843,396,845,397,847,398,849,399,851,400,853,401,855,
        402,857,403,859,404,861,405,863,406,865,407,867,408,869,409,871,
        410,873,411,875,412,877,413,879,414,881,415,883,416,885,417,887,
        418,889,419,891,420,893,0,895,0,897,0,899,0,901,0,903,0,905,421,
        907,422,909,423,911,424,913,425,915,426,1,0,36,2,0,65,65,97,97,2,
        0,66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,
        2,0,70,70,102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,
        105,105,2,0,74,74,106,106,2,0,75,75,107,107,2,0,76,76,108,108,2,
        0,77,77,109,109,2,0,78,78,110,110,2,0,79,79,111,111,2,0,80,80,112,
        112,2,0,81,81,113,113,2,0,82,82,114,114,2,0,83,83,115,115,2,0,84,
        84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,2,0,87,87,119,119,
        2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,2,0,39,39,
        92,92,2,0,34,34,92,92,3,0,76,76,83,83,89,89,4,0,66,66,71,71,75,75,
        77,77,1,0,96,96,2,0,65,90,97,122,3,0,48,57,65,90,95,95,3,0,45,46,
        58,58,95,95,3,0,9,10,13,13,32,32,2,0,10,10,13,13,4260,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
        23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
        33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
        43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
        53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,
        63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,
        73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,
        83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,
        93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,
        0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,
        0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,
        121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,
        0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,
        1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,
        0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,
        0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,
        167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,
        0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,
        1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,
        0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,
        0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,
        213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,
        0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,
        1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,
        0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,
        0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,
        259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,
        0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,
        1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,
        0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,
        0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,
        305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,
        0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,
        1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,
        0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,
        0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,
        351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,
        0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,
        1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,
        0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,
        0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,
        397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,
        0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,
        1,0,0,0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,
        0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,
        0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,
        443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,
        0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,
        1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,
        0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,
        0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,
        489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,
        0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,
        1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,
        0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,
        0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,
        535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,
        0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,
        1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,
        0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,
        0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,
        581,1,0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,
        0,0,0,591,1,0,0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,
        1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,
        0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,
        0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,
        627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,1,0,
        0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,645,
        1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,
        0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,
        0,0,0,0,665,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,
        673,1,0,0,0,0,675,1,0,0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,
        0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,691,
        1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,0,697,1,0,0,0,0,699,1,0,0,0,
        0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,0,0,0,0,707,1,0,0,0,0,709,1,
        0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,715,1,0,0,0,0,717,1,0,0,0,0,
        719,1,0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,725,1,0,0,0,0,727,1,0,
        0,0,0,729,1,0,0,0,0,731,1,0,0,0,0,733,1,0,0,0,0,735,1,0,0,0,0,737,
        1,0,0,0,0,739,1,0,0,0,0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,0,0,
        0,747,1,0,0,0,0,749,1,0,0,0,0,751,1,0,0,0,0,753,1,0,0,0,0,755,1,
        0,0,0,0,757,1,0,0,0,0,759,1,0,0,0,0,761,1,0,0,0,0,763,1,0,0,0,0,
        817,1,0,0,0,0,819,1,0,0,0,0,821,1,0,0,0,0,823,1,0,0,0,0,825,1,0,
        0,0,0,827,1,0,0,0,0,829,1,0,0,0,0,831,1,0,0,0,0,833,1,0,0,0,0,835,
        1,0,0,0,0,837,1,0,0,0,0,839,1,0,0,0,0,841,1,0,0,0,0,843,1,0,0,0,
        0,845,1,0,0,0,0,847,1,0,0,0,0,849,1,0,0,0,0,851,1,0,0,0,0,853,1,
        0,0,0,0,855,1,0,0,0,0,857,1,0,0,0,0,859,1,0,0,0,0,861,1,0,0,0,0,
        863,1,0,0,0,0,865,1,0,0,0,0,867,1,0,0,0,0,869,1,0,0,0,0,871,1,0,
        0,0,0,873,1,0,0,0,0,875,1,0,0,0,0,877,1,0,0,0,0,879,1,0,0,0,0,881,
        1,0,0,0,0,883,1,0,0,0,0,885,1,0,0,0,0,887,1,0,0,0,0,889,1,0,0,0,
        0,891,1,0,0,0,0,905,1,0,0,0,0,907,1,0,0,0,0,909,1,0,0,0,0,911,1,
        0,0,0,0,913,1,0,0,0,0,915,1,0,0,0,1,917,1,0,0,0,3,923,1,0,0,0,5,
        932,1,0,0,0,7,939,1,0,0,0,9,943,1,0,0,0,11,949,1,0,0,0,13,955,1,
        0,0,0,15,959,1,0,0,0,17,974,1,0,0,0,19,980,1,0,0,0,21,988,1,0,0,
        0,23,992,1,0,0,0,25,997,1,0,0,0,27,1001,1,0,0,0,29,1013,1,0,0,0,
        31,1021,1,0,0,0,33,1027,1,0,0,0,35,1030,1,0,0,0,37,1034,1,0,0,0,
        39,1038,1,0,0,0,41,1041,1,0,0,0,43,1055,1,0,0,0,45,1066,1,0,0,0,
        47,1075,1,0,0,0,49,1082,1,0,0,0,51,1090,1,0,0,0,53,1097,1,0,0,0,
        55,1104,1,0,0,0,57,1112,1,0,0,0,59,1117,1,0,0,0,61,1124,1,0,0,0,
        63,1132,1,0,0,0,65,1135,1,0,0,0,67,1141,1,0,0,0,69,1149,1,0,0,0,
        71,1154,1,0,0,0,73,1159,1,0,0,0,75,1163,1,0,0,0,77,1170,1,0,0,0,
        79,1175,1,0,0,0,81,1181,1,0,0,0,83,1189,1,0,0,0,85,1199,1,0,0,0,
        87,1213,1,0,0,0,89,1224,1,0,0,0,91,1231,1,0,0,0,93,1239,1,0,0,0,
        95,1247,1,0,0,0,97,1254,1,0,0,0,99,1262,1,0,0,0,101,1274,1,0,0,0,
        103,1287,1,0,0,0,105,1295,1,0,0,0,107,1307,1,0,0,0,109,1312,1,0,
        0,0,111,1323,1,0,0,0,113,1332,1,0,0,0,115,1337,1,0,0,0,117,1344,
        1,0,0,0,119,1349,1,0,0,0,121,1355,1,0,0,0,123,1360,1,0,0,0,125,1368,
        1,0,0,0,127,1381,1,0,0,0,129,1399,1,0,0,0,131,1406,1,0,0,0,133,1411,
        1,0,0,0,135,1420,1,0,0,0,137,1430,1,0,0,0,139,1440,1,0,0,0,141,1451,
        1,0,0,0,143,1456,1,0,0,0,145,1465,1,0,0,0,147,1471,1,0,0,0,149,1484,
        1,0,0,0,151,1497,1,0,0,0,153,1510,1,0,0,0,155,1514,1,0,0,0,157,1538,
        1,0,0,0,159,1540,1,0,0,0,161,1548,1,0,0,0,163,1557,1,0,0,0,165,1565,
        1,0,0,0,167,1572,1,0,0,0,169,1582,1,0,0,0,171,1593,1,0,0,0,173,1598,
        1,0,0,0,175,1607,1,0,0,0,177,1614,1,0,0,0,179,1626,1,0,0,0,181,1636,
        1,0,0,0,183,1646,1,0,0,0,185,1655,1,0,0,0,187,1666,1,0,0,0,189,1678,
        1,0,0,0,191,1681,1,0,0,0,193,1688,1,0,0,0,195,1698,1,0,0,0,197,1703,
        1,0,0,0,199,1708,1,0,0,0,201,1715,1,0,0,0,203,1720,1,0,0,0,205,1729,
        1,0,0,0,207,1733,1,0,0,0,209,1742,1,0,0,0,211,1750,1,0,0,0,213,1756,
        1,0,0,0,215,1763,1,0,0,0,217,1772,1,0,0,0,219,1782,1,0,0,0,221,1790,
        1,0,0,0,223,1799,1,0,0,0,225,1806,1,0,0,0,227,1823,1,0,0,0,229,1831,
        1,0,0,0,231,1838,1,0,0,0,233,1849,1,0,0,0,235,1858,1,0,0,0,237,1867,
        1,0,0,0,239,1875,1,0,0,0,241,1881,1,0,0,0,243,1887,1,0,0,0,245,1894,
        1,0,0,0,247,1899,1,0,0,0,249,1910,1,0,0,0,251,1916,1,0,0,0,253,1922,
        1,0,0,0,255,1928,1,0,0,0,257,1938,1,0,0,0,259,1942,1,0,0,0,261,1948,
        1,0,0,0,263,1956,1,0,0,0,265,1963,1,0,0,0,267,1973,1,0,0,0,269,1978,
        1,0,0,0,271,1983,1,0,0,0,273,1992,1,0,0,0,275,2002,1,0,0,0,277,2008,
        1,0,0,0,279,2014,1,0,0,0,281,2023,1,0,0,0,283,2030,1,0,0,0,285,2035,
        1,0,0,0,287,2048,1,0,0,0,289,2055,1,0,0,0,291,2069,1,0,0,0,293,2072,
        1,0,0,0,295,2079,1,0,0,0,297,2086,1,0,0,0,299,2089,1,0,0,0,301,2095,
        1,0,0,0,303,2103,1,0,0,0,305,2109,1,0,0,0,307,2116,1,0,0,0,309,2128,
        1,0,0,0,311,2140,1,0,0,0,313,2147,1,0,0,0,315,2157,1,0,0,0,317,2167,
        1,0,0,0,319,2176,1,0,0,0,321,2181,1,0,0,0,323,2184,1,0,0,0,325,2194,
        1,0,0,0,327,2200,1,0,0,0,329,2204,1,0,0,0,331,2209,1,0,0,0,333,2218,
        1,0,0,0,335,2222,1,0,0,0,337,2227,1,0,0,0,339,2233,1,0,0,0,341,2238,
        1,0,0,0,343,2243,1,0,0,0,345,2251,1,0,0,0,347,2259,1,0,0,0,349,2264,
        1,0,0,0,351,2269,1,0,0,0,353,2275,1,0,0,0,355,2280,1,0,0,0,357,2286,
        1,0,0,0,359,2292,1,0,0,0,361,2297,1,0,0,0,363,2303,1,0,0,0,365,2312,
        1,0,0,0,367,2317,1,0,0,0,369,2323,1,0,0,0,371,2331,1,0,0,0,373,2336,
        1,0,0,0,375,2342,1,0,0,0,377,2350,1,0,0,0,379,2366,1,0,0,0,381,2377,
        1,0,0,0,383,2381,1,0,0,0,385,2389,1,0,0,0,387,2397,1,0,0,0,389,2405,
        1,0,0,0,391,2418,1,0,0,0,393,2424,1,0,0,0,395,2433,1,0,0,0,397,2439,
        1,0,0,0,399,2448,1,0,0,0,401,2456,1,0,0,0,403,2461,1,0,0,0,405,2466,
        1,0,0,0,407,2471,1,0,0,0,409,2476,1,0,0,0,411,2483,1,0,0,0,413,2495,
        1,0,0,0,415,2497,1,0,0,0,417,2508,1,0,0,0,419,2519,1,0,0,0,421,2524,
        1,0,0,0,423,2530,1,0,0,0,425,2533,1,0,0,0,427,2544,1,0,0,0,429,2551,
        1,0,0,0,431,2554,1,0,0,0,433,2559,1,0,0,0,435,2568,1,0,0,0,437,2575,
        1,0,0,0,439,2578,1,0,0,0,441,2584,1,0,0,0,443,2588,1,0,0,0,445,2594,
        1,0,0,0,447,2607,1,0,0,0,449,2620,1,0,0,0,451,2625,1,0,0,0,453,2635,
        1,0,0,0,455,2641,1,0,0,0,457,2651,1,0,0,0,459,2663,1,0,0,0,461,2674,
        1,0,0,0,463,2679,1,0,0,0,465,2687,1,0,0,0,467,2697,1,0,0,0,469,2702,
        1,0,0,0,471,2708,1,0,0,0,473,2713,1,0,0,0,475,2718,1,0,0,0,477,2728,
        1,0,0,0,479,2738,1,0,0,0,481,2746,1,0,0,0,483,2755,1,0,0,0,485,2763,
        1,0,0,0,487,2774,1,0,0,0,489,2784,1,0,0,0,491,2798,1,0,0,0,493,2804,
        1,0,0,0,495,2812,1,0,0,0,497,2820,1,0,0,0,499,2826,1,0,0,0,501,2844,
        1,0,0,0,503,2850,1,0,0,0,505,2855,1,0,0,0,507,2867,1,0,0,0,509,2873,
        1,0,0,0,511,2878,1,0,0,0,513,2886,1,0,0,0,515,2899,1,0,0,0,517,2912,
        1,0,0,0,519,2919,1,0,0,0,521,2930,1,0,0,0,523,2937,1,0,0,0,525,2944,
        1,0,0,0,527,2949,1,0,0,0,529,2956,1,0,0,0,531,2963,1,0,0,0,533,2978,
        1,0,0,0,535,2985,1,0,0,0,537,2990,1,0,0,0,539,2998,1,0,0,0,541,3010,
        1,0,0,0,543,3019,1,0,0,0,545,3027,1,0,0,0,547,3036,1,0,0,0,549,3043,
        1,0,0,0,551,3051,1,0,0,0,553,3057,1,0,0,0,555,3063,1,0,0,0,557,3068,
        1,0,0,0,559,3074,1,0,0,0,561,3083,1,0,0,0,563,3090,1,0,0,0,565,3094,
        1,0,0,0,567,3099,1,0,0,0,569,3109,1,0,0,0,571,3127,1,0,0,0,573,3134,
        1,0,0,0,575,3142,1,0,0,0,577,3151,1,0,0,0,579,3158,1,0,0,0,581,3163,
        1,0,0,0,583,3169,1,0,0,0,585,3185,1,0,0,0,587,3192,1,0,0,0,589,3196,
        1,0,0,0,591,3201,1,0,0,0,593,3222,1,0,0,0,595,3229,1,0,0,0,597,3234,
        1,0,0,0,599,3248,1,0,0,0,601,3255,1,0,0,0,603,3264,1,0,0,0,605,3273,
        1,0,0,0,607,3278,1,0,0,0,609,3283,1,0,0,0,611,3290,1,0,0,0,613,3295,
        1,0,0,0,615,3299,1,0,0,0,617,3305,1,0,0,0,619,3316,1,0,0,0,621,3323,
        1,0,0,0,623,3330,1,0,0,0,625,3342,1,0,0,0,627,3349,1,0,0,0,629,3356,
        1,0,0,0,631,3364,1,0,0,0,633,3369,1,0,0,0,635,3381,1,0,0,0,637,3396,
        1,0,0,0,639,3402,1,0,0,0,641,3409,1,0,0,0,643,3421,1,0,0,0,645,3435,
        1,0,0,0,647,3445,1,0,0,0,649,3456,1,0,0,0,651,3461,1,0,0,0,653,3466,
        1,0,0,0,655,3476,1,0,0,0,657,3493,1,0,0,0,659,3508,1,0,0,0,661,3516,
        1,0,0,0,663,3519,1,0,0,0,665,3525,1,0,0,0,667,3534,1,0,0,0,669,3546,
        1,0,0,0,671,3560,1,0,0,0,673,3573,1,0,0,0,675,3583,1,0,0,0,677,3591,
        1,0,0,0,679,3596,1,0,0,0,681,3601,1,0,0,0,683,3610,1,0,0,0,685,3615,
        1,0,0,0,687,3625,1,0,0,0,689,3635,1,0,0,0,691,3640,1,0,0,0,693,3646,
        1,0,0,0,695,3656,1,0,0,0,697,3663,1,0,0,0,699,3674,1,0,0,0,701,3682,
        1,0,0,0,703,3689,1,0,0,0,705,3699,1,0,0,0,707,3705,1,0,0,0,709,3714,
        1,0,0,0,711,3721,1,0,0,0,713,3725,1,0,0,0,715,3729,1,0,0,0,717,3733,
        1,0,0,0,719,3738,1,0,0,0,721,3744,1,0,0,0,723,3748,1,0,0,0,725,3761,
        1,0,0,0,727,3770,1,0,0,0,729,3777,1,0,0,0,731,3785,1,0,0,0,733,3793,
        1,0,0,0,735,3807,1,0,0,0,737,3812,1,0,0,0,739,3818,1,0,0,0,741,3823,
        1,0,0,0,743,3830,1,0,0,0,745,3835,1,0,0,0,747,3841,1,0,0,0,749,3847,
        1,0,0,0,751,3854,1,0,0,0,753,3859,1,0,0,0,755,3866,1,0,0,0,757,3871,
        1,0,0,0,759,3880,1,0,0,0,761,3886,1,0,0,0,763,3893,1,0,0,0,765,3898,
        1,0,0,0,767,3900,1,0,0,0,769,3902,1,0,0,0,771,3904,1,0,0,0,773,3906,
        1,0,0,0,775,3908,1,0,0,0,777,3910,1,0,0,0,779,3912,1,0,0,0,781,3914,
        1,0,0,0,783,3916,1,0,0,0,785,3918,1,0,0,0,787,3920,1,0,0,0,789,3922,
        1,0,0,0,791,3924,1,0,0,0,793,3926,1,0,0,0,795,3928,1,0,0,0,797,3930,
        1,0,0,0,799,3932,1,0,0,0,801,3934,1,0,0,0,803,3936,1,0,0,0,805,3938,
        1,0,0,0,807,3940,1,0,0,0,809,3942,1,0,0,0,811,3944,1,0,0,0,813,3946,
        1,0,0,0,815,3948,1,0,0,0,817,3950,1,0,0,0,819,3952,1,0,0,0,821,3954,
        1,0,0,0,823,3956,1,0,0,0,825,3958,1,0,0,0,827,3960,1,0,0,0,829,3962,
        1,0,0,0,831,3964,1,0,0,0,833,3966,1,0,0,0,835,3968,1,0,0,0,837,3970,
        1,0,0,0,839,3975,1,0,0,0,841,3977,1,0,0,0,843,3985,1,0,0,0,845,3987,
        1,0,0,0,847,3990,1,0,0,0,849,3992,1,0,0,0,851,3995,1,0,0,0,853,3997,
        1,0,0,0,855,3999,1,0,0,0,857,4001,1,0,0,0,859,4003,1,0,0,0,861,4005,
        1,0,0,0,863,4007,1,0,0,0,865,4011,1,0,0,0,867,4013,1,0,0,0,869,4015,
        1,0,0,0,871,4017,1,0,0,0,873,4020,1,0,0,0,875,4022,1,0,0,0,877,4024,
        1,0,0,0,879,4046,1,0,0,0,881,4059,1,0,0,0,883,4062,1,0,0,0,885,4068,
        1,0,0,0,887,4075,1,0,0,0,889,4082,1,0,0,0,891,4120,1,0,0,0,893,4122,
        1,0,0,0,895,4133,1,0,0,0,897,4135,1,0,0,0,899,4137,1,0,0,0,901,4139,
        1,0,0,0,903,4165,1,0,0,0,905,4167,1,0,0,0,907,4175,1,0,0,0,909,4179,
        1,0,0,0,911,4192,1,0,0,0,913,4194,1,0,0,0,915,4210,1,0,0,0,917,918,
        3,765,382,0,918,919,3,767,383,0,919,920,3,793,396,0,920,921,3,799,
        399,0,921,922,3,803,401,0,922,2,1,0,0,0,923,924,3,765,382,0,924,
        925,3,769,384,0,925,926,3,803,401,0,926,927,3,781,390,0,927,928,
        3,807,403,0,928,929,3,765,382,0,929,930,3,803,401,0,930,931,3,773,
        386,0,931,4,1,0,0,0,932,933,3,765,382,0,933,934,3,769,384,0,934,
        935,3,803,401,0,935,936,3,781,390,0,936,937,3,807,403,0,937,938,
        3,773,386,0,938,6,1,0,0,0,939,940,3,765,382,0,940,941,3,771,385,
        0,941,942,3,771,385,0,942,8,1,0,0,0,943,944,3,765,382,0,944,945,
        3,771,385,0,945,946,3,789,394,0,946,947,3,781,390,0,947,948,3,791,
        395,0,948,10,1,0,0,0,949,950,3,765,382,0,950,951,3,775,387,0,951,
        952,3,803,401,0,952,953,3,773,386,0,953,954,3,799,399,0,954,12,1,
        0,0,0,955,956,3,765,382,0,956,957,3,787,393,0,957,958,3,787,393,
        0,958,14,1,0,0,0,959,960,3,765,382,0,960,961,3,787,393,0,961,962,
        3,787,393,0,962,963,3,793,396,0,963,964,3,769,384,0,964,965,3,837,
        418,0,965,966,3,775,387,0,966,967,3,799,399,0,967,968,3,765,382,
        0,968,969,3,769,384,0,969,970,3,803,401,0,970,971,3,781,390,0,971,
        972,3,793,396,0,972,973,3,791,395,0,973,16,1,0,0,0,974,975,3,765,
        382,0,975,976,3,787,393,0,976,977,3,803,401,0,977,978,3,773,386,
        0,978,979,3,799,399,0,979,18,1,0,0,0,980,981,3,765,382,0,981,982,
        3,791,395,0,982,983,3,765,382,0,983,984,3,787,393,0,984,985,3,813,
        406,0,985,986,3,815,407,0,986,987,3,773,386,0,987,20,1,0,0,0,988,
        989,3,765,382,0,989,990,3,791,395,0,990,991,3,771,385,0,991,22,1,
        0,0,0,992,993,3,765,382,0,993,994,3,791,395,0,994,995,3,803,401,
        0,995,996,3,781,390,0,996,24,1,0,0,0,997,998,3,765,382,0,998,999,
        3,791,395,0,999,1000,3,813,406,0,1000,26,1,0,0,0,1001,1002,3,765,
        382,0,1002,1003,3,795,397,0,1003,1004,3,795,397,0,1004,1005,3,787,
        393,0,1005,1006,3,781,390,0,1006,1007,3,769,384,0,1007,1008,3,765,
        382,0,1008,1009,3,803,401,0,1009,1010,3,781,390,0,1010,1011,3,793,
        396,0,1011,1012,3,791,395,0,1012,28,1,0,0,0,1013,1014,3,765,382,
        0,1014,1015,3,799,399,0,1015,1016,3,769,384,0,1016,1017,3,779,389,
        0,1017,1018,3,781,390,0,1018,1019,3,807,403,0,1019,1020,3,773,386,
        0,1020,30,1,0,0,0,1021,1022,3,765,382,0,1022,1023,3,799,399,0,1023,
        1024,3,799,399,0,1024,1025,3,765,382,0,1025,1026,3,813,406,0,1026,
        32,1,0,0,0,1027,1028,3,765,382,0,1028,1029,3,801,400,0,1029,34,1,
        0,0,0,1030,1031,3,765,382,0,1031,1032,3,801,400,0,1032,1033,3,769,
        384,0,1033,36,1,0,0,0,1034,1035,3,765,382,0,1035,1036,3,801,400,
        0,1036,1037,3,803,401,0,1037,38,1,0,0,0,1038,1039,3,765,382,0,1039,
        1040,3,803,401,0,1040,40,1,0,0,0,1041,1042,3,765,382,0,1042,1043,
        3,805,402,0,1043,1044,3,803,401,0,1044,1045,3,779,389,0,1045,1046,
        3,793,396,0,1046,1047,3,799,399,0,1047,1048,3,781,390,0,1048,1049,
        3,815,407,0,1049,1050,3,765,382,0,1050,1051,3,803,401,0,1051,1052,
        3,781,390,0,1052,1053,3,793,396,0,1053,1054,3,791,395,0,1054,42,
        1,0,0,0,1055,1056,3,765,382,0,1056,1057,3,805,402,0,1057,1058,3,
        803,401,0,1058,1059,3,793,396,0,1059,1060,3,769,384,0,1060,1061,
        3,793,396,0,1061,1062,3,789,394,0,1062,1063,3,789,394,0,1063,1064,
        3,781,390,0,1064,1065,3,803,401,0,1065,44,1,0,0,0,1066,1067,3,785,
        392,0,1067,1068,3,809,404,0,1068,1069,3,837,418,0,1069,1070,3,767,
        383,0,1070,1071,3,765,382,0,1071,1072,3,803,401,0,1072,1073,3,769,
        384,0,1073,1074,3,779,389,0,1074,46,1,0,0,0,1075,1076,3,767,383,
        0,1076,1077,3,773,386,0,1077,1078,3,775,387,0,1078,1079,3,793,396,
        0,1079,1080,3,799,399,0,1080,1081,3,773,386,0,1081,48,1,0,0,0,1082,
        1083,3,767,383,0,1083,1084,3,773,386,0,1084,1085,3,803,401,0,1085,
        1086,3,809,404,0,1086,1087,3,773,386,0,1087,1088,3,773,386,0,1088,
        1089,3,791,395,0,1089,50,1,0,0,0,1090,1091,3,767,383,0,1091,1092,
        3,781,390,0,1092,1093,3,777,388,0,1093,1094,3,781,390,0,1094,1095,
        3,791,395,0,1095,1096,3,803,401,0,1096,52,1,0,0,0,1097,1098,3,767,
        383,0,1098,1099,3,781,390,0,1099,1100,3,791,395,0,1100,1101,3,765,
        382,0,1101,1102,3,799,399,0,1102,1103,3,813,406,0,1103,54,1,0,0,
        0,1104,1105,3,767,383,0,1105,1106,3,793,396,0,1106,1107,3,793,396,
        0,1107,1108,3,787,393,0,1108,1109,3,773,386,0,1109,1110,3,765,382,
        0,1110,1111,3,791,395,0,1111,56,1,0,0,0,1112,1113,3,767,383,0,1113,
        1114,3,793,396,0,1114,1115,3,803,401,0,1115,1116,3,779,389,0,1116,
        58,1,0,0,0,1117,1118,3,767,383,0,1118,1119,3,805,402,0,1119,1120,
        3,769,384,0,1120,1121,3,785,392,0,1121,1122,3,773,386,0,1122,1123,
        3,803,401,0,1123,60,1,0,0,0,1124,1125,3,767,383,0,1125,1126,3,805,
        402,0,1126,1127,3,769,384,0,1127,1128,3,785,392,0,1128,1129,3,773,
        386,0,1129,1130,3,803,401,0,1130,1131,3,801,400,0,1131,62,1,0,0,
        0,1132,1133,3,767,383,0,1133,1134,3,813,406,0,1134,64,1,0,0,0,1135,
        1136,3,769,384,0,1136,1137,3,765,382,0,1137,1138,3,769,384,0,1138,
        1139,3,779,389,0,1139,1140,3,773,386,0,1140,66,1,0,0,0,1141,1142,
        3,769,384,0,1142,1143,3,765,382,0,1143,1144,3,801,400,0,1144,1145,
        3,769,384,0,1145,1146,3,765,382,0,1146,1147,3,771,385,0,1147,1148,
        3,773,386,0,1148,68,1,0,0,0,1149,1150,3,769,384,0,1150,1151,3,765,
        382,0,1151,1152,3,801,400,0,1152,1153,3,773,386,0,1153,70,1,0,0,
        0,1154,1155,3,769,384,0,1155,1156,3,765,382,0,1156,1157,3,801,400,
        0,1157,1158,3,803,401,0,1158,72,1,0,0,0,1159,1160,3,769,384,0,1160,
        1161,3,767,383,0,1161,1162,3,793,396,0,1162,74,1,0,0,0,1163,1164,
        3,769,384,0,1164,1165,3,779,389,0,1165,1166,3,765,382,0,1166,1167,
        3,791,395,0,1167,1168,3,777,388,0,1168,1169,3,773,386,0,1169,76,
        1,0,0,0,1170,1171,3,769,384,0,1171,1172,3,779,389,0,1172,1173,3,
        765,382,0,1173,1174,3,799,399,0,1174,78,1,0,0,0,1175,1176,3,769,
        384,0,1176,1177,3,779,389,0,1177,1178,3,773,386,0,1178,1179,3,769,
        384,0,1179,1180,3,785,392,0,1180,80,1,0,0,0,1181,1182,3,769,384,
        0,1182,1183,3,787,393,0,1183,1184,3,805,402,0,1184,1185,3,801,400,
        0,1185,1186,3,803,401,0,1186,1187,3,773,386,0,1187,1188,3,799,399,
        0,1188,82,1,0,0,0,1189,1190,3,769,384,0,1190,1191,3,787,393,0,1191,
        1192,3,805,402,0,1192,1193,3,801,400,0,1193,1194,3,803,401,0,1194,
        1195,3,773,386,0,1195,1196,3,799,399,0,1196,1197,3,773,386,0,1197,
        1198,3,771,385,0,1198,84,1,0,0,0,1199,1200,3,769,384,0,1200,1201,
        3,787,393,0,1201,1202,3,805,402,0,1202,1203,3,801,400,0,1203,1204,
        3,803,401,0,1204,1205,3,773,386,0,1205,1206,3,799,399,0,1206,1207,
        3,801,400,0,1207,1208,3,803,401,0,1208,1209,3,765,382,0,1209,1210,
        3,803,401,0,1210,1211,3,805,402,0,1211,1212,3,801,400,0,1212,86,
        1,0,0,0,1213,1214,3,769,384,0,1214,1215,3,793,396,0,1215,1216,3,
        787,393,0,1216,1217,3,787,393,0,1217,1218,3,773,386,0,1218,1219,
        3,769,384,0,1219,1220,3,803,401,0,1220,1221,3,781,390,0,1221,1222,
        3,793,396,0,1222,1223,3,791,395,0,1223,88,1,0,0,0,1224,1225,3,769,
        384,0,1225,1226,3,793,396,0,1226,1227,3,787,393,0,1227,1228,3,805,
        402,0,1228,1229,3,789,394,0,1229,1230,3,791,395,0,1230,90,1,0,0,
        0,1231,1232,3,769,384,0,1232,1233,3,793,396,0,1233,1234,3,787,393,
        0,1234,1235,3,805,402,0,1235,1236,3,789,394,0,1236,1237,3,791,395,
        0,1237,1238,3,801,400,0,1238,92,1,0,0,0,1239,1240,3,769,384,0,1240,
        1241,3,793,396,0,1241,1242,3,789,394,0,1242,1243,3,789,394,0,1243,
        1244,3,773,386,0,1244,1245,3,791,395,0,1245,1246,3,803,401,0,1246,
        94,1,0,0,0,1247,1248,3,769,384,0,1248,1249,3,793,396,0,1249,1250,
        3,789,394,0,1250,1251,3,789,394,0,1251,1252,3,781,390,0,1252,1253,
        3,803,401,0,1253,96,1,0,0,0,1254,1255,3,769,384,0,1255,1256,3,793,
        396,0,1256,1257,3,789,394,0,1257,1258,3,795,397,0,1258,1259,3,765,
        382,0,1259,1260,3,769,384,0,1260,1261,3,803,401,0,1261,98,1,0,0,
        0,1262,1263,3,769,384,0,1263,1264,3,793,396,0,1264,1265,3,789,394,
        0,1265,1266,3,795,397,0,1266,1267,3,765,382,0,1267,1268,3,769,384,
        0,1268,1269,3,803,401,0,1269,1270,3,781,390,0,1270,1271,3,793,396,
        0,1271,1272,3,791,395,0,1272,1273,3,801,400,0,1273,100,1,0,0,0,1274,
        1275,3,769,384,0,1275,1276,3,793,396,0,1276,1277,3,789,394,0,1277,
        1278,3,795,397,0,1278,1279,3,765,382,0,1279,1280,3,769,384,0,1280,
        1281,3,803,401,0,1281,1282,3,781,390,0,1282,1283,3,793,396,0,1283,
        1284,3,791,395,0,1284,1285,3,781,390,0,1285,1286,3,771,385,0,1286,
        102,1,0,0,0,1287,1288,3,769,384,0,1288,1289,3,793,396,0,1289,1290,
        3,789,394,0,1290,1291,3,795,397,0,1291,1292,3,805,402,0,1292,1293,
        3,803,401,0,1293,1294,3,773,386,0,1294,104,1,0,0,0,1295,1296,3,769,
        384,0,1296,1297,3,793,396,0,1297,1298,3,791,395,0,1298,1299,3,769,
        384,0,1299,1300,3,765,382,0,1300,1301,3,803,401,0,1301,1302,3,773,
        386,0,1302,1303,3,791,395,0,1303,1304,3,765,382,0,1304,1305,3,803,
        401,0,1305,1306,3,773,386,0,1306,106,1,0,0,0,1307,1308,3,769,384,
        0,1308,1309,3,793,396,0,1309,1310,3,791,395,0,1310,1311,3,775,387,
        0,1311,108,1,0,0,0,1312,1313,3,769,384,0,1313,1314,3,793,396,0,1314,
        1315,3,791,395,0,1315,1316,3,801,400,0,1316,1317,3,803,401,0,1317,
        1318,3,799,399,0,1318,1319,3,765,382,0,1319,1320,3,781,390,0,1320,
        1321,3,791,395,0,1321,1322,3,803,401,0,1322,110,1,0,0,0,1323,1324,
        3,769,384,0,1324,1325,3,793,396,0,1325,1326,3,791,395,0,1326,1327,
        3,803,401,0,1327,1328,3,781,390,0,1328,1329,3,791,395,0,1329,1330,
        3,805,402,0,1330,1331,3,773,386,0,1331,112,1,0,0,0,1332,1333,3,769,
        384,0,1333,1334,3,793,396,0,1334,1335,3,801,400,0,1335,1336,3,803,
        401,0,1336,114,1,0,0,0,1337,1338,3,769,384,0,1338,1339,3,799,399,
        0,1339,1340,3,773,386,0,1340,1341,3,765,382,0,1341,1342,3,803,401,
        0,1342,1343,3,773,386,0,1343,116,1,0,0,0,1344,1345,3,769,384,0,1345,
        1346,3,799,399,0,1346,1347,3,793,396,0,1347,1348,3,791,395,0,1348,
        118,1,0,0,0,1349,1350,3,769,384,0,1350,1351,3,799,399,0,1351,1352,
        3,793,396,0,1352,1353,3,801,400,0,1353,1354,3,801,400,0,1354,120,
        1,0,0,0,1355,1356,3,769,384,0,1356,1357,3,805,402,0,1357,1358,3,
        767,383,0,1358,1359,3,773,386,0,1359,122,1,0,0,0,1360,1361,3,769,
        384,0,1361,1362,3,805,402,0,1362,1363,3,799,399,0,1363,1364,3,799,
        399,0,1364,1365,3,773,386,0,1365,1366,3,791,395,0,1366,1367,3,803,
        401,0,1367,124,1,0,0,0,1368,1369,3,769,384,0,1369,1370,3,805,402,
        0,1370,1371,3,799,399,0,1371,1372,3,799,399,0,1372,1373,3,773,386,
        0,1373,1374,3,791,395,0,1374,1375,3,803,401,0,1375,1376,3,837,418,
        0,1376,1377,3,771,385,0,1377,1378,3,765,382,0,1378,1379,3,803,401,
        0,1379,1380,3,773,386,0,1380,126,1,0,0,0,1381,1382,3,769,384,0,1382,
        1383,3,805,402,0,1383,1384,3,799,399,0,1384,1385,3,799,399,0,1385,
        1386,3,773,386,0,1386,1387,3,791,395,0,1387,1388,3,803,401,0,1388,
        1389,3,837,418,0,1389,1390,3,803,401,0,1390,1391,3,781,390,0,1391,
        1392,3,789,394,0,1392,1393,3,773,386,0,1393,1394,3,801,400,0,1394,
        1395,3,803,401,0,1395,1396,3,765,382,0,1396,1397,3,789,394,0,1397,
        1398,3,795,397,0,1398,128,1,0,0,0,1399,1400,3,769,384,0,1400,1401,
        3,805,402,0,1401,1402,3,799,399,0,1402,1403,3,801,400,0,1403,1404,
        3,793,396,0,1404,1405,3,799,399,0,1405,130,1,0,0,0,1406,1407,3,771,
        385,0,1407,1408,3,765,382,0,1408,1409,3,803,401,0,1409,1410,3,765,
        382,0,1410,132,1,0,0,0,1411,1412,3,771,385,0,1412,1413,3,765,382,
        0,1413,1414,3,803,401,0,1414,1415,3,765,382,0,1415,1416,3,767,383,
        0,1416,1417,3,765,382,0,1417,1418,3,801,400,0,1418,1419,3,773,386,
        0,1419,134,1,0,0,0,1420,1421,3,771,385,0,1421,1422,3,765,382,0,1422,
        1423,3,803,401,0,1423,1424,3,765,382,0,1424,1425,3,767,383,0,1425,
        1426,3,765,382,0,1426,1427,3,801,400,0,1427,1428,3,773,386,0,1428,
        1429,3,801,400,0,1429,136,1,0,0,0,1430,1431,3,769,384,0,1431,1432,
        3,793,396,0,1432,1433,3,791,395,0,1433,1434,3,791,395,0,1434,1435,
        3,773,386,0,1435,1436,3,769,384,0,1436,1437,3,803,401,0,1437,1438,
        3,793,396,0,1438,1439,3,799,399,0,1439,138,1,0,0,0,1440,1441,3,769,
        384,0,1441,1442,3,793,396,0,1442,1443,3,791,395,0,1443,1444,3,791,
        395,0,1444,1445,3,773,386,0,1445,1446,3,769,384,0,1446,1447,3,803,
        401,0,1447,1448,3,793,396,0,1448,1449,3,799,399,0,1449,1450,3,801,
        400,0,1450,140,1,0,0,0,1451,1452,3,771,385,0,1452,1453,3,765,382,
        0,1453,1454,3,803,401,0,1454,1455,3,773,386,0,1455,142,1,0,0,0,1456,
        1457,3,771,385,0,1457,1458,3,765,382,0,1458,1459,3,803,401,0,1459,
        1460,3,773,386,0,1460,1461,3,803,401,0,1461,1462,3,781,390,0,1462,
        1463,3,789,394,0,1463,1464,3,773,386,0,1464,144,1,0,0,0,1465,1466,
        3,771,385,0,1466,1467,3,765,382,0,1467,1469,3,813,406,0,1468,1470,
        3,801,400,0,1469,1468,1,0,0,0,1469,1470,1,0,0,0,1470,146,1,0,0,0,
        1471,1472,3,785,392,0,1472,1473,3,809,404,0,1473,1474,3,837,418,
        0,1474,1475,3,771,385,0,1475,1476,3,765,382,0,1476,1477,3,813,406,
        0,1477,1478,3,793,396,0,1478,1479,3,775,387,0,1479,1480,3,809,404,
        0,1480,1481,3,773,386,0,1481,1482,3,773,386,0,1482,1483,3,785,392,
        0,1483,148,1,0,0,0,1484,1485,3,771,385,0,1485,1486,3,767,383,0,1486,
        1487,3,795,397,0,1487,1488,3,799,399,0,1488,1489,3,793,396,0,1489,
        1490,3,795,397,0,1490,1491,3,773,386,0,1491,1492,3,799,399,0,1492,
        1493,3,803,401,0,1493,1494,3,781,390,0,1494,1495,3,773,386,0,1495,
        1496,3,801,400,0,1496,150,1,0,0,0,1497,1498,3,771,385,0,1498,1499,
        3,769,384,0,1499,1500,3,795,397,0,1500,1501,3,799,399,0,1501,1502,
        3,793,396,0,1502,1503,3,795,397,0,1503,1504,3,773,386,0,1504,1505,
        3,799,399,0,1505,1506,3,803,401,0,1506,1507,3,781,390,0,1507,1508,
        3,773,386,0,1508,1509,3,801,400,0,1509,152,1,0,0,0,1510,1511,3,771,
        385,0,1511,1512,3,771,385,0,1512,1513,3,787,393,0,1513,154,1,0,0,
        0,1514,1515,3,771,385,0,1515,1516,3,773,386,0,1516,1517,3,767,383,
        0,1517,1518,3,805,402,0,1518,1519,3,777,388,0,1519,156,1,0,0,0,1520,
        1521,3,771,385,0,1521,1522,3,773,386,0,1522,1528,3,769,384,0,1523,
        1524,3,781,390,0,1524,1525,3,789,394,0,1525,1526,3,765,382,0,1526,
        1527,3,787,393,0,1527,1529,1,0,0,0,1528,1523,1,0,0,0,1528,1529,1,
        0,0,0,1529,1539,1,0,0,0,1530,1531,3,791,395,0,1531,1532,3,805,402,
        0,1532,1533,3,789,394,0,1533,1534,3,773,386,0,1534,1535,3,799,399,
        0,1535,1536,3,781,390,0,1536,1537,3,769,384,0,1537,1539,1,0,0,0,
        1538,1520,1,0,0,0,1538,1530,1,0,0,0,1539,158,1,0,0,0,1540,1541,3,
        771,385,0,1541,1542,3,773,386,0,1542,1543,3,775,387,0,1543,1544,
        3,765,382,0,1544,1545,3,805,402,0,1545,1546,3,787,393,0,1546,1547,
        3,803,401,0,1547,160,1,0,0,0,1548,1549,3,771,385,0,1549,1550,3,773,
        386,0,1550,1551,3,775,387,0,1551,1552,3,773,386,0,1552,1553,3,799,
        399,0,1553,1554,3,799,399,0,1554,1555,3,773,386,0,1555,1556,3,771,
        385,0,1556,162,1,0,0,0,1557,1558,3,771,385,0,1558,1559,3,773,386,
        0,1559,1560,3,775,387,0,1560,1561,3,781,390,0,1561,1562,3,791,395,
        0,1562,1563,3,773,386,0,1563,1564,3,771,385,0,1564,164,1,0,0,0,1565,
        1566,3,771,385,0,1566,1567,3,773,386,0,1567,1568,3,787,393,0,1568,
        1569,3,773,386,0,1569,1570,3,803,401,0,1570,1571,3,773,386,0,1571,
        166,1,0,0,0,1572,1573,3,771,385,0,1573,1574,3,773,386,0,1574,1575,
        3,787,393,0,1575,1576,3,781,390,0,1576,1577,3,789,394,0,1577,1578,
        3,781,390,0,1578,1579,3,803,401,0,1579,1580,3,773,386,0,1580,1581,
        3,771,385,0,1581,168,1,0,0,0,1582,1583,3,771,385,0,1583,1584,3,773,
        386,0,1584,1585,3,795,397,0,1585,1586,3,773,386,0,1586,1587,3,791,
        395,0,1587,1588,3,771,385,0,1588,1589,3,773,386,0,1589,1590,3,791,
        395,0,1590,1591,3,769,384,0,1591,1592,3,813,406,0,1592,170,1,0,0,
        0,1593,1594,3,771,385,0,1594,1595,3,773,386,0,1595,1596,3,801,400,
        0,1596,1597,3,769,384,0,1597,172,1,0,0,0,1598,1599,3,771,385,0,1599,
        1600,3,773,386,0,1600,1601,3,801,400,0,1601,1602,3,769,384,0,1602,
        1603,3,799,399,0,1603,1604,3,781,390,0,1604,1605,3,767,383,0,1605,
        1606,3,773,386,0,1606,174,1,0,0,0,1607,1608,3,771,385,0,1608,1609,
        3,773,386,0,1609,1610,3,803,401,0,1610,1611,3,765,382,0,1611,1612,
        3,781,390,0,1612,1613,3,787,393,0,1613,176,1,0,0,0,1614,1615,3,771,
        385,0,1615,1616,3,781,390,0,1616,1617,3,799,399,0,1617,1618,3,773,
        386,0,1618,1619,3,769,384,0,1619,1620,3,803,401,0,1620,1621,3,793,
        396,0,1621,1622,3,799,399,0,1622,1623,3,781,390,0,1623,1624,3,773,
        386,0,1624,1625,3,801,400,0,1625,178,1,0,0,0,1626,1627,3,771,385,
        0,1627,1628,3,781,390,0,1628,1629,3,799,399,0,1629,1630,3,773,386,
        0,1630,1631,3,769,384,0,1631,1632,3,803,401,0,1632,1633,3,793,396,
        0,1633,1634,3,799,399,0,1634,1635,3,813,406,0,1635,180,1,0,0,0,1636,
        1637,3,771,385,0,1637,1638,3,781,390,0,1638,1639,3,801,400,0,1639,
        1640,3,765,382,0,1640,1641,3,767,383,0,1641,1642,3,787,393,0,1642,
        1644,3,773,386,0,1643,1645,3,771,385,0,1644,1643,1,0,0,0,1644,1645,
        1,0,0,0,1645,182,1,0,0,0,1646,1647,3,771,385,0,1647,1648,3,781,390,
        0,1648,1649,3,801,400,0,1649,1650,3,803,401,0,1650,1651,3,781,390,
        0,1651,1652,3,791,395,0,1652,1653,3,769,384,0,1653,1654,3,803,401,
        0,1654,184,1,0,0,0,1655,1656,3,771,385,0,1656,1657,3,781,390,0,1657,
        1658,3,801,400,0,1658,1659,3,803,401,0,1659,1660,3,799,399,0,1660,
        1661,3,781,390,0,1661,1662,3,767,383,0,1662,1663,3,805,402,0,1663,
        1664,3,803,401,0,1664,1665,3,773,386,0,1665,186,1,0,0,0,1666,1667,
        3,771,385,0,1667,1668,3,781,390,0,1668,1669,3,801,400,0,1669,1670,
        3,803,401,0,1670,1671,3,799,399,0,1671,1672,3,781,390,0,1672,1673,
        3,767,383,0,1673,1674,3,805,402,0,1674,1675,3,803,401,0,1675,1676,
        3,773,386,0,1676,1677,3,771,385,0,1677,188,1,0,0,0,1678,1679,3,771,
        385,0,1679,1680,3,793,396,0,1680,190,1,0,0,0,1681,1682,3,771,385,
        0,1682,1683,3,793,396,0,1683,1684,3,805,402,0,1684,1685,3,767,383,
        0,1685,1686,3,787,393,0,1686,1687,3,773,386,0,1687,192,1,0,0,0,1688,
        1689,3,771,385,0,1689,1690,3,765,382,0,1690,1691,3,813,406,0,1691,
        1692,3,793,396,0,1692,1693,3,775,387,0,1693,1694,3,809,404,0,1694,
        1695,3,773,386,0,1695,1696,3,773,386,0,1696,1697,3,785,392,0,1697,
        194,1,0,0,0,1698,1699,3,771,385,0,1699,1700,3,799,399,0,1700,1701,
        3,793,396,0,1701,1702,3,795,397,0,1702,196,1,0,0,0,1703,1704,3,771,
        385,0,1704,1705,3,805,402,0,1705,1706,3,789,394,0,1706,1707,3,795,
        397,0,1707,198,1,0,0,0,1708,1709,3,877,438,0,1709,1710,3,773,386,
        0,1710,1711,3,787,393,0,1711,1712,3,773,386,0,1712,1713,3,789,394,
        0,1713,1714,3,877,438,0,1714,200,1,0,0,0,1715,1716,3,773,386,0,1716,
        1717,3,787,393,0,1717,1718,3,801,400,0,1718,1719,3,773,386,0,1719,
        202,1,0,0,0,1720,1721,3,773,386,0,1721,1722,3,791,395,0,1722,1723,
        3,765,382,0,1723,1724,3,767,383,0,1724,1725,3,787,393,0,1725,1727,
        3,773,386,0,1726,1728,3,771,385,0,1727,1726,1,0,0,0,1727,1728,1,
        0,0,0,1728,204,1,0,0,0,1729,1730,3,773,386,0,1730,1731,3,791,395,
        0,1731,1732,3,771,385,0,1732,206,1,0,0,0,1733,1734,3,773,386,0,1734,
        1735,3,791,395,0,1735,1736,3,775,387,0,1736,1737,3,793,396,0,1737,
        1738,3,799,399,0,1738,1739,3,769,384,0,1739,1740,3,773,386,0,1740,
        1741,3,771,385,0,1741,208,1,0,0,0,1742,1743,3,773,386,0,1743,1744,
        3,801,400,0,1744,1745,3,769,384,0,1745,1746,3,765,382,0,1746,1747,
        3,795,397,0,1747,1748,3,773,386,0,1748,1749,3,771,385,0,1749,210,
        1,0,0,0,1750,1751,3,773,386,0,1751,1752,3,807,403,0,1752,1753,3,
        773,386,0,1753,1754,3,799,399,0,1754,1755,3,813,406,0,1755,212,1,
        0,0,0,1756,1757,3,773,386,0,1757,1758,3,811,405,0,1758,1759,3,769,
        384,0,1759,1760,3,773,386,0,1760,1761,3,795,397,0,1761,1762,3,803,
        401,0,1762,214,1,0,0,0,1763,1764,3,773,386,0,1764,1765,3,811,405,
        0,1765,1766,3,769,384,0,1766,1767,3,779,389,0,1767,1768,3,765,382,
        0,1768,1769,3,791,395,0,1769,1770,3,777,388,0,1770,1771,3,773,386,
        0,1771,216,1,0,0,0,1772,1773,3,773,386,0,1773,1774,3,811,405,0,1774,
        1775,3,769,384,0,1775,1776,3,787,393,0,1776,1777,3,805,402,0,1777,
        1778,3,801,400,0,1778,1779,3,781,390,0,1779,1780,3,807,403,0,1780,
        1781,3,773,386,0,1781,218,1,0,0,0,1782,1783,3,773,386,0,1783,1784,
        3,811,405,0,1784,1785,3,773,386,0,1785,1786,3,769,384,0,1786,1787,
        3,805,402,0,1787,1788,3,803,401,0,1788,1789,3,773,386,0,1789,220,
        1,0,0,0,1790,1791,3,773,386,0,1791,1792,3,811,405,0,1792,1793,3,
        773,386,0,1793,1794,3,769,384,0,1794,1795,3,805,402,0,1795,1796,
        3,803,401,0,1796,1797,3,773,386,0,1797,1798,3,771,385,0,1798,222,
        1,0,0,0,1799,1800,3,773,386,0,1800,1801,3,811,405,0,1801,1802,3,
        781,390,0,1802,1803,3,801,400,0,1803,1804,3,803,401,0,1804,1805,
        3,801,400,0,1805,224,1,0,0,0,1806,1807,3,773,386,0,1807,1808,3,811,
        405,0,1808,1809,3,795,397,0,1809,1810,3,781,390,0,1810,1811,3,799,
        399,0,1811,1812,3,773,386,0,1812,1813,3,837,418,0,1813,1814,3,801,
        400,0,1814,1815,3,791,395,0,1815,1816,3,765,382,0,1816,1817,3,795,
        397,0,1817,1818,3,801,400,0,1818,1819,3,779,389,0,1819,1820,3,793,
        396,0,1820,1821,3,803,401,0,1821,1822,3,801,400,0,1822,226,1,0,0,
        0,1823,1824,3,773,386,0,1824,1825,3,811,405,0,1825,1826,3,795,397,
        0,1826,1827,3,787,393,0,1827,1828,3,765,382,0,1828,1829,3,781,390,
        0,1829,1830,3,791,395,0,1830,228,1,0,0,0,1831,1832,3,773,386,0,1832,
        1833,3,811,405,0,1833,1834,3,795,397,0,1834,1835,3,793,396,0,1835,
        1836,3,799,399,0,1836,1837,3,803,401,0,1837,230,1,0,0,0,1838,1839,
        3,773,386,0,1839,1840,3,811,405,0,1840,1841,3,795,397,0,1841,1842,
        3,799,399,0,1842,1843,3,773,386,0,1843,1844,3,801,400,0,1844,1845,
        3,801,400,0,1845,1846,3,781,390,0,1846,1847,3,793,396,0,1847,1848,
        3,791,395,0,1848,232,1,0,0,0,1849,1850,3,773,386,0,1850,1851,3,811,
        405,0,1851,1852,3,803,401,0,1852,1853,3,773,386,0,1853,1854,3,791,
        395,0,1854,1855,3,771,385,0,1855,1856,3,773,386,0,1856,1857,3,771,
        385,0,1857,234,1,0,0,0,1858,1859,3,773,386,0,1859,1860,3,811,405,
        0,1860,1861,3,803,401,0,1861,1862,3,773,386,0,1862,1863,3,799,399,
        0,1863,1864,3,791,395,0,1864,1865,3,765,382,0,1865,1866,3,787,393,
        0,1866,236,1,0,0,0,1867,1868,3,773,386,0,1868,1869,3,811,405,0,1869,
        1870,3,803,401,0,1870,1871,3,799,399,0,1871,1872,3,765,382,0,1872,
        1873,3,769,384,0,1873,1874,3,803,401,0,1874,238,1,0,0,0,1875,1876,
        3,775,387,0,1876,1877,3,765,382,0,1877,1878,3,787,393,0,1878,1879,
        3,801,400,0,1879,1880,3,773,386,0,1880,240,1,0,0,0,1881,1882,3,775,
        387,0,1882,1883,3,773,386,0,1883,1884,3,803,401,0,1884,1885,3,769,
        384,0,1885,1886,3,779,389,0,1886,242,1,0,0,0,1887,1888,3,775,387,
        0,1888,1889,3,781,390,0,1889,1890,3,773,386,0,1890,1891,3,787,393,
        0,1891,1892,3,771,385,0,1892,1893,3,801,400,0,1893,244,1,0,0,0,1894,
        1895,3,775,387,0,1895,1896,3,781,390,0,1896,1897,3,787,393,0,1897,
        1898,3,773,386,0,1898,246,1,0,0,0,1899,1900,3,775,387,0,1900,1901,
        3,781,390,0,1901,1902,3,787,393,0,1902,1903,3,773,386,0,1903,1904,
        3,775,387,0,1904,1905,3,793,396,0,1905,1906,3,799,399,0,1906,1907,
        3,789,394,0,1907,1908,3,765,382,0,1908,1909,3,803,401,0,1909,248,
        1,0,0,0,1910,1911,3,775,387,0,1911,1912,3,781,390,0,1912,1913,3,
        799,399,0,1913,1914,3,801,400,0,1914,1915,3,803,401,0,1915,250,1,
        0,0,0,1916,1917,3,775,387,0,1917,1918,3,787,393,0,1918,1919,3,793,
        396,0,1919,1920,3,765,382,0,1920,1921,3,803,401,0,1921,252,1,0,0,
        0,1922,1923,3,775,387,0,1923,1924,3,787,393,0,1924,1925,3,793,396,
        0,1925,1926,3,793,396,0,1926,1927,3,799,399,0,1927,254,1,0,0,0,1928,
        1929,3,775,387,0,1929,1930,3,793,396,0,1930,1931,3,787,393,0,1931,
        1932,3,787,393,0,1932,1933,3,793,396,0,1933,1934,3,809,404,0,1934,
        1935,3,781,390,0,1935,1936,3,791,395,0,1936,1937,3,777,388,0,1937,
        256,1,0,0,0,1938,1939,3,775,387,0,1939,1940,3,793,396,0,1940,1941,
        3,799,399,0,1941,258,1,0,0,0,1942,1943,3,775,387,0,1943,1944,3,793,
        396,0,1944,1945,3,799,399,0,1945,1946,3,769,384,0,1946,1947,3,773,
        386,0,1947,260,1,0,0,0,1948,1949,3,775,387,0,1949,1950,3,793,396,
        0,1950,1951,3,799,399,0,1951,1952,3,773,386,0,1952,1953,3,781,390,
        0,1953,1954,3,777,388,0,1954,1955,3,791,395,0,1955,262,1,0,0,0,1956,
        1957,3,775,387,0,1957,1958,3,793,396,0,1958,1959,3,799,399,0,1959,
        1960,3,789,394,0,1960,1961,3,765,382,0,1961,1962,3,803,401,0,1962,
        264,1,0,0,0,1963,1964,3,775,387,0,1964,1965,3,793,396,0,1965,1966,
        3,799,399,0,1966,1967,3,789,394,0,1967,1968,3,765,382,0,1968,1969,
        3,803,401,0,1969,1970,3,803,401,0,1970,1971,3,773,386,0,1971,1972,
        3,771,385,0,1972,266,1,0,0,0,1973,1974,3,775,387,0,1974,1975,3,799,
        399,0,1975,1976,3,793,396,0,1976,1977,3,789,394,0,1977,268,1,0,0,
        0,1978,1979,3,775,387,0,1979,1980,3,805,402,0,1980,1981,3,787,393,
        0,1981,1982,3,787,393,0,1982,270,1,0,0,0,1983,1984,3,775,387,0,1984,
        1985,3,805,402,0,1985,1986,3,791,395,0,1986,1987,3,769,384,0,1987,
        1988,3,803,401,0,1988,1989,3,781,390,0,1989,1990,3,793,396,0,1990,
        1991,3,791,395,0,1991,272,1,0,0,0,1992,1993,3,775,387,0,1993,1994,
        3,805,402,0,1994,1995,3,791,395,0,1995,1996,3,769,384,0,1996,1997,
        3,803,401,0,1997,1998,3,781,390,0,1998,1999,3,793,396,0,1999,2000,
        3,791,395,0,2000,2001,3,801,400,0,2001,274,1,0,0,0,2002,2003,3,777,
        388,0,2003,2004,3,799,399,0,2004,2005,3,765,382,0,2005,2006,3,791,
        395,0,2006,2007,3,803,401,0,2007,276,1,0,0,0,2008,2009,3,777,388,
        0,2009,2010,3,799,399,0,2010,2011,3,793,396,0,2011,2012,3,805,402,
        0,2012,2013,3,795,397,0,2013,278,1,0,0,0,2014,2015,3,777,388,0,2015,
        2016,3,799,399,0,2016,2017,3,793,396,0,2017,2018,3,805,402,0,2018,
        2019,3,795,397,0,2019,2020,3,781,390,0,2020,2021,3,791,395,0,2021,
        2022,3,777,388,0,2022,280,1,0,0,0,2023,2024,3,779,389,0,2024,2025,
        3,765,382,0,2025,2026,3,807,403,0,2026,2027,3,781,390,0,2027,2028,
        3,791,395,0,2028,2029,3,777,388,0,2029,282,1,0,0,0,2030,2031,3,779,
        389,0,2031,2032,3,771,385,0,2032,2033,3,775,387,0,2033,2034,3,801,
        400,0,2034,284,1,0,0,0,2035,2036,3,837,418,0,2036,2037,3,779,389,
        0,2037,2038,3,793,396,0,2038,2039,3,787,393,0,2039,2040,3,771,385,
        0,2040,2041,3,771,385,0,2041,2042,3,771,385,0,2042,2043,3,787,393,
        0,2043,2044,3,803,401,0,2044,2045,3,781,390,0,2045,2046,3,789,394,
        0,2046,2047,3,773,386,0,2047,286,1,0,0,0,2048,2049,3,779,389,0,2049,
        2050,3,793,396,0,2050,2051,3,805,402,0,2051,2053,3,799,399,0,2052,
        2054,3,801,400,0,2053,2052,1,0,0,0,2053,2054,1,0,0,0,2054,288,1,
        0,0,0,2055,2056,3,781,390,0,2056,2057,3,771,385,0,2057,2058,3,811,
        405,0,2058,2059,3,795,397,0,2059,2060,3,799,399,0,2060,2061,3,793,
        396,0,2061,2062,3,795,397,0,2062,2063,3,773,386,0,2063,2064,3,799,
        399,0,2064,2065,3,803,401,0,2065,2066,3,781,390,0,2066,2067,3,773,
        386,0,2067,2068,3,801,400,0,2068,290,1,0,0,0,2069,2070,3,781,390,
        0,2070,2071,3,775,387,0,2071,292,1,0,0,0,2072,2073,3,781,390,0,2073,
        2074,3,777,388,0,2074,2075,3,791,395,0,2075,2076,3,793,396,0,2076,
        2077,3,799,399,0,2077,2078,3,773,386,0,2078,294,1,0,0,0,2079,2080,
        3,781,390,0,2080,2081,3,789,394,0,2081,2082,3,795,397,0,2082,2083,
        3,793,396,0,2083,2084,3,799,399,0,2084,2085,3,803,401,0,2085,296,
        1,0,0,0,2086,2087,3,781,390,0,2087,2088,3,791,395,0,2088,298,1,0,
        0,0,2089,2090,3,781,390,0,2090,2091,3,791,395,0,2091,2092,3,771,
        385,0,2092,2093,3,773,386,0,2093,2094,3,811,405,0,2094,300,1,0,0,
        0,2095,2096,3,781,390,0,2096,2097,3,791,395,0,2097,2098,3,771,385,
        0,2098,2099,3,773,386,0,2099,2100,3,811,405,0,2100,2101,3,773,386,
        0,2101,2102,3,801,400,0,2102,302,1,0,0,0,2103,2104,3,781,390,0,2104,
        2105,3,791,395,0,2105,2106,3,791,395,0,2106,2107,3,773,386,0,2107,
        2108,3,799,399,0,2108,304,1,0,0,0,2109,2110,3,781,390,0,2110,2111,
        3,791,395,0,2111,2112,3,795,397,0,2112,2113,3,765,382,0,2113,2114,
        3,803,401,0,2114,2115,3,779,389,0,2115,306,1,0,0,0,2116,2117,3,781,
        390,0,2117,2118,3,791,395,0,2118,2119,3,795,397,0,2119,2120,3,805,
        402,0,2120,2121,3,803,401,0,2121,2122,3,771,385,0,2122,2123,3,799,
        399,0,2123,2124,3,781,390,0,2124,2125,3,807,403,0,2125,2126,3,773,
        386,0,2126,2127,3,799,399,0,2127,308,1,0,0,0,2128,2129,3,781,390,
        0,2129,2130,3,791,395,0,2130,2131,3,795,397,0,2131,2132,3,805,402,
        0,2132,2133,3,803,401,0,2133,2134,3,775,387,0,2134,2135,3,793,396,
        0,2135,2136,3,799,399,0,2136,2137,3,789,394,0,2137,2138,3,765,382,
        0,2138,2139,3,803,401,0,2139,310,1,0,0,0,2140,2141,3,781,390,0,2141,
        2142,3,791,395,0,2142,2143,3,801,400,0,2143,2144,3,773,386,0,2144,
        2145,3,799,399,0,2145,2146,3,803,401,0,2146,312,1,0,0,0,2147,2148,
        3,781,390,0,2148,2149,3,791,395,0,2149,2155,3,803,401,0,2150,2151,
        3,773,386,0,2151,2152,3,777,388,0,2152,2153,3,773,386,0,2153,2154,
        3,799,399,0,2154,2156,1,0,0,0,2155,2150,1,0,0,0,2155,2156,1,0,0,
        0,2156,314,1,0,0,0,2157,2158,3,781,390,0,2158,2159,3,791,395,0,2159,
        2160,3,803,401,0,2160,2161,3,773,386,0,2161,2162,3,799,399,0,2162,
        2163,3,801,400,0,2163,2164,3,773,386,0,2164,2165,3,769,384,0,2165,
        2166,3,803,401,0,2166,316,1,0,0,0,2167,2168,3,781,390,0,2168,2169,
        3,791,395,0,2169,2170,3,803,401,0,2170,2171,3,773,386,0,2171,2172,
        3,799,399,0,2172,2173,3,807,403,0,2173,2174,3,765,382,0,2174,2175,
        3,787,393,0,2175,318,1,0,0,0,2176,2177,3,781,390,0,2177,2178,3,791,
        395,0,2178,2179,3,803,401,0,2179,2180,3,793,396,0,2180,320,1,0,0,
        0,2181,2182,3,781,390,0,2182,2183,3,801,400,0,2183,322,1,0,0,0,2184,
        2185,3,781,390,0,2185,2186,3,801,400,0,2186,2187,3,793,396,0,2187,
        2188,3,787,393,0,2188,2189,3,765,382,0,2189,2190,3,803,401,0,2190,
        2191,3,781,390,0,2191,2192,3,793,396,0,2192,2193,3,791,395,0,2193,
        324,1,0,0,0,2194,2195,3,781,390,0,2195,2196,3,803,401,0,2196,2197,
        3,773,386,0,2197,2198,3,789,394,0,2198,2199,3,801,400,0,2199,326,
        1,0,0,0,2200,2201,3,783,391,0,2201,2202,3,765,382,0,2202,2203,3,
        799,399,0,2203,328,1,0,0,0,2204,2205,3,783,391,0,2205,2206,3,793,
        396,0,2206,2207,3,781,390,0,2207,2208,3,791,395,0,2208,330,1,0,0,
        0,2209,2210,3,783,391,0,2210,2211,3,793,396,0,2211,2212,3,781,390,
        0,2212,2213,3,791,395,0,2213,2214,3,769,384,0,2214,2215,3,793,396,
        0,2215,2216,3,801,400,0,2216,2217,3,803,401,0,2217,332,1,0,0,0,2218,
        2219,3,785,392,0,2219,2220,3,773,386,0,2220,2221,3,813,406,0,2221,
        334,1,0,0,0,2222,2223,3,785,392,0,2223,2224,3,773,386,0,2224,2225,
        3,813,406,0,2225,2226,3,801,400,0,2226,336,1,0,0,0,2227,2228,3,877,
        438,0,2228,2229,3,785,392,0,2229,2230,3,773,386,0,2230,2231,3,813,
        406,0,2231,2232,3,877,438,0,2232,338,1,0,0,0,2233,2234,3,785,392,
        0,2234,2235,3,781,390,0,2235,2236,3,787,393,0,2236,2237,3,787,393,
        0,2237,340,1,0,0,0,2238,2239,3,787,393,0,2239,2240,3,765,382,0,2240,
        2241,3,801,400,0,2241,2242,3,803,401,0,2242,342,1,0,0,0,2243,2244,
        3,787,393,0,2244,2245,3,765,382,0,2245,2246,3,803,401,0,2246,2247,
        3,773,386,0,2247,2248,3,799,399,0,2248,2249,3,765,382,0,2249,2250,
        3,787,393,0,2250,344,1,0,0,0,2251,2252,3,787,393,0,2252,2253,3,773,
        386,0,2253,2254,3,765,382,0,2254,2255,3,771,385,0,2255,2256,3,781,
        390,0,2256,2257,3,791,395,0,2257,2258,3,777,388,0,2258,346,1,0,0,
        0,2259,2260,3,787,393,0,2260,2261,3,773,386,0,2261,2262,3,775,387,
        0,2262,2263,3,803,401,0,2263,348,1,0,0,0,2264,2265,3,787,393,0,2265,
        2266,3,773,386,0,2266,2267,3,801,400,0,2267,2268,3,801,400,0,2268,
        350,1,0,0,0,2269,2270,3,787,393,0,2270,2271,3,773,386,0,2271,2272,
        3,807,403,0,2272,2273,3,773,386,0,2273,2274,3,787,393,0,2274,352,
        1,0,0,0,2275,2276,3,787,393,0,2276,2277,3,781,390,0,2277,2278,3,
        785,392,0,2278,2279,3,773,386,0,2279,354,1,0,0,0,2280,2281,3,787,
        393,0,2281,2282,3,781,390,0,2282,2283,3,789,394,0,2283,2284,3,781,
        390,0,2284,2285,3,803,401,0,2285,356,1,0,0,0,2286,2287,3,787,393,
        0,2287,2288,3,781,390,0,2288,2289,3,791,395,0,2289,2290,3,773,386,
        0,2290,2291,3,801,400,0,2291,358,1,0,0,0,2292,2293,3,787,393,0,2293,
        2294,3,793,396,0,2294,2295,3,765,382,0,2295,2296,3,771,385,0,2296,
        360,1,0,0,0,2297,2298,3,787,393,0,2298,2299,3,793,396,0,2299,2300,
        3,769,384,0,2300,2301,3,765,382,0,2301,2302,3,787,393,0,2302,362,
        1,0,0,0,2303,2304,3,787,393,0,2304,2305,3,793,396,0,2305,2306,3,
        769,384,0,2306,2307,3,765,382,0,2307,2308,3,803,401,0,2308,2309,
        3,781,390,0,2309,2310,3,793,396,0,2310,2311,3,791,395,0,2311,364,
        1,0,0,0,2312,2313,3,787,393,0,2313,2314,3,793,396,0,2314,2315,3,
        769,384,0,2315,2316,3,785,392,0,2316,366,1,0,0,0,2317,2318,3,787,
        393,0,2318,2319,3,793,396,0,2319,2320,3,769,384,0,2320,2321,3,785,
        392,0,2321,2322,3,801,400,0,2322,368,1,0,0,0,2323,2324,3,787,393,
        0,2324,2325,3,793,396,0,2325,2326,3,777,388,0,2326,2327,3,781,390,
        0,2327,2328,3,769,384,0,2328,2329,3,765,382,0,2329,2330,3,787,393,
        0,2330,370,1,0,0,0,2331,2332,3,787,393,0,2332,2333,3,793,396,0,2333,
        2334,3,791,395,0,2334,2335,3,777,388,0,2335,372,1,0,0,0,2336,2337,
        3,789,394,0,2337,2338,3,765,382,0,2338,2339,3,769,384,0,2339,2340,
        3,799,399,0,2340,2341,3,793,396,0,2341,374,1,0,0,0,2342,2343,3,789,
        394,0,2343,2344,3,765,382,0,2344,2345,3,791,395,0,2345,2346,3,765,
        382,0,2346,2347,3,777,388,0,2347,2348,3,773,386,0,2348,2349,3,771,
        385,0,2349,376,1,0,0,0,2350,2351,3,789,394,0,2351,2352,3,765,382,
        0,2352,2353,3,791,395,0,2353,2354,3,765,382,0,2354,2355,3,777,388,
        0,2355,2356,3,773,386,0,2356,2357,3,771,385,0,2357,2358,3,787,393,
        0,2358,2359,3,793,396,0,2359,2360,3,769,384,0,2360,2361,3,765,382,
        0,2361,2362,3,803,401,0,2362,2363,3,781,390,0,2363,2364,3,793,396,
        0,2364,2365,3,791,395,0,2365,378,1,0,0,0,2366,2367,3,789,394,0,2367,
        2368,3,765,382,0,2368,2369,3,791,395,0,2369,2370,3,765,382,0,2370,
        2371,3,777,388,0,2371,2372,3,773,386,0,2372,2373,3,789,394,0,2373,
        2374,3,773,386,0,2374,2375,3,791,395,0,2375,2376,3,803,401,0,2376,
        380,1,0,0,0,2377,2378,3,789,394,0,2378,2379,3,765,382,0,2379,2380,
        3,795,397,0,2380,382,1,0,0,0,2381,2382,3,789,394,0,2382,2383,3,765,
        382,0,2383,2384,3,795,397,0,2384,2385,3,783,391,0,2385,2386,3,793,
        396,0,2386,2387,3,781,390,0,2387,2388,3,791,395,0,2388,384,1,0,0,
        0,2389,2390,3,789,394,0,2390,2391,3,765,382,0,2391,2392,3,795,397,
        0,2392,2393,3,795,397,0,2393,2394,3,781,390,0,2394,2395,3,791,395,
        0,2395,2396,3,777,388,0,2396,386,1,0,0,0,2397,2398,3,789,394,0,2398,
        2399,3,765,382,0,2399,2400,3,803,401,0,2400,2401,3,769,384,0,2401,
        2402,3,779,389,0,2402,2403,3,773,386,0,2403,2404,3,771,385,0,2404,
        388,1,0,0,0,2405,2406,3,789,394,0,2406,2407,3,765,382,0,2407,2408,
        3,803,401,0,2408,2409,3,773,386,0,2409,2410,3,799,399,0,2410,2411,
        3,781,390,0,2411,2412,3,765,382,0,2412,2413,3,787,393,0,2413,2414,
        3,781,390,0,2414,2415,3,815,407,0,2415,2416,3,773,386,0,2416,2417,
        3,771,385,0,2417,390,1,0,0,0,2418,2419,3,789,394,0,2419,2420,3,773,
        386,0,2420,2421,3,799,399,0,2421,2422,3,777,388,0,2422,2423,3,773,
        386,0,2423,392,1,0,0,0,2424,2425,3,789,394,0,2425,2426,3,773,386,
        0,2426,2427,3,803,401,0,2427,2428,3,765,382,0,2428,2429,3,771,385,
        0,2429,2430,3,765,382,0,2430,2431,3,803,401,0,2431,2432,3,765,382,
        0,2432,394,1,0,0,0,2433,2434,3,789,394,0,2434,2435,3,781,390,0,2435,
        2436,3,791,395,0,2436,2437,3,805,402,0,2437,2438,3,801,400,0,2438,
        396,1,0,0,0,2439,2440,3,789,394,0,2440,2441,3,781,390,0,2441,2442,
        3,791,395,0,2442,2443,3,805,402,0,2443,2444,3,803,401,0,2444,2446,
        3,773,386,0,2445,2447,3,801,400,0,2446,2445,1,0,0,0,2446,2447,1,
        0,0,0,2447,398,1,0,0,0,2448,2449,3,789,394,0,2449,2450,3,793,396,
        0,2450,2451,3,791,395,0,2451,2452,3,803,401,0,2452,2454,3,779,389,
        0,2453,2455,3,801,400,0,2454,2453,1,0,0,0,2454,2455,1,0,0,0,2455,
        400,1,0,0,0,2456,2457,3,789,394,0,2457,2458,3,793,396,0,2458,2459,
        3,799,399,0,2459,2460,3,773,386,0,2460,402,1,0,0,0,2461,2462,3,789,
        394,0,2462,2463,3,793,396,0,2463,2464,3,807,403,0,2464,2465,3,773,
        386,0,2465,404,1,0,0,0,2466,2467,3,789,394,0,2467,2468,3,801,400,
        0,2468,2469,3,769,384,0,2469,2470,3,785,392,0,2470,406,1,0,0,0,2471,
        2472,3,791,395,0,2472,2473,3,793,396,0,2473,2474,3,791,395,0,2474,
        2475,3,773,386,0,2475,408,1,0,0,0,2476,2477,3,791,395,0,2477,2478,
        3,793,396,0,2478,2479,3,799,399,0,2479,2480,3,773,386,0,2480,2481,
        3,787,393,0,2481,2482,3,813,406,0,2482,410,1,0,0,0,2483,2484,3,791,
        395,0,2484,2485,3,793,396,0,2485,2486,3,801,400,0,2486,2487,3,769,
        384,0,2487,2488,3,765,382,0,2488,2489,3,791,395,0,2489,412,1,0,0,
        0,2490,2491,3,791,395,0,2491,2492,3,793,396,0,2492,2493,3,803,401,
        0,2493,2496,1,0,0,0,2494,2496,5,33,0,0,2495,2490,1,0,0,0,2495,2494,
        1,0,0,0,2496,414,1,0,0,0,2497,2498,3,791,395,0,2498,2499,3,793,396,
        0,2499,2500,3,807,403,0,2500,2501,3,765,382,0,2501,2502,3,787,393,
        0,2502,2503,3,781,390,0,2503,2504,3,771,385,0,2504,2505,3,765,382,
        0,2505,2506,3,803,401,0,2506,2507,3,773,386,0,2507,416,1,0,0,0,2508,
        2509,3,785,392,0,2509,2510,3,809,404,0,2510,2511,3,837,418,0,2511,
        2512,3,791,395,0,2512,2513,3,793,396,0,2513,2514,3,837,418,0,2514,
        2515,3,771,385,0,2515,2516,3,799,399,0,2516,2517,3,793,396,0,2517,
        2518,3,795,397,0,2518,418,1,0,0,0,2519,2520,3,791,395,0,2520,2521,
        3,805,402,0,2521,2522,3,787,393,0,2522,2523,3,787,393,0,2523,420,
        1,0,0,0,2524,2525,3,791,395,0,2525,2526,3,805,402,0,2526,2527,3,
        787,393,0,2527,2528,3,787,393,0,2528,2529,3,801,400,0,2529,422,1,
        0,0,0,2530,2531,3,793,396,0,2531,2532,3,775,387,0,2532,424,1,0,0,
        0,2533,2534,3,785,392,0,2534,2535,3,809,404,0,2535,2536,3,837,418,
        0,2536,2537,3,793,396,0,2537,2538,3,775,387,0,2538,2539,3,775,387,
        0,2539,2540,3,787,393,0,2540,2541,3,781,390,0,2541,2542,3,791,395,
        0,2542,2543,3,773,386,0,2543,426,1,0,0,0,2544,2545,3,793,396,0,2545,
        2546,3,775,387,0,2546,2547,3,775,387,0,2547,2548,3,801,400,0,2548,
        2549,3,773,386,0,2549,2550,3,803,401,0,2550,428,1,0,0,0,2551,2552,
        3,793,396,0,2552,2553,3,791,395,0,2553,430,1,0,0,0,2554,2555,3,793,
        396,0,2555,2556,3,791,395,0,2556,2557,3,787,393,0,2557,2558,3,813,
        406,0,2558,432,1,0,0,0,2559,2560,3,793,396,0,2560,2561,3,795,397,
        0,2561,2562,3,773,386,0,2562,2563,3,799,399,0,2563,2564,3,765,382,
        0,2564,2565,3,803,401,0,2565,2566,3,793,396,0,2566,2567,3,799,399,
        0,2567,434,1,0,0,0,2568,2569,3,793,396,0,2569,2570,3,795,397,0,2570,
        2571,3,803,401,0,2571,2572,3,781,390,0,2572,2573,3,793,396,0,2573,
        2574,3,791,395,0,2574,436,1,0,0,0,2575,2576,3,793,396,0,2576,2577,
        3,799,399,0,2577,438,1,0,0,0,2578,2579,3,793,396,0,2579,2580,3,799,
        399,0,2580,2581,3,771,385,0,2581,2582,3,773,386,0,2582,2583,3,799,
        399,0,2583,440,1,0,0,0,2584,2585,3,793,396,0,2585,2586,3,805,402,
        0,2586,2587,3,803,401,0,2587,442,1,0,0,0,2588,2589,3,793,396,0,2589,
        2590,3,805,402,0,2590,2591,3,803,401,0,2591,2592,3,773,386,0,2592,
        2593,3,799,399,0,2593,444,1,0,0,0,2594,2595,3,793,396,0,2595,2596,
        3,805,402,0,2596,2597,3,803,401,0,2597,2598,3,795,397,0,2598,2599,
        3,805,402,0,2599,2600,3,803,401,0,2600,2601,3,771,385,0,2601,2602,
        3,799,399,0,2602,2603,3,781,390,0,2603,2604,3,807,403,0,2604,2605,
        3,773,386,0,2605,2606,3,799,399,0,2606,446,1,0,0,0,2607,2608,3,793,
        396,0,2608,2609,3,805,402,0,2609,2610,3,803,401,0,2610,2611,3,795,
        397,0,2611,2612,3,805,402,0,2612,2613,3,803,401,0,2613,2614,3,775,
        387,0,2614,2615,3,793,396,0,2615,2616,3,799,399,0,2616,2617,3,789,
        394,0,2617,2618,3,765,382,0,2618,2619,3,803,401,0,2619,448,1,0,0,
        0,2620,2621,3,793,396,0,2621,2622,3,807,403,0,2622,2623,3,773,386,
        0,2623,2624,3,799,399,0,2624,450,1,0,0,0,2625,2626,3,793,396,0,2626,
        2627,3,807,403,0,2627,2628,3,773,386,0,2628,2629,3,799,399,0,2629,
        2630,3,809,404,0,2630,2631,3,799,399,0,2631,2632,3,781,390,0,2632,
        2633,3,803,401,0,2633,2634,3,773,386,0,2634,452,1,0,0,0,2635,2636,
        3,793,396,0,2636,2637,3,809,404,0,2637,2638,3,791,395,0,2638,2639,
        3,773,386,0,2639,2640,3,799,399,0,2640,454,1,0,0,0,2641,2642,3,795,
        397,0,2642,2643,3,765,382,0,2643,2644,3,799,399,0,2644,2645,3,803,
        401,0,2645,2646,3,781,390,0,2646,2647,3,803,401,0,2647,2648,3,781,
        390,0,2648,2649,3,793,396,0,2649,2650,3,791,395,0,2650,456,1,0,0,
        0,2651,2652,3,795,397,0,2652,2653,3,765,382,0,2653,2654,3,799,399,
        0,2654,2655,3,803,401,0,2655,2656,3,781,390,0,2656,2657,3,803,401,
        0,2657,2658,3,781,390,0,2658,2659,3,793,396,0,2659,2660,3,791,395,
        0,2660,2661,3,773,386,0,2661,2662,3,771,385,0,2662,458,1,0,0,0,2663,
        2664,3,795,397,0,2664,2665,3,765,382,0,2665,2666,3,799,399,0,2666,
        2667,3,803,401,0,2667,2668,3,781,390,0,2668,2669,3,803,401,0,2669,
        2670,3,781,390,0,2670,2671,3,793,396,0,2671,2672,3,791,395,0,2672,
        2673,3,801,400,0,2673,460,1,0,0,0,2674,2675,3,795,397,0,2675,2676,
        3,765,382,0,2676,2677,3,803,401,0,2677,2678,3,779,389,0,2678,462,
        1,0,0,0,2679,2680,3,795,397,0,2680,2681,3,773,386,0,2681,2682,3,
        799,399,0,2682,2683,3,769,384,0,2683,2684,3,773,386,0,2684,2685,
        3,791,395,0,2685,2686,3,803,401,0,2686,464,1,0,0,0,2687,2688,3,795,
        397,0,2688,2689,3,785,392,0,2689,2690,3,775,387,0,2690,2691,3,785,
        392,0,2691,2692,3,837,418,0,2692,2693,3,783,391,0,2693,2694,3,793,
        396,0,2694,2695,3,781,390,0,2695,2696,3,791,395,0,2696,466,1,0,0,
        0,2697,2698,3,795,397,0,2698,2699,3,787,393,0,2699,2700,3,765,382,
        0,2700,2701,3,791,395,0,2701,468,1,0,0,0,2702,2703,3,795,397,0,2703,
        2704,3,787,393,0,2704,2705,3,765,382,0,2705,2706,3,791,395,0,2706,
        2707,3,801,400,0,2707,470,1,0,0,0,2708,2709,3,795,397,0,2709,2710,
        3,787,393,0,2710,2711,3,805,402,0,2711,2712,3,801,400,0,2712,472,
        1,0,0,0,2713,2714,3,795,397,0,2714,2715,3,793,396,0,2715,2716,3,
        793,396,0,2716,2717,3,787,393,0,2717,474,1,0,0,0,2718,2719,3,795,
        397,0,2719,2720,3,799,399,0,2720,2721,3,773,386,0,2721,2722,3,769,
        384,0,2722,2723,3,773,386,0,2723,2724,3,771,385,0,2724,2725,3,781,
        390,0,2725,2726,3,791,395,0,2726,2727,3,777,388,0,2727,476,1,0,0,
        0,2728,2729,3,795,397,0,2729,2730,3,799,399,0,2730,2731,3,773,386,
        0,2731,2732,3,769,384,0,2732,2733,3,781,390,0,2733,2734,3,801,400,
        0,2734,2735,3,781,390,0,2735,2736,3,793,396,0,2736,2737,3,791,395,
        0,2737,478,1,0,0,0,2738,2739,3,795,397,0,2739,2740,3,799,399,0,2740,
        2741,3,773,386,0,2741,2742,3,795,397,0,2742,2743,3,765,382,0,2743,
        2744,3,799,399,0,2744,2745,3,773,386,0,2745,480,1,0,0,0,2746,2747,
        3,795,397,0,2747,2748,3,799,399,0,2748,2749,3,773,386,0,2749,2750,
        3,801,400,0,2750,2751,3,773,386,0,2751,2752,3,799,399,0,2752,2753,
        3,807,403,0,2753,2754,3,773,386,0,2754,482,1,0,0,0,2755,2756,3,795,
        397,0,2756,2757,3,799,399,0,2757,2758,3,781,390,0,2758,2759,3,789,
        394,0,2759,2760,3,765,382,0,2760,2761,3,799,399,0,2761,2762,3,813,
        406,0,2762,484,1,0,0,0,2763,2764,3,795,397,0,2764,2765,3,799,399,
        0,2765,2766,3,781,390,0,2766,2767,3,791,395,0,2767,2768,3,769,384,
        0,2768,2769,3,781,390,0,2769,2770,3,795,397,0,2770,2771,3,765,382,
        0,2771,2772,3,787,393,0,2772,2773,3,801,400,0,2773,486,1,0,0,0,2774,
        2775,3,795,397,0,2775,2776,3,799,399,0,2776,2777,3,793,396,0,2777,
        2778,3,769,384,0,2778,2779,3,773,386,0,2779,2780,3,771,385,0,2780,
        2781,3,805,402,0,2781,2782,3,799,399,0,2782,2783,3,773,386,0,2783,
        488,1,0,0,0,2784,2785,3,785,392,0,2785,2786,3,809,404,0,2786,2787,
        3,837,418,0,2787,2788,3,795,397,0,2788,2789,3,799,399,0,2789,2790,
        3,793,396,0,2790,2791,3,803,401,0,2791,2792,3,773,386,0,2792,2793,
        3,769,384,0,2793,2794,3,803,401,0,2794,2795,3,781,390,0,2795,2796,
        3,793,396,0,2796,2797,3,791,395,0,2797,490,1,0,0,0,2798,2799,3,795,
        397,0,2799,2800,3,805,402,0,2800,2801,3,799,399,0,2801,2802,3,777,
        388,0,2802,2803,3,773,386,0,2803,492,1,0,0,0,2804,2805,3,797,398,
        0,2805,2806,3,805,402,0,2806,2807,3,765,382,0,2807,2808,3,787,393,
        0,2808,2809,3,781,390,0,2809,2810,3,775,387,0,2810,2811,3,813,406,
        0,2811,494,1,0,0,0,2812,2813,3,797,398,0,2813,2814,3,805,402,0,2814,
        2815,3,765,382,0,2815,2816,3,799,399,0,2816,2817,3,803,401,0,2817,
        2818,3,773,386,0,2818,2819,3,799,399,0,2819,496,1,0,0,0,2820,2821,
        3,797,398,0,2821,2822,3,805,402,0,2822,2823,3,773,386,0,2823,2824,
        3,799,399,0,2824,2825,3,813,406,0,2825,498,1,0,0,0,2826,2827,3,797,
        398,0,2827,2828,3,805,402,0,2828,2829,3,773,386,0,2829,2830,3,799,
        399,0,2830,2831,3,813,406,0,2831,2832,3,837,418,0,2832,2833,3,795,
        397,0,2833,2834,3,765,382,0,2834,2835,3,799,399,0,2835,2836,3,765,
        382,0,2836,2837,3,787,393,0,2837,2838,3,787,393,0,2838,2839,3,773,
        386,0,2839,2840,3,787,393,0,2840,2841,3,781,390,0,2841,2842,3,801,
        400,0,2842,2843,3,789,394,0,2843,500,1,0,0,0,2844,2845,3,799,399,
        0,2845,2846,3,765,382,0,2846,2847,3,791,395,0,2847,2848,3,777,388,
        0,2848,2849,3,773,386,0,2849,502,1,0,0,0,2850,2851,3,799,399,0,2851,
        2852,3,773,386,0,2852,2853,3,765,382,0,2853,2854,3,771,385,0,2854,
        504,1,0,0,0,2855,2856,3,785,392,0,2856,2857,3,809,404,0,2857,2858,
        3,837,418,0,2858,2859,3,799,399,0,2859,2860,3,773,386,0,2860,2861,
        3,765,382,0,2861,2862,3,771,385,0,2862,2863,3,793,396,0,2863,2864,
        3,791,395,0,2864,2865,3,787,393,0,2865,2866,3,813,406,0,2866,506,
        1,0,0,0,2867,2868,3,799,399,0,2868,2869,3,773,386,0,2869,2870,3,
        765,382,0,2870,2871,3,771,385,0,2871,2872,3,801,400,0,2872,508,1,
        0,0,0,2873,2874,3,799,399,0,2874,2875,3,773,386,0,2875,2876,3,765,
        382,0,2876,2877,3,787,393,0,2877,510,1,0,0,0,2878,2879,3,799,399,
        0,2879,2880,3,773,386,0,2880,2881,3,767,383,0,2881,2882,3,805,402,
        0,2882,2883,3,781,390,0,2883,2884,3,787,393,0,2884,2885,3,771,385,
        0,2885,512,1,0,0,0,2886,2887,3,799,399,0,2887,2888,3,773,386,0,2888,
        2889,3,769,384,0,2889,2890,3,793,396,0,2890,2891,3,799,399,0,2891,
        2892,3,771,385,0,2892,2893,3,799,399,0,2893,2894,3,773,386,0,2894,
        2895,3,765,382,0,2895,2896,3,771,385,0,2896,2897,3,773,386,0,2897,
        2898,3,799,399,0,2898,514,1,0,0,0,2899,2900,3,799,399,0,2900,2901,
        3,773,386,0,2901,2902,3,769,384,0,2902,2903,3,793,396,0,2903,2904,
        3,799,399,0,2904,2905,3,771,385,0,2905,2906,3,809,404,0,2906,2907,
        3,799,399,0,2907,2908,3,781,390,0,2908,2909,3,803,401,0,2909,2910,
        3,773,386,0,2910,2911,3,799,399,0,2911,516,1,0,0,0,2912,2913,3,799,
        399,0,2913,2914,3,773,386,0,2914,2915,3,771,385,0,2915,2916,3,805,
        402,0,2916,2917,3,769,384,0,2917,2918,3,773,386,0,2918,518,1,0,0,
        0,2919,2920,3,799,399,0,2920,2921,3,773,386,0,2921,2922,3,775,387,
        0,2922,2923,3,773,386,0,2923,2924,3,799,399,0,2924,2925,3,773,386,
        0,2925,2926,3,791,395,0,2926,2927,3,769,384,0,2927,2928,3,773,386,
        0,2928,2929,3,801,400,0,2929,520,1,0,0,0,2930,2931,3,799,399,0,2931,
        2932,3,773,386,0,2932,2933,3,777,388,0,2933,2934,3,773,386,0,2934,
        2935,3,811,405,0,2935,2936,3,795,397,0,2936,522,1,0,0,0,2937,2938,
        3,799,399,0,2938,2939,3,773,386,0,2939,2940,3,787,393,0,2940,2941,
        3,793,396,0,2941,2942,3,765,382,0,2942,2943,3,771,385,0,2943,524,
        1,0,0,0,2944,2945,3,799,399,0,2945,2946,3,773,386,0,2946,2947,3,
        787,393,0,2947,2948,3,813,406,0,2948,526,1,0,0,0,2949,2950,3,799,
        399,0,2950,2951,3,773,386,0,2951,2952,3,789,394,0,2952,2953,3,793,
        396,0,2953,2954,3,803,401,0,2954,2955,3,773,386,0,2955,528,1,0,0,
        0,2956,2957,3,799,399,0,2957,2958,3,773,386,0,2958,2959,3,791,395,
        0,2959,2960,3,765,382,0,2960,2961,3,789,394,0,2961,2962,3,773,386,
        0,2962,530,1,0,0,0,2963,2964,3,799,399,0,2964,2965,3,773,386,0,2965,
        2966,3,793,396,0,2966,2967,3,795,397,0,2967,2968,3,803,401,0,2968,
        2969,3,781,390,0,2969,2970,3,789,394,0,2970,2971,3,781,390,0,2971,
        2972,3,815,407,0,2972,2973,3,765,382,0,2973,2974,3,803,401,0,2974,
        2975,3,781,390,0,2975,2976,3,793,396,0,2976,2977,3,791,395,0,2977,
        532,1,0,0,0,2978,2979,3,799,399,0,2979,2980,3,773,386,0,2980,2981,
        3,795,397,0,2981,2982,3,765,382,0,2982,2983,3,781,390,0,2983,2984,
        3,799,399,0,2984,534,1,0,0,0,2985,2986,3,799,399,0,2986,2987,3,773,
        386,0,2987,2988,3,795,397,0,2988,2989,3,787,393,0,2989,536,1,0,0,
        0,2990,2991,3,799,399,0,2991,2992,3,773,386,0,2992,2993,3,795,397,
        0,2993,2994,3,787,393,0,2994,2995,3,765,382,0,2995,2996,3,769,384,
        0,2996,2997,3,773,386,0,2997,538,1,0,0,0,2998,2999,3,799,399,0,2999,
        3000,3,773,386,0,3000,3001,3,795,397,0,3001,3002,3,787,393,0,3002,
        3003,3,781,390,0,3003,3004,3,769,384,0,3004,3005,3,765,382,0,3005,
        3006,3,803,401,0,3006,3007,3,781,390,0,3007,3008,3,793,396,0,3008,
        3009,3,791,395,0,3009,540,1,0,0,0,3010,3011,3,799,399,0,3011,3012,
        3,773,386,0,3012,3013,3,801,400,0,3013,3014,3,793,396,0,3014,3015,
        3,805,402,0,3015,3016,3,799,399,0,3016,3017,3,769,384,0,3017,3018,
        3,773,386,0,3018,542,1,0,0,0,3019,3020,3,799,399,0,3020,3021,3,773,
        386,0,3021,3022,3,801,400,0,3022,3023,3,795,397,0,3023,3024,3,773,
        386,0,3024,3025,3,769,384,0,3025,3026,3,803,401,0,3026,544,1,0,0,
        0,3027,3028,3,799,399,0,3028,3029,3,773,386,0,3029,3030,3,801,400,
        0,3030,3031,3,803,401,0,3031,3032,3,799,399,0,3032,3033,3,781,390,
        0,3033,3034,3,769,384,0,3034,3035,3,803,401,0,3035,546,1,0,0,0,3036,
        3037,3,799,399,0,3037,3038,3,773,386,0,3038,3039,3,807,403,0,3039,
        3040,3,793,396,0,3040,3041,3,785,392,0,3041,3042,3,773,386,0,3042,
        548,1,0,0,0,3043,3044,3,799,399,0,3044,3045,3,773,386,0,3045,3046,
        3,809,404,0,3046,3047,3,799,399,0,3047,3048,3,781,390,0,3048,3049,
        3,803,401,0,3049,3050,3,773,386,0,3050,550,1,0,0,0,3051,3052,3,799,
        399,0,3052,3053,3,781,390,0,3053,3054,3,777,388,0,3054,3055,3,779,
        389,0,3055,3056,3,803,401,0,3056,552,1,0,0,0,3057,3058,3,799,399,
        0,3058,3059,3,787,393,0,3059,3060,3,781,390,0,3060,3061,3,785,392,
        0,3061,3062,3,773,386,0,3062,554,1,0,0,0,3063,3064,3,799,399,0,3064,
        3065,3,793,396,0,3065,3066,3,787,393,0,3066,3067,3,773,386,0,3067,
        556,1,0,0,0,3068,3069,3,799,399,0,3069,3070,3,793,396,0,3070,3071,
        3,787,393,0,3071,3072,3,773,386,0,3072,3073,3,801,400,0,3073,558,
        1,0,0,0,3074,3075,3,799,399,0,3075,3076,3,793,396,0,3076,3077,3,
        787,393,0,3077,3078,3,787,393,0,3078,3079,3,767,383,0,3079,3080,
        3,765,382,0,3080,3081,3,769,384,0,3081,3082,3,785,392,0,3082,560,
        1,0,0,0,3083,3084,3,799,399,0,3084,3085,3,793,396,0,3085,3086,3,
        787,393,0,3086,3087,3,787,393,0,3087,3088,3,805,402,0,3088,3089,
        3,795,397,0,3089,562,1,0,0,0,3090,3091,3,799,399,0,3091,3092,3,793,
        396,0,3092,3093,3,809,404,0,3093,564,1,0,0,0,3094,3095,3,799,399,
        0,3095,3096,3,793,396,0,3096,3097,3,809,404,0,3097,3098,3,801,400,
        0,3098,566,1,0,0,0,3099,3100,3,801,400,0,3100,3101,3,769,384,0,3101,
        3102,3,779,389,0,3102,3103,3,773,386,0,3103,3104,3,771,385,0,3104,
        3105,3,805,402,0,3105,3106,3,787,393,0,3106,3107,3,773,386,0,3107,
        3108,3,771,385,0,3108,568,1,0,0,0,3109,3110,3,801,400,0,3110,3111,
        3,769,384,0,3111,3112,3,779,389,0,3112,3113,3,773,386,0,3113,3114,
        3,771,385,0,3114,3115,3,805,402,0,3115,3116,3,787,393,0,3116,3117,
        3,781,390,0,3117,3118,3,791,395,0,3118,3119,3,777,388,0,3119,3120,
        3,837,418,0,3120,3121,3,795,397,0,3121,3122,3,793,396,0,3122,3123,
        3,787,393,0,3123,3124,3,781,390,0,3124,3125,3,769,384,0,3125,3126,
        3,813,406,0,3126,570,1,0,0,0,3127,3128,3,801,400,0,3128,3129,3,769,
        384,0,3129,3130,3,779,389,0,3130,3131,3,773,386,0,3131,3132,3,789,
        394,0,3132,3133,3,765,382,0,3133,572,1,0,0,0,3134,3135,3,801,400,
        0,3135,3136,3,769,384,0,3136,3137,3,779,389,0,3137,3138,3,773,386,
        0,3138,3139,3,789,394,0,3139,3140,3,765,382,0,3140,3141,3,801,400,
        0,3141,574,1,0,0,0,3142,3143,3,801,400,0,3143,3144,3,773,386,0,3144,
        3145,3,769,384,0,3145,3146,3,793,396,0,3146,3147,3,791,395,0,3147,
        3149,3,771,385,0,3148,3150,3,801,400,0,3149,3148,1,0,0,0,3149,3150,
        1,0,0,0,3150,576,1,0,0,0,3151,3152,3,801,400,0,3152,3153,3,773,386,
        0,3153,3154,3,787,393,0,3154,3155,3,773,386,0,3155,3156,3,769,384,
        0,3156,3157,3,803,401,0,3157,578,1,0,0,0,3158,3159,3,801,400,0,3159,
        3160,3,773,386,0,3160,3161,3,789,394,0,3161,3162,3,781,390,0,3162,
        580,1,0,0,0,3163,3164,3,801,400,0,3164,3165,3,773,386,0,3165,3166,
        3,799,399,0,3166,3167,3,771,385,0,3167,3168,3,773,386,0,3168,582,
        1,0,0,0,3169,3170,3,801,400,0,3170,3171,3,773,386,0,3171,3172,3,
        799,399,0,3172,3173,3,771,385,0,3173,3174,3,773,386,0,3174,3175,
        3,795,397,0,3175,3176,3,799,399,0,3176,3177,3,793,396,0,3177,3178,
        3,795,397,0,3178,3179,3,773,386,0,3179,3180,3,799,399,0,3180,3181,
        3,803,401,0,3181,3182,3,781,390,0,3182,3183,3,773,386,0,3183,3184,
        3,801,400,0,3184,584,1,0,0,0,3185,3186,3,801,400,0,3186,3187,3,773,
        386,0,3187,3188,3,799,399,0,3188,3189,3,807,403,0,3189,3190,3,773,
        386,0,3190,3191,3,799,399,0,3191,586,1,0,0,0,3192,3193,3,801,400,
        0,3193,3194,3,773,386,0,3194,3195,3,803,401,0,3195,588,1,0,0,0,3196,
        3197,3,801,400,0,3197,3198,3,773,386,0,3198,3199,3,803,401,0,3199,
        3200,3,801,400,0,3200,590,1,0,0,0,3201,3202,3,801,400,0,3202,3203,
        3,773,386,0,3203,3204,3,803,401,0,3204,3205,3,837,418,0,3205,3206,
        3,769,384,0,3206,3207,3,805,402,0,3207,3208,3,799,399,0,3208,3209,
        3,799,399,0,3209,3210,3,773,386,0,3210,3211,3,791,395,0,3211,3212,
        3,803,401,0,3212,3213,3,837,418,0,3213,3214,3,801,400,0,3214,3215,
        3,791,395,0,3215,3216,3,765,382,0,3216,3217,3,795,397,0,3217,3218,
        3,801,400,0,3218,3219,3,779,389,0,3219,3220,3,793,396,0,3220,3221,
        3,803,401,0,3221,592,1,0,0,0,3222,3223,3,801,400,0,3223,3224,3,779,
        389,0,3224,3225,3,765,382,0,3225,3226,3,799,399,0,3226,3227,3,773,
        386,0,3227,3228,3,771,385,0,3228,594,1,0,0,0,3229,3230,3,801,400,
        0,3230,3231,3,779,389,0,3231,3232,3,793,396,0,3232,3233,3,809,404,
        0,3233,596,1,0,0,0,3234,3235,3,801,400,0,3235,3236,3,779,389,0,3236,
        3237,3,793,396,0,3237,3238,3,809,404,0,3238,3239,3,837,418,0,3239,
        3240,3,771,385,0,3240,3241,3,765,382,0,3241,3242,3,803,401,0,3242,
        3243,3,765,382,0,3243,3244,3,767,383,0,3244,3245,3,765,382,0,3245,
        3246,3,801,400,0,3246,3247,3,773,386,0,3247,598,1,0,0,0,3248,3249,
        3,801,400,0,3249,3250,3,785,392,0,3250,3251,3,773,386,0,3251,3252,
        3,809,404,0,3252,3253,3,773,386,0,3253,3254,3,771,385,0,3254,600,
        1,0,0,0,3255,3256,3,801,400,0,3256,3257,3,789,394,0,3257,3258,3,
        765,382,0,3258,3259,3,787,393,0,3259,3260,3,787,393,0,3260,3261,
        3,781,390,0,3261,3262,3,791,395,0,3262,3263,3,803,401,0,3263,602,
        1,0,0,0,3264,3265,3,801,400,0,3265,3266,3,791,395,0,3266,3267,3,
        765,382,0,3267,3268,3,795,397,0,3268,3269,3,801,400,0,3269,3270,
        3,779,389,0,3270,3271,3,793,396,0,3271,3272,3,803,401,0,3272,604,
        1,0,0,0,3273,3274,3,801,400,0,3274,3275,3,793,396,0,3275,3276,3,
        789,394,0,3276,3277,3,773,386,0,3277,606,1,0,0,0,3278,3279,3,801,
        400,0,3279,3280,3,793,396,0,3280,3281,3,799,399,0,3281,3282,3,803,
        401,0,3282,608,1,0,0,0,3283,3284,3,801,400,0,3284,3285,3,793,396,
        0,3285,3286,3,799,399,0,3286,3287,3,803,401,0,3287,3288,3,773,386,
        0,3288,3289,3,771,385,0,3289,610,1,0,0,0,3290,3291,3,801,400,0,3291,
        3292,3,795,397,0,3292,3293,3,773,386,0,3293,3294,3,769,384,0,3294,
        612,1,0,0,0,3295,3296,3,801,400,0,3296,3297,3,801,400,0,3297,3298,
        3,787,393,0,3298,614,1,0,0,0,3299,3300,3,801,400,0,3300,3301,3,803,
        401,0,3301,3302,3,765,382,0,3302,3303,3,799,399,0,3303,3304,3,803,
        401,0,3304,616,1,0,0,0,3305,3306,3,801,400,0,3306,3307,3,803,401,
        0,3307,3308,3,765,382,0,3308,3309,3,803,401,0,3309,3310,3,781,390,
        0,3310,3311,3,801,400,0,3311,3312,3,803,401,0,3312,3313,3,781,390,
        0,3313,3314,3,769,384,0,3314,3315,3,801,400,0,3315,618,1,0,0,0,3316,
        3317,3,801,400,0,3317,3318,3,803,401,0,3318,3319,3,765,382,0,3319,
        3320,3,803,401,0,3320,3321,3,805,402,0,3321,3322,3,801,400,0,3322,
        620,1,0,0,0,3323,3324,3,801,400,0,3324,3325,3,803,401,0,3325,3326,
        3,793,396,0,3326,3327,3,799,399,0,3327,3328,3,773,386,0,3328,3329,
        3,771,385,0,3329,622,1,0,0,0,3330,3331,3,801,400,0,3331,3332,3,803,
        401,0,3332,3333,3,799,399,0,3333,3334,3,773,386,0,3334,3335,3,765,
        382,0,3335,3336,3,789,394,0,3336,3337,3,803,401,0,3337,3338,3,765,
        382,0,3338,3339,3,767,383,0,3339,3340,3,787,393,0,3340,3341,3,773,
        386,0,3341,624,1,0,0,0,3342,3343,3,801,400,0,3343,3344,3,803,401,
        0,3344,3345,3,799,399,0,3345,3346,3,781,390,0,3346,3347,3,791,395,
        0,3347,3348,3,777,388,0,3348,626,1,0,0,0,3349,3350,3,801,400,0,3350,
        3351,3,803,401,0,3351,3352,3,799,399,0,3352,3353,3,805,402,0,3353,
        3354,3,769,384,0,3354,3355,3,803,401,0,3355,628,1,0,0,0,3356,3357,
        3,801,400,0,3357,3358,3,805,402,0,3358,3359,3,789,394,0,3359,3360,
        3,789,394,0,3360,3361,3,765,382,0,3361,3362,3,799,399,0,3362,3363,
        3,813,406,0,3363,630,1,0,0,0,3364,3365,3,801,400,0,3365,3366,3,813,
        406,0,3366,3367,3,791,395,0,3367,3368,3,769,384,0,3368,632,1,0,0,
        0,3369,3370,3,801,400,0,3370,3371,3,813,406,0,3371,3372,3,801,400,
        0,3372,3373,3,803,401,0,3373,3374,3,773,386,0,3374,3375,3,789,394,
        0,3375,3376,3,837,418,0,3376,3377,3,803,401,0,3377,3378,3,781,390,
        0,3378,3379,3,789,394,0,3379,3380,3,773,386,0,3380,634,1,0,0,0,3381,
        3382,3,801,400,0,3382,3383,3,813,406,0,3383,3384,3,801,400,0,3384,
        3385,3,803,401,0,3385,3386,3,773,386,0,3386,3387,3,789,394,0,3387,
        3388,3,837,418,0,3388,3389,3,807,403,0,3389,3390,3,773,386,0,3390,
        3391,3,799,399,0,3391,3392,3,801,400,0,3392,3393,3,781,390,0,3393,
        3394,3,793,396,0,3394,3395,3,791,395,0,3395,636,1,0,0,0,3396,3397,
        3,803,401,0,3397,3398,3,765,382,0,3398,3399,3,767,383,0,3399,3400,
        3,787,393,0,3400,3401,3,773,386,0,3401,638,1,0,0,0,3402,3403,3,803,
        401,0,3403,3404,3,765,382,0,3404,3405,3,767,383,0,3405,3406,3,787,
        393,0,3406,3407,3,773,386,0,3407,3408,3,801,400,0,3408,640,1,0,0,
        0,3409,3410,3,803,401,0,3410,3411,3,765,382,0,3411,3412,3,767,383,
        0,3412,3413,3,787,393,0,3413,3414,3,773,386,0,3414,3415,3,801,400,
        0,3415,3416,3,765,382,0,3416,3417,3,789,394,0,3417,3418,3,795,397,
        0,3418,3419,3,787,393,0,3419,3420,3,773,386,0,3420,642,1,0,0,0,3421,
        3422,3,803,401,0,3422,3423,3,767,383,0,3423,3424,3,787,393,0,3424,
        3425,3,795,397,0,3425,3426,3,799,399,0,3426,3427,3,793,396,0,3427,
        3428,3,795,397,0,3428,3429,3,773,386,0,3429,3430,3,799,399,0,3430,
        3431,3,803,401,0,3431,3432,3,781,390,0,3432,3433,3,773,386,0,3433,
        3434,3,801,400,0,3434,644,1,0,0,0,3435,3436,3,803,401,0,3436,3437,
        3,773,386,0,3437,3438,3,789,394,0,3438,3439,3,795,397,0,3439,3440,
        3,793,396,0,3440,3441,3,799,399,0,3441,3442,3,765,382,0,3442,3443,
        3,799,399,0,3443,3444,3,813,406,0,3444,646,1,0,0,0,3445,3446,3,803,
        401,0,3446,3447,3,773,386,0,3447,3448,3,799,399,0,3448,3449,3,789,
        394,0,3449,3450,3,781,390,0,3450,3451,3,791,395,0,3451,3452,3,765,
        382,0,3452,3453,3,803,401,0,3453,3454,3,773,386,0,3454,3455,3,771,
        385,0,3455,648,1,0,0,0,3456,3457,3,803,401,0,3457,3458,3,779,389,
        0,3458,3459,3,773,386,0,3459,3460,3,791,395,0,3460,650,1,0,0,0,3461,
        3462,3,803,401,0,3462,3463,3,781,390,0,3463,3464,3,789,394,0,3464,
        3465,3,773,386,0,3465,652,1,0,0,0,3466,3467,3,803,401,0,3467,3468,
        3,781,390,0,3468,3469,3,789,394,0,3469,3470,3,773,386,0,3470,3471,
        3,801,400,0,3471,3472,3,803,401,0,3472,3473,3,765,382,0,3473,3474,
        3,789,394,0,3474,3475,3,795,397,0,3475,654,1,0,0,0,3476,3477,3,803,
        401,0,3477,3478,3,781,390,0,3478,3479,3,789,394,0,3479,3480,3,773,
        386,0,3480,3481,3,801,400,0,3481,3482,3,803,401,0,3482,3483,3,765,
        382,0,3483,3484,3,789,394,0,3484,3485,3,795,397,0,3485,3486,3,787,
        393,0,3486,3487,3,793,396,0,3487,3488,3,769,384,0,3488,3489,3,765,
        382,0,3489,3490,3,787,393,0,3490,3491,3,803,401,0,3491,3492,3,815,
        407,0,3492,656,1,0,0,0,3493,3494,3,785,392,0,3494,3495,3,809,404,
        0,3495,3496,3,837,418,0,3496,3497,3,803,401,0,3497,3498,3,781,390,
        0,3498,3499,3,789,394,0,3499,3500,3,773,386,0,3500,3501,3,801,400,
        0,3501,3502,3,803,401,0,3502,3503,3,765,382,0,3503,3504,3,789,394,
        0,3504,3505,3,795,397,0,3505,3506,3,803,401,0,3506,3507,3,815,407,
        0,3507,658,1,0,0,0,3508,3509,3,803,401,0,3509,3510,3,781,390,0,3510,
        3511,3,791,395,0,3511,3512,3,813,406,0,3512,3513,3,781,390,0,3513,
        3514,3,791,395,0,3514,3515,3,803,401,0,3515,660,1,0,0,0,3516,3517,
        3,803,401,0,3517,3518,3,793,396,0,3518,662,1,0,0,0,3519,3520,3,803,
        401,0,3520,3521,3,793,396,0,3521,3522,3,805,402,0,3522,3523,3,769,
        384,0,3523,3524,3,779,389,0,3524,664,1,0,0,0,3525,3526,3,803,401,
        0,3526,3527,3,799,399,0,3527,3528,3,765,382,0,3528,3529,3,781,390,
        0,3529,3530,3,787,393,0,3530,3531,3,781,390,0,3531,3532,3,791,395,
        0,3532,3533,3,777,388,0,3533,666,1,0,0,0,3534,3535,3,803,401,0,3535,
        3536,3,799,399,0,3536,3537,3,765,382,0,3537,3538,3,791,395,0,3538,
        3539,3,801,400,0,3539,3540,3,765,382,0,3540,3541,3,769,384,0,3541,
        3542,3,803,401,0,3542,3543,3,781,390,0,3543,3544,3,793,396,0,3544,
        3545,3,791,395,0,3545,668,1,0,0,0,3546,3547,3,803,401,0,3547,3548,
        3,799,399,0,3548,3549,3,765,382,0,3549,3550,3,791,395,0,3550,3551,
        3,801,400,0,3551,3552,3,765,382,0,3552,3553,3,769,384,0,3553,3554,
        3,803,401,0,3554,3555,3,781,390,0,3555,3556,3,793,396,0,3556,3557,
        3,791,395,0,3557,3558,3,765,382,0,3558,3559,3,787,393,0,3559,670,
        1,0,0,0,3560,3561,3,803,401,0,3561,3562,3,799,399,0,3562,3563,3,
        765,382,0,3563,3564,3,791,395,0,3564,3565,3,801,400,0,3565,3566,
        3,765,382,0,3566,3567,3,769,384,0,3567,3568,3,803,401,0,3568,3569,
        3,781,390,0,3569,3570,3,793,396,0,3570,3571,3,791,395,0,3571,3572,
        3,801,400,0,3572,672,1,0,0,0,3573,3574,3,803,401,0,3574,3575,3,799,
        399,0,3575,3576,3,765,382,0,3576,3577,3,791,395,0,3577,3578,3,801,
        400,0,3578,3579,3,775,387,0,3579,3580,3,793,396,0,3580,3581,3,799,
        399,0,3581,3582,3,789,394,0,3582,674,1,0,0,0,3583,3584,3,803,401,
        0,3584,3585,3,799,399,0,3585,3586,3,781,390,0,3586,3587,3,777,388,
        0,3587,3588,3,777,388,0,3588,3589,3,773,386,0,3589,3590,3,799,399,
        0,3590,676,1,0,0,0,3591,3592,3,803,401,0,3592,3593,3,799,399,0,3593,
        3594,3,781,390,0,3594,3595,3,789,394,0,3595,678,1,0,0,0,3596,3597,
        3,803,401,0,3597,3598,3,799,399,0,3598,3599,3,805,402,0,3599,3600,
        3,773,386,0,3600,680,1,0,0,0,3601,3602,3,803,401,0,3602,3603,3,799,
        399,0,3603,3604,3,805,402,0,3604,3605,3,791,395,0,3605,3606,3,769,
        384,0,3606,3607,3,765,382,0,3607,3608,3,803,401,0,3608,3609,3,773,
        386,0,3609,682,1,0,0,0,3610,3611,3,803,401,0,3611,3612,3,813,406,
        0,3612,3613,3,795,397,0,3613,3614,3,773,386,0,3614,684,1,0,0,0,3615,
        3616,3,805,402,0,3616,3617,3,791,395,0,3617,3618,3,765,382,0,3618,
        3619,3,799,399,0,3619,3620,3,769,384,0,3620,3621,3,779,389,0,3621,
        3622,3,781,390,0,3622,3623,3,807,403,0,3623,3624,3,773,386,0,3624,
        686,1,0,0,0,3625,3626,3,805,402,0,3626,3627,3,791,395,0,3627,3628,
        3,767,383,0,3628,3629,3,793,396,0,3629,3630,3,805,402,0,3630,3631,
        3,791,395,0,3631,3632,3,771,385,0,3632,3633,3,773,386,0,3633,3634,
        3,771,385,0,3634,688,1,0,0,0,3635,3636,3,805,402,0,3636,3637,3,791,
        395,0,3637,3638,3,771,385,0,3638,3639,3,793,396,0,3639,690,1,0,0,
        0,3640,3641,3,805,402,0,3641,3642,3,791,395,0,3642,3643,3,781,390,
        0,3643,3644,3,793,396,0,3644,3645,3,791,395,0,3645,692,1,0,0,0,3646,
        3647,3,805,402,0,3647,3648,3,791,395,0,3648,3649,3,781,390,0,3649,
        3650,3,793,396,0,3650,3651,3,791,395,0,3651,3652,3,803,401,0,3652,
        3653,3,813,406,0,3653,3654,3,795,397,0,3654,3655,3,773,386,0,3655,
        694,1,0,0,0,3656,3657,3,805,402,0,3657,3658,3,791,395,0,3658,3659,
        3,781,390,0,3659,3660,3,797,398,0,3660,3661,3,805,402,0,3661,3662,
        3,773,386,0,3662,696,1,0,0,0,3663,3664,3,805,402,0,3664,3665,3,791,
        395,0,3665,3666,3,781,390,0,3666,3667,3,797,398,0,3667,3668,3,805,
        402,0,3668,3669,3,773,386,0,3669,3670,3,783,391,0,3670,3671,3,793,
        396,0,3671,3672,3,781,390,0,3672,3673,3,791,395,0,3673,698,1,0,0,
        0,3674,3675,3,805,402,0,3675,3676,3,791,395,0,3676,3677,3,785,392,
        0,3677,3678,3,791,395,0,3678,3679,3,793,396,0,3679,3680,3,809,404,
        0,3680,3681,3,791,395,0,3681,700,1,0,0,0,3682,3683,3,805,402,0,3683,
        3684,3,791,395,0,3684,3685,3,787,393,0,3685,3686,3,793,396,0,3686,
        3687,3,769,384,0,3687,3688,3,785,392,0,3688,702,1,0,0,0,3689,3690,
        3,805,402,0,3690,3691,3,791,395,0,3691,3692,3,789,394,0,3692,3693,
        3,765,382,0,3693,3694,3,791,395,0,3694,3695,3,765,382,0,3695,3696,
        3,777,388,0,3696,3697,3,773,386,0,3697,3698,3,771,385,0,3698,704,
        1,0,0,0,3699,3700,3,805,402,0,3700,3701,3,791,395,0,3701,3702,3,
        801,400,0,3702,3703,3,773,386,0,3703,3704,3,803,401,0,3704,706,1,
        0,0,0,3705,3706,3,805,402,0,3706,3707,3,791,395,0,3707,3708,3,801,
        400,0,3708,3709,3,781,390,0,3709,3710,3,777,388,0,3710,3711,3,791,
        395,0,3711,3712,3,773,386,0,3712,3713,3,771,385,0,3713,708,1,0,0,
        0,3714,3715,3,805,402,0,3715,3716,3,795,397,0,3716,3717,3,771,385,
        0,3717,3718,3,765,382,0,3718,3719,3,803,401,0,3719,3720,3,773,386,
        0,3720,710,1,0,0,0,3721,3722,3,805,402,0,3722,3723,3,799,399,0,3723,
        3724,3,781,390,0,3724,712,1,0,0,0,3725,3726,3,805,402,0,3726,3727,
        3,799,399,0,3727,3728,3,787,393,0,3728,714,1,0,0,0,3729,3730,3,805,
        402,0,3730,3731,3,801,400,0,3731,3732,3,773,386,0,3732,716,1,0,0,
        0,3733,3734,3,805,402,0,3734,3735,3,801,400,0,3735,3736,3,773,386,
        0,3736,3737,3,799,399,0,3737,718,1,0,0,0,3738,3739,3,805,402,0,3739,
        3740,3,801,400,0,3740,3741,3,781,390,0,3741,3742,3,791,395,0,3742,
        3743,3,777,388,0,3743,720,1,0,0,0,3744,3745,3,805,402,0,3745,3746,
        3,803,401,0,3746,3747,3,769,384,0,3747,722,1,0,0,0,3748,3749,3,805,
        402,0,3749,3750,3,803,401,0,3750,3751,3,769,384,0,3751,3752,3,837,
        418,0,3752,3753,3,803,401,0,3753,3754,3,789,394,0,3754,3755,3,773,
        386,0,3755,3756,3,801,400,0,3756,3757,3,803,401,0,3757,3758,3,765,
        382,0,3758,3759,3,789,394,0,3759,3760,3,795,397,0,3760,724,1,0,0,
        0,3761,3762,3,807,403,0,3762,3763,3,765,382,0,3763,3764,3,787,393,
        0,3764,3765,3,781,390,0,3765,3766,3,771,385,0,3766,3767,3,765,382,
        0,3767,3768,3,803,401,0,3768,3769,3,773,386,0,3769,726,1,0,0,0,3770,
        3771,3,807,403,0,3771,3772,3,765,382,0,3772,3773,3,787,393,0,3773,
        3774,3,805,402,0,3774,3775,3,773,386,0,3775,3776,3,801,400,0,3776,
        728,1,0,0,0,3777,3778,3,877,438,0,3778,3779,3,807,403,0,3779,3780,
        3,765,382,0,3780,3781,3,787,393,0,3781,3782,3,805,402,0,3782,3783,
        3,773,386,0,3783,3784,3,877,438,0,3784,730,1,0,0,0,3785,3786,3,807,
        403,0,3786,3787,3,765,382,0,3787,3788,3,799,399,0,3788,3789,3,769,
        384,0,3789,3790,3,779,389,0,3790,3791,3,765,382,0,3791,3792,3,799,
        399,0,3792,732,1,0,0,0,3793,3794,3,807,403,0,3794,3795,3,773,386,
        0,3795,3796,3,769,384,0,3796,3797,3,803,401,0,3797,3798,3,793,396,
        0,3798,3799,3,799,399,0,3799,3800,3,781,390,0,3800,3801,3,815,407,
        0,3801,3802,3,765,382,0,3802,3803,3,803,401,0,3803,3804,3,781,390,
        0,3804,3805,3,793,396,0,3805,3806,3,791,395,0,3806,734,1,0,0,0,3807,
        3808,3,807,403,0,3808,3809,3,781,390,0,3809,3810,3,773,386,0,3810,
        3811,3,809,404,0,3811,736,1,0,0,0,3812,3813,3,807,403,0,3813,3814,
        3,781,390,0,3814,3815,3,773,386,0,3815,3816,3,809,404,0,3816,3817,
        3,801,400,0,3817,738,1,0,0,0,3818,3819,3,809,404,0,3819,3820,3,765,
        382,0,3820,3821,3,781,390,0,3821,3822,3,803,401,0,3822,740,1,0,0,
        0,3823,3824,3,809,404,0,3824,3825,3,773,386,0,3825,3826,3,773,386,
        0,3826,3828,3,785,392,0,3827,3829,3,801,400,0,3828,3827,1,0,0,0,
        3828,3829,1,0,0,0,3829,742,1,0,0,0,3830,3831,3,809,404,0,3831,3832,
        3,779,389,0,3832,3833,3,773,386,0,3833,3834,3,791,395,0,3834,744,
        1,0,0,0,3835,3836,3,809,404,0,3836,3837,3,779,389,0,3837,3838,3,
        773,386,0,3838,3839,3,799,399,0,3839,3840,3,773,386,0,3840,746,1,
        0,0,0,3841,3842,3,809,404,0,3842,3843,3,779,389,0,3843,3844,3,781,
        390,0,3844,3845,3,787,393,0,3845,3846,3,773,386,0,3846,748,1,0,0,
        0,3847,3848,3,809,404,0,3848,3849,3,781,390,0,3849,3850,3,791,395,
        0,3850,3851,3,771,385,0,3851,3852,3,793,396,0,3852,3853,3,809,404,
        0,3853,750,1,0,0,0,3854,3855,3,809,404,0,3855,3856,3,781,390,0,3856,
        3857,3,803,401,0,3857,3858,3,779,389,0,3858,752,1,0,0,0,3859,3860,
        3,809,404,0,3860,3861,3,781,390,0,3861,3862,3,803,401,0,3862,3863,
        3,779,389,0,3863,3864,3,781,390,0,3864,3865,3,791,395,0,3865,754,
        1,0,0,0,3866,3867,3,809,404,0,3867,3868,3,793,396,0,3868,3869,3,
        799,399,0,3869,3870,3,785,392,0,3870,756,1,0,0,0,3871,3872,3,809,
        404,0,3872,3873,3,793,396,0,3873,3874,3,799,399,0,3874,3875,3,785,
        392,0,3875,3876,3,787,393,0,3876,3877,3,793,396,0,3877,3878,3,765,
        382,0,3878,3879,3,771,385,0,3879,758,1,0,0,0,3880,3881,3,809,404,
        0,3881,3882,3,799,399,0,3882,3883,3,781,390,0,3883,3884,3,803,401,
        0,3884,3885,3,773,386,0,3885,760,1,0,0,0,3886,3887,3,813,406,0,3887,
        3888,3,773,386,0,3888,3889,3,765,382,0,3889,3891,3,799,399,0,3890,
        3892,3,801,400,0,3891,3890,1,0,0,0,3891,3892,1,0,0,0,3892,762,1,
        0,0,0,3893,3894,3,815,407,0,3894,3895,3,793,396,0,3895,3896,3,791,
        395,0,3896,3897,3,773,386,0,3897,764,1,0,0,0,3898,3899,7,0,0,0,3899,
        766,1,0,0,0,3900,3901,7,1,0,0,3901,768,1,0,0,0,3902,3903,7,2,0,0,
        3903,770,1,0,0,0,3904,3905,7,3,0,0,3905,772,1,0,0,0,3906,3907,7,
        4,0,0,3907,774,1,0,0,0,3908,3909,7,5,0,0,3909,776,1,0,0,0,3910,3911,
        7,6,0,0,3911,778,1,0,0,0,3912,3913,7,7,0,0,3913,780,1,0,0,0,3914,
        3915,7,8,0,0,3915,782,1,0,0,0,3916,3917,7,9,0,0,3917,784,1,0,0,0,
        3918,3919,7,10,0,0,3919,786,1,0,0,0,3920,3921,7,11,0,0,3921,788,
        1,0,0,0,3922,3923,7,12,0,0,3923,790,1,0,0,0,3924,3925,7,13,0,0,3925,
        792,1,0,0,0,3926,3927,7,14,0,0,3927,794,1,0,0,0,3928,3929,7,15,0,
        0,3929,796,1,0,0,0,3930,3931,7,16,0,0,3931,798,1,0,0,0,3932,3933,
        7,17,0,0,3933,800,1,0,0,0,3934,3935,7,18,0,0,3935,802,1,0,0,0,3936,
        3937,7,19,0,0,3937,804,1,0,0,0,3938,3939,7,20,0,0,3939,806,1,0,0,
        0,3940,3941,7,21,0,0,3941,808,1,0,0,0,3942,3943,7,22,0,0,3943,810,
        1,0,0,0,3944,3945,7,23,0,0,3945,812,1,0,0,0,3946,3947,7,24,0,0,3947,
        814,1,0,0,0,3948,3949,7,25,0,0,3949,816,1,0,0,0,3950,3951,5,46,0,
        0,3951,818,1,0,0,0,3952,3953,5,58,0,0,3953,820,1,0,0,0,3954,3955,
        5,44,0,0,3955,822,1,0,0,0,3956,3957,5,59,0,0,3957,824,1,0,0,0,3958,
        3959,5,40,0,0,3959,826,1,0,0,0,3960,3961,5,41,0,0,3961,828,1,0,0,
        0,3962,3963,5,91,0,0,3963,830,1,0,0,0,3964,3965,5,93,0,0,3965,832,
        1,0,0,0,3966,3967,5,123,0,0,3967,834,1,0,0,0,3968,3969,5,125,0,0,
        3969,836,1,0,0,0,3970,3971,5,95,0,0,3971,838,1,0,0,0,3972,3976,5,
        61,0,0,3973,3974,5,61,0,0,3974,3976,5,61,0,0,3975,3972,1,0,0,0,3975,
        3973,1,0,0,0,3976,840,1,0,0,0,3977,3978,5,60,0,0,3978,3979,5,61,
        0,0,3979,3980,5,62,0,0,3980,842,1,0,0,0,3981,3982,5,60,0,0,3982,
        3986,5,62,0,0,3983,3984,5,33,0,0,3984,3986,5,61,0,0,3985,3981,1,
        0,0,0,3985,3983,1,0,0,0,3986,844,1,0,0,0,3987,3988,5,60,0,0,3988,
        3989,5,61,0,0,3989,846,1,0,0,0,3990,3991,5,60,0,0,3991,848,1,0,0,
        0,3992,3993,5,62,0,0,3993,3994,5,61,0,0,3994,850,1,0,0,0,3995,3996,
        5,62,0,0,3996,852,1,0,0,0,3997,3998,5,47,0,0,3998,854,1,0,0,0,3999,
        4000,5,43,0,0,4000,856,1,0,0,0,4001,4002,5,45,0,0,4002,858,1,0,0,
        0,4003,4004,5,42,0,0,4004,860,1,0,0,0,4005,4006,5,37,0,0,4006,862,
        1,0,0,0,4007,4008,5,68,0,0,4008,4009,5,73,0,0,4009,4010,5,86,0,0,
        4010,864,1,0,0,0,4011,4012,5,38,0,0,4012,866,1,0,0,0,4013,4014,5,
        126,0,0,4014,868,1,0,0,0,4015,4016,5,124,0,0,4016,870,1,0,0,0,4017,
        4018,5,124,0,0,4018,4019,5,124,0,0,4019,872,1,0,0,0,4020,4021,5,
        94,0,0,4021,874,1,0,0,0,4022,4023,5,63,0,0,4023,876,1,0,0,0,4024,
        4025,5,36,0,0,4025,878,1,0,0,0,4026,4032,5,39,0,0,4027,4031,8,26,
        0,0,4028,4029,5,92,0,0,4029,4031,9,0,0,0,4030,4027,1,0,0,0,4030,
        4028,1,0,0,0,4031,4034,1,0,0,0,4032,4030,1,0,0,0,4032,4033,1,0,0,
        0,4033,4035,1,0,0,0,4034,4032,1,0,0,0,4035,4047,5,39,0,0,4036,4042,
        5,34,0,0,4037,4041,8,27,0,0,4038,4039,5,92,0,0,4039,4041,9,0,0,0,
        4040,4037,1,0,0,0,4040,4038,1,0,0,0,4041,4044,1,0,0,0,4042,4040,
        1,0,0,0,4042,4043,1,0,0,0,4043,4045,1,0,0,0,4044,4042,1,0,0,0,4045,
        4047,5,34,0,0,4046,4026,1,0,0,0,4046,4036,1,0,0,0,4047,4048,1,0,
        0,0,4048,4046,1,0,0,0,4048,4049,1,0,0,0,4049,880,1,0,0,0,4050,4060,
        3,879,439,0,4051,4052,5,48,0,0,4052,4055,5,88,0,0,4053,4056,3,897,
        448,0,4054,4056,3,899,449,0,4055,4053,1,0,0,0,4055,4054,1,0,0,0,
        4056,4057,1,0,0,0,4057,4055,1,0,0,0,4057,4058,1,0,0,0,4058,4060,
        1,0,0,0,4059,4050,1,0,0,0,4059,4051,1,0,0,0,4060,882,1,0,0,0,4061,
        4063,3,899,449,0,4062,4061,1,0,0,0,4063,4064,1,0,0,0,4064,4062,1,
        0,0,0,4064,4065,1,0,0,0,4065,4066,1,0,0,0,4066,4067,7,28,0,0,4067,
        884,1,0,0,0,4068,4070,3,889,444,0,4069,4071,5,66,0,0,4070,4069,1,
        0,0,0,4070,4071,1,0,0,0,4071,4072,1,0,0,0,4072,4073,5,68,0,0,4073,
        886,1,0,0,0,4074,4076,3,899,449,0,4075,4074,1,0,0,0,4076,4077,1,
        0,0,0,4077,4075,1,0,0,0,4077,4078,1,0,0,0,4078,4079,1,0,0,0,4079,
        4080,7,29,0,0,4080,888,1,0,0,0,4081,4083,3,899,449,0,4082,4081,1,
        0,0,0,4083,4084,1,0,0,0,4084,4082,1,0,0,0,4084,4085,1,0,0,0,4085,
        4097,1,0,0,0,4086,4090,3,817,408,0,4087,4089,3,899,449,0,4088,4087,
        1,0,0,0,4089,4092,1,0,0,0,4090,4088,1,0,0,0,4090,4091,1,0,0,0,4091,
        4094,1,0,0,0,4092,4090,1,0,0,0,4093,4095,3,901,450,0,4094,4093,1,
        0,0,0,4094,4095,1,0,0,0,4095,4098,1,0,0,0,4096,4098,3,901,450,0,
        4097,4086,1,0,0,0,4097,4096,1,0,0,0,4097,4098,1,0,0,0,4098,890,1,
        0,0,0,4099,4102,3,895,447,0,4100,4102,3,899,449,0,4101,4099,1,0,
        0,0,4101,4100,1,0,0,0,4102,4108,1,0,0,0,4103,4107,3,895,447,0,4104,
        4107,3,899,449,0,4105,4107,5,95,0,0,4106,4103,1,0,0,0,4106,4104,
        1,0,0,0,4106,4105,1,0,0,0,4107,4110,1,0,0,0,4108,4106,1,0,0,0,4108,
        4109,1,0,0,0,4109,4121,1,0,0,0,4110,4108,1,0,0,0,4111,4121,3,893,
        446,0,4112,4114,5,96,0,0,4113,4115,3,903,451,0,4114,4113,1,0,0,0,
        4115,4116,1,0,0,0,4116,4114,1,0,0,0,4116,4117,1,0,0,0,4117,4118,
        1,0,0,0,4118,4119,5,96,0,0,4119,4121,1,0,0,0,4120,4101,1,0,0,0,4120,
        4111,1,0,0,0,4120,4112,1,0,0,0,4121,892,1,0,0,0,4122,4128,5,96,0,
        0,4123,4124,5,96,0,0,4124,4127,5,96,0,0,4125,4127,8,30,0,0,4126,
        4123,1,0,0,0,4126,4125,1,0,0,0,4127,4130,1,0,0,0,4128,4126,1,0,0,
        0,4128,4129,1,0,0,0,4129,4131,1,0,0,0,4130,4128,1,0,0,0,4131,4132,
        5,96,0,0,4132,894,1,0,0,0,4133,4134,7,31,0,0,4134,896,1,0,0,0,4135,
        4136,2,65,70,0,4136,898,1,0,0,0,4137,4138,2,48,57,0,4138,900,1,0,
        0,0,4139,4142,5,69,0,0,4140,4143,3,855,427,0,4141,4143,3,857,428,
        0,4142,4140,1,0,0,0,4142,4141,1,0,0,0,4142,4143,1,0,0,0,4143,4145,
        1,0,0,0,4144,4146,3,899,449,0,4145,4144,1,0,0,0,4146,4147,1,0,0,
        0,4147,4145,1,0,0,0,4147,4148,1,0,0,0,4148,902,1,0,0,0,4149,4166,
        7,32,0,0,4150,4166,3,855,427,0,4151,4166,3,859,429,0,4152,4166,3,
        875,437,0,4153,4166,3,857,428,0,4154,4166,3,817,408,0,4155,4166,
        3,825,412,0,4156,4166,3,827,413,0,4157,4166,3,829,414,0,4158,4166,
        3,831,415,0,4159,4166,3,833,416,0,4160,4166,3,835,417,0,4161,4166,
        3,873,436,0,4162,4166,3,869,434,0,4163,4166,3,877,438,0,4164,4166,
        5,33,0,0,4165,4149,1,0,0,0,4165,4150,1,0,0,0,4165,4151,1,0,0,0,4165,
        4152,1,0,0,0,4165,4153,1,0,0,0,4165,4154,1,0,0,0,4165,4155,1,0,0,
        0,4165,4156,1,0,0,0,4165,4157,1,0,0,0,4165,4158,1,0,0,0,4165,4159,
        1,0,0,0,4165,4160,1,0,0,0,4165,4161,1,0,0,0,4165,4162,1,0,0,0,4165,
        4163,1,0,0,0,4165,4164,1,0,0,0,4166,904,1,0,0,0,4167,4171,5,95,0,
        0,4168,4172,3,895,447,0,4169,4172,3,899,449,0,4170,4172,7,33,0,0,
        4171,4168,1,0,0,0,4171,4169,1,0,0,0,4171,4170,1,0,0,0,4172,4173,
        1,0,0,0,4173,4171,1,0,0,0,4173,4174,1,0,0,0,4174,906,1,0,0,0,4175,
        4176,7,34,0,0,4176,4177,1,0,0,0,4177,4178,6,453,0,0,4178,908,1,0,
        0,0,4179,4180,5,45,0,0,4180,4181,5,45,0,0,4181,4185,1,0,0,0,4182,
        4184,8,35,0,0,4183,4182,1,0,0,0,4184,4187,1,0,0,0,4185,4183,1,0,
        0,0,4185,4186,1,0,0,0,4186,4188,1,0,0,0,4187,4185,1,0,0,0,4188,4189,
        6,454,0,0,4189,910,1,0,0,0,4190,4193,3,913,456,0,4191,4193,3,915,
        457,0,4192,4190,1,0,0,0,4192,4191,1,0,0,0,4193,912,1,0,0,0,4194,
        4195,5,47,0,0,4195,4196,5,42,0,0,4196,4197,5,43,0,0,4197,4202,1,
        0,0,0,4198,4201,3,911,455,0,4199,4201,9,0,0,0,4200,4198,1,0,0,0,
        4200,4199,1,0,0,0,4201,4204,1,0,0,0,4202,4203,1,0,0,0,4202,4200,
        1,0,0,0,4203,4205,1,0,0,0,4204,4202,1,0,0,0,4205,4206,5,42,0,0,4206,
        4207,5,47,0,0,4207,4208,1,0,0,0,4208,4209,6,456,0,0,4209,914,1,0,
        0,0,4210,4211,5,47,0,0,4211,4212,5,42,0,0,4212,4217,1,0,0,0,4213,
        4216,3,911,455,0,4214,4216,9,0,0,0,4215,4213,1,0,0,0,4215,4214,1,
        0,0,0,4216,4219,1,0,0,0,4217,4218,1,0,0,0,4217,4215,1,0,0,0,4218,
        4220,1,0,0,0,4219,4217,1,0,0,0,4220,4221,5,42,0,0,4221,4222,5,47,
        0,0,4222,4223,1,0,0,0,4223,4224,6,457,0,0,4224,916,1,0,0,0,50,0,
        1469,1528,1538,1644,1727,2053,2155,2446,2454,2495,3149,3828,3891,
        3975,3985,4030,4032,4040,4042,4046,4048,4055,4057,4059,4064,4070,
        4077,4084,4090,4094,4097,4101,4106,4108,4116,4120,4126,4128,4142,
        4147,4165,4171,4173,4185,4192,4200,4202,4215,4217,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!HiveSQLLexer.__ATN) {
            HiveSQLLexer.__ATN = new antlr.ATNDeserializer().deserialize(HiveSQLLexer._serializedATN);
        }

        return HiveSQLLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(HiveSQLLexer.literalNames, HiveSQLLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return HiveSQLLexer.vocabulary;
    }

    private static readonly decisionsToDFA = HiveSQLLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}