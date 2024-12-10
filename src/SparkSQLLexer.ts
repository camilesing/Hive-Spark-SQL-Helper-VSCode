// Generated from gen/SparkSQL.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SparkSQLLexer extends antlr.Lexer {
    public static readonly SPACE = 1;
    public static readonly COMMENT_INPUT = 2;
    public static readonly LINE_COMMENT = 3;
    public static readonly KW_ADD = 4;
    public static readonly KW_ADMIN = 5;
    public static readonly KW_AFTER = 6;
    public static readonly KW_ANALYZE = 7;
    public static readonly KW_ASC = 8;
    public static readonly KW_BEFORE = 9;
    public static readonly KW_BYTE = 10;
    public static readonly KW_BYTES = 11;
    public static readonly KW_CACHE = 12;
    public static readonly KW_CASCADE = 13;
    public static readonly KW_CATALOG = 14;
    public static readonly KW_CATALOGS = 15;
    public static readonly KW_CLEAR = 16;
    public static readonly KW_CENTURY = 17;
    public static readonly KW_CHAIN = 18;
    public static readonly KW_CHANGELOG_MODE = 19;
    public static readonly KW_CHARACTERS = 20;
    public static readonly KW_COMMENT = 21;
    public static readonly KW_COMPACT = 22;
    public static readonly KW_COLUMNS = 23;
    public static readonly KW_CONSTRAINTS = 24;
    public static readonly KW_CONSTRUCTOR = 25;
    public static readonly KW_COMPUTE = 26;
    public static readonly KW_CUMULATE = 27;
    public static readonly KW_DATA = 28;
    public static readonly KW_DATABASE = 29;
    public static readonly KW_DATABASES = 30;
    public static readonly KW_DAYS = 31;
    public static readonly KW_DBPROPERTIES = 32;
    public static readonly KW_DECADE = 33;
    public static readonly KW_DEFINED = 34;
    public static readonly KW_DESC = 35;
    public static readonly KW_DESCRIPTOR = 36;
    public static readonly KW_DIV = 37;
    public static readonly KW_ENCODING = 38;
    public static readonly KW_ENFORCED = 39;
    public static readonly KW_ENGINE = 40;
    public static readonly KW_EPOCH = 41;
    public static readonly KW_ERROR = 42;
    public static readonly KW_ESTIMATED_COST = 43;
    public static readonly KW_EXCEPTION = 44;
    public static readonly KW_EXCLUDE = 45;
    public static readonly KW_EXCLUDING = 46;
    public static readonly KW_EXTENDED = 47;
    public static readonly KW_FILTER = 48;
    public static readonly KW_FILE = 49;
    public static readonly KW_FILES = 50;
    public static readonly KW_FINAL = 51;
    public static readonly KW_FIRST = 52;
    public static readonly KW_FOLLOWING = 53;
    public static readonly KW_FORMAT = 54;
    public static readonly KW_FORTRAN = 55;
    public static readonly KW_FOUND = 56;
    public static readonly KW_FRAC_SECOND = 57;
    public static readonly KW_FUNCTIONS = 58;
    public static readonly KW_GENERAL = 59;
    public static readonly KW_GENERATED = 60;
    public static readonly KW_GO = 61;
    public static readonly KW_GOTO = 62;
    public static readonly KW_GRANTED = 63;
    public static readonly KW_HOP = 64;
    public static readonly KW_HOURS = 65;
    public static readonly KW_IF = 66;
    public static readonly KW_IGNORE = 67;
    public static readonly KW_INCLUDE = 68;
    public static readonly KW_INCREMENT = 69;
    public static readonly KW_INPUT = 70;
    public static readonly KW_INVOKER = 71;
    public static readonly KW_JAR = 72;
    public static readonly KW_JARS = 73;
    public static readonly KW_JAVA = 74;
    public static readonly KW_JSON = 75;
    public static readonly KW_JSON_EXECUTION_PLAN = 76;
    public static readonly KW_KEY = 77;
    public static readonly KW_KEYS = 78;
    public static readonly KW_KEY_MEMBER = 79;
    public static readonly KW_KEY_TYPE = 80;
    public static readonly KW_LABEL = 81;
    public static readonly KW_LAST = 82;
    public static readonly KW_LENGTH = 83;
    public static readonly KW_LEVEL = 84;
    public static readonly KW_LIST = 85;
    public static readonly KW_LOAD = 86;
    public static readonly KW_LOCATION = 87;
    public static readonly KW_LONG = 88;
    public static readonly KW_MAP = 89;
    public static readonly KW_MICROSECOND = 90;
    public static readonly KW_MILLENNIUM = 91;
    public static readonly KW_MILLISECOND = 92;
    public static readonly KW_MINUTES = 93;
    public static readonly KW_MINVALUE = 94;
    public static readonly KW_MODIFY = 95;
    public static readonly KW_MODULES = 96;
    public static readonly KW_MONTHS = 97;
    public static readonly KW_NANOSECOND = 98;
    public static readonly KW_NOSCAN = 99;
    public static readonly KW_NULLS = 100;
    public static readonly KW_NUMBER = 101;
    public static readonly KW_OPTION = 102;
    public static readonly KW_OPTIONS = 103;
    public static readonly KW_ORDERING = 104;
    public static readonly KW_OUTPUT = 105;
    public static readonly KW_OVERWRITE = 106;
    public static readonly KW_OVERWRITING = 107;
    public static readonly KW_PARTITIONED = 108;
    public static readonly KW_PARTITIONS = 109;
    public static readonly KW_PASSING = 110;
    public static readonly KW_PAST = 111;
    public static readonly KW_PATH = 112;
    public static readonly KW_PLACING = 113;
    public static readonly KW_PLAN = 114;
    public static readonly KW_PRECEDING = 115;
    public static readonly KW_PRESERVE = 116;
    public static readonly KW_PRIOR = 117;
    public static readonly KW_PRIVILEGES = 118;
    public static readonly KW_PUBLIC = 119;
    public static readonly KW_PYTHON = 120;
    public static readonly KW_PYTHON_FILES = 121;
    public static readonly KW_PYTHON_REQUIREMENTS = 122;
    public static readonly KW_PYTHON_DEPENDENCIES = 123;
    public static readonly KW_PYTHON_JAR = 124;
    public static readonly KW_PYTHON_ARCHIVES = 125;
    public static readonly KW_PYTHON_PARAMETER = 126;
    public static readonly KW_QUARTER = 127;
    public static readonly KW_QUERY = 128;
    public static readonly KW_RAW = 129;
    public static readonly KW_READ = 130;
    public static readonly KW_REAL = 131;
    public static readonly KW_RELATIVE = 132;
    public static readonly KW_REMOVE = 133;
    public static readonly KW_RENAME = 134;
    public static readonly KW_REPLACE = 135;
    public static readonly KW_RESPECT = 136;
    public static readonly KW_RESTART = 137;
    public static readonly KW_RESTRICT = 138;
    public static readonly KW_ROLE = 139;
    public static readonly KW_ROW_COUNT = 140;
    public static readonly KW_SCALA = 141;
    public static readonly KW_SCALAR = 142;
    public static readonly KW_SCALE = 143;
    public static readonly KW_SCHEMA = 144;
    public static readonly KW_SCHEMAS = 145;
    public static readonly KW_SECONDS = 146;
    public static readonly KW_SECTION = 147;
    public static readonly KW_SECURITY = 148;
    public static readonly KW_SELF = 149;
    public static readonly KW_SERVER = 150;
    public static readonly KW_SERVER_NAME = 151;
    public static readonly KW_SESSION = 152;
    public static readonly KW_SETS = 153;
    public static readonly KW_SHORT = 154;
    public static readonly KW_SIMPLE = 155;
    public static readonly KW_SIZE = 156;
    public static readonly KW_SLIDE = 157;
    public static readonly KW_SOURCE = 158;
    public static readonly KW_SPACE = 159;
    public static readonly KW_SERDEPROPERTIES = 160;
    public static readonly KW_STATE = 161;
    public static readonly KW_STATISTICS = 162;
    public static readonly KW_STATEMENT = 163;
    public static readonly KW_STEP = 164;
    public static readonly KW_STRING = 165;
    public static readonly KW_STRUCTURE = 166;
    public static readonly KW_STYLE = 167;
    public static readonly KW_TABLES = 168;
    public static readonly KW_TEMPORARY = 169;
    public static readonly KW_TIMECOL = 170;
    public static readonly KW_FLOOR = 171;
    public static readonly KW_TIMESTAMP_LTZ = 172;
    public static readonly KW_TIMESTAMP_NTZ = 173;
    public static readonly KW_TIMESTAMPADD = 174;
    public static readonly KW_TIMESTAMPDIFF = 175;
    public static readonly KW_TOTIMESTAMP = 176;
    public static readonly KW_TRANSFORM = 177;
    public static readonly KW_TUMBLE = 178;
    public static readonly KW_TYPE = 179;
    public static readonly KW_UNCACHE = 180;
    public static readonly KW_UNDER = 181;
    public static readonly KW_UNBOUNDED = 182;
    public static readonly KW_UNLOAD = 183;
    public static readonly KW_USAGE = 184;
    public static readonly KW_USE = 185;
    public static readonly KW_UTF16 = 186;
    public static readonly KW_UTF32 = 187;
    public static readonly KW_UTF8 = 188;
    public static readonly KW_VERSION = 189;
    public static readonly KW_VIEW = 190;
    public static readonly KW_VIEWS = 191;
    public static readonly KW_VIRTUAL = 192;
    public static readonly KW_WATERMARK = 193;
    public static readonly KW_WATERMARKS = 194;
    public static readonly KW_WEEK = 195;
    public static readonly KW_WEEKS = 196;
    public static readonly KW_WORK = 197;
    public static readonly KW_WRAPPER = 198;
    public static readonly KW_YEARS = 199;
    public static readonly KW_ZONE = 200;
    public static readonly KW_ABS = 201;
    public static readonly KW_ALL = 202;
    public static readonly KW_ALLOW = 203;
    public static readonly KW_ALTER = 204;
    public static readonly KW_AND = 205;
    public static readonly KW_ANY = 206;
    public static readonly KW_ARE = 207;
    public static readonly KW_ARRAY = 208;
    public static readonly KW_AS = 209;
    public static readonly KW_ASYMMETRIC = 210;
    public static readonly KW_AT = 211;
    public static readonly KW_AVG = 212;
    public static readonly KW_BEGIN = 213;
    public static readonly KW_BETWEEN = 214;
    public static readonly KW_BIGINT = 215;
    public static readonly KW_BINARY = 216;
    public static readonly KW_BIT = 217;
    public static readonly KW_BLOB = 218;
    public static readonly KW_BOOLEAN = 219;
    public static readonly KW_BOTH = 220;
    public static readonly KW_BUCKET = 221;
    public static readonly KW_BUCKETS = 222;
    public static readonly KW_BY = 223;
    public static readonly KW_CALL = 224;
    public static readonly KW_CALLED = 225;
    public static readonly KW_CASCADED = 226;
    public static readonly KW_CASE = 227;
    public static readonly KW_CAST = 228;
    public static readonly KW_CEIL = 229;
    public static readonly KW_CHAR = 230;
    public static readonly KW_CHARACTER = 231;
    public static readonly KW_CHECK = 232;
    public static readonly KW_CLOB = 233;
    public static readonly KW_CLOSE = 234;
    public static readonly KW_CLUSTER = 235;
    public static readonly KW_CLUSTERED = 236;
    public static readonly KW_COALESCE = 237;
    public static readonly KW_COLLATE = 238;
    public static readonly KW_COLLECT = 239;
    public static readonly KW_COLUMN = 240;
    public static readonly KW_COMMIT = 241;
    public static readonly KW_CONNECT = 242;
    public static readonly KW_CONSTRAINT = 243;
    public static readonly KW_CONTAINS = 244;
    public static readonly KW_CONVERT = 245;
    public static readonly KW_COUNT = 246;
    public static readonly KW_CURRENT_TIMESTAMP = 247;
    public static readonly KW_CREATE = 248;
    public static readonly KW_CROSS = 249;
    public static readonly KW_CUBE = 250;
    public static readonly KW_CUME_DIST = 251;
    public static readonly KW_CURRENT = 252;
    public static readonly KW_CURSOR = 253;
    public static readonly KW_CYCLE = 254;
    public static readonly KW_COLLECTION = 255;
    public static readonly KW_DATE = 256;
    public static readonly KW_DATETIME = 257;
    public static readonly KW_DAY = 258;
    public static readonly KW_DEC = 259;
    public static readonly KW_DECIMAL = 260;
    public static readonly KW_DECLARE = 261;
    public static readonly KW_DEFAULT = 262;
    public static readonly KW_DEFINE = 263;
    public static readonly KW_DELETE = 264;
    public static readonly KW_DELIMITED = 265;
    public static readonly KW_DESCRIBE = 266;
    public static readonly KW_DENSE_RANK = 267;
    public static readonly KW_DISTINCT = 268;
    public static readonly KW_DIRECTORY = 269;
    public static readonly KW_DISTRIBUTED = 270;
    public static readonly KW_DISTRIBUTE = 271;
    public static readonly KW_DOUBLE = 272;
    public static readonly KW_DROP = 273;
    public static readonly KW_EACH = 274;
    public static readonly KW_ELSE = 275;
    public static readonly KW_END = 276;
    public static readonly KW_EQUALS = 277;
    public static readonly KW_ESCAPE = 278;
    public static readonly KW_ESCAPED = 279;
    public static readonly KW_EXCEPT = 280;
    public static readonly KW_EXECUTE = 281;
    public static readonly KW_EXISTS = 282;
    public static readonly KW_EXPLAIN = 283;
    public static readonly KW_EXPLODE = 284;
    public static readonly KW_EXPLODE_OUTER = 285;
    public static readonly KW_EXTERNAL = 286;
    public static readonly KW_EXTRACT = 287;
    public static readonly KW_FIRST_VALUE = 288;
    public static readonly KW_FALSE = 289;
    public static readonly KW_FLOAT = 290;
    public static readonly KW_FIELDS = 291;
    public static readonly KW_FOR = 292;
    public static readonly KW_FROM = 293;
    public static readonly KW_FROM_UNIXTIME = 294;
    public static readonly KW_FULL = 295;
    public static readonly KW_FUNCTION = 296;
    public static readonly KW_GLOBAL = 297;
    public static readonly KW_GRANT = 298;
    public static readonly KW_GROUP = 299;
    public static readonly KW_GROUPING = 300;
    public static readonly KW_GROUPS = 301;
    public static readonly KW_HASH = 302;
    public static readonly KW_HAVING = 303;
    public static readonly KW_HOUR = 304;
    public static readonly KW_IMPORT = 305;
    public static readonly KW_IN = 306;
    public static readonly KW_INCLUDING = 307;
    public static readonly KW_INPUTFORMAT = 308;
    public static readonly KW_INNER = 309;
    public static readonly KW_INOUT = 310;
    public static readonly KW_INSERT = 311;
    public static readonly KW_INT = 312;
    public static readonly KW_INTEGER = 313;
    public static readonly KW_INTERSECT = 314;
    public static readonly KW_INTERVAL = 315;
    public static readonly KW_INTO = 316;
    public static readonly KW_INPATH = 317;
    public static readonly KW_INLINE = 318;
    public static readonly KW_INLINE_OUTER = 319;
    public static readonly KW_ITEMS = 320;
    public static readonly KW_IS = 321;
    public static readonly KW_JOIN = 322;
    public static readonly KW_JSON_TUPLE = 323;
    public static readonly KW_LAG = 324;
    public static readonly KW_LANGUAGE = 325;
    public static readonly KW_LATERAL = 326;
    public static readonly KW_LAST_VALUE = 327;
    public static readonly KW_LEAD = 328;
    public static readonly KW_LEADING = 329;
    public static readonly KW_LEFT = 330;
    public static readonly KW_LIKE = 331;
    public static readonly KW_LINES = 332;
    public static readonly KW_LIMIT = 333;
    public static readonly KW_LOCAL = 334;
    public static readonly KW_LOCALTIMESTAMP = 335;
    public static readonly KW_MATCH = 336;
    public static readonly KW_MATCH_RECOGNIZE = 337;
    public static readonly KW_MEASURES = 338;
    public static readonly KW_MERGE = 339;
    public static readonly KW_METADATA = 340;
    public static readonly KW_MINUS = 341;
    public static readonly KW_MINUTE = 342;
    public static readonly KW_MODIFIES = 343;
    public static readonly KW_MODULE = 344;
    public static readonly KW_MONTH = 345;
    public static readonly KW_MULTISET = 346;
    public static readonly KW_NATURAL = 347;
    public static readonly KW_NEXT = 348;
    public static readonly KW_NO = 349;
    public static readonly KW_NONE = 350;
    public static readonly KW_NOT = 351;
    public static readonly KW_NTILE = 352;
    public static readonly KW_NTH_VALUE = 353;
    public static readonly KW_NULL = 354;
    public static readonly KW_NUMERIC = 355;
    public static readonly KW_OF = 356;
    public static readonly KW_OFFSET = 357;
    public static readonly KW_ON = 358;
    public static readonly KW_ONE = 359;
    public static readonly KW_OR = 360;
    public static readonly KW_ORDER = 361;
    public static readonly KW_OUT = 362;
    public static readonly KW_OUTER = 363;
    public static readonly KW_OUTPUTFORMAT = 364;
    public static readonly KW_OVER = 365;
    public static readonly KW_OVERLAY = 366;
    public static readonly KW_PARSE_URL = 367;
    public static readonly KW_PARTITION = 368;
    public static readonly KW_PATTERN = 369;
    public static readonly KW_PER = 370;
    public static readonly KW_PERCENT = 371;
    public static readonly KW_PERCENT_RANK = 372;
    public static readonly KW_PERCENTILE_CONT = 373;
    public static readonly KW_PERCENTILE_DISC = 374;
    public static readonly KW_PERIOD = 375;
    public static readonly KW_PIVOT = 376;
    public static readonly KW_POSITION = 377;
    public static readonly KW_POWER = 378;
    public static readonly KW_POSEXPLODE = 379;
    public static readonly KW_POSEXPLODE_OUTER = 380;
    public static readonly KW_PRIMARY = 381;
    public static readonly KW_PURGE = 382;
    public static readonly KW_RANGE = 383;
    public static readonly KW_RECORDWRITER = 384;
    public static readonly KW_ROW_NUMBER = 385;
    public static readonly KW_RANK = 386;
    public static readonly KW_REGEXP = 387;
    public static readonly KW_RESET = 388;
    public static readonly KW_REVOKE = 389;
    public static readonly KW_REPAIR = 390;
    public static readonly KW_RIGHT = 391;
    public static readonly KW_RLIKE = 392;
    public static readonly KW_ROLLBACK = 393;
    public static readonly KW_ROLLUP = 394;
    public static readonly KW_ROW = 395;
    public static readonly KW_ROWS = 396;
    public static readonly KW_SECOND = 397;
    public static readonly KW_SELECT = 398;
    public static readonly KW_SET = 399;
    public static readonly KW_SERDE = 400;
    public static readonly KW_SHOW = 401;
    public static readonly KW_SIMILAR = 402;
    public static readonly KW_SKIP = 403;
    public static readonly KW_STORED = 404;
    public static readonly KW_SORTED = 405;
    public static readonly KW_SMALLINT = 406;
    public static readonly KW_STACK = 407;
    public static readonly KW_START = 408;
    public static readonly KW_STATIC = 409;
    public static readonly KW_STRUCT = 410;
    public static readonly KW_SORT = 411;
    public static readonly KW_SUBSTRING = 412;
    public static readonly KW_SUM = 413;
    public static readonly KW_SYMMETRIC = 414;
    public static readonly KW_SYSTEM = 415;
    public static readonly KW_SYSTEM_TIME = 416;
    public static readonly KW_SYSTEM_USER = 417;
    public static readonly KW_TABLE = 418;
    public static readonly KW_TBLPROPERTIES = 419;
    public static readonly KW_TABLESAMPLE = 420;
    public static readonly KW_TERMINATED = 421;
    public static readonly KW_THEN = 422;
    public static readonly KW_TIME = 423;
    public static readonly KW_TIMESTAMP = 424;
    public static readonly KW_TIMESTAMP_3 = 425;
    public static readonly KW_TIMESTAMP_6 = 426;
    public static readonly KW_TIMESTAMP_9 = 427;
    public static readonly KW_TINYINT = 428;
    public static readonly KW_TO = 429;
    public static readonly KW_TRAILING = 430;
    public static readonly KW_TRUE = 431;
    public static readonly KW_TRUNCATE = 432;
    public static readonly KW_UNION = 433;
    public static readonly KW_UNIQUE = 434;
    public static readonly KW_UNKNOWN = 435;
    public static readonly KW_UNSET = 436;
    public static readonly KW_UNPIVOT = 437;
    public static readonly KW_UPPER = 438;
    public static readonly KW_UPSERT = 439;
    public static readonly KW_USER = 440;
    public static readonly KW_USING = 441;
    public static readonly KW_VALUE = 442;
    public static readonly KW_VALUES = 443;
    public static readonly KW_VARBINARY = 444;
    public static readonly KW_VARCHAR = 445;
    public static readonly KW_WHEN = 446;
    public static readonly KW_WHERE = 447;
    public static readonly KW_WINDOW = 448;
    public static readonly KW_WITH = 449;
    public static readonly KW_WITHIN = 450;
    public static readonly KW_WITHOUT = 451;
    public static readonly KW_YEAR = 452;
    public static readonly KW_MATERIALIZED = 453;
    public static readonly KW_FRESHNESS = 454;
    public static readonly KW_REFRESH_MODE = 455;
    public static readonly KW_RECOVER = 456;
    public static readonly KW_CONTINUOUS = 457;
    public static readonly KW_SUSPEND = 458;
    public static readonly KW_RESUME = 459;
    public static readonly KW_REFRESH = 460;
    public static readonly BIT_NOT_OP = 461;
    public static readonly BIT_OR_OP = 462;
    public static readonly BIT_AND_OP = 463;
    public static readonly BIT_XOR_OP = 464;
    public static readonly EQUAL_SYMBOL = 465;
    public static readonly GREATER_SYMBOL = 466;
    public static readonly LESS_SYMBOL = 467;
    public static readonly EXCLAMATION_SYMBOL = 468;
    public static readonly DOT = 469;
    public static readonly LS_BRACKET = 470;
    public static readonly RS_BRACKET = 471;
    public static readonly LR_BRACKET = 472;
    public static readonly RR_BRACKET = 473;
    public static readonly LB_BRACKET = 474;
    public static readonly RB_BRACKET = 475;
    public static readonly COMMA = 476;
    public static readonly SEMICOLON = 477;
    public static readonly AT_SIGN = 478;
    public static readonly DOLLAR = 479;
    public static readonly SINGLE_QUOTE_SYMB = 480;
    public static readonly DOUBLE_QUOTE_SYMB = 481;
    public static readonly REVERSE_QUOTE_SYMB = 482;
    public static readonly COLON_SYMB = 483;
    public static readonly ASTERISK_SIGN = 484;
    public static readonly UNDERLINE_SIGN = 485;
    public static readonly HYPNEN_SIGN = 486;
    public static readonly ADD_SIGN = 487;
    public static readonly PENCENT_SIGN = 488;
    public static readonly DOUBLE_VERTICAL_SIGN = 489;
    public static readonly DOUBLE_HYPNEN_SIGN = 490;
    public static readonly SLASH_SIGN = 491;
    public static readonly QUESTION_MARK_SIGN = 492;
    public static readonly DOUBLE_RIGHT_ARROW = 493;
    public static readonly STRING_LITERAL = 494;
    public static readonly DIG_LITERAL = 495;
    public static readonly REAL_LITERAL = 496;
    public static readonly ID_LITERAL = 497;

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
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "'~'", 
        "'|'", "'&'", "'^'", "'='", "'>'", "'<'", "'!'", "'.'", "'['", "']'", 
        "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'$'", "'''", "'\"'", 
        "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", null, null, "'/'", 
        "'?'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTE", "KW_BYTES", 
        "KW_CACHE", "KW_CASCADE", "KW_CATALOG", "KW_CATALOGS", "KW_CLEAR", 
        "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", "KW_CHARACTERS", 
        "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", "KW_CONSTRUCTOR", 
        "KW_COMPUTE", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DAYS", "KW_DBPROPERTIES", "KW_DECADE", "KW_DEFINED", "KW_DESC", 
        "KW_DESCRIPTOR", "KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", 
        "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", 
        "KW_EXCLUDING", "KW_EXTENDED", "KW_FILTER", "KW_FILE", "KW_FILES", 
        "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", 
        "KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", 
        "KW_GO", "KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", 
        "KW_IGNORE", "KW_INCLUDE", "KW_INCREMENT", "KW_INPUT", "KW_INVOKER", 
        "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
        "KW_KEY", "KW_KEYS", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", 
        "KW_LAST", "KW_LENGTH", "KW_LEVEL", "KW_LIST", "KW_LOAD", "KW_LOCATION", 
        "KW_LONG", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
        "KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", 
        "KW_NANOSECOND", "KW_NOSCAN", "KW_NULLS", "KW_NUMBER", "KW_OPTION", 
        "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", "KW_OVERWRITE", "KW_OVERWRITING", 
        "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", "KW_PAST", "KW_PATH", 
        "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", "KW_PRIOR", 
        "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", 
        "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", 
        "KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_QUERY", "KW_RAW", "KW_READ", 
        "KW_REAL", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", "KW_REPLACE", 
        "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
        "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SCHEMAS", 
        "KW_SECONDS", "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", 
        "KW_SERVER_NAME", "KW_SESSION", "KW_SETS", "KW_SHORT", "KW_SIMPLE", 
        "KW_SIZE", "KW_SLIDE", "KW_SOURCE", "KW_SPACE", "KW_SERDEPROPERTIES", 
        "KW_STATE", "KW_STATISTICS", "KW_STATEMENT", "KW_STEP", "KW_STRING", 
        "KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", 
        "KW_FLOOR", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_NTZ", "KW_TIMESTAMPADD", 
        "KW_TIMESTAMPDIFF", "KW_TOTIMESTAMP", "KW_TRANSFORM", "KW_TUMBLE", 
        "KW_TYPE", "KW_UNCACHE", "KW_UNDER", "KW_UNBOUNDED", "KW_UNLOAD", 
        "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", "KW_UTF8", "KW_VERSION", 
        "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", 
        "KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", 
        "KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", 
        "KW_ARE", "KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", 
        "KW_BEGIN", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", 
        "KW_BOOLEAN", "KW_BOTH", "KW_BUCKET", "KW_BUCKETS", "KW_BY", "KW_CALL", 
        "KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", "KW_CEIL", "KW_CHAR", 
        "KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", "KW_CLUSTER", 
        "KW_CLUSTERED", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", 
        "KW_COMMIT", "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", 
        "KW_COUNT", "KW_CURRENT_TIMESTAMP", "KW_CREATE", "KW_CROSS", "KW_CUBE", 
        "KW_CUME_DIST", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", "KW_COLLECTION", 
        "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
        "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DELIMITED", "KW_DESCRIBE", 
        "KW_DENSE_RANK", "KW_DISTINCT", "KW_DIRECTORY", "KW_DISTRIBUTED", 
        "KW_DISTRIBUTE", "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", 
        "KW_EQUALS", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXECUTE", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXPLODE", "KW_EXPLODE_OUTER", "KW_EXTERNAL", 
        "KW_EXTRACT", "KW_FIRST_VALUE", "KW_FALSE", "KW_FLOAT", "KW_FIELDS", 
        "KW_FOR", "KW_FROM", "KW_FROM_UNIXTIME", "KW_FULL", "KW_FUNCTION", 
        "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", 
        "KW_HASH", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
        "KW_INPUTFORMAT", "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", 
        "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_INPATH", 
        "KW_INLINE", "KW_INLINE_OUTER", "KW_ITEMS", "KW_IS", "KW_JOIN", 
        "KW_JSON_TUPLE", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LAST_VALUE", 
        "KW_LEAD", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LINES", "KW_LIMIT", 
        "KW_LOCAL", "KW_LOCALTIMESTAMP", "KW_MATCH", "KW_MATCH_RECOGNIZE", 
        "KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", 
        "KW_MODIFIES", "KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", 
        "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", "KW_NTILE", "KW_NTH_VALUE", 
        "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", "KW_ONE", 
        "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTFORMAT", "KW_OVER", 
        "KW_OVERLAY", "KW_PARSE_URL", "KW_PARTITION", "KW_PATTERN", "KW_PER", 
        "KW_PERCENT", "KW_PERCENT_RANK", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", 
        "KW_PERIOD", "KW_PIVOT", "KW_POSITION", "KW_POWER", "KW_POSEXPLODE", 
        "KW_POSEXPLODE_OUTER", "KW_PRIMARY", "KW_PURGE", "KW_RANGE", "KW_RECORDWRITER", 
        "KW_ROW_NUMBER", "KW_RANK", "KW_REGEXP", "KW_RESET", "KW_REVOKE", 
        "KW_REPAIR", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", 
        "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", "KW_SERDE", 
        "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_STORED", "KW_SORTED", "KW_SMALLINT", 
        "KW_STACK", "KW_START", "KW_STATIC", "KW_STRUCT", "KW_SORT", "KW_SUBSTRING", 
        "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", 
        "KW_TABLE", "KW_TBLPROPERTIES", "KW_TABLESAMPLE", "KW_TERMINATED", 
        "KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", 
        "KW_TIMESTAMP_9", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", 
        "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNSET", 
        "KW_UNPIVOT", "KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", 
        "KW_VALUES", "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", 
        "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_MATERIALIZED", 
        "KW_FRESHNESS", "KW_REFRESH_MODE", "KW_RECOVER", "KW_CONTINUOUS", 
        "KW_SUSPEND", "KW_RESUME", "KW_REFRESH", "BIT_NOT_OP", "BIT_OR_OP", 
        "BIT_AND_OP", "BIT_XOR_OP", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
        "EXCLAMATION_SYMBOL", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", 
        "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON", 
        "AT_SIGN", "DOLLAR", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
        "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPNEN_SIGN", 
        "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
        "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
        "DIG_LITERAL", "REAL_LITERAL", "ID_LITERAL"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTE", "KW_BYTES", 
        "KW_CACHE", "KW_CASCADE", "KW_CATALOG", "KW_CATALOGS", "KW_CLEAR", 
        "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", "KW_CHARACTERS", 
        "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", "KW_CONSTRUCTOR", 
        "KW_COMPUTE", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DAYS", "KW_DBPROPERTIES", "KW_DECADE", "KW_DEFINED", "KW_DESC", 
        "KW_DESCRIPTOR", "KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", 
        "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", 
        "KW_EXCLUDING", "KW_EXTENDED", "KW_FILTER", "KW_FILE", "KW_FILES", 
        "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", 
        "KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", 
        "KW_GO", "KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", 
        "KW_IGNORE", "KW_INCLUDE", "KW_INCREMENT", "KW_INPUT", "KW_INVOKER", 
        "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
        "KW_KEY", "KW_KEYS", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", 
        "KW_LAST", "KW_LENGTH", "KW_LEVEL", "KW_LIST", "KW_LOAD", "KW_LOCATION", 
        "KW_LONG", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
        "KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", 
        "KW_NANOSECOND", "KW_NOSCAN", "KW_NULLS", "KW_NUMBER", "KW_OPTION", 
        "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", "KW_OVERWRITE", "KW_OVERWRITING", 
        "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", "KW_PAST", "KW_PATH", 
        "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", "KW_PRIOR", 
        "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", 
        "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", 
        "KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_QUERY", "KW_RAW", "KW_READ", 
        "KW_REAL", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", "KW_REPLACE", 
        "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
        "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SCHEMAS", 
        "KW_SECONDS", "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", 
        "KW_SERVER_NAME", "KW_SESSION", "KW_SETS", "KW_SHORT", "KW_SIMPLE", 
        "KW_SIZE", "KW_SLIDE", "KW_SOURCE", "KW_SPACE", "KW_SERDEPROPERTIES", 
        "KW_STATE", "KW_STATISTICS", "KW_STATEMENT", "KW_STEP", "KW_STRING", 
        "KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", 
        "KW_FLOOR", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_NTZ", "KW_TIMESTAMPADD", 
        "KW_TIMESTAMPDIFF", "KW_TOTIMESTAMP", "KW_TRANSFORM", "KW_TUMBLE", 
        "KW_TYPE", "KW_UNCACHE", "KW_UNDER", "KW_UNBOUNDED", "KW_UNLOAD", 
        "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", "KW_UTF8", "KW_VERSION", 
        "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", 
        "KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", 
        "KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", 
        "KW_ARE", "KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", 
        "KW_BEGIN", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", 
        "KW_BOOLEAN", "KW_BOTH", "KW_BUCKET", "KW_BUCKETS", "KW_BY", "KW_CALL", 
        "KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", "KW_CEIL", "KW_CHAR", 
        "KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", "KW_CLUSTER", 
        "KW_CLUSTERED", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", 
        "KW_COMMIT", "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", 
        "KW_COUNT", "KW_CURRENT_TIMESTAMP", "KW_CREATE", "KW_CROSS", "KW_CUBE", 
        "KW_CUME_DIST", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", "KW_COLLECTION", 
        "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
        "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DELIMITED", "KW_DESCRIBE", 
        "KW_DENSE_RANK", "KW_DISTINCT", "KW_DIRECTORY", "KW_DISTRIBUTED", 
        "KW_DISTRIBUTE", "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", 
        "KW_EQUALS", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXECUTE", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXPLODE", "KW_EXPLODE_OUTER", "KW_EXTERNAL", 
        "KW_EXTRACT", "KW_FIRST_VALUE", "KW_FALSE", "KW_FLOAT", "KW_FIELDS", 
        "KW_FOR", "KW_FROM", "KW_FROM_UNIXTIME", "KW_FULL", "KW_FUNCTION", 
        "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", 
        "KW_HASH", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
        "KW_INPUTFORMAT", "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", 
        "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_INPATH", 
        "KW_INLINE", "KW_INLINE_OUTER", "KW_ITEMS", "KW_IS", "KW_JOIN", 
        "KW_JSON_TUPLE", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LAST_VALUE", 
        "KW_LEAD", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LINES", "KW_LIMIT", 
        "KW_LOCAL", "KW_LOCALTIMESTAMP", "KW_MATCH", "KW_MATCH_RECOGNIZE", 
        "KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", 
        "KW_MODIFIES", "KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", 
        "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", "KW_NTILE", "KW_NTH_VALUE", 
        "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", "KW_ONE", 
        "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTFORMAT", "KW_OVER", 
        "KW_OVERLAY", "KW_PARSE_URL", "KW_PARTITION", "KW_PATTERN", "KW_PER", 
        "KW_PERCENT", "KW_PERCENT_RANK", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", 
        "KW_PERIOD", "KW_PIVOT", "KW_POSITION", "KW_POWER", "KW_POSEXPLODE", 
        "KW_POSEXPLODE_OUTER", "KW_PRIMARY", "KW_PURGE", "KW_RANGE", "KW_RECORDWRITER", 
        "KW_ROW_NUMBER", "KW_RANK", "KW_REGEXP", "KW_RESET", "KW_REVOKE", 
        "KW_REPAIR", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", 
        "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", "KW_SERDE", 
        "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_STORED", "KW_SORTED", "KW_SMALLINT", 
        "KW_STACK", "KW_START", "KW_STATIC", "KW_STRUCT", "KW_SORT", "KW_SUBSTRING", 
        "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", 
        "KW_TABLE", "KW_TBLPROPERTIES", "KW_TABLESAMPLE", "KW_TERMINATED", 
        "KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", 
        "KW_TIMESTAMP_9", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", 
        "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNSET", 
        "KW_UNPIVOT", "KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", 
        "KW_VALUES", "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", 
        "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_MATERIALIZED", 
        "KW_FRESHNESS", "KW_REFRESH_MODE", "KW_RECOVER", "KW_CONTINUOUS", 
        "KW_SUSPEND", "KW_RESUME", "KW_REFRESH", "A", "B", "C", "D", "E", 
        "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
        "S", "T", "U", "V", "W", "X", "Y", "Z", "BIT_NOT_OP", "BIT_OR_OP", 
        "BIT_AND_OP", "BIT_XOR_OP", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
        "EXCLAMATION_SYMBOL", "EXPONENT_NUM_PART", "ID_LITERAL_FRAG", "DEC_DIGIT", 
        "DQUOTA_STRING", "SQUOTA_STRING", "BQUOTA_STRING", "DOT", "LS_BRACKET", 
        "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", 
        "COMMA", "SEMICOLON", "AT_SIGN", "DOLLAR", "SINGLE_QUOTE_SYMB", 
        "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", 
        "UNDERLINE_SIGN", "HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
        "DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
        "STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "ID_LITERAL",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SparkSQLLexer._ATN, SparkSQLLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SparkSQL.g4"; }

    public get literalNames(): (string | null)[] { return SparkSQLLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SparkSQLLexer.symbolicNames; }
    public get ruleNames(): string[] { return SparkSQLLexer.ruleNames; }

    public get serializedATN(): number[] { return SparkSQLLexer._serializedATN; }

    public get channelNames(): string[] { return SparkSQLLexer.channelNames; }

    public get modeNames(): string[] { return SparkSQLLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,497,4843,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
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
        7,455,2,456,7,456,2,457,7,457,2,458,7,458,2,459,7,459,2,460,7,460,
        2,461,7,461,2,462,7,462,2,463,7,463,2,464,7,464,2,465,7,465,2,466,
        7,466,2,467,7,467,2,468,7,468,2,469,7,469,2,470,7,470,2,471,7,471,
        2,472,7,472,2,473,7,473,2,474,7,474,2,475,7,475,2,476,7,476,2,477,
        7,477,2,478,7,478,2,479,7,479,2,480,7,480,2,481,7,481,2,482,7,482,
        2,483,7,483,2,484,7,484,2,485,7,485,2,486,7,486,2,487,7,487,2,488,
        7,488,2,489,7,489,2,490,7,490,2,491,7,491,2,492,7,492,2,493,7,493,
        2,494,7,494,2,495,7,495,2,496,7,496,2,497,7,497,2,498,7,498,2,499,
        7,499,2,500,7,500,2,501,7,501,2,502,7,502,2,503,7,503,2,504,7,504,
        2,505,7,505,2,506,7,506,2,507,7,507,2,508,7,508,2,509,7,509,2,510,
        7,510,2,511,7,511,2,512,7,512,2,513,7,513,2,514,7,514,2,515,7,515,
        2,516,7,516,2,517,7,517,2,518,7,518,2,519,7,519,2,520,7,520,2,521,
        7,521,2,522,7,522,2,523,7,523,2,524,7,524,2,525,7,525,2,526,7,526,
        2,527,7,527,2,528,7,528,1,0,4,0,1061,8,0,11,0,12,0,1062,1,0,1,0,
        1,1,1,1,1,1,5,1,1070,8,1,10,1,12,1,1073,9,1,1,1,1,1,1,1,1,1,1,1,
        1,2,1,2,3,2,1082,8,2,1,2,5,2,1085,8,2,10,2,12,2,1088,9,2,1,2,3,2,
        1091,8,2,1,2,1,2,3,2,1095,8,2,1,2,1,2,3,2,1099,8,2,1,2,1,2,3,2,1103,
        8,2,3,2,1105,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
        1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
        1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
        1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
        1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
        1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
        1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
        1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,
        1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,
        1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
        1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,
        1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,
        1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,
        1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,
        1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,
        1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,61,
        1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,
        1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,66,
        1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
        1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,
        1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,
        1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,
        1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,
        1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,
        1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,
        1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,
        1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,
        1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,88,1,88,
        1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
        1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,
        1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,
        1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,
        1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,
        1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,
        1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,
        100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,
        1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
        1,105,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
        1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,
        1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,
        1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,
        1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,121,1,121,
        1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
        1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,126,1,126,
        1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,1,128,1,128,1,128,
        1,128,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,
        1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,1,140,1,140,1,140,
        1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,
        1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,
        1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,
        1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
        1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,
        1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,
        1,154,1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,156,1,156,
        1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,
        1,158,1,158,1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,
        1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        1,160,1,160,1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,
        1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
        1,165,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,166,
        1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,
        1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,
        1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,
        1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,
        1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,
        1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,175,1,175,
        1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
        1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,
        1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,
        1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,
        1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,
        1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,
        1,183,1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,185,1,185,1,185,
        1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,187,1,187,
        1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
        1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,190,
        1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,
        1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,
        1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,194,
        1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,
        1,196,1,197,1,197,1,197,1,197,1,197,1,197,1,197,1,197,1,198,1,198,
        1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,200,1,200,
        1,200,1,200,1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,202,
        1,202,1,203,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,
        1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,207,1,207,1,207,
        1,207,1,207,1,207,1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,
        1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,211,1,211,
        1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,212,1,213,1,213,1,213,
        1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,214,
        1,214,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,
        1,216,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,
        1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,
        1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,
        1,221,1,222,1,222,1,222,1,223,1,223,1,223,1,223,1,223,1,224,1,224,
        1,224,1,224,1,224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,
        1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,
        1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,
        1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,
        1,231,1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,
        1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,
        1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,
        1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,
        1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,
        1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,
        1,239,1,240,1,240,1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,
        1,241,1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,
        1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,
        1,243,1,243,1,243,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,
        1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,
        1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,
        1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,
        1,248,1,248,1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,250,1,250,
        1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,
        1,251,1,251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,252,
        1,252,1,253,1,253,1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,
        1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,
        1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,257,
        1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,259,1,259,1,259,1,259,
        1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,
        1,260,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,262,1,262,
        1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,1,263,1,263,
        1,263,1,264,1,264,1,264,1,264,1,264,1,264,1,264,1,264,1,264,1,264,
        1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,
        1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,
        1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,268,1,268,
        1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,
        1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,
        1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,
        1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,
        1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,275,1,275,1,275,1,275,
        1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,
        1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
        1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,280,1,280,1,280,1,280,
        1,280,1,280,1,280,1,280,1,281,1,281,1,281,1,281,1,281,1,281,1,281,
        1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,
        1,283,1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,1,285,1,285,
        1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,1,286,
        1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,
        1,287,1,287,1,287,1,287,1,288,1,288,1,288,1,288,1,288,1,288,1,289,
        1,289,1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,293,
        1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,
        1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,295,1,295,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,1,296,1,296,1,296,
        1,296,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,
        1,298,1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,
        1,300,1,300,1,300,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,
        1,301,1,302,1,302,1,302,1,302,1,302,1,302,1,302,1,303,1,303,1,303,
        1,303,1,303,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,305,1,305,
        1,305,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,
        1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,
        1,307,1,308,1,308,1,308,1,308,1,308,1,308,1,309,1,309,1,309,1,309,
        1,309,1,309,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,311,1,311,
        1,311,1,311,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,313,
        1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,314,1,314,
        1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,315,1,315,1,315,1,315,
        1,315,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,317,1,317,1,317,
        1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,1,318,1,318,1,318,
        1,318,1,318,1,318,1,318,1,318,1,318,1,319,1,319,1,319,1,319,1,319,
        1,319,1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,1,322,1,322,
        1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,323,1,323,
        1,323,1,323,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,
        1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,326,1,326,1,326,
        1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,327,1,327,1,327,
        1,327,1,327,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,329,
        1,329,1,329,1,329,1,329,1,330,1,330,1,330,1,330,1,330,1,331,1,331,
        1,331,1,331,1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,1,333,
        1,333,1,333,1,333,1,333,1,333,1,334,1,334,1,334,1,334,1,334,1,334,
        1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,335,1,335,
        1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,1,336,1,336,1,336,
        1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,
        1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,
        1,338,1,338,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,
        1,340,1,340,1,340,1,340,1,340,1,340,1,341,1,341,1,341,1,341,1,341,
        1,341,1,341,1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,342,
        1,343,1,343,1,343,1,343,1,343,1,343,1,343,1,344,1,344,1,344,1,344,
        1,344,1,344,1,345,1,345,1,345,1,345,1,345,1,345,1,345,1,345,1,345,
        1,346,1,346,1,346,1,346,1,346,1,346,1,346,1,346,1,347,1,347,1,347,
        1,347,1,347,1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,1,350,
        1,350,1,350,1,350,1,351,1,351,1,351,1,351,1,351,1,351,1,352,1,352,
        1,352,1,352,1,352,1,352,1,352,1,352,1,352,1,352,1,353,1,353,1,353,
        1,353,1,353,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,355,
        1,355,1,355,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,357,1,357,
        1,357,1,358,1,358,1,358,1,358,1,359,1,359,1,359,1,360,1,360,1,360,
        1,360,1,360,1,360,1,361,1,361,1,361,1,361,1,362,1,362,1,362,1,362,
        1,362,1,362,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,
        1,363,1,363,1,363,1,363,1,364,1,364,1,364,1,364,1,364,1,365,1,365,
        1,365,1,365,1,365,1,365,1,365,1,365,1,366,1,366,1,366,1,366,1,366,
        1,366,1,366,1,366,1,366,1,367,1,367,1,367,1,367,1,367,1,367,1,367,
        1,367,1,367,1,367,1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,368,
        1,369,1,369,1,369,1,369,1,370,1,370,1,370,1,370,1,370,1,370,1,370,
        1,370,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,
        1,371,1,371,1,371,1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,372,
        1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,373,1,373,1,373,
        1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,
        1,373,1,373,1,374,1,374,1,374,1,374,1,374,1,374,1,374,1,375,1,375,
        1,375,1,375,1,375,1,375,1,376,1,376,1,376,1,376,1,376,1,376,1,376,
        1,376,1,376,1,377,1,377,1,377,1,377,1,377,1,377,1,378,1,378,1,378,
        1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,379,1,379,1,379,
        1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,
        1,379,1,379,1,379,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,
        1,381,1,381,1,381,1,381,1,381,1,381,1,382,1,382,1,382,1,382,1,382,
        1,382,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,
        1,383,1,383,1,383,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,
        1,384,1,384,1,384,1,385,1,385,1,385,1,385,1,385,1,386,1,386,1,386,
        1,386,1,386,1,386,1,386,1,387,1,387,1,387,1,387,1,387,1,387,1,388,
        1,388,1,388,1,388,1,388,1,388,1,388,1,389,1,389,1,389,1,389,1,389,
        1,389,1,389,1,390,1,390,1,390,1,390,1,390,1,390,1,391,1,391,1,391,
        1,391,1,391,1,391,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,
        1,392,1,393,1,393,1,393,1,393,1,393,1,393,1,393,1,394,1,394,1,394,
        1,394,1,395,1,395,1,395,1,395,1,395,1,396,1,396,1,396,1,396,1,396,
        1,396,1,396,1,397,1,397,1,397,1,397,1,397,1,397,1,397,1,398,1,398,
        1,398,1,398,1,399,1,399,1,399,1,399,1,399,1,399,1,400,1,400,1,400,
        1,400,1,400,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,402,
        1,402,1,402,1,402,1,402,1,403,1,403,1,403,1,403,1,403,1,403,1,403,
        1,404,1,404,1,404,1,404,1,404,1,404,1,404,1,405,1,405,1,405,1,405,
        1,405,1,405,1,405,1,405,1,405,1,406,1,406,1,406,1,406,1,406,1,406,
        1,407,1,407,1,407,1,407,1,407,1,407,1,408,1,408,1,408,1,408,1,408,
        1,408,1,408,1,409,1,409,1,409,1,409,1,409,1,409,1,409,1,410,1,410,
        1,410,1,410,1,410,1,411,1,411,1,411,1,411,1,411,1,411,1,411,1,411,
        1,411,1,411,1,412,1,412,1,412,1,412,1,413,1,413,1,413,1,413,1,413,
        1,413,1,413,1,413,1,413,1,413,1,414,1,414,1,414,1,414,1,414,1,414,
        1,414,1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,415,
        1,415,1,415,1,416,1,416,1,416,1,416,1,416,1,416,1,416,1,416,1,416,
        1,416,1,416,1,416,1,417,1,417,1,417,1,417,1,417,1,417,1,418,1,418,
        1,418,1,418,1,418,1,418,1,418,1,418,1,418,1,418,1,418,1,418,1,418,
        1,418,1,419,1,419,1,419,1,419,1,419,1,419,1,419,1,419,1,419,1,419,
        1,419,1,419,1,420,1,420,1,420,1,420,1,420,1,420,1,420,1,420,1,420,
        1,420,1,420,1,421,1,421,1,421,1,421,1,421,1,422,1,422,1,422,1,422,
        1,422,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,
        1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,
        1,424,1,424,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,
        1,425,1,425,1,425,1,425,1,426,1,426,1,426,1,426,1,426,1,426,1,426,
        1,426,1,426,1,426,1,426,1,426,1,426,1,427,1,427,1,427,1,427,1,427,
        1,427,1,427,1,427,1,428,1,428,1,428,1,429,1,429,1,429,1,429,1,429,
        1,429,1,429,1,429,1,429,1,430,1,430,1,430,1,430,1,430,1,431,1,431,
        1,431,1,431,1,431,1,431,1,431,1,431,1,431,1,432,1,432,1,432,1,432,
        1,432,1,432,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,434,1,434,
        1,434,1,434,1,434,1,434,1,434,1,434,1,435,1,435,1,435,1,435,1,435,
        1,435,1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,437,1,437,
        1,437,1,437,1,437,1,437,1,438,1,438,1,438,1,438,1,438,1,438,1,438,
        1,439,1,439,1,439,1,439,1,439,1,440,1,440,1,440,1,440,1,440,1,440,
        1,441,1,441,1,441,1,441,1,441,1,441,1,442,1,442,1,442,1,442,1,442,
        1,442,1,442,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,
        1,443,1,444,1,444,1,444,1,444,1,444,1,444,1,444,1,444,1,445,1,445,
        1,445,1,445,1,445,1,446,1,446,1,446,1,446,1,446,1,446,1,447,1,447,
        1,447,1,447,1,447,1,447,1,447,1,448,1,448,1,448,1,448,1,448,1,449,
        1,449,1,449,1,449,1,449,1,449,1,449,1,450,1,450,1,450,1,450,1,450,
        1,450,1,450,1,450,1,451,1,451,1,451,1,451,1,451,1,452,1,452,1,452,
        1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,453,
        1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,454,1,454,
        1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,
        1,455,1,455,1,455,1,455,1,455,1,455,1,455,1,455,1,456,1,456,1,456,
        1,456,1,456,1,456,1,456,1,456,1,456,1,456,1,456,1,457,1,457,1,457,
        1,457,1,457,1,457,1,457,1,457,1,458,1,458,1,458,1,458,1,458,1,458,
        1,458,1,459,1,459,1,459,1,459,1,459,1,459,1,459,1,459,1,460,1,460,
        1,461,1,461,1,462,1,462,1,463,1,463,1,464,1,464,1,465,1,465,1,466,
        1,466,1,467,1,467,1,468,1,468,1,469,1,469,1,470,1,470,1,471,1,471,
        1,472,1,472,1,473,1,473,1,474,1,474,1,475,1,475,1,476,1,476,1,477,
        1,477,1,478,1,478,1,479,1,479,1,480,1,480,1,481,1,481,1,482,1,482,
        1,483,1,483,1,484,1,484,1,485,1,485,1,486,1,486,1,487,1,487,1,488,
        1,488,1,489,1,489,1,490,1,490,1,491,1,491,1,492,1,492,1,493,1,493,
        1,494,1,494,3,494,4670,8,494,1,494,4,494,4673,8,494,11,494,12,494,
        4674,1,495,5,495,4678,8,495,10,495,12,495,4681,9,495,1,495,4,495,
        4684,8,495,11,495,12,495,4685,1,495,5,495,4689,8,495,10,495,12,495,
        4692,9,495,1,496,1,496,1,497,1,497,1,497,1,497,1,497,1,497,5,497,
        4702,8,497,10,497,12,497,4705,9,497,1,497,1,497,1,498,1,498,1,498,
        1,498,1,498,5,498,4714,8,498,10,498,12,498,4717,9,498,1,498,1,498,
        1,499,1,499,1,499,1,499,1,499,1,499,5,499,4727,8,499,10,499,12,499,
        4730,9,499,1,499,1,499,1,500,1,500,1,501,1,501,1,502,1,502,1,503,
        1,503,1,504,1,504,1,505,1,505,1,506,1,506,1,507,1,507,1,508,1,508,
        1,509,1,509,1,510,1,510,1,511,1,511,1,512,1,512,1,513,1,513,1,514,
        1,514,1,515,1,515,1,516,1,516,1,517,1,517,1,518,1,518,1,519,1,519,
        1,520,1,520,1,520,1,521,1,521,1,521,1,522,1,522,1,523,1,523,1,524,
        1,524,1,524,1,525,1,525,1,525,3,525,4790,8,525,1,526,4,526,4793,
        8,526,11,526,12,526,4794,1,527,4,527,4798,8,527,11,527,12,527,4799,
        3,527,4802,8,527,1,527,1,527,4,527,4806,8,527,11,527,12,527,4807,
        1,527,4,527,4811,8,527,11,527,12,527,4812,1,527,1,527,1,527,1,527,
        4,527,4819,8,527,11,527,12,527,4820,3,527,4823,8,527,1,527,1,527,
        4,527,4827,8,527,11,527,12,527,4828,1,527,1,527,1,527,4,527,4834,
        8,527,11,527,12,527,4835,1,527,1,527,3,527,4840,8,527,1,528,1,528,
        3,1071,4679,4685,0,529,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
        10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
        21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,
        32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,
        43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,
        107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,
        63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,
        145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,
        82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,
        183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,
        201,101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,
        217,109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,
        233,117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,
        249,125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,
        265,133,267,134,269,135,271,136,273,137,275,138,277,139,279,140,
        281,141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,
        297,149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,
        313,157,315,158,317,159,319,160,321,161,323,162,325,163,327,164,
        329,165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,
        345,173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,
        361,181,363,182,365,183,367,184,369,185,371,186,373,187,375,188,
        377,189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,
        393,197,395,198,397,199,399,200,401,201,403,202,405,203,407,204,
        409,205,411,206,413,207,415,208,417,209,419,210,421,211,423,212,
        425,213,427,214,429,215,431,216,433,217,435,218,437,219,439,220,
        441,221,443,222,445,223,447,224,449,225,451,226,453,227,455,228,
        457,229,459,230,461,231,463,232,465,233,467,234,469,235,471,236,
        473,237,475,238,477,239,479,240,481,241,483,242,485,243,487,244,
        489,245,491,246,493,247,495,248,497,249,499,250,501,251,503,252,
        505,253,507,254,509,255,511,256,513,257,515,258,517,259,519,260,
        521,261,523,262,525,263,527,264,529,265,531,266,533,267,535,268,
        537,269,539,270,541,271,543,272,545,273,547,274,549,275,551,276,
        553,277,555,278,557,279,559,280,561,281,563,282,565,283,567,284,
        569,285,571,286,573,287,575,288,577,289,579,290,581,291,583,292,
        585,293,587,294,589,295,591,296,593,297,595,298,597,299,599,300,
        601,301,603,302,605,303,607,304,609,305,611,306,613,307,615,308,
        617,309,619,310,621,311,623,312,625,313,627,314,629,315,631,316,
        633,317,635,318,637,319,639,320,641,321,643,322,645,323,647,324,
        649,325,651,326,653,327,655,328,657,329,659,330,661,331,663,332,
        665,333,667,334,669,335,671,336,673,337,675,338,677,339,679,340,
        681,341,683,342,685,343,687,344,689,345,691,346,693,347,695,348,
        697,349,699,350,701,351,703,352,705,353,707,354,709,355,711,356,
        713,357,715,358,717,359,719,360,721,361,723,362,725,363,727,364,
        729,365,731,366,733,367,735,368,737,369,739,370,741,371,743,372,
        745,373,747,374,749,375,751,376,753,377,755,378,757,379,759,380,
        761,381,763,382,765,383,767,384,769,385,771,386,773,387,775,388,
        777,389,779,390,781,391,783,392,785,393,787,394,789,395,791,396,
        793,397,795,398,797,399,799,400,801,401,803,402,805,403,807,404,
        809,405,811,406,813,407,815,408,817,409,819,410,821,411,823,412,
        825,413,827,414,829,415,831,416,833,417,835,418,837,419,839,420,
        841,421,843,422,845,423,847,424,849,425,851,426,853,427,855,428,
        857,429,859,430,861,431,863,432,865,433,867,434,869,435,871,436,
        873,437,875,438,877,439,879,440,881,441,883,442,885,443,887,444,
        889,445,891,446,893,447,895,448,897,449,899,450,901,451,903,452,
        905,453,907,454,909,455,911,456,913,457,915,458,917,459,919,460,
        921,0,923,0,925,0,927,0,929,0,931,0,933,0,935,0,937,0,939,0,941,
        0,943,0,945,0,947,0,949,0,951,0,953,0,955,0,957,0,959,0,961,0,963,
        0,965,0,967,0,969,0,971,0,973,461,975,462,977,463,979,464,981,465,
        983,466,985,467,987,468,989,0,991,0,993,0,995,0,997,0,999,0,1001,
        469,1003,470,1005,471,1007,472,1009,473,1011,474,1013,475,1015,476,
        1017,477,1019,478,1021,479,1023,480,1025,481,1027,482,1029,483,1031,
        484,1033,485,1035,486,1037,487,1039,488,1041,489,1043,490,1045,491,
        1047,492,1049,493,1051,494,1053,495,1055,496,1057,497,1,0,34,3,0,
        9,10,13,13,32,32,2,0,10,10,13,13,2,0,65,65,97,97,2,0,66,66,98,98,
        2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,70,102,
        102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,
        74,106,106,2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,
        2,0,78,78,110,110,2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,
        113,113,2,0,82,82,114,114,2,0,83,83,115,115,2,0,84,84,116,116,2,
        0,85,85,117,117,2,0,86,86,118,118,2,0,87,87,119,119,2,0,88,88,120,
        120,2,0,89,89,121,121,2,0,90,90,122,122,2,0,43,43,45,45,4,0,48,57,
        65,90,95,95,97,122,3,0,65,90,95,95,97,122,1,0,48,57,2,0,92,92,96,
        96,2,0,39,39,92,92,4847,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
        1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
        1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
        1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
        1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,
        1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,
        1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,
        1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,
        1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,
        1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,
        1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,
        107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,
        0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,
        1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,
        0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,
        0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,
        153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,
        0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,
        1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,
        0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,
        0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,
        199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,
        0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,
        1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,
        0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,
        0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,
        245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,
        0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,
        1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,
        0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,
        0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,
        291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,
        0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,
        1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,
        0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,
        0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,
        337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,
        0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,
        1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,
        0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,
        0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,
        383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,
        0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,
        1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,
        0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,
        0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,
        429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,
        0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,
        1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,
        0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,
        0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,
        475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,
        0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,
        1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,
        0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,
        0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,
        521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,
        0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,
        1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,
        0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,
        0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,
        567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,575,1,0,
        0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,0,0,0,585,
        1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,
        0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,
        0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,
        613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,
        0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,
        1,0,0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,
        0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,
        0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,
        659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,0,0,667,1,0,
        0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,675,1,0,0,0,0,677,
        1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,
        0,687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,1,
        0,0,0,0,697,1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,
        705,1,0,0,0,0,707,1,0,0,0,0,709,1,0,0,0,0,711,1,0,0,0,0,713,1,0,
        0,0,0,715,1,0,0,0,0,717,1,0,0,0,0,719,1,0,0,0,0,721,1,0,0,0,0,723,
        1,0,0,0,0,725,1,0,0,0,0,727,1,0,0,0,0,729,1,0,0,0,0,731,1,0,0,0,
        0,733,1,0,0,0,0,735,1,0,0,0,0,737,1,0,0,0,0,739,1,0,0,0,0,741,1,
        0,0,0,0,743,1,0,0,0,0,745,1,0,0,0,0,747,1,0,0,0,0,749,1,0,0,0,0,
        751,1,0,0,0,0,753,1,0,0,0,0,755,1,0,0,0,0,757,1,0,0,0,0,759,1,0,
        0,0,0,761,1,0,0,0,0,763,1,0,0,0,0,765,1,0,0,0,0,767,1,0,0,0,0,769,
        1,0,0,0,0,771,1,0,0,0,0,773,1,0,0,0,0,775,1,0,0,0,0,777,1,0,0,0,
        0,779,1,0,0,0,0,781,1,0,0,0,0,783,1,0,0,0,0,785,1,0,0,0,0,787,1,
        0,0,0,0,789,1,0,0,0,0,791,1,0,0,0,0,793,1,0,0,0,0,795,1,0,0,0,0,
        797,1,0,0,0,0,799,1,0,0,0,0,801,1,0,0,0,0,803,1,0,0,0,0,805,1,0,
        0,0,0,807,1,0,0,0,0,809,1,0,0,0,0,811,1,0,0,0,0,813,1,0,0,0,0,815,
        1,0,0,0,0,817,1,0,0,0,0,819,1,0,0,0,0,821,1,0,0,0,0,823,1,0,0,0,
        0,825,1,0,0,0,0,827,1,0,0,0,0,829,1,0,0,0,0,831,1,0,0,0,0,833,1,
        0,0,0,0,835,1,0,0,0,0,837,1,0,0,0,0,839,1,0,0,0,0,841,1,0,0,0,0,
        843,1,0,0,0,0,845,1,0,0,0,0,847,1,0,0,0,0,849,1,0,0,0,0,851,1,0,
        0,0,0,853,1,0,0,0,0,855,1,0,0,0,0,857,1,0,0,0,0,859,1,0,0,0,0,861,
        1,0,0,0,0,863,1,0,0,0,0,865,1,0,0,0,0,867,1,0,0,0,0,869,1,0,0,0,
        0,871,1,0,0,0,0,873,1,0,0,0,0,875,1,0,0,0,0,877,1,0,0,0,0,879,1,
        0,0,0,0,881,1,0,0,0,0,883,1,0,0,0,0,885,1,0,0,0,0,887,1,0,0,0,0,
        889,1,0,0,0,0,891,1,0,0,0,0,893,1,0,0,0,0,895,1,0,0,0,0,897,1,0,
        0,0,0,899,1,0,0,0,0,901,1,0,0,0,0,903,1,0,0,0,0,905,1,0,0,0,0,907,
        1,0,0,0,0,909,1,0,0,0,0,911,1,0,0,0,0,913,1,0,0,0,0,915,1,0,0,0,
        0,917,1,0,0,0,0,919,1,0,0,0,0,973,1,0,0,0,0,975,1,0,0,0,0,977,1,
        0,0,0,0,979,1,0,0,0,0,981,1,0,0,0,0,983,1,0,0,0,0,985,1,0,0,0,0,
        987,1,0,0,0,0,1001,1,0,0,0,0,1003,1,0,0,0,0,1005,1,0,0,0,0,1007,
        1,0,0,0,0,1009,1,0,0,0,0,1011,1,0,0,0,0,1013,1,0,0,0,0,1015,1,0,
        0,0,0,1017,1,0,0,0,0,1019,1,0,0,0,0,1021,1,0,0,0,0,1023,1,0,0,0,
        0,1025,1,0,0,0,0,1027,1,0,0,0,0,1029,1,0,0,0,0,1031,1,0,0,0,0,1033,
        1,0,0,0,0,1035,1,0,0,0,0,1037,1,0,0,0,0,1039,1,0,0,0,0,1041,1,0,
        0,0,0,1043,1,0,0,0,0,1045,1,0,0,0,0,1047,1,0,0,0,0,1049,1,0,0,0,
        0,1051,1,0,0,0,0,1053,1,0,0,0,0,1055,1,0,0,0,0,1057,1,0,0,0,1,1060,
        1,0,0,0,3,1066,1,0,0,0,5,1104,1,0,0,0,7,1108,1,0,0,0,9,1112,1,0,
        0,0,11,1118,1,0,0,0,13,1124,1,0,0,0,15,1132,1,0,0,0,17,1136,1,0,
        0,0,19,1143,1,0,0,0,21,1148,1,0,0,0,23,1154,1,0,0,0,25,1160,1,0,
        0,0,27,1168,1,0,0,0,29,1176,1,0,0,0,31,1184,1,0,0,0,33,1190,1,0,
        0,0,35,1198,1,0,0,0,37,1204,1,0,0,0,39,1219,1,0,0,0,41,1230,1,0,
        0,0,43,1238,1,0,0,0,45,1246,1,0,0,0,47,1254,1,0,0,0,49,1266,1,0,
        0,0,51,1278,1,0,0,0,53,1286,1,0,0,0,55,1295,1,0,0,0,57,1300,1,0,
        0,0,59,1309,1,0,0,0,61,1319,1,0,0,0,63,1324,1,0,0,0,65,1337,1,0,
        0,0,67,1344,1,0,0,0,69,1352,1,0,0,0,71,1357,1,0,0,0,73,1368,1,0,
        0,0,75,1372,1,0,0,0,77,1381,1,0,0,0,79,1390,1,0,0,0,81,1397,1,0,
        0,0,83,1403,1,0,0,0,85,1409,1,0,0,0,87,1424,1,0,0,0,89,1434,1,0,
        0,0,91,1442,1,0,0,0,93,1452,1,0,0,0,95,1461,1,0,0,0,97,1468,1,0,
        0,0,99,1473,1,0,0,0,101,1479,1,0,0,0,103,1485,1,0,0,0,105,1491,1,
        0,0,0,107,1501,1,0,0,0,109,1508,1,0,0,0,111,1516,1,0,0,0,113,1522,
        1,0,0,0,115,1534,1,0,0,0,117,1544,1,0,0,0,119,1552,1,0,0,0,121,1562,
        1,0,0,0,123,1565,1,0,0,0,125,1570,1,0,0,0,127,1578,1,0,0,0,129,1582,
        1,0,0,0,131,1588,1,0,0,0,133,1591,1,0,0,0,135,1598,1,0,0,0,137,1606,
        1,0,0,0,139,1616,1,0,0,0,141,1622,1,0,0,0,143,1630,1,0,0,0,145,1634,
        1,0,0,0,147,1639,1,0,0,0,149,1644,1,0,0,0,151,1649,1,0,0,0,153,1669,
        1,0,0,0,155,1673,1,0,0,0,157,1678,1,0,0,0,159,1689,1,0,0,0,161,1698,
        1,0,0,0,163,1704,1,0,0,0,165,1709,1,0,0,0,167,1716,1,0,0,0,169,1722,
        1,0,0,0,171,1727,1,0,0,0,173,1732,1,0,0,0,175,1741,1,0,0,0,177,1746,
        1,0,0,0,179,1750,1,0,0,0,181,1762,1,0,0,0,183,1773,1,0,0,0,185,1785,
        1,0,0,0,187,1793,1,0,0,0,189,1802,1,0,0,0,191,1809,1,0,0,0,193,1817,
        1,0,0,0,195,1824,1,0,0,0,197,1835,1,0,0,0,199,1842,1,0,0,0,201,1848,
        1,0,0,0,203,1855,1,0,0,0,205,1862,1,0,0,0,207,1870,1,0,0,0,209,1879,
        1,0,0,0,211,1886,1,0,0,0,213,1896,1,0,0,0,215,1908,1,0,0,0,217,1920,
        1,0,0,0,219,1931,1,0,0,0,221,1939,1,0,0,0,223,1944,1,0,0,0,225,1949,
        1,0,0,0,227,1957,1,0,0,0,229,1962,1,0,0,0,231,1972,1,0,0,0,233,1981,
        1,0,0,0,235,1987,1,0,0,0,237,1998,1,0,0,0,239,2005,1,0,0,0,241,2012,
        1,0,0,0,243,2025,1,0,0,0,245,2045,1,0,0,0,247,2065,1,0,0,0,249,2076,
        1,0,0,0,251,2092,1,0,0,0,253,2109,1,0,0,0,255,2117,1,0,0,0,257,2123,
        1,0,0,0,259,2127,1,0,0,0,261,2132,1,0,0,0,263,2137,1,0,0,0,265,2146,
        1,0,0,0,267,2153,1,0,0,0,269,2160,1,0,0,0,271,2168,1,0,0,0,273,2176,
        1,0,0,0,275,2184,1,0,0,0,277,2193,1,0,0,0,279,2198,1,0,0,0,281,2208,
        1,0,0,0,283,2214,1,0,0,0,285,2221,1,0,0,0,287,2227,1,0,0,0,289,2234,
        1,0,0,0,291,2242,1,0,0,0,293,2250,1,0,0,0,295,2258,1,0,0,0,297,2267,
        1,0,0,0,299,2272,1,0,0,0,301,2279,1,0,0,0,303,2291,1,0,0,0,305,2299,
        1,0,0,0,307,2304,1,0,0,0,309,2310,1,0,0,0,311,2317,1,0,0,0,313,2322,
        1,0,0,0,315,2328,1,0,0,0,317,2335,1,0,0,0,319,2341,1,0,0,0,321,2357,
        1,0,0,0,323,2363,1,0,0,0,325,2374,1,0,0,0,327,2384,1,0,0,0,329,2389,
        1,0,0,0,331,2396,1,0,0,0,333,2406,1,0,0,0,335,2412,1,0,0,0,337,2419,
        1,0,0,0,339,2429,1,0,0,0,341,2437,1,0,0,0,343,2443,1,0,0,0,345,2457,
        1,0,0,0,347,2471,1,0,0,0,349,2484,1,0,0,0,351,2498,1,0,0,0,353,2511,
        1,0,0,0,355,2521,1,0,0,0,357,2528,1,0,0,0,359,2533,1,0,0,0,361,2541,
        1,0,0,0,363,2547,1,0,0,0,365,2557,1,0,0,0,367,2564,1,0,0,0,369,2570,
        1,0,0,0,371,2574,1,0,0,0,373,2580,1,0,0,0,375,2586,1,0,0,0,377,2591,
        1,0,0,0,379,2599,1,0,0,0,381,2604,1,0,0,0,383,2610,1,0,0,0,385,2618,
        1,0,0,0,387,2628,1,0,0,0,389,2639,1,0,0,0,391,2644,1,0,0,0,393,2650,
        1,0,0,0,395,2655,1,0,0,0,397,2663,1,0,0,0,399,2669,1,0,0,0,401,2674,
        1,0,0,0,403,2678,1,0,0,0,405,2682,1,0,0,0,407,2688,1,0,0,0,409,2694,
        1,0,0,0,411,2698,1,0,0,0,413,2702,1,0,0,0,415,2706,1,0,0,0,417,2712,
        1,0,0,0,419,2715,1,0,0,0,421,2726,1,0,0,0,423,2729,1,0,0,0,425,2733,
        1,0,0,0,427,2739,1,0,0,0,429,2747,1,0,0,0,431,2754,1,0,0,0,433,2761,
        1,0,0,0,435,2765,1,0,0,0,437,2770,1,0,0,0,439,2778,1,0,0,0,441,2783,
        1,0,0,0,443,2790,1,0,0,0,445,2798,1,0,0,0,447,2801,1,0,0,0,449,2806,
        1,0,0,0,451,2813,1,0,0,0,453,2822,1,0,0,0,455,2827,1,0,0,0,457,2832,
        1,0,0,0,459,2837,1,0,0,0,461,2842,1,0,0,0,463,2852,1,0,0,0,465,2858,
        1,0,0,0,467,2863,1,0,0,0,469,2869,1,0,0,0,471,2877,1,0,0,0,473,2887,
        1,0,0,0,475,2896,1,0,0,0,477,2904,1,0,0,0,479,2912,1,0,0,0,481,2919,
        1,0,0,0,483,2926,1,0,0,0,485,2934,1,0,0,0,487,2945,1,0,0,0,489,2954,
        1,0,0,0,491,2962,1,0,0,0,493,2968,1,0,0,0,495,2986,1,0,0,0,497,2993,
        1,0,0,0,499,2999,1,0,0,0,501,3004,1,0,0,0,503,3014,1,0,0,0,505,3022,
        1,0,0,0,507,3029,1,0,0,0,509,3035,1,0,0,0,511,3046,1,0,0,0,513,3051,
        1,0,0,0,515,3060,1,0,0,0,517,3064,1,0,0,0,519,3068,1,0,0,0,521,3076,
        1,0,0,0,523,3084,1,0,0,0,525,3092,1,0,0,0,527,3099,1,0,0,0,529,3106,
        1,0,0,0,531,3116,1,0,0,0,533,3125,1,0,0,0,535,3136,1,0,0,0,537,3145,
        1,0,0,0,539,3155,1,0,0,0,541,3167,1,0,0,0,543,3178,1,0,0,0,545,3185,
        1,0,0,0,547,3190,1,0,0,0,549,3195,1,0,0,0,551,3200,1,0,0,0,553,3204,
        1,0,0,0,555,3211,1,0,0,0,557,3218,1,0,0,0,559,3226,1,0,0,0,561,3233,
        1,0,0,0,563,3241,1,0,0,0,565,3248,1,0,0,0,567,3256,1,0,0,0,569,3264,
        1,0,0,0,571,3278,1,0,0,0,573,3287,1,0,0,0,575,3295,1,0,0,0,577,3307,
        1,0,0,0,579,3313,1,0,0,0,581,3319,1,0,0,0,583,3326,1,0,0,0,585,3330,
        1,0,0,0,587,3335,1,0,0,0,589,3349,1,0,0,0,591,3354,1,0,0,0,593,3363,
        1,0,0,0,595,3370,1,0,0,0,597,3376,1,0,0,0,599,3382,1,0,0,0,601,3391,
        1,0,0,0,603,3398,1,0,0,0,605,3403,1,0,0,0,607,3410,1,0,0,0,609,3415,
        1,0,0,0,611,3422,1,0,0,0,613,3425,1,0,0,0,615,3435,1,0,0,0,617,3447,
        1,0,0,0,619,3453,1,0,0,0,621,3459,1,0,0,0,623,3466,1,0,0,0,625,3470,
        1,0,0,0,627,3478,1,0,0,0,629,3488,1,0,0,0,631,3497,1,0,0,0,633,3502,
        1,0,0,0,635,3509,1,0,0,0,637,3516,1,0,0,0,639,3529,1,0,0,0,641,3535,
        1,0,0,0,643,3538,1,0,0,0,645,3543,1,0,0,0,647,3554,1,0,0,0,649,3558,
        1,0,0,0,651,3567,1,0,0,0,653,3575,1,0,0,0,655,3586,1,0,0,0,657,3591,
        1,0,0,0,659,3599,1,0,0,0,661,3604,1,0,0,0,663,3609,1,0,0,0,665,3615,
        1,0,0,0,667,3621,1,0,0,0,669,3627,1,0,0,0,671,3642,1,0,0,0,673,3648,
        1,0,0,0,675,3664,1,0,0,0,677,3673,1,0,0,0,679,3679,1,0,0,0,681,3688,
        1,0,0,0,683,3694,1,0,0,0,685,3701,1,0,0,0,687,3710,1,0,0,0,689,3717,
        1,0,0,0,691,3723,1,0,0,0,693,3732,1,0,0,0,695,3740,1,0,0,0,697,3745,
        1,0,0,0,699,3748,1,0,0,0,701,3753,1,0,0,0,703,3757,1,0,0,0,705,3763,
        1,0,0,0,707,3773,1,0,0,0,709,3778,1,0,0,0,711,3786,1,0,0,0,713,3789,
        1,0,0,0,715,3796,1,0,0,0,717,3799,1,0,0,0,719,3803,1,0,0,0,721,3806,
        1,0,0,0,723,3812,1,0,0,0,725,3816,1,0,0,0,727,3822,1,0,0,0,729,3835,
        1,0,0,0,731,3840,1,0,0,0,733,3848,1,0,0,0,735,3857,1,0,0,0,737,3867,
        1,0,0,0,739,3875,1,0,0,0,741,3879,1,0,0,0,743,3887,1,0,0,0,745,3900,
        1,0,0,0,747,3916,1,0,0,0,749,3932,1,0,0,0,751,3939,1,0,0,0,753,3945,
        1,0,0,0,755,3954,1,0,0,0,757,3960,1,0,0,0,759,3971,1,0,0,0,761,3988,
        1,0,0,0,763,3996,1,0,0,0,765,4002,1,0,0,0,767,4008,1,0,0,0,769,4021,
        1,0,0,0,771,4032,1,0,0,0,773,4037,1,0,0,0,775,4044,1,0,0,0,777,4050,
        1,0,0,0,779,4057,1,0,0,0,781,4064,1,0,0,0,783,4070,1,0,0,0,785,4076,
        1,0,0,0,787,4085,1,0,0,0,789,4092,1,0,0,0,791,4096,1,0,0,0,793,4101,
        1,0,0,0,795,4108,1,0,0,0,797,4115,1,0,0,0,799,4119,1,0,0,0,801,4125,
        1,0,0,0,803,4130,1,0,0,0,805,4138,1,0,0,0,807,4143,1,0,0,0,809,4150,
        1,0,0,0,811,4157,1,0,0,0,813,4166,1,0,0,0,815,4172,1,0,0,0,817,4178,
        1,0,0,0,819,4185,1,0,0,0,821,4192,1,0,0,0,823,4197,1,0,0,0,825,4207,
        1,0,0,0,827,4211,1,0,0,0,829,4221,1,0,0,0,831,4228,1,0,0,0,833,4240,
        1,0,0,0,835,4252,1,0,0,0,837,4258,1,0,0,0,839,4272,1,0,0,0,841,4284,
        1,0,0,0,843,4295,1,0,0,0,845,4300,1,0,0,0,847,4305,1,0,0,0,849,4315,
        1,0,0,0,851,4328,1,0,0,0,853,4341,1,0,0,0,855,4354,1,0,0,0,857,4362,
        1,0,0,0,859,4365,1,0,0,0,861,4374,1,0,0,0,863,4379,1,0,0,0,865,4388,
        1,0,0,0,867,4394,1,0,0,0,869,4401,1,0,0,0,871,4409,1,0,0,0,873,4415,
        1,0,0,0,875,4423,1,0,0,0,877,4429,1,0,0,0,879,4436,1,0,0,0,881,4441,
        1,0,0,0,883,4447,1,0,0,0,885,4453,1,0,0,0,887,4460,1,0,0,0,889,4470,
        1,0,0,0,891,4478,1,0,0,0,893,4483,1,0,0,0,895,4489,1,0,0,0,897,4496,
        1,0,0,0,899,4501,1,0,0,0,901,4508,1,0,0,0,903,4516,1,0,0,0,905,4521,
        1,0,0,0,907,4534,1,0,0,0,909,4544,1,0,0,0,911,4557,1,0,0,0,913,4565,
        1,0,0,0,915,4576,1,0,0,0,917,4584,1,0,0,0,919,4591,1,0,0,0,921,4599,
        1,0,0,0,923,4601,1,0,0,0,925,4603,1,0,0,0,927,4605,1,0,0,0,929,4607,
        1,0,0,0,931,4609,1,0,0,0,933,4611,1,0,0,0,935,4613,1,0,0,0,937,4615,
        1,0,0,0,939,4617,1,0,0,0,941,4619,1,0,0,0,943,4621,1,0,0,0,945,4623,
        1,0,0,0,947,4625,1,0,0,0,949,4627,1,0,0,0,951,4629,1,0,0,0,953,4631,
        1,0,0,0,955,4633,1,0,0,0,957,4635,1,0,0,0,959,4637,1,0,0,0,961,4639,
        1,0,0,0,963,4641,1,0,0,0,965,4643,1,0,0,0,967,4645,1,0,0,0,969,4647,
        1,0,0,0,971,4649,1,0,0,0,973,4651,1,0,0,0,975,4653,1,0,0,0,977,4655,
        1,0,0,0,979,4657,1,0,0,0,981,4659,1,0,0,0,983,4661,1,0,0,0,985,4663,
        1,0,0,0,987,4665,1,0,0,0,989,4667,1,0,0,0,991,4679,1,0,0,0,993,4693,
        1,0,0,0,995,4695,1,0,0,0,997,4708,1,0,0,0,999,4720,1,0,0,0,1001,
        4733,1,0,0,0,1003,4735,1,0,0,0,1005,4737,1,0,0,0,1007,4739,1,0,0,
        0,1009,4741,1,0,0,0,1011,4743,1,0,0,0,1013,4745,1,0,0,0,1015,4747,
        1,0,0,0,1017,4749,1,0,0,0,1019,4751,1,0,0,0,1021,4753,1,0,0,0,1023,
        4755,1,0,0,0,1025,4757,1,0,0,0,1027,4759,1,0,0,0,1029,4761,1,0,0,
        0,1031,4763,1,0,0,0,1033,4765,1,0,0,0,1035,4767,1,0,0,0,1037,4769,
        1,0,0,0,1039,4771,1,0,0,0,1041,4773,1,0,0,0,1043,4776,1,0,0,0,1045,
        4779,1,0,0,0,1047,4781,1,0,0,0,1049,4783,1,0,0,0,1051,4789,1,0,0,
        0,1053,4792,1,0,0,0,1055,4839,1,0,0,0,1057,4841,1,0,0,0,1059,1061,
        7,0,0,0,1060,1059,1,0,0,0,1061,1062,1,0,0,0,1062,1060,1,0,0,0,1062,
        1063,1,0,0,0,1063,1064,1,0,0,0,1064,1065,6,0,0,0,1065,2,1,0,0,0,
        1066,1067,5,47,0,0,1067,1071,5,42,0,0,1068,1070,9,0,0,0,1069,1068,
        1,0,0,0,1070,1073,1,0,0,0,1071,1072,1,0,0,0,1071,1069,1,0,0,0,1072,
        1074,1,0,0,0,1073,1071,1,0,0,0,1074,1075,5,42,0,0,1075,1076,5,47,
        0,0,1076,1077,1,0,0,0,1077,1078,6,1,0,0,1078,4,1,0,0,0,1079,1082,
        3,1043,521,0,1080,1082,5,35,0,0,1081,1079,1,0,0,0,1081,1080,1,0,
        0,0,1082,1086,1,0,0,0,1083,1085,8,1,0,0,1084,1083,1,0,0,0,1085,1088,
        1,0,0,0,1086,1084,1,0,0,0,1086,1087,1,0,0,0,1087,1094,1,0,0,0,1088,
        1086,1,0,0,0,1089,1091,5,13,0,0,1090,1089,1,0,0,0,1090,1091,1,0,
        0,0,1091,1092,1,0,0,0,1092,1095,5,10,0,0,1093,1095,5,0,0,1,1094,
        1090,1,0,0,0,1094,1093,1,0,0,0,1095,1105,1,0,0,0,1096,1102,3,1043,
        521,0,1097,1099,5,13,0,0,1098,1097,1,0,0,0,1098,1099,1,0,0,0,1099,
        1100,1,0,0,0,1100,1103,5,10,0,0,1101,1103,5,0,0,1,1102,1098,1,0,
        0,0,1102,1101,1,0,0,0,1103,1105,1,0,0,0,1104,1081,1,0,0,0,1104,1096,
        1,0,0,0,1105,1106,1,0,0,0,1106,1107,6,2,0,0,1107,6,1,0,0,0,1108,
        1109,3,921,460,0,1109,1110,3,927,463,0,1110,1111,3,927,463,0,1111,
        8,1,0,0,0,1112,1113,3,921,460,0,1113,1114,3,927,463,0,1114,1115,
        3,945,472,0,1115,1116,3,937,468,0,1116,1117,3,947,473,0,1117,10,
        1,0,0,0,1118,1119,3,921,460,0,1119,1120,3,931,465,0,1120,1121,3,
        959,479,0,1121,1122,3,929,464,0,1122,1123,3,955,477,0,1123,12,1,
        0,0,0,1124,1125,3,921,460,0,1125,1126,3,947,473,0,1126,1127,3,921,
        460,0,1127,1128,3,943,471,0,1128,1129,3,969,484,0,1129,1130,3,971,
        485,0,1130,1131,3,929,464,0,1131,14,1,0,0,0,1132,1133,3,921,460,
        0,1133,1134,3,957,478,0,1134,1135,3,925,462,0,1135,16,1,0,0,0,1136,
        1137,3,923,461,0,1137,1138,3,929,464,0,1138,1139,3,931,465,0,1139,
        1140,3,949,474,0,1140,1141,3,955,477,0,1141,1142,3,929,464,0,1142,
        18,1,0,0,0,1143,1144,3,923,461,0,1144,1145,3,969,484,0,1145,1146,
        3,959,479,0,1146,1147,3,929,464,0,1147,20,1,0,0,0,1148,1149,3,923,
        461,0,1149,1150,3,969,484,0,1150,1151,3,959,479,0,1151,1152,3,929,
        464,0,1152,1153,3,957,478,0,1153,22,1,0,0,0,1154,1155,3,925,462,
        0,1155,1156,3,921,460,0,1156,1157,3,925,462,0,1157,1158,3,935,467,
        0,1158,1159,3,929,464,0,1159,24,1,0,0,0,1160,1161,3,925,462,0,1161,
        1162,3,921,460,0,1162,1163,3,957,478,0,1163,1164,3,925,462,0,1164,
        1165,3,921,460,0,1165,1166,3,927,463,0,1166,1167,3,929,464,0,1167,
        26,1,0,0,0,1168,1169,3,925,462,0,1169,1170,3,921,460,0,1170,1171,
        3,959,479,0,1171,1172,3,921,460,0,1172,1173,3,943,471,0,1173,1174,
        3,949,474,0,1174,1175,3,933,466,0,1175,28,1,0,0,0,1176,1177,3,925,
        462,0,1177,1178,3,921,460,0,1178,1179,3,959,479,0,1179,1180,3,921,
        460,0,1180,1181,3,943,471,0,1181,1182,3,949,474,0,1182,1183,3,933,
        466,0,1183,30,1,0,0,0,1184,1185,3,925,462,0,1185,1186,3,943,471,
        0,1186,1187,3,929,464,0,1187,1188,3,921,460,0,1188,1189,3,955,477,
        0,1189,32,1,0,0,0,1190,1191,3,925,462,0,1191,1192,3,929,464,0,1192,
        1193,3,947,473,0,1193,1194,3,959,479,0,1194,1195,3,961,480,0,1195,
        1196,3,955,477,0,1196,1197,3,969,484,0,1197,34,1,0,0,0,1198,1199,
        3,925,462,0,1199,1200,3,935,467,0,1200,1201,3,921,460,0,1201,1202,
        3,937,468,0,1202,1203,3,947,473,0,1203,36,1,0,0,0,1204,1205,3,925,
        462,0,1205,1206,3,935,467,0,1206,1207,3,921,460,0,1207,1208,3,947,
        473,0,1208,1209,3,933,466,0,1209,1210,3,929,464,0,1210,1211,3,943,
        471,0,1211,1212,3,949,474,0,1212,1213,3,933,466,0,1213,1214,3,1033,
        516,0,1214,1215,3,945,472,0,1215,1216,3,949,474,0,1216,1217,3,927,
        463,0,1217,1218,3,929,464,0,1218,38,1,0,0,0,1219,1220,3,925,462,
        0,1220,1221,3,935,467,0,1221,1222,3,921,460,0,1222,1223,3,955,477,
        0,1223,1224,3,921,460,0,1224,1225,3,925,462,0,1225,1226,3,959,479,
        0,1226,1227,3,929,464,0,1227,1228,3,955,477,0,1228,1229,3,957,478,
        0,1229,40,1,0,0,0,1230,1231,3,925,462,0,1231,1232,3,949,474,0,1232,
        1233,3,945,472,0,1233,1234,3,945,472,0,1234,1235,3,929,464,0,1235,
        1236,3,947,473,0,1236,1237,3,959,479,0,1237,42,1,0,0,0,1238,1239,
        3,925,462,0,1239,1240,3,949,474,0,1240,1241,3,945,472,0,1241,1242,
        3,951,475,0,1242,1243,3,921,460,0,1243,1244,3,925,462,0,1244,1245,
        3,959,479,0,1245,44,1,0,0,0,1246,1247,3,925,462,0,1247,1248,3,949,
        474,0,1248,1249,3,943,471,0,1249,1250,3,961,480,0,1250,1251,3,945,
        472,0,1251,1252,3,947,473,0,1252,1253,3,957,478,0,1253,46,1,0,0,
        0,1254,1255,3,925,462,0,1255,1256,3,949,474,0,1256,1257,3,947,473,
        0,1257,1258,3,957,478,0,1258,1259,3,959,479,0,1259,1260,3,955,477,
        0,1260,1261,3,921,460,0,1261,1262,3,937,468,0,1262,1263,3,947,473,
        0,1263,1264,3,959,479,0,1264,1265,3,957,478,0,1265,48,1,0,0,0,1266,
        1267,3,925,462,0,1267,1268,3,949,474,0,1268,1269,3,947,473,0,1269,
        1270,3,957,478,0,1270,1271,3,959,479,0,1271,1272,3,955,477,0,1272,
        1273,3,961,480,0,1273,1274,3,925,462,0,1274,1275,3,959,479,0,1275,
        1276,3,949,474,0,1276,1277,3,955,477,0,1277,50,1,0,0,0,1278,1279,
        3,925,462,0,1279,1280,3,949,474,0,1280,1281,3,945,472,0,1281,1282,
        3,951,475,0,1282,1283,3,961,480,0,1283,1284,3,959,479,0,1284,1285,
        3,929,464,0,1285,52,1,0,0,0,1286,1287,3,925,462,0,1287,1288,3,961,
        480,0,1288,1289,3,945,472,0,1289,1290,3,961,480,0,1290,1291,3,943,
        471,0,1291,1292,3,921,460,0,1292,1293,3,959,479,0,1293,1294,3,929,
        464,0,1294,54,1,0,0,0,1295,1296,3,927,463,0,1296,1297,3,921,460,
        0,1297,1298,3,959,479,0,1298,1299,3,921,460,0,1299,56,1,0,0,0,1300,
        1301,3,927,463,0,1301,1302,3,921,460,0,1302,1303,3,959,479,0,1303,
        1304,3,921,460,0,1304,1305,3,923,461,0,1305,1306,3,921,460,0,1306,
        1307,3,957,478,0,1307,1308,3,929,464,0,1308,58,1,0,0,0,1309,1310,
        3,927,463,0,1310,1311,3,921,460,0,1311,1312,3,959,479,0,1312,1313,
        3,921,460,0,1313,1314,3,923,461,0,1314,1315,3,921,460,0,1315,1316,
        3,957,478,0,1316,1317,3,929,464,0,1317,1318,3,957,478,0,1318,60,
        1,0,0,0,1319,1320,3,927,463,0,1320,1321,3,921,460,0,1321,1322,3,
        969,484,0,1322,1323,3,957,478,0,1323,62,1,0,0,0,1324,1325,3,927,
        463,0,1325,1326,3,923,461,0,1326,1327,3,951,475,0,1327,1328,3,955,
        477,0,1328,1329,3,949,474,0,1329,1330,3,951,475,0,1330,1331,3,929,
        464,0,1331,1332,3,955,477,0,1332,1333,3,959,479,0,1333,1334,3,937,
        468,0,1334,1335,3,929,464,0,1335,1336,3,957,478,0,1336,64,1,0,0,
        0,1337,1338,3,927,463,0,1338,1339,3,929,464,0,1339,1340,3,925,462,
        0,1340,1341,3,921,460,0,1341,1342,3,927,463,0,1342,1343,3,929,464,
        0,1343,66,1,0,0,0,1344,1345,3,927,463,0,1345,1346,3,929,464,0,1346,
        1347,3,931,465,0,1347,1348,3,937,468,0,1348,1349,3,947,473,0,1349,
        1350,3,929,464,0,1350,1351,3,927,463,0,1351,68,1,0,0,0,1352,1353,
        3,927,463,0,1353,1354,3,929,464,0,1354,1355,3,957,478,0,1355,1356,
        3,925,462,0,1356,70,1,0,0,0,1357,1358,3,927,463,0,1358,1359,3,929,
        464,0,1359,1360,3,957,478,0,1360,1361,3,925,462,0,1361,1362,3,955,
        477,0,1362,1363,3,937,468,0,1363,1364,3,951,475,0,1364,1365,3,959,
        479,0,1365,1366,3,949,474,0,1366,1367,3,955,477,0,1367,72,1,0,0,
        0,1368,1369,3,927,463,0,1369,1370,3,937,468,0,1370,1371,3,963,481,
        0,1371,74,1,0,0,0,1372,1373,3,929,464,0,1373,1374,3,947,473,0,1374,
        1375,3,925,462,0,1375,1376,3,949,474,0,1376,1377,3,927,463,0,1377,
        1378,3,937,468,0,1378,1379,3,947,473,0,1379,1380,3,933,466,0,1380,
        76,1,0,0,0,1381,1382,3,929,464,0,1382,1383,3,947,473,0,1383,1384,
        3,931,465,0,1384,1385,3,949,474,0,1385,1386,3,955,477,0,1386,1387,
        3,925,462,0,1387,1388,3,929,464,0,1388,1389,3,927,463,0,1389,78,
        1,0,0,0,1390,1391,3,929,464,0,1391,1392,3,947,473,0,1392,1393,3,
        933,466,0,1393,1394,3,937,468,0,1394,1395,3,947,473,0,1395,1396,
        3,929,464,0,1396,80,1,0,0,0,1397,1398,3,929,464,0,1398,1399,3,951,
        475,0,1399,1400,3,949,474,0,1400,1401,3,925,462,0,1401,1402,3,935,
        467,0,1402,82,1,0,0,0,1403,1404,3,929,464,0,1404,1405,3,955,477,
        0,1405,1406,3,955,477,0,1406,1407,3,949,474,0,1407,1408,3,955,477,
        0,1408,84,1,0,0,0,1409,1410,3,929,464,0,1410,1411,3,957,478,0,1411,
        1412,3,959,479,0,1412,1413,3,937,468,0,1413,1414,3,945,472,0,1414,
        1415,3,921,460,0,1415,1416,3,959,479,0,1416,1417,3,929,464,0,1417,
        1418,3,927,463,0,1418,1419,3,1033,516,0,1419,1420,3,925,462,0,1420,
        1421,3,949,474,0,1421,1422,3,957,478,0,1422,1423,3,959,479,0,1423,
        86,1,0,0,0,1424,1425,3,929,464,0,1425,1426,3,967,483,0,1426,1427,
        3,925,462,0,1427,1428,3,929,464,0,1428,1429,3,951,475,0,1429,1430,
        3,959,479,0,1430,1431,3,937,468,0,1431,1432,3,949,474,0,1432,1433,
        3,947,473,0,1433,88,1,0,0,0,1434,1435,3,929,464,0,1435,1436,3,967,
        483,0,1436,1437,3,925,462,0,1437,1438,3,943,471,0,1438,1439,3,961,
        480,0,1439,1440,3,927,463,0,1440,1441,3,929,464,0,1441,90,1,0,0,
        0,1442,1443,3,929,464,0,1443,1444,3,967,483,0,1444,1445,3,925,462,
        0,1445,1446,3,943,471,0,1446,1447,3,961,480,0,1447,1448,3,927,463,
        0,1448,1449,3,937,468,0,1449,1450,3,947,473,0,1450,1451,3,933,466,
        0,1451,92,1,0,0,0,1452,1453,3,929,464,0,1453,1454,3,967,483,0,1454,
        1455,3,959,479,0,1455,1456,3,929,464,0,1456,1457,3,947,473,0,1457,
        1458,3,927,463,0,1458,1459,3,929,464,0,1459,1460,3,927,463,0,1460,
        94,1,0,0,0,1461,1462,3,931,465,0,1462,1463,3,937,468,0,1463,1464,
        3,943,471,0,1464,1465,3,959,479,0,1465,1466,3,929,464,0,1466,1467,
        3,955,477,0,1467,96,1,0,0,0,1468,1469,3,931,465,0,1469,1470,3,937,
        468,0,1470,1471,3,943,471,0,1471,1472,3,929,464,0,1472,98,1,0,0,
        0,1473,1474,3,931,465,0,1474,1475,3,937,468,0,1475,1476,3,943,471,
        0,1476,1477,3,929,464,0,1477,1478,3,957,478,0,1478,100,1,0,0,0,1479,
        1480,3,931,465,0,1480,1481,3,937,468,0,1481,1482,3,947,473,0,1482,
        1483,3,921,460,0,1483,1484,3,943,471,0,1484,102,1,0,0,0,1485,1486,
        3,931,465,0,1486,1487,3,937,468,0,1487,1488,3,955,477,0,1488,1489,
        3,957,478,0,1489,1490,3,959,479,0,1490,104,1,0,0,0,1491,1492,3,931,
        465,0,1492,1493,3,949,474,0,1493,1494,3,943,471,0,1494,1495,3,943,
        471,0,1495,1496,3,949,474,0,1496,1497,3,965,482,0,1497,1498,3,937,
        468,0,1498,1499,3,947,473,0,1499,1500,3,933,466,0,1500,106,1,0,0,
        0,1501,1502,3,931,465,0,1502,1503,3,949,474,0,1503,1504,3,955,477,
        0,1504,1505,3,945,472,0,1505,1506,3,921,460,0,1506,1507,3,959,479,
        0,1507,108,1,0,0,0,1508,1509,3,931,465,0,1509,1510,3,949,474,0,1510,
        1511,3,955,477,0,1511,1512,3,959,479,0,1512,1513,3,955,477,0,1513,
        1514,3,921,460,0,1514,1515,3,947,473,0,1515,110,1,0,0,0,1516,1517,
        3,931,465,0,1517,1518,3,949,474,0,1518,1519,3,961,480,0,1519,1520,
        3,947,473,0,1520,1521,3,927,463,0,1521,112,1,0,0,0,1522,1523,3,931,
        465,0,1523,1524,3,955,477,0,1524,1525,3,921,460,0,1525,1526,3,925,
        462,0,1526,1527,3,1033,516,0,1527,1528,3,957,478,0,1528,1529,3,929,
        464,0,1529,1530,3,925,462,0,1530,1531,3,949,474,0,1531,1532,3,947,
        473,0,1532,1533,3,927,463,0,1533,114,1,0,0,0,1534,1535,3,931,465,
        0,1535,1536,3,961,480,0,1536,1537,3,947,473,0,1537,1538,3,925,462,
        0,1538,1539,3,959,479,0,1539,1540,3,937,468,0,1540,1541,3,949,474,
        0,1541,1542,3,947,473,0,1542,1543,3,957,478,0,1543,116,1,0,0,0,1544,
        1545,3,933,466,0,1545,1546,3,929,464,0,1546,1547,3,947,473,0,1547,
        1548,3,929,464,0,1548,1549,3,955,477,0,1549,1550,3,921,460,0,1550,
        1551,3,943,471,0,1551,118,1,0,0,0,1552,1553,3,933,466,0,1553,1554,
        3,929,464,0,1554,1555,3,947,473,0,1555,1556,3,929,464,0,1556,1557,
        3,955,477,0,1557,1558,3,921,460,0,1558,1559,3,959,479,0,1559,1560,
        3,929,464,0,1560,1561,3,927,463,0,1561,120,1,0,0,0,1562,1563,3,933,
        466,0,1563,1564,3,949,474,0,1564,122,1,0,0,0,1565,1566,3,933,466,
        0,1566,1567,3,949,474,0,1567,1568,3,959,479,0,1568,1569,3,949,474,
        0,1569,124,1,0,0,0,1570,1571,3,933,466,0,1571,1572,3,955,477,0,1572,
        1573,3,921,460,0,1573,1574,3,947,473,0,1574,1575,3,959,479,0,1575,
        1576,3,929,464,0,1576,1577,3,927,463,0,1577,126,1,0,0,0,1578,1579,
        3,935,467,0,1579,1580,3,949,474,0,1580,1581,3,951,475,0,1581,128,
        1,0,0,0,1582,1583,3,935,467,0,1583,1584,3,949,474,0,1584,1585,3,
        961,480,0,1585,1586,3,955,477,0,1586,1587,3,957,478,0,1587,130,1,
        0,0,0,1588,1589,3,937,468,0,1589,1590,3,931,465,0,1590,132,1,0,0,
        0,1591,1592,3,937,468,0,1592,1593,3,933,466,0,1593,1594,3,947,473,
        0,1594,1595,3,949,474,0,1595,1596,3,955,477,0,1596,1597,3,929,464,
        0,1597,134,1,0,0,0,1598,1599,3,937,468,0,1599,1600,3,947,473,0,1600,
        1601,3,925,462,0,1601,1602,3,943,471,0,1602,1603,3,961,480,0,1603,
        1604,3,927,463,0,1604,1605,3,929,464,0,1605,136,1,0,0,0,1606,1607,
        3,937,468,0,1607,1608,3,947,473,0,1608,1609,3,925,462,0,1609,1610,
        3,955,477,0,1610,1611,3,929,464,0,1611,1612,3,945,472,0,1612,1613,
        3,929,464,0,1613,1614,3,947,473,0,1614,1615,3,959,479,0,1615,138,
        1,0,0,0,1616,1617,3,937,468,0,1617,1618,3,947,473,0,1618,1619,3,
        951,475,0,1619,1620,3,961,480,0,1620,1621,3,959,479,0,1621,140,1,
        0,0,0,1622,1623,3,937,468,0,1623,1624,3,947,473,0,1624,1625,3,963,
        481,0,1625,1626,3,949,474,0,1626,1627,3,941,470,0,1627,1628,3,929,
        464,0,1628,1629,3,955,477,0,1629,142,1,0,0,0,1630,1631,3,939,469,
        0,1631,1632,3,921,460,0,1632,1633,3,955,477,0,1633,144,1,0,0,0,1634,
        1635,3,939,469,0,1635,1636,3,921,460,0,1636,1637,3,955,477,0,1637,
        1638,3,957,478,0,1638,146,1,0,0,0,1639,1640,3,939,469,0,1640,1641,
        3,921,460,0,1641,1642,3,963,481,0,1642,1643,3,921,460,0,1643,148,
        1,0,0,0,1644,1645,3,939,469,0,1645,1646,3,957,478,0,1646,1647,3,
        949,474,0,1647,1648,3,947,473,0,1648,150,1,0,0,0,1649,1650,3,939,
        469,0,1650,1651,3,957,478,0,1651,1652,3,949,474,0,1652,1653,3,947,
        473,0,1653,1654,3,1033,516,0,1654,1655,3,929,464,0,1655,1656,3,967,
        483,0,1656,1657,3,929,464,0,1657,1658,3,925,462,0,1658,1659,3,961,
        480,0,1659,1660,3,959,479,0,1660,1661,3,937,468,0,1661,1662,3,949,
        474,0,1662,1663,3,947,473,0,1663,1664,3,1033,516,0,1664,1665,3,951,
        475,0,1665,1666,3,943,471,0,1666,1667,3,921,460,0,1667,1668,3,947,
        473,0,1668,152,1,0,0,0,1669,1670,3,941,470,0,1670,1671,3,929,464,
        0,1671,1672,3,969,484,0,1672,154,1,0,0,0,1673,1674,3,941,470,0,1674,
        1675,3,929,464,0,1675,1676,3,969,484,0,1676,1677,3,957,478,0,1677,
        156,1,0,0,0,1678,1679,3,941,470,0,1679,1680,3,929,464,0,1680,1681,
        3,969,484,0,1681,1682,3,1033,516,0,1682,1683,3,945,472,0,1683,1684,
        3,929,464,0,1684,1685,3,945,472,0,1685,1686,3,923,461,0,1686,1687,
        3,929,464,0,1687,1688,3,955,477,0,1688,158,1,0,0,0,1689,1690,3,941,
        470,0,1690,1691,3,929,464,0,1691,1692,3,969,484,0,1692,1693,3,1033,
        516,0,1693,1694,3,959,479,0,1694,1695,3,969,484,0,1695,1696,3,951,
        475,0,1696,1697,3,929,464,0,1697,160,1,0,0,0,1698,1699,3,943,471,
        0,1699,1700,3,921,460,0,1700,1701,3,923,461,0,1701,1702,3,929,464,
        0,1702,1703,3,943,471,0,1703,162,1,0,0,0,1704,1705,3,943,471,0,1705,
        1706,3,921,460,0,1706,1707,3,957,478,0,1707,1708,3,959,479,0,1708,
        164,1,0,0,0,1709,1710,3,943,471,0,1710,1711,3,929,464,0,1711,1712,
        3,947,473,0,1712,1713,3,933,466,0,1713,1714,3,959,479,0,1714,1715,
        3,935,467,0,1715,166,1,0,0,0,1716,1717,3,943,471,0,1717,1718,3,929,
        464,0,1718,1719,3,963,481,0,1719,1720,3,929,464,0,1720,1721,3,943,
        471,0,1721,168,1,0,0,0,1722,1723,3,943,471,0,1723,1724,3,937,468,
        0,1724,1725,3,957,478,0,1725,1726,3,959,479,0,1726,170,1,0,0,0,1727,
        1728,3,943,471,0,1728,1729,3,949,474,0,1729,1730,3,921,460,0,1730,
        1731,3,927,463,0,1731,172,1,0,0,0,1732,1733,3,943,471,0,1733,1734,
        3,949,474,0,1734,1735,3,925,462,0,1735,1736,3,921,460,0,1736,1737,
        3,959,479,0,1737,1738,3,937,468,0,1738,1739,3,949,474,0,1739,1740,
        3,947,473,0,1740,174,1,0,0,0,1741,1742,3,943,471,0,1742,1743,3,949,
        474,0,1743,1744,3,947,473,0,1744,1745,3,933,466,0,1745,176,1,0,0,
        0,1746,1747,3,945,472,0,1747,1748,3,921,460,0,1748,1749,3,951,475,
        0,1749,178,1,0,0,0,1750,1751,3,945,472,0,1751,1752,3,937,468,0,1752,
        1753,3,925,462,0,1753,1754,3,955,477,0,1754,1755,3,949,474,0,1755,
        1756,3,957,478,0,1756,1757,3,929,464,0,1757,1758,3,925,462,0,1758,
        1759,3,949,474,0,1759,1760,3,947,473,0,1760,1761,3,927,463,0,1761,
        180,1,0,0,0,1762,1763,3,945,472,0,1763,1764,3,937,468,0,1764,1765,
        3,943,471,0,1765,1766,3,943,471,0,1766,1767,3,929,464,0,1767,1768,
        3,947,473,0,1768,1769,3,947,473,0,1769,1770,3,937,468,0,1770,1771,
        3,961,480,0,1771,1772,3,945,472,0,1772,182,1,0,0,0,1773,1774,3,945,
        472,0,1774,1775,3,937,468,0,1775,1776,3,943,471,0,1776,1777,3,943,
        471,0,1777,1778,3,937,468,0,1778,1779,3,957,478,0,1779,1780,3,929,
        464,0,1780,1781,3,925,462,0,1781,1782,3,949,474,0,1782,1783,3,947,
        473,0,1783,1784,3,927,463,0,1784,184,1,0,0,0,1785,1786,3,945,472,
        0,1786,1787,3,937,468,0,1787,1788,3,947,473,0,1788,1789,3,961,480,
        0,1789,1790,3,959,479,0,1790,1791,3,929,464,0,1791,1792,3,957,478,
        0,1792,186,1,0,0,0,1793,1794,3,945,472,0,1794,1795,3,937,468,0,1795,
        1796,3,947,473,0,1796,1797,3,963,481,0,1797,1798,3,921,460,0,1798,
        1799,3,943,471,0,1799,1800,3,961,480,0,1800,1801,3,929,464,0,1801,
        188,1,0,0,0,1802,1803,3,945,472,0,1803,1804,3,949,474,0,1804,1805,
        3,927,463,0,1805,1806,3,937,468,0,1806,1807,3,931,465,0,1807,1808,
        3,969,484,0,1808,190,1,0,0,0,1809,1810,3,945,472,0,1810,1811,3,949,
        474,0,1811,1812,3,927,463,0,1812,1813,3,961,480,0,1813,1814,3,943,
        471,0,1814,1815,3,929,464,0,1815,1816,3,957,478,0,1816,192,1,0,0,
        0,1817,1818,3,945,472,0,1818,1819,3,949,474,0,1819,1820,3,947,473,
        0,1820,1821,3,959,479,0,1821,1822,3,935,467,0,1822,1823,3,957,478,
        0,1823,194,1,0,0,0,1824,1825,3,947,473,0,1825,1826,3,921,460,0,1826,
        1827,3,947,473,0,1827,1828,3,949,474,0,1828,1829,3,957,478,0,1829,
        1830,3,929,464,0,1830,1831,3,925,462,0,1831,1832,3,949,474,0,1832,
        1833,3,947,473,0,1833,1834,3,927,463,0,1834,196,1,0,0,0,1835,1836,
        3,947,473,0,1836,1837,3,949,474,0,1837,1838,3,957,478,0,1838,1839,
        3,925,462,0,1839,1840,3,921,460,0,1840,1841,3,947,473,0,1841,198,
        1,0,0,0,1842,1843,3,947,473,0,1843,1844,3,961,480,0,1844,1845,3,
        943,471,0,1845,1846,3,943,471,0,1846,1847,3,957,478,0,1847,200,1,
        0,0,0,1848,1849,3,947,473,0,1849,1850,3,961,480,0,1850,1851,3,945,
        472,0,1851,1852,3,923,461,0,1852,1853,3,929,464,0,1853,1854,3,955,
        477,0,1854,202,1,0,0,0,1855,1856,3,949,474,0,1856,1857,3,951,475,
        0,1857,1858,3,959,479,0,1858,1859,3,937,468,0,1859,1860,3,949,474,
        0,1860,1861,3,947,473,0,1861,204,1,0,0,0,1862,1863,3,949,474,0,1863,
        1864,3,951,475,0,1864,1865,3,959,479,0,1865,1866,3,937,468,0,1866,
        1867,3,949,474,0,1867,1868,3,947,473,0,1868,1869,3,957,478,0,1869,
        206,1,0,0,0,1870,1871,3,949,474,0,1871,1872,3,955,477,0,1872,1873,
        3,927,463,0,1873,1874,3,929,464,0,1874,1875,3,955,477,0,1875,1876,
        3,937,468,0,1876,1877,3,947,473,0,1877,1878,3,933,466,0,1878,208,
        1,0,0,0,1879,1880,3,949,474,0,1880,1881,3,961,480,0,1881,1882,3,
        959,479,0,1882,1883,3,951,475,0,1883,1884,3,961,480,0,1884,1885,
        3,959,479,0,1885,210,1,0,0,0,1886,1887,3,949,474,0,1887,1888,3,963,
        481,0,1888,1889,3,929,464,0,1889,1890,3,955,477,0,1890,1891,3,965,
        482,0,1891,1892,3,955,477,0,1892,1893,3,937,468,0,1893,1894,3,959,
        479,0,1894,1895,3,929,464,0,1895,212,1,0,0,0,1896,1897,3,949,474,
        0,1897,1898,3,963,481,0,1898,1899,3,929,464,0,1899,1900,3,955,477,
        0,1900,1901,3,965,482,0,1901,1902,3,955,477,0,1902,1903,3,937,468,
        0,1903,1904,3,959,479,0,1904,1905,3,937,468,0,1905,1906,3,947,473,
        0,1906,1907,3,933,466,0,1907,214,1,0,0,0,1908,1909,3,951,475,0,1909,
        1910,3,921,460,0,1910,1911,3,955,477,0,1911,1912,3,959,479,0,1912,
        1913,3,937,468,0,1913,1914,3,959,479,0,1914,1915,3,937,468,0,1915,
        1916,3,949,474,0,1916,1917,3,947,473,0,1917,1918,3,929,464,0,1918,
        1919,3,927,463,0,1919,216,1,0,0,0,1920,1921,3,951,475,0,1921,1922,
        3,921,460,0,1922,1923,3,955,477,0,1923,1924,3,959,479,0,1924,1925,
        3,937,468,0,1925,1926,3,959,479,0,1926,1927,3,937,468,0,1927,1928,
        3,949,474,0,1928,1929,3,947,473,0,1929,1930,3,957,478,0,1930,218,
        1,0,0,0,1931,1932,3,951,475,0,1932,1933,3,921,460,0,1933,1934,3,
        957,478,0,1934,1935,3,957,478,0,1935,1936,3,937,468,0,1936,1937,
        3,947,473,0,1937,1938,3,933,466,0,1938,220,1,0,0,0,1939,1940,3,951,
        475,0,1940,1941,3,921,460,0,1941,1942,3,957,478,0,1942,1943,3,959,
        479,0,1943,222,1,0,0,0,1944,1945,3,951,475,0,1945,1946,3,921,460,
        0,1946,1947,3,959,479,0,1947,1948,3,935,467,0,1948,224,1,0,0,0,1949,
        1950,3,951,475,0,1950,1951,3,943,471,0,1951,1952,3,921,460,0,1952,
        1953,3,925,462,0,1953,1954,3,937,468,0,1954,1955,3,947,473,0,1955,
        1956,3,933,466,0,1956,226,1,0,0,0,1957,1958,3,951,475,0,1958,1959,
        3,943,471,0,1959,1960,3,921,460,0,1960,1961,3,947,473,0,1961,228,
        1,0,0,0,1962,1963,3,951,475,0,1963,1964,3,955,477,0,1964,1965,3,
        929,464,0,1965,1966,3,925,462,0,1966,1967,3,929,464,0,1967,1968,
        3,927,463,0,1968,1969,3,937,468,0,1969,1970,3,947,473,0,1970,1971,
        3,933,466,0,1971,230,1,0,0,0,1972,1973,3,951,475,0,1973,1974,3,955,
        477,0,1974,1975,3,929,464,0,1975,1976,3,957,478,0,1976,1977,3,929,
        464,0,1977,1978,3,955,477,0,1978,1979,3,963,481,0,1979,1980,3,929,
        464,0,1980,232,1,0,0,0,1981,1982,3,951,475,0,1982,1983,3,955,477,
        0,1983,1984,3,937,468,0,1984,1985,3,949,474,0,1985,1986,3,955,477,
        0,1986,234,1,0,0,0,1987,1988,3,951,475,0,1988,1989,3,955,477,0,1989,
        1990,3,937,468,0,1990,1991,3,963,481,0,1991,1992,3,937,468,0,1992,
        1993,3,943,471,0,1993,1994,3,929,464,0,1994,1995,3,933,466,0,1995,
        1996,3,929,464,0,1996,1997,3,957,478,0,1997,236,1,0,0,0,1998,1999,
        3,951,475,0,1999,2000,3,961,480,0,2000,2001,3,923,461,0,2001,2002,
        3,943,471,0,2002,2003,3,937,468,0,2003,2004,3,925,462,0,2004,238,
        1,0,0,0,2005,2006,3,951,475,0,2006,2007,3,969,484,0,2007,2008,3,
        959,479,0,2008,2009,3,935,467,0,2009,2010,3,949,474,0,2010,2011,
        3,947,473,0,2011,240,1,0,0,0,2012,2013,3,951,475,0,2013,2014,3,969,
        484,0,2014,2015,3,959,479,0,2015,2016,3,935,467,0,2016,2017,3,949,
        474,0,2017,2018,3,947,473,0,2018,2019,3,1033,516,0,2019,2020,3,931,
        465,0,2020,2021,3,937,468,0,2021,2022,3,943,471,0,2022,2023,3,929,
        464,0,2023,2024,3,957,478,0,2024,242,1,0,0,0,2025,2026,3,951,475,
        0,2026,2027,3,969,484,0,2027,2028,3,959,479,0,2028,2029,3,935,467,
        0,2029,2030,3,949,474,0,2030,2031,3,947,473,0,2031,2032,3,1033,516,
        0,2032,2033,3,955,477,0,2033,2034,3,929,464,0,2034,2035,3,953,476,
        0,2035,2036,3,961,480,0,2036,2037,3,937,468,0,2037,2038,3,955,477,
        0,2038,2039,3,929,464,0,2039,2040,3,945,472,0,2040,2041,3,929,464,
        0,2041,2042,3,947,473,0,2042,2043,3,959,479,0,2043,2044,3,957,478,
        0,2044,244,1,0,0,0,2045,2046,3,951,475,0,2046,2047,3,969,484,0,2047,
        2048,3,959,479,0,2048,2049,3,935,467,0,2049,2050,3,949,474,0,2050,
        2051,3,947,473,0,2051,2052,3,1033,516,0,2052,2053,3,927,463,0,2053,
        2054,3,929,464,0,2054,2055,3,951,475,0,2055,2056,3,929,464,0,2056,
        2057,3,947,473,0,2057,2058,3,927,463,0,2058,2059,3,929,464,0,2059,
        2060,3,947,473,0,2060,2061,3,925,462,0,2061,2062,3,937,468,0,2062,
        2063,3,929,464,0,2063,2064,3,957,478,0,2064,246,1,0,0,0,2065,2066,
        3,951,475,0,2066,2067,3,969,484,0,2067,2068,3,959,479,0,2068,2069,
        3,935,467,0,2069,2070,3,949,474,0,2070,2071,3,947,473,0,2071,2072,
        3,1033,516,0,2072,2073,3,939,469,0,2073,2074,3,921,460,0,2074,2075,
        3,955,477,0,2075,248,1,0,0,0,2076,2077,3,951,475,0,2077,2078,3,969,
        484,0,2078,2079,3,959,479,0,2079,2080,3,935,467,0,2080,2081,3,949,
        474,0,2081,2082,3,947,473,0,2082,2083,3,1033,516,0,2083,2084,3,921,
        460,0,2084,2085,3,955,477,0,2085,2086,3,925,462,0,2086,2087,3,935,
        467,0,2087,2088,3,937,468,0,2088,2089,3,963,481,0,2089,2090,3,929,
        464,0,2090,2091,3,957,478,0,2091,250,1,0,0,0,2092,2093,3,951,475,
        0,2093,2094,3,969,484,0,2094,2095,3,959,479,0,2095,2096,3,935,467,
        0,2096,2097,3,949,474,0,2097,2098,3,947,473,0,2098,2099,3,1033,516,
        0,2099,2100,3,951,475,0,2100,2101,3,921,460,0,2101,2102,3,955,477,
        0,2102,2103,3,921,460,0,2103,2104,3,945,472,0,2104,2105,3,929,464,
        0,2105,2106,3,959,479,0,2106,2107,3,929,464,0,2107,2108,3,955,477,
        0,2108,252,1,0,0,0,2109,2110,3,953,476,0,2110,2111,3,961,480,0,2111,
        2112,3,921,460,0,2112,2113,3,955,477,0,2113,2114,3,959,479,0,2114,
        2115,3,929,464,0,2115,2116,3,955,477,0,2116,254,1,0,0,0,2117,2118,
        3,953,476,0,2118,2119,3,961,480,0,2119,2120,3,929,464,0,2120,2121,
        3,955,477,0,2121,2122,3,969,484,0,2122,256,1,0,0,0,2123,2124,3,955,
        477,0,2124,2125,3,921,460,0,2125,2126,3,965,482,0,2126,258,1,0,0,
        0,2127,2128,3,955,477,0,2128,2129,3,929,464,0,2129,2130,3,921,460,
        0,2130,2131,3,927,463,0,2131,260,1,0,0,0,2132,2133,3,955,477,0,2133,
        2134,3,929,464,0,2134,2135,3,921,460,0,2135,2136,3,943,471,0,2136,
        262,1,0,0,0,2137,2138,3,955,477,0,2138,2139,3,929,464,0,2139,2140,
        3,943,471,0,2140,2141,3,921,460,0,2141,2142,3,959,479,0,2142,2143,
        3,937,468,0,2143,2144,3,963,481,0,2144,2145,3,929,464,0,2145,264,
        1,0,0,0,2146,2147,3,955,477,0,2147,2148,3,929,464,0,2148,2149,3,
        945,472,0,2149,2150,3,949,474,0,2150,2151,3,963,481,0,2151,2152,
        3,929,464,0,2152,266,1,0,0,0,2153,2154,3,955,477,0,2154,2155,3,929,
        464,0,2155,2156,3,947,473,0,2156,2157,3,921,460,0,2157,2158,3,945,
        472,0,2158,2159,3,929,464,0,2159,268,1,0,0,0,2160,2161,3,955,477,
        0,2161,2162,3,929,464,0,2162,2163,3,951,475,0,2163,2164,3,943,471,
        0,2164,2165,3,921,460,0,2165,2166,3,925,462,0,2166,2167,3,929,464,
        0,2167,270,1,0,0,0,2168,2169,3,955,477,0,2169,2170,3,929,464,0,2170,
        2171,3,957,478,0,2171,2172,3,951,475,0,2172,2173,3,929,464,0,2173,
        2174,3,925,462,0,2174,2175,3,959,479,0,2175,272,1,0,0,0,2176,2177,
        3,955,477,0,2177,2178,3,929,464,0,2178,2179,3,957,478,0,2179,2180,
        3,959,479,0,2180,2181,3,921,460,0,2181,2182,3,955,477,0,2182,2183,
        3,959,479,0,2183,274,1,0,0,0,2184,2185,3,955,477,0,2185,2186,3,929,
        464,0,2186,2187,3,957,478,0,2187,2188,3,959,479,0,2188,2189,3,955,
        477,0,2189,2190,3,937,468,0,2190,2191,3,925,462,0,2191,2192,3,959,
        479,0,2192,276,1,0,0,0,2193,2194,3,955,477,0,2194,2195,3,949,474,
        0,2195,2196,3,943,471,0,2196,2197,3,929,464,0,2197,278,1,0,0,0,2198,
        2199,3,955,477,0,2199,2200,3,949,474,0,2200,2201,3,965,482,0,2201,
        2202,3,1033,516,0,2202,2203,3,925,462,0,2203,2204,3,949,474,0,2204,
        2205,3,961,480,0,2205,2206,3,947,473,0,2206,2207,3,959,479,0,2207,
        280,1,0,0,0,2208,2209,3,957,478,0,2209,2210,3,925,462,0,2210,2211,
        3,921,460,0,2211,2212,3,943,471,0,2212,2213,3,921,460,0,2213,282,
        1,0,0,0,2214,2215,3,957,478,0,2215,2216,3,925,462,0,2216,2217,3,
        921,460,0,2217,2218,3,943,471,0,2218,2219,3,921,460,0,2219,2220,
        3,955,477,0,2220,284,1,0,0,0,2221,2222,3,957,478,0,2222,2223,3,925,
        462,0,2223,2224,3,921,460,0,2224,2225,3,943,471,0,2225,2226,3,929,
        464,0,2226,286,1,0,0,0,2227,2228,3,957,478,0,2228,2229,3,925,462,
        0,2229,2230,3,935,467,0,2230,2231,3,929,464,0,2231,2232,3,945,472,
        0,2232,2233,3,921,460,0,2233,288,1,0,0,0,2234,2235,3,957,478,0,2235,
        2236,3,925,462,0,2236,2237,3,935,467,0,2237,2238,3,929,464,0,2238,
        2239,3,945,472,0,2239,2240,3,921,460,0,2240,2241,3,957,478,0,2241,
        290,1,0,0,0,2242,2243,3,957,478,0,2243,2244,3,929,464,0,2244,2245,
        3,925,462,0,2245,2246,3,949,474,0,2246,2247,3,947,473,0,2247,2248,
        3,927,463,0,2248,2249,3,957,478,0,2249,292,1,0,0,0,2250,2251,3,957,
        478,0,2251,2252,3,929,464,0,2252,2253,3,925,462,0,2253,2254,3,959,
        479,0,2254,2255,3,937,468,0,2255,2256,3,949,474,0,2256,2257,3,947,
        473,0,2257,294,1,0,0,0,2258,2259,3,957,478,0,2259,2260,3,929,464,
        0,2260,2261,3,925,462,0,2261,2262,3,961,480,0,2262,2263,3,955,477,
        0,2263,2264,3,937,468,0,2264,2265,3,959,479,0,2265,2266,3,969,484,
        0,2266,296,1,0,0,0,2267,2268,3,957,478,0,2268,2269,3,929,464,0,2269,
        2270,3,943,471,0,2270,2271,3,931,465,0,2271,298,1,0,0,0,2272,2273,
        3,957,478,0,2273,2274,3,929,464,0,2274,2275,3,955,477,0,2275,2276,
        3,963,481,0,2276,2277,3,929,464,0,2277,2278,3,955,477,0,2278,300,
        1,0,0,0,2279,2280,3,957,478,0,2280,2281,3,929,464,0,2281,2282,3,
        955,477,0,2282,2283,3,963,481,0,2283,2284,3,929,464,0,2284,2285,
        3,955,477,0,2285,2286,3,1033,516,0,2286,2287,3,947,473,0,2287,2288,
        3,921,460,0,2288,2289,3,945,472,0,2289,2290,3,929,464,0,2290,302,
        1,0,0,0,2291,2292,3,957,478,0,2292,2293,3,929,464,0,2293,2294,3,
        957,478,0,2294,2295,3,957,478,0,2295,2296,3,937,468,0,2296,2297,
        3,949,474,0,2297,2298,3,947,473,0,2298,304,1,0,0,0,2299,2300,3,957,
        478,0,2300,2301,3,929,464,0,2301,2302,3,959,479,0,2302,2303,3,957,
        478,0,2303,306,1,0,0,0,2304,2305,3,957,478,0,2305,2306,3,935,467,
        0,2306,2307,3,949,474,0,2307,2308,3,955,477,0,2308,2309,3,959,479,
        0,2309,308,1,0,0,0,2310,2311,3,957,478,0,2311,2312,3,937,468,0,2312,
        2313,3,945,472,0,2313,2314,3,951,475,0,2314,2315,3,943,471,0,2315,
        2316,3,929,464,0,2316,310,1,0,0,0,2317,2318,3,957,478,0,2318,2319,
        3,937,468,0,2319,2320,3,971,485,0,2320,2321,3,929,464,0,2321,312,
        1,0,0,0,2322,2323,3,957,478,0,2323,2324,3,943,471,0,2324,2325,3,
        937,468,0,2325,2326,3,927,463,0,2326,2327,3,929,464,0,2327,314,1,
        0,0,0,2328,2329,3,957,478,0,2329,2330,3,949,474,0,2330,2331,3,961,
        480,0,2331,2332,3,955,477,0,2332,2333,3,925,462,0,2333,2334,3,929,
        464,0,2334,316,1,0,0,0,2335,2336,3,957,478,0,2336,2337,3,951,475,
        0,2337,2338,3,921,460,0,2338,2339,3,925,462,0,2339,2340,3,929,464,
        0,2340,318,1,0,0,0,2341,2342,3,957,478,0,2342,2343,3,929,464,0,2343,
        2344,3,955,477,0,2344,2345,3,927,463,0,2345,2346,3,929,464,0,2346,
        2347,3,951,475,0,2347,2348,3,955,477,0,2348,2349,3,949,474,0,2349,
        2350,3,951,475,0,2350,2351,3,929,464,0,2351,2352,3,955,477,0,2352,
        2353,3,959,479,0,2353,2354,3,937,468,0,2354,2355,3,929,464,0,2355,
        2356,3,957,478,0,2356,320,1,0,0,0,2357,2358,3,957,478,0,2358,2359,
        3,959,479,0,2359,2360,3,921,460,0,2360,2361,3,959,479,0,2361,2362,
        3,929,464,0,2362,322,1,0,0,0,2363,2364,3,957,478,0,2364,2365,3,959,
        479,0,2365,2366,3,921,460,0,2366,2367,3,959,479,0,2367,2368,3,937,
        468,0,2368,2369,3,957,478,0,2369,2370,3,959,479,0,2370,2371,3,937,
        468,0,2371,2372,3,925,462,0,2372,2373,3,957,478,0,2373,324,1,0,0,
        0,2374,2375,3,957,478,0,2375,2376,3,959,479,0,2376,2377,3,921,460,
        0,2377,2378,3,959,479,0,2378,2379,3,929,464,0,2379,2380,3,945,472,
        0,2380,2381,3,929,464,0,2381,2382,3,947,473,0,2382,2383,3,959,479,
        0,2383,326,1,0,0,0,2384,2385,3,957,478,0,2385,2386,3,959,479,0,2386,
        2387,3,929,464,0,2387,2388,3,951,475,0,2388,328,1,0,0,0,2389,2390,
        3,957,478,0,2390,2391,3,959,479,0,2391,2392,3,955,477,0,2392,2393,
        3,937,468,0,2393,2394,3,947,473,0,2394,2395,3,933,466,0,2395,330,
        1,0,0,0,2396,2397,3,957,478,0,2397,2398,3,959,479,0,2398,2399,3,
        955,477,0,2399,2400,3,961,480,0,2400,2401,3,925,462,0,2401,2402,
        3,959,479,0,2402,2403,3,961,480,0,2403,2404,3,955,477,0,2404,2405,
        3,929,464,0,2405,332,1,0,0,0,2406,2407,3,957,478,0,2407,2408,3,959,
        479,0,2408,2409,3,969,484,0,2409,2410,3,943,471,0,2410,2411,3,929,
        464,0,2411,334,1,0,0,0,2412,2413,3,959,479,0,2413,2414,3,921,460,
        0,2414,2415,3,923,461,0,2415,2416,3,943,471,0,2416,2417,3,929,464,
        0,2417,2418,3,957,478,0,2418,336,1,0,0,0,2419,2420,3,959,479,0,2420,
        2421,3,929,464,0,2421,2422,3,945,472,0,2422,2423,3,951,475,0,2423,
        2424,3,949,474,0,2424,2425,3,955,477,0,2425,2426,3,921,460,0,2426,
        2427,3,955,477,0,2427,2428,3,969,484,0,2428,338,1,0,0,0,2429,2430,
        3,959,479,0,2430,2431,3,937,468,0,2431,2432,3,945,472,0,2432,2433,
        3,929,464,0,2433,2434,3,925,462,0,2434,2435,3,949,474,0,2435,2436,
        3,943,471,0,2436,340,1,0,0,0,2437,2438,3,931,465,0,2438,2439,3,943,
        471,0,2439,2440,3,949,474,0,2440,2441,3,949,474,0,2441,2442,3,955,
        477,0,2442,342,1,0,0,0,2443,2444,3,959,479,0,2444,2445,3,937,468,
        0,2445,2446,3,945,472,0,2446,2447,3,929,464,0,2447,2448,3,957,478,
        0,2448,2449,3,959,479,0,2449,2450,3,921,460,0,2450,2451,3,945,472,
        0,2451,2452,3,951,475,0,2452,2453,3,1033,516,0,2453,2454,3,943,471,
        0,2454,2455,3,959,479,0,2455,2456,3,971,485,0,2456,344,1,0,0,0,2457,
        2458,3,959,479,0,2458,2459,3,937,468,0,2459,2460,3,945,472,0,2460,
        2461,3,929,464,0,2461,2462,3,957,478,0,2462,2463,3,959,479,0,2463,
        2464,3,921,460,0,2464,2465,3,945,472,0,2465,2466,3,951,475,0,2466,
        2467,3,1033,516,0,2467,2468,3,947,473,0,2468,2469,3,959,479,0,2469,
        2470,3,971,485,0,2470,346,1,0,0,0,2471,2472,3,959,479,0,2472,2473,
        3,937,468,0,2473,2474,3,945,472,0,2474,2475,3,929,464,0,2475,2476,
        3,957,478,0,2476,2477,3,959,479,0,2477,2478,3,921,460,0,2478,2479,
        3,945,472,0,2479,2480,3,951,475,0,2480,2481,3,921,460,0,2481,2482,
        3,927,463,0,2482,2483,3,927,463,0,2483,348,1,0,0,0,2484,2485,3,959,
        479,0,2485,2486,3,937,468,0,2486,2487,3,945,472,0,2487,2488,3,929,
        464,0,2488,2489,3,957,478,0,2489,2490,3,959,479,0,2490,2491,3,921,
        460,0,2491,2492,3,945,472,0,2492,2493,3,951,475,0,2493,2494,3,927,
        463,0,2494,2495,3,937,468,0,2495,2496,3,931,465,0,2496,2497,3,931,
        465,0,2497,350,1,0,0,0,2498,2499,3,959,479,0,2499,2500,3,949,474,
        0,2500,2501,3,1033,516,0,2501,2502,3,959,479,0,2502,2503,3,937,468,
        0,2503,2504,3,945,472,0,2504,2505,3,929,464,0,2505,2506,3,957,478,
        0,2506,2507,3,959,479,0,2507,2508,3,921,460,0,2508,2509,3,945,472,
        0,2509,2510,3,951,475,0,2510,352,1,0,0,0,2511,2512,3,959,479,0,2512,
        2513,3,955,477,0,2513,2514,3,921,460,0,2514,2515,3,947,473,0,2515,
        2516,3,957,478,0,2516,2517,3,931,465,0,2517,2518,3,949,474,0,2518,
        2519,3,955,477,0,2519,2520,3,945,472,0,2520,354,1,0,0,0,2521,2522,
        3,959,479,0,2522,2523,3,961,480,0,2523,2524,3,945,472,0,2524,2525,
        3,923,461,0,2525,2526,3,943,471,0,2526,2527,3,929,464,0,2527,356,
        1,0,0,0,2528,2529,3,959,479,0,2529,2530,3,969,484,0,2530,2531,3,
        951,475,0,2531,2532,3,929,464,0,2532,358,1,0,0,0,2533,2534,3,961,
        480,0,2534,2535,3,947,473,0,2535,2536,3,925,462,0,2536,2537,3,921,
        460,0,2537,2538,3,925,462,0,2538,2539,3,935,467,0,2539,2540,3,929,
        464,0,2540,360,1,0,0,0,2541,2542,3,961,480,0,2542,2543,3,947,473,
        0,2543,2544,3,927,463,0,2544,2545,3,929,464,0,2545,2546,3,955,477,
        0,2546,362,1,0,0,0,2547,2548,3,961,480,0,2548,2549,3,947,473,0,2549,
        2550,3,923,461,0,2550,2551,3,949,474,0,2551,2552,3,961,480,0,2552,
        2553,3,947,473,0,2553,2554,3,927,463,0,2554,2555,3,929,464,0,2555,
        2556,3,927,463,0,2556,364,1,0,0,0,2557,2558,3,961,480,0,2558,2559,
        3,947,473,0,2559,2560,3,943,471,0,2560,2561,3,949,474,0,2561,2562,
        3,921,460,0,2562,2563,3,927,463,0,2563,366,1,0,0,0,2564,2565,3,961,
        480,0,2565,2566,3,957,478,0,2566,2567,3,921,460,0,2567,2568,3,933,
        466,0,2568,2569,3,929,464,0,2569,368,1,0,0,0,2570,2571,3,961,480,
        0,2571,2572,3,957,478,0,2572,2573,3,929,464,0,2573,370,1,0,0,0,2574,
        2575,3,961,480,0,2575,2576,3,959,479,0,2576,2577,3,931,465,0,2577,
        2578,5,49,0,0,2578,2579,5,54,0,0,2579,372,1,0,0,0,2580,2581,3,961,
        480,0,2581,2582,3,959,479,0,2582,2583,3,931,465,0,2583,2584,5,51,
        0,0,2584,2585,5,50,0,0,2585,374,1,0,0,0,2586,2587,3,961,480,0,2587,
        2588,3,959,479,0,2588,2589,3,931,465,0,2589,2590,5,56,0,0,2590,376,
        1,0,0,0,2591,2592,3,963,481,0,2592,2593,3,929,464,0,2593,2594,3,
        955,477,0,2594,2595,3,957,478,0,2595,2596,3,937,468,0,2596,2597,
        3,949,474,0,2597,2598,3,947,473,0,2598,378,1,0,0,0,2599,2600,3,963,
        481,0,2600,2601,3,937,468,0,2601,2602,3,929,464,0,2602,2603,3,965,
        482,0,2603,380,1,0,0,0,2604,2605,3,963,481,0,2605,2606,3,937,468,
        0,2606,2607,3,929,464,0,2607,2608,3,965,482,0,2608,2609,3,957,478,
        0,2609,382,1,0,0,0,2610,2611,3,963,481,0,2611,2612,3,937,468,0,2612,
        2613,3,955,477,0,2613,2614,3,959,479,0,2614,2615,3,961,480,0,2615,
        2616,3,921,460,0,2616,2617,3,943,471,0,2617,384,1,0,0,0,2618,2619,
        3,965,482,0,2619,2620,3,921,460,0,2620,2621,3,959,479,0,2621,2622,
        3,929,464,0,2622,2623,3,955,477,0,2623,2624,3,945,472,0,2624,2625,
        3,921,460,0,2625,2626,3,955,477,0,2626,2627,3,941,470,0,2627,386,
        1,0,0,0,2628,2629,3,965,482,0,2629,2630,3,921,460,0,2630,2631,3,
        959,479,0,2631,2632,3,929,464,0,2632,2633,3,955,477,0,2633,2634,
        3,945,472,0,2634,2635,3,921,460,0,2635,2636,3,955,477,0,2636,2637,
        3,941,470,0,2637,2638,3,957,478,0,2638,388,1,0,0,0,2639,2640,3,965,
        482,0,2640,2641,3,929,464,0,2641,2642,3,929,464,0,2642,2643,3,941,
        470,0,2643,390,1,0,0,0,2644,2645,3,965,482,0,2645,2646,3,929,464,
        0,2646,2647,3,929,464,0,2647,2648,3,941,470,0,2648,2649,3,957,478,
        0,2649,392,1,0,0,0,2650,2651,3,965,482,0,2651,2652,3,949,474,0,2652,
        2653,3,955,477,0,2653,2654,3,941,470,0,2654,394,1,0,0,0,2655,2656,
        3,965,482,0,2656,2657,3,955,477,0,2657,2658,3,921,460,0,2658,2659,
        3,951,475,0,2659,2660,3,951,475,0,2660,2661,3,929,464,0,2661,2662,
        3,955,477,0,2662,396,1,0,0,0,2663,2664,3,969,484,0,2664,2665,3,929,
        464,0,2665,2666,3,921,460,0,2666,2667,3,955,477,0,2667,2668,3,957,
        478,0,2668,398,1,0,0,0,2669,2670,3,971,485,0,2670,2671,3,949,474,
        0,2671,2672,3,947,473,0,2672,2673,3,929,464,0,2673,400,1,0,0,0,2674,
        2675,3,921,460,0,2675,2676,3,923,461,0,2676,2677,3,957,478,0,2677,
        402,1,0,0,0,2678,2679,3,921,460,0,2679,2680,3,943,471,0,2680,2681,
        3,943,471,0,2681,404,1,0,0,0,2682,2683,3,921,460,0,2683,2684,3,943,
        471,0,2684,2685,3,943,471,0,2685,2686,3,949,474,0,2686,2687,3,965,
        482,0,2687,406,1,0,0,0,2688,2689,3,921,460,0,2689,2690,3,943,471,
        0,2690,2691,3,959,479,0,2691,2692,3,929,464,0,2692,2693,3,955,477,
        0,2693,408,1,0,0,0,2694,2695,3,921,460,0,2695,2696,3,947,473,0,2696,
        2697,3,927,463,0,2697,410,1,0,0,0,2698,2699,3,921,460,0,2699,2700,
        3,947,473,0,2700,2701,3,969,484,0,2701,412,1,0,0,0,2702,2703,3,921,
        460,0,2703,2704,3,955,477,0,2704,2705,3,929,464,0,2705,414,1,0,0,
        0,2706,2707,3,921,460,0,2707,2708,3,955,477,0,2708,2709,3,955,477,
        0,2709,2710,3,921,460,0,2710,2711,3,969,484,0,2711,416,1,0,0,0,2712,
        2713,3,921,460,0,2713,2714,3,957,478,0,2714,418,1,0,0,0,2715,2716,
        3,921,460,0,2716,2717,3,957,478,0,2717,2718,3,969,484,0,2718,2719,
        3,945,472,0,2719,2720,3,945,472,0,2720,2721,3,929,464,0,2721,2722,
        3,959,479,0,2722,2723,3,955,477,0,2723,2724,3,937,468,0,2724,2725,
        3,925,462,0,2725,420,1,0,0,0,2726,2727,3,921,460,0,2727,2728,3,959,
        479,0,2728,422,1,0,0,0,2729,2730,3,921,460,0,2730,2731,3,963,481,
        0,2731,2732,3,933,466,0,2732,424,1,0,0,0,2733,2734,3,923,461,0,2734,
        2735,3,929,464,0,2735,2736,3,933,466,0,2736,2737,3,937,468,0,2737,
        2738,3,947,473,0,2738,426,1,0,0,0,2739,2740,3,923,461,0,2740,2741,
        3,929,464,0,2741,2742,3,959,479,0,2742,2743,3,965,482,0,2743,2744,
        3,929,464,0,2744,2745,3,929,464,0,2745,2746,3,947,473,0,2746,428,
        1,0,0,0,2747,2748,3,923,461,0,2748,2749,3,937,468,0,2749,2750,3,
        933,466,0,2750,2751,3,937,468,0,2751,2752,3,947,473,0,2752,2753,
        3,959,479,0,2753,430,1,0,0,0,2754,2755,3,923,461,0,2755,2756,3,937,
        468,0,2756,2757,3,947,473,0,2757,2758,3,921,460,0,2758,2759,3,955,
        477,0,2759,2760,3,969,484,0,2760,432,1,0,0,0,2761,2762,3,923,461,
        0,2762,2763,3,937,468,0,2763,2764,3,959,479,0,2764,434,1,0,0,0,2765,
        2766,3,923,461,0,2766,2767,3,943,471,0,2767,2768,3,949,474,0,2768,
        2769,3,923,461,0,2769,436,1,0,0,0,2770,2771,3,923,461,0,2771,2772,
        3,949,474,0,2772,2773,3,949,474,0,2773,2774,3,943,471,0,2774,2775,
        3,929,464,0,2775,2776,3,921,460,0,2776,2777,3,947,473,0,2777,438,
        1,0,0,0,2778,2779,3,923,461,0,2779,2780,3,949,474,0,2780,2781,3,
        959,479,0,2781,2782,3,935,467,0,2782,440,1,0,0,0,2783,2784,3,923,
        461,0,2784,2785,3,961,480,0,2785,2786,3,925,462,0,2786,2787,3,941,
        470,0,2787,2788,3,929,464,0,2788,2789,3,959,479,0,2789,442,1,0,0,
        0,2790,2791,3,923,461,0,2791,2792,3,961,480,0,2792,2793,3,925,462,
        0,2793,2794,3,941,470,0,2794,2795,3,929,464,0,2795,2796,3,959,479,
        0,2796,2797,3,957,478,0,2797,444,1,0,0,0,2798,2799,3,923,461,0,2799,
        2800,3,969,484,0,2800,446,1,0,0,0,2801,2802,3,925,462,0,2802,2803,
        3,921,460,0,2803,2804,3,943,471,0,2804,2805,3,943,471,0,2805,448,
        1,0,0,0,2806,2807,3,925,462,0,2807,2808,3,921,460,0,2808,2809,3,
        943,471,0,2809,2810,3,943,471,0,2810,2811,3,929,464,0,2811,2812,
        3,927,463,0,2812,450,1,0,0,0,2813,2814,3,925,462,0,2814,2815,3,921,
        460,0,2815,2816,3,957,478,0,2816,2817,3,925,462,0,2817,2818,3,921,
        460,0,2818,2819,3,927,463,0,2819,2820,3,929,464,0,2820,2821,3,927,
        463,0,2821,452,1,0,0,0,2822,2823,3,925,462,0,2823,2824,3,921,460,
        0,2824,2825,3,957,478,0,2825,2826,3,929,464,0,2826,454,1,0,0,0,2827,
        2828,3,925,462,0,2828,2829,3,921,460,0,2829,2830,3,957,478,0,2830,
        2831,3,959,479,0,2831,456,1,0,0,0,2832,2833,3,925,462,0,2833,2834,
        3,929,464,0,2834,2835,3,937,468,0,2835,2836,3,943,471,0,2836,458,
        1,0,0,0,2837,2838,3,925,462,0,2838,2839,3,935,467,0,2839,2840,3,
        921,460,0,2840,2841,3,955,477,0,2841,460,1,0,0,0,2842,2843,3,925,
        462,0,2843,2844,3,935,467,0,2844,2845,3,921,460,0,2845,2846,3,955,
        477,0,2846,2847,3,921,460,0,2847,2848,3,925,462,0,2848,2849,3,959,
        479,0,2849,2850,3,929,464,0,2850,2851,3,955,477,0,2851,462,1,0,0,
        0,2852,2853,3,925,462,0,2853,2854,3,935,467,0,2854,2855,3,929,464,
        0,2855,2856,3,925,462,0,2856,2857,3,941,470,0,2857,464,1,0,0,0,2858,
        2859,3,925,462,0,2859,2860,3,943,471,0,2860,2861,3,949,474,0,2861,
        2862,3,923,461,0,2862,466,1,0,0,0,2863,2864,3,925,462,0,2864,2865,
        3,943,471,0,2865,2866,3,949,474,0,2866,2867,3,957,478,0,2867,2868,
        3,929,464,0,2868,468,1,0,0,0,2869,2870,3,925,462,0,2870,2871,3,943,
        471,0,2871,2872,3,961,480,0,2872,2873,3,957,478,0,2873,2874,3,959,
        479,0,2874,2875,3,929,464,0,2875,2876,3,955,477,0,2876,470,1,0,0,
        0,2877,2878,3,925,462,0,2878,2879,3,943,471,0,2879,2880,3,961,480,
        0,2880,2881,3,957,478,0,2881,2882,3,959,479,0,2882,2883,3,929,464,
        0,2883,2884,3,955,477,0,2884,2885,3,929,464,0,2885,2886,3,927,463,
        0,2886,472,1,0,0,0,2887,2888,3,925,462,0,2888,2889,3,949,474,0,2889,
        2890,3,921,460,0,2890,2891,3,943,471,0,2891,2892,3,929,464,0,2892,
        2893,3,957,478,0,2893,2894,3,925,462,0,2894,2895,3,929,464,0,2895,
        474,1,0,0,0,2896,2897,3,925,462,0,2897,2898,3,949,474,0,2898,2899,
        3,943,471,0,2899,2900,3,943,471,0,2900,2901,3,921,460,0,2901,2902,
        3,959,479,0,2902,2903,3,929,464,0,2903,476,1,0,0,0,2904,2905,3,925,
        462,0,2905,2906,3,949,474,0,2906,2907,3,943,471,0,2907,2908,3,943,
        471,0,2908,2909,3,929,464,0,2909,2910,3,925,462,0,2910,2911,3,959,
        479,0,2911,478,1,0,0,0,2912,2913,3,925,462,0,2913,2914,3,949,474,
        0,2914,2915,3,943,471,0,2915,2916,3,961,480,0,2916,2917,3,945,472,
        0,2917,2918,3,947,473,0,2918,480,1,0,0,0,2919,2920,3,925,462,0,2920,
        2921,3,949,474,0,2921,2922,3,945,472,0,2922,2923,3,945,472,0,2923,
        2924,3,937,468,0,2924,2925,3,959,479,0,2925,482,1,0,0,0,2926,2927,
        3,925,462,0,2927,2928,3,949,474,0,2928,2929,3,947,473,0,2929,2930,
        3,947,473,0,2930,2931,3,929,464,0,2931,2932,3,925,462,0,2932,2933,
        3,959,479,0,2933,484,1,0,0,0,2934,2935,3,925,462,0,2935,2936,3,949,
        474,0,2936,2937,3,947,473,0,2937,2938,3,957,478,0,2938,2939,3,959,
        479,0,2939,2940,3,955,477,0,2940,2941,3,921,460,0,2941,2942,3,937,
        468,0,2942,2943,3,947,473,0,2943,2944,3,959,479,0,2944,486,1,0,0,
        0,2945,2946,3,925,462,0,2946,2947,3,949,474,0,2947,2948,3,947,473,
        0,2948,2949,3,959,479,0,2949,2950,3,921,460,0,2950,2951,3,937,468,
        0,2951,2952,3,947,473,0,2952,2953,3,957,478,0,2953,488,1,0,0,0,2954,
        2955,3,925,462,0,2955,2956,3,949,474,0,2956,2957,3,947,473,0,2957,
        2958,3,963,481,0,2958,2959,3,929,464,0,2959,2960,3,955,477,0,2960,
        2961,3,959,479,0,2961,490,1,0,0,0,2962,2963,3,925,462,0,2963,2964,
        3,949,474,0,2964,2965,3,961,480,0,2965,2966,3,947,473,0,2966,2967,
        3,959,479,0,2967,492,1,0,0,0,2968,2969,3,925,462,0,2969,2970,3,961,
        480,0,2970,2971,3,955,477,0,2971,2972,3,955,477,0,2972,2973,3,929,
        464,0,2973,2974,3,947,473,0,2974,2975,3,959,479,0,2975,2976,3,1033,
        516,0,2976,2977,3,959,479,0,2977,2978,3,937,468,0,2978,2979,3,945,
        472,0,2979,2980,3,929,464,0,2980,2981,3,957,478,0,2981,2982,3,959,
        479,0,2982,2983,3,921,460,0,2983,2984,3,945,472,0,2984,2985,3,951,
        475,0,2985,494,1,0,0,0,2986,2987,3,925,462,0,2987,2988,3,955,477,
        0,2988,2989,3,929,464,0,2989,2990,3,921,460,0,2990,2991,3,959,479,
        0,2991,2992,3,929,464,0,2992,496,1,0,0,0,2993,2994,3,925,462,0,2994,
        2995,3,955,477,0,2995,2996,3,949,474,0,2996,2997,3,957,478,0,2997,
        2998,3,957,478,0,2998,498,1,0,0,0,2999,3000,3,925,462,0,3000,3001,
        3,961,480,0,3001,3002,3,923,461,0,3002,3003,3,929,464,0,3003,500,
        1,0,0,0,3004,3005,3,925,462,0,3005,3006,3,961,480,0,3006,3007,3,
        945,472,0,3007,3008,3,929,464,0,3008,3009,3,1033,516,0,3009,3010,
        3,927,463,0,3010,3011,3,937,468,0,3011,3012,3,957,478,0,3012,3013,
        3,959,479,0,3013,502,1,0,0,0,3014,3015,3,925,462,0,3015,3016,3,961,
        480,0,3016,3017,3,955,477,0,3017,3018,3,955,477,0,3018,3019,3,929,
        464,0,3019,3020,3,947,473,0,3020,3021,3,959,479,0,3021,504,1,0,0,
        0,3022,3023,3,925,462,0,3023,3024,3,961,480,0,3024,3025,3,955,477,
        0,3025,3026,3,957,478,0,3026,3027,3,949,474,0,3027,3028,3,955,477,
        0,3028,506,1,0,0,0,3029,3030,3,925,462,0,3030,3031,3,969,484,0,3031,
        3032,3,925,462,0,3032,3033,3,943,471,0,3033,3034,3,929,464,0,3034,
        508,1,0,0,0,3035,3036,3,925,462,0,3036,3037,3,949,474,0,3037,3038,
        3,943,471,0,3038,3039,3,943,471,0,3039,3040,3,929,464,0,3040,3041,
        3,925,462,0,3041,3042,3,959,479,0,3042,3043,3,937,468,0,3043,3044,
        3,949,474,0,3044,3045,3,947,473,0,3045,510,1,0,0,0,3046,3047,3,927,
        463,0,3047,3048,3,921,460,0,3048,3049,3,959,479,0,3049,3050,3,929,
        464,0,3050,512,1,0,0,0,3051,3052,3,927,463,0,3052,3053,3,921,460,
        0,3053,3054,3,959,479,0,3054,3055,3,929,464,0,3055,3056,3,959,479,
        0,3056,3057,3,937,468,0,3057,3058,3,945,472,0,3058,3059,3,929,464,
        0,3059,514,1,0,0,0,3060,3061,3,927,463,0,3061,3062,3,921,460,0,3062,
        3063,3,969,484,0,3063,516,1,0,0,0,3064,3065,3,927,463,0,3065,3066,
        3,929,464,0,3066,3067,3,925,462,0,3067,518,1,0,0,0,3068,3069,3,927,
        463,0,3069,3070,3,929,464,0,3070,3071,3,925,462,0,3071,3072,3,937,
        468,0,3072,3073,3,945,472,0,3073,3074,3,921,460,0,3074,3075,3,943,
        471,0,3075,520,1,0,0,0,3076,3077,3,927,463,0,3077,3078,3,929,464,
        0,3078,3079,3,925,462,0,3079,3080,3,943,471,0,3080,3081,3,921,460,
        0,3081,3082,3,955,477,0,3082,3083,3,929,464,0,3083,522,1,0,0,0,3084,
        3085,3,927,463,0,3085,3086,3,929,464,0,3086,3087,3,931,465,0,3087,
        3088,3,921,460,0,3088,3089,3,961,480,0,3089,3090,3,943,471,0,3090,
        3091,3,959,479,0,3091,524,1,0,0,0,3092,3093,3,927,463,0,3093,3094,
        3,929,464,0,3094,3095,3,931,465,0,3095,3096,3,937,468,0,3096,3097,
        3,947,473,0,3097,3098,3,929,464,0,3098,526,1,0,0,0,3099,3100,3,927,
        463,0,3100,3101,3,929,464,0,3101,3102,3,943,471,0,3102,3103,3,929,
        464,0,3103,3104,3,959,479,0,3104,3105,3,929,464,0,3105,528,1,0,0,
        0,3106,3107,3,927,463,0,3107,3108,3,929,464,0,3108,3109,3,943,471,
        0,3109,3110,3,937,468,0,3110,3111,3,945,472,0,3111,3112,3,937,468,
        0,3112,3113,3,959,479,0,3113,3114,3,929,464,0,3114,3115,3,927,463,
        0,3115,530,1,0,0,0,3116,3117,3,927,463,0,3117,3118,3,929,464,0,3118,
        3119,3,957,478,0,3119,3120,3,925,462,0,3120,3121,3,955,477,0,3121,
        3122,3,937,468,0,3122,3123,3,923,461,0,3123,3124,3,929,464,0,3124,
        532,1,0,0,0,3125,3126,3,927,463,0,3126,3127,3,929,464,0,3127,3128,
        3,947,473,0,3128,3129,3,957,478,0,3129,3130,3,929,464,0,3130,3131,
        3,1033,516,0,3131,3132,3,955,477,0,3132,3133,3,921,460,0,3133,3134,
        3,947,473,0,3134,3135,3,941,470,0,3135,534,1,0,0,0,3136,3137,3,927,
        463,0,3137,3138,3,937,468,0,3138,3139,3,957,478,0,3139,3140,3,959,
        479,0,3140,3141,3,937,468,0,3141,3142,3,947,473,0,3142,3143,3,925,
        462,0,3143,3144,3,959,479,0,3144,536,1,0,0,0,3145,3146,3,927,463,
        0,3146,3147,3,937,468,0,3147,3148,3,955,477,0,3148,3149,3,929,464,
        0,3149,3150,3,925,462,0,3150,3151,3,959,479,0,3151,3152,3,949,474,
        0,3152,3153,3,955,477,0,3153,3154,3,969,484,0,3154,538,1,0,0,0,3155,
        3156,3,927,463,0,3156,3157,3,937,468,0,3157,3158,3,957,478,0,3158,
        3159,3,959,479,0,3159,3160,3,955,477,0,3160,3161,3,937,468,0,3161,
        3162,3,923,461,0,3162,3163,3,961,480,0,3163,3164,3,959,479,0,3164,
        3165,3,929,464,0,3165,3166,3,927,463,0,3166,540,1,0,0,0,3167,3168,
        3,927,463,0,3168,3169,3,937,468,0,3169,3170,3,957,478,0,3170,3171,
        3,959,479,0,3171,3172,3,955,477,0,3172,3173,3,937,468,0,3173,3174,
        3,923,461,0,3174,3175,3,961,480,0,3175,3176,3,959,479,0,3176,3177,
        3,929,464,0,3177,542,1,0,0,0,3178,3179,3,927,463,0,3179,3180,3,949,
        474,0,3180,3181,3,961,480,0,3181,3182,3,923,461,0,3182,3183,3,943,
        471,0,3183,3184,3,929,464,0,3184,544,1,0,0,0,3185,3186,3,927,463,
        0,3186,3187,3,955,477,0,3187,3188,3,949,474,0,3188,3189,3,951,475,
        0,3189,546,1,0,0,0,3190,3191,3,929,464,0,3191,3192,3,921,460,0,3192,
        3193,3,925,462,0,3193,3194,3,935,467,0,3194,548,1,0,0,0,3195,3196,
        3,929,464,0,3196,3197,3,943,471,0,3197,3198,3,957,478,0,3198,3199,
        3,929,464,0,3199,550,1,0,0,0,3200,3201,3,929,464,0,3201,3202,3,947,
        473,0,3202,3203,3,927,463,0,3203,552,1,0,0,0,3204,3205,3,929,464,
        0,3205,3206,3,953,476,0,3206,3207,3,961,480,0,3207,3208,3,921,460,
        0,3208,3209,3,943,471,0,3209,3210,3,957,478,0,3210,554,1,0,0,0,3211,
        3212,3,929,464,0,3212,3213,3,957,478,0,3213,3214,3,925,462,0,3214,
        3215,3,921,460,0,3215,3216,3,951,475,0,3216,3217,3,929,464,0,3217,
        556,1,0,0,0,3218,3219,3,929,464,0,3219,3220,3,957,478,0,3220,3221,
        3,925,462,0,3221,3222,3,921,460,0,3222,3223,3,951,475,0,3223,3224,
        3,929,464,0,3224,3225,3,927,463,0,3225,558,1,0,0,0,3226,3227,3,929,
        464,0,3227,3228,3,967,483,0,3228,3229,3,925,462,0,3229,3230,3,929,
        464,0,3230,3231,3,951,475,0,3231,3232,3,959,479,0,3232,560,1,0,0,
        0,3233,3234,3,929,464,0,3234,3235,3,967,483,0,3235,3236,3,929,464,
        0,3236,3237,3,925,462,0,3237,3238,3,961,480,0,3238,3239,3,959,479,
        0,3239,3240,3,929,464,0,3240,562,1,0,0,0,3241,3242,3,929,464,0,3242,
        3243,3,967,483,0,3243,3244,3,937,468,0,3244,3245,3,957,478,0,3245,
        3246,3,959,479,0,3246,3247,3,957,478,0,3247,564,1,0,0,0,3248,3249,
        3,929,464,0,3249,3250,3,967,483,0,3250,3251,3,951,475,0,3251,3252,
        3,943,471,0,3252,3253,3,921,460,0,3253,3254,3,937,468,0,3254,3255,
        3,947,473,0,3255,566,1,0,0,0,3256,3257,3,929,464,0,3257,3258,3,967,
        483,0,3258,3259,3,951,475,0,3259,3260,3,943,471,0,3260,3261,3,949,
        474,0,3261,3262,3,927,463,0,3262,3263,3,929,464,0,3263,568,1,0,0,
        0,3264,3265,3,929,464,0,3265,3266,3,967,483,0,3266,3267,3,951,475,
        0,3267,3268,3,943,471,0,3268,3269,3,949,474,0,3269,3270,3,927,463,
        0,3270,3271,3,929,464,0,3271,3272,3,1033,516,0,3272,3273,3,949,474,
        0,3273,3274,3,961,480,0,3274,3275,3,959,479,0,3275,3276,3,929,464,
        0,3276,3277,3,955,477,0,3277,570,1,0,0,0,3278,3279,3,929,464,0,3279,
        3280,3,967,483,0,3280,3281,3,959,479,0,3281,3282,3,929,464,0,3282,
        3283,3,955,477,0,3283,3284,3,947,473,0,3284,3285,3,921,460,0,3285,
        3286,3,943,471,0,3286,572,1,0,0,0,3287,3288,3,929,464,0,3288,3289,
        3,967,483,0,3289,3290,3,959,479,0,3290,3291,3,955,477,0,3291,3292,
        3,921,460,0,3292,3293,3,925,462,0,3293,3294,3,959,479,0,3294,574,
        1,0,0,0,3295,3296,3,931,465,0,3296,3297,3,937,468,0,3297,3298,3,
        955,477,0,3298,3299,3,957,478,0,3299,3300,3,959,479,0,3300,3301,
        3,1033,516,0,3301,3302,3,963,481,0,3302,3303,3,921,460,0,3303,3304,
        3,943,471,0,3304,3305,3,961,480,0,3305,3306,3,929,464,0,3306,576,
        1,0,0,0,3307,3308,3,931,465,0,3308,3309,3,921,460,0,3309,3310,3,
        943,471,0,3310,3311,3,957,478,0,3311,3312,3,929,464,0,3312,578,1,
        0,0,0,3313,3314,3,931,465,0,3314,3315,3,943,471,0,3315,3316,3,949,
        474,0,3316,3317,3,921,460,0,3317,3318,3,959,479,0,3318,580,1,0,0,
        0,3319,3320,3,931,465,0,3320,3321,3,937,468,0,3321,3322,3,929,464,
        0,3322,3323,3,943,471,0,3323,3324,3,927,463,0,3324,3325,3,957,478,
        0,3325,582,1,0,0,0,3326,3327,3,931,465,0,3327,3328,3,949,474,0,3328,
        3329,3,955,477,0,3329,584,1,0,0,0,3330,3331,3,931,465,0,3331,3332,
        3,955,477,0,3332,3333,3,949,474,0,3333,3334,3,945,472,0,3334,586,
        1,0,0,0,3335,3336,3,931,465,0,3336,3337,3,955,477,0,3337,3338,3,
        949,474,0,3338,3339,3,945,472,0,3339,3340,3,1033,516,0,3340,3341,
        3,961,480,0,3341,3342,3,947,473,0,3342,3343,3,937,468,0,3343,3344,
        3,967,483,0,3344,3345,3,959,479,0,3345,3346,3,937,468,0,3346,3347,
        3,945,472,0,3347,3348,3,929,464,0,3348,588,1,0,0,0,3349,3350,3,931,
        465,0,3350,3351,3,961,480,0,3351,3352,3,943,471,0,3352,3353,3,943,
        471,0,3353,590,1,0,0,0,3354,3355,3,931,465,0,3355,3356,3,961,480,
        0,3356,3357,3,947,473,0,3357,3358,3,925,462,0,3358,3359,3,959,479,
        0,3359,3360,3,937,468,0,3360,3361,3,949,474,0,3361,3362,3,947,473,
        0,3362,592,1,0,0,0,3363,3364,3,933,466,0,3364,3365,3,943,471,0,3365,
        3366,3,949,474,0,3366,3367,3,923,461,0,3367,3368,3,921,460,0,3368,
        3369,3,943,471,0,3369,594,1,0,0,0,3370,3371,3,933,466,0,3371,3372,
        3,955,477,0,3372,3373,3,921,460,0,3373,3374,3,947,473,0,3374,3375,
        3,959,479,0,3375,596,1,0,0,0,3376,3377,3,933,466,0,3377,3378,3,955,
        477,0,3378,3379,3,949,474,0,3379,3380,3,961,480,0,3380,3381,3,951,
        475,0,3381,598,1,0,0,0,3382,3383,3,933,466,0,3383,3384,3,955,477,
        0,3384,3385,3,949,474,0,3385,3386,3,961,480,0,3386,3387,3,951,475,
        0,3387,3388,3,937,468,0,3388,3389,3,947,473,0,3389,3390,3,933,466,
        0,3390,600,1,0,0,0,3391,3392,3,933,466,0,3392,3393,3,955,477,0,3393,
        3394,3,949,474,0,3394,3395,3,961,480,0,3395,3396,3,951,475,0,3396,
        3397,3,957,478,0,3397,602,1,0,0,0,3398,3399,3,935,467,0,3399,3400,
        3,921,460,0,3400,3401,3,957,478,0,3401,3402,3,935,467,0,3402,604,
        1,0,0,0,3403,3404,3,935,467,0,3404,3405,3,921,460,0,3405,3406,3,
        963,481,0,3406,3407,3,937,468,0,3407,3408,3,947,473,0,3408,3409,
        3,933,466,0,3409,606,1,0,0,0,3410,3411,3,935,467,0,3411,3412,3,949,
        474,0,3412,3413,3,961,480,0,3413,3414,3,955,477,0,3414,608,1,0,0,
        0,3415,3416,3,937,468,0,3416,3417,3,945,472,0,3417,3418,3,951,475,
        0,3418,3419,3,949,474,0,3419,3420,3,955,477,0,3420,3421,3,959,479,
        0,3421,610,1,0,0,0,3422,3423,3,937,468,0,3423,3424,3,947,473,0,3424,
        612,1,0,0,0,3425,3426,3,937,468,0,3426,3427,3,947,473,0,3427,3428,
        3,925,462,0,3428,3429,3,943,471,0,3429,3430,3,961,480,0,3430,3431,
        3,927,463,0,3431,3432,3,937,468,0,3432,3433,3,947,473,0,3433,3434,
        3,933,466,0,3434,614,1,0,0,0,3435,3436,3,937,468,0,3436,3437,3,947,
        473,0,3437,3438,3,951,475,0,3438,3439,3,961,480,0,3439,3440,3,959,
        479,0,3440,3441,3,931,465,0,3441,3442,3,949,474,0,3442,3443,3,955,
        477,0,3443,3444,3,945,472,0,3444,3445,3,921,460,0,3445,3446,3,959,
        479,0,3446,616,1,0,0,0,3447,3448,3,937,468,0,3448,3449,3,947,473,
        0,3449,3450,3,947,473,0,3450,3451,3,929,464,0,3451,3452,3,955,477,
        0,3452,618,1,0,0,0,3453,3454,3,937,468,0,3454,3455,3,947,473,0,3455,
        3456,3,949,474,0,3456,3457,3,961,480,0,3457,3458,3,959,479,0,3458,
        620,1,0,0,0,3459,3460,3,937,468,0,3460,3461,3,947,473,0,3461,3462,
        3,957,478,0,3462,3463,3,929,464,0,3463,3464,3,955,477,0,3464,3465,
        3,959,479,0,3465,622,1,0,0,0,3466,3467,3,937,468,0,3467,3468,3,947,
        473,0,3468,3469,3,959,479,0,3469,624,1,0,0,0,3470,3471,3,937,468,
        0,3471,3472,3,947,473,0,3472,3473,3,959,479,0,3473,3474,3,929,464,
        0,3474,3475,3,933,466,0,3475,3476,3,929,464,0,3476,3477,3,955,477,
        0,3477,626,1,0,0,0,3478,3479,3,937,468,0,3479,3480,3,947,473,0,3480,
        3481,3,959,479,0,3481,3482,3,929,464,0,3482,3483,3,955,477,0,3483,
        3484,3,957,478,0,3484,3485,3,929,464,0,3485,3486,3,925,462,0,3486,
        3487,3,959,479,0,3487,628,1,0,0,0,3488,3489,3,937,468,0,3489,3490,
        3,947,473,0,3490,3491,3,959,479,0,3491,3492,3,929,464,0,3492,3493,
        3,955,477,0,3493,3494,3,963,481,0,3494,3495,3,921,460,0,3495,3496,
        3,943,471,0,3496,630,1,0,0,0,3497,3498,3,937,468,0,3498,3499,3,947,
        473,0,3499,3500,3,959,479,0,3500,3501,3,949,474,0,3501,632,1,0,0,
        0,3502,3503,3,937,468,0,3503,3504,3,947,473,0,3504,3505,3,951,475,
        0,3505,3506,3,921,460,0,3506,3507,3,959,479,0,3507,3508,3,935,467,
        0,3508,634,1,0,0,0,3509,3510,3,937,468,0,3510,3511,3,947,473,0,3511,
        3512,3,943,471,0,3512,3513,3,937,468,0,3513,3514,3,947,473,0,3514,
        3515,3,929,464,0,3515,636,1,0,0,0,3516,3517,3,937,468,0,3517,3518,
        3,947,473,0,3518,3519,3,943,471,0,3519,3520,3,937,468,0,3520,3521,
        3,947,473,0,3521,3522,3,929,464,0,3522,3523,3,1033,516,0,3523,3524,
        3,949,474,0,3524,3525,3,961,480,0,3525,3526,3,959,479,0,3526,3527,
        3,929,464,0,3527,3528,3,955,477,0,3528,638,1,0,0,0,3529,3530,3,937,
        468,0,3530,3531,3,959,479,0,3531,3532,3,929,464,0,3532,3533,3,945,
        472,0,3533,3534,3,957,478,0,3534,640,1,0,0,0,3535,3536,3,937,468,
        0,3536,3537,3,957,478,0,3537,642,1,0,0,0,3538,3539,3,939,469,0,3539,
        3540,3,949,474,0,3540,3541,3,937,468,0,3541,3542,3,947,473,0,3542,
        644,1,0,0,0,3543,3544,3,939,469,0,3544,3545,3,957,478,0,3545,3546,
        3,949,474,0,3546,3547,3,947,473,0,3547,3548,3,1033,516,0,3548,3549,
        3,959,479,0,3549,3550,3,961,480,0,3550,3551,3,951,475,0,3551,3552,
        3,943,471,0,3552,3553,3,929,464,0,3553,646,1,0,0,0,3554,3555,3,943,
        471,0,3555,3556,3,921,460,0,3556,3557,3,933,466,0,3557,648,1,0,0,
        0,3558,3559,3,943,471,0,3559,3560,3,921,460,0,3560,3561,3,947,473,
        0,3561,3562,3,933,466,0,3562,3563,3,961,480,0,3563,3564,3,921,460,
        0,3564,3565,3,933,466,0,3565,3566,3,929,464,0,3566,650,1,0,0,0,3567,
        3568,3,943,471,0,3568,3569,3,921,460,0,3569,3570,3,959,479,0,3570,
        3571,3,929,464,0,3571,3572,3,955,477,0,3572,3573,3,921,460,0,3573,
        3574,3,943,471,0,3574,652,1,0,0,0,3575,3576,3,943,471,0,3576,3577,
        3,921,460,0,3577,3578,3,957,478,0,3578,3579,3,959,479,0,3579,3580,
        3,1033,516,0,3580,3581,3,963,481,0,3581,3582,3,921,460,0,3582,3583,
        3,943,471,0,3583,3584,3,961,480,0,3584,3585,3,929,464,0,3585,654,
        1,0,0,0,3586,3587,3,943,471,0,3587,3588,3,929,464,0,3588,3589,3,
        921,460,0,3589,3590,3,927,463,0,3590,656,1,0,0,0,3591,3592,3,943,
        471,0,3592,3593,3,929,464,0,3593,3594,3,921,460,0,3594,3595,3,927,
        463,0,3595,3596,3,937,468,0,3596,3597,3,947,473,0,3597,3598,3,933,
        466,0,3598,658,1,0,0,0,3599,3600,3,943,471,0,3600,3601,3,929,464,
        0,3601,3602,3,931,465,0,3602,3603,3,959,479,0,3603,660,1,0,0,0,3604,
        3605,3,943,471,0,3605,3606,3,937,468,0,3606,3607,3,941,470,0,3607,
        3608,3,929,464,0,3608,662,1,0,0,0,3609,3610,3,943,471,0,3610,3611,
        3,937,468,0,3611,3612,3,947,473,0,3612,3613,3,929,464,0,3613,3614,
        3,957,478,0,3614,664,1,0,0,0,3615,3616,3,943,471,0,3616,3617,3,937,
        468,0,3617,3618,3,945,472,0,3618,3619,3,937,468,0,3619,3620,3,959,
        479,0,3620,666,1,0,0,0,3621,3622,3,943,471,0,3622,3623,3,949,474,
        0,3623,3624,3,925,462,0,3624,3625,3,921,460,0,3625,3626,3,943,471,
        0,3626,668,1,0,0,0,3627,3628,3,943,471,0,3628,3629,3,949,474,0,3629,
        3630,3,925,462,0,3630,3631,3,921,460,0,3631,3632,3,943,471,0,3632,
        3633,3,959,479,0,3633,3634,3,937,468,0,3634,3635,3,945,472,0,3635,
        3636,3,929,464,0,3636,3637,3,957,478,0,3637,3638,3,959,479,0,3638,
        3639,3,921,460,0,3639,3640,3,945,472,0,3640,3641,3,951,475,0,3641,
        670,1,0,0,0,3642,3643,3,945,472,0,3643,3644,3,921,460,0,3644,3645,
        3,959,479,0,3645,3646,3,925,462,0,3646,3647,3,935,467,0,3647,672,
        1,0,0,0,3648,3649,3,945,472,0,3649,3650,3,921,460,0,3650,3651,3,
        959,479,0,3651,3652,3,925,462,0,3652,3653,3,935,467,0,3653,3654,
        3,1033,516,0,3654,3655,3,955,477,0,3655,3656,3,929,464,0,3656,3657,
        3,925,462,0,3657,3658,3,949,474,0,3658,3659,3,933,466,0,3659,3660,
        3,947,473,0,3660,3661,3,937,468,0,3661,3662,3,971,485,0,3662,3663,
        3,929,464,0,3663,674,1,0,0,0,3664,3665,3,945,472,0,3665,3666,3,929,
        464,0,3666,3667,3,921,460,0,3667,3668,3,957,478,0,3668,3669,3,961,
        480,0,3669,3670,3,955,477,0,3670,3671,3,929,464,0,3671,3672,3,957,
        478,0,3672,676,1,0,0,0,3673,3674,3,945,472,0,3674,3675,3,929,464,
        0,3675,3676,3,955,477,0,3676,3677,3,933,466,0,3677,3678,3,929,464,
        0,3678,678,1,0,0,0,3679,3680,3,945,472,0,3680,3681,3,929,464,0,3681,
        3682,3,959,479,0,3682,3683,3,921,460,0,3683,3684,3,927,463,0,3684,
        3685,3,921,460,0,3685,3686,3,959,479,0,3686,3687,3,921,460,0,3687,
        680,1,0,0,0,3688,3689,3,945,472,0,3689,3690,3,937,468,0,3690,3691,
        3,947,473,0,3691,3692,3,961,480,0,3692,3693,3,957,478,0,3693,682,
        1,0,0,0,3694,3695,3,945,472,0,3695,3696,3,937,468,0,3696,3697,3,
        947,473,0,3697,3698,3,961,480,0,3698,3699,3,959,479,0,3699,3700,
        3,929,464,0,3700,684,1,0,0,0,3701,3702,3,945,472,0,3702,3703,3,949,
        474,0,3703,3704,3,927,463,0,3704,3705,3,937,468,0,3705,3706,3,931,
        465,0,3706,3707,3,937,468,0,3707,3708,3,929,464,0,3708,3709,3,957,
        478,0,3709,686,1,0,0,0,3710,3711,3,945,472,0,3711,3712,3,949,474,
        0,3712,3713,3,927,463,0,3713,3714,3,961,480,0,3714,3715,3,943,471,
        0,3715,3716,3,929,464,0,3716,688,1,0,0,0,3717,3718,3,945,472,0,3718,
        3719,3,949,474,0,3719,3720,3,947,473,0,3720,3721,3,959,479,0,3721,
        3722,3,935,467,0,3722,690,1,0,0,0,3723,3724,3,945,472,0,3724,3725,
        3,961,480,0,3725,3726,3,943,471,0,3726,3727,3,959,479,0,3727,3728,
        3,937,468,0,3728,3729,3,957,478,0,3729,3730,3,929,464,0,3730,3731,
        3,959,479,0,3731,692,1,0,0,0,3732,3733,3,947,473,0,3733,3734,3,921,
        460,0,3734,3735,3,959,479,0,3735,3736,3,961,480,0,3736,3737,3,955,
        477,0,3737,3738,3,921,460,0,3738,3739,3,943,471,0,3739,694,1,0,0,
        0,3740,3741,3,947,473,0,3741,3742,3,929,464,0,3742,3743,3,967,483,
        0,3743,3744,3,959,479,0,3744,696,1,0,0,0,3745,3746,3,947,473,0,3746,
        3747,3,949,474,0,3747,698,1,0,0,0,3748,3749,3,947,473,0,3749,3750,
        3,949,474,0,3750,3751,3,947,473,0,3751,3752,3,929,464,0,3752,700,
        1,0,0,0,3753,3754,3,947,473,0,3754,3755,3,949,474,0,3755,3756,3,
        959,479,0,3756,702,1,0,0,0,3757,3758,3,947,473,0,3758,3759,3,959,
        479,0,3759,3760,3,937,468,0,3760,3761,3,943,471,0,3761,3762,3,929,
        464,0,3762,704,1,0,0,0,3763,3764,3,947,473,0,3764,3765,3,959,479,
        0,3765,3766,3,935,467,0,3766,3767,3,1033,516,0,3767,3768,3,963,481,
        0,3768,3769,3,921,460,0,3769,3770,3,943,471,0,3770,3771,3,961,480,
        0,3771,3772,3,929,464,0,3772,706,1,0,0,0,3773,3774,3,947,473,0,3774,
        3775,3,961,480,0,3775,3776,3,943,471,0,3776,3777,3,943,471,0,3777,
        708,1,0,0,0,3778,3779,3,947,473,0,3779,3780,3,961,480,0,3780,3781,
        3,945,472,0,3781,3782,3,929,464,0,3782,3783,3,955,477,0,3783,3784,
        3,937,468,0,3784,3785,3,925,462,0,3785,710,1,0,0,0,3786,3787,3,949,
        474,0,3787,3788,3,931,465,0,3788,712,1,0,0,0,3789,3790,3,949,474,
        0,3790,3791,3,931,465,0,3791,3792,3,931,465,0,3792,3793,3,957,478,
        0,3793,3794,3,929,464,0,3794,3795,3,959,479,0,3795,714,1,0,0,0,3796,
        3797,3,949,474,0,3797,3798,3,947,473,0,3798,716,1,0,0,0,3799,3800,
        3,949,474,0,3800,3801,3,947,473,0,3801,3802,3,929,464,0,3802,718,
        1,0,0,0,3803,3804,3,949,474,0,3804,3805,3,955,477,0,3805,720,1,0,
        0,0,3806,3807,3,949,474,0,3807,3808,3,955,477,0,3808,3809,3,927,
        463,0,3809,3810,3,929,464,0,3810,3811,3,955,477,0,3811,722,1,0,0,
        0,3812,3813,3,949,474,0,3813,3814,3,961,480,0,3814,3815,3,959,479,
        0,3815,724,1,0,0,0,3816,3817,3,949,474,0,3817,3818,3,961,480,0,3818,
        3819,3,959,479,0,3819,3820,3,929,464,0,3820,3821,3,955,477,0,3821,
        726,1,0,0,0,3822,3823,3,949,474,0,3823,3824,3,961,480,0,3824,3825,
        3,959,479,0,3825,3826,3,951,475,0,3826,3827,3,961,480,0,3827,3828,
        3,959,479,0,3828,3829,3,931,465,0,3829,3830,3,949,474,0,3830,3831,
        3,955,477,0,3831,3832,3,945,472,0,3832,3833,3,921,460,0,3833,3834,
        3,959,479,0,3834,728,1,0,0,0,3835,3836,3,949,474,0,3836,3837,3,963,
        481,0,3837,3838,3,929,464,0,3838,3839,3,955,477,0,3839,730,1,0,0,
        0,3840,3841,3,949,474,0,3841,3842,3,963,481,0,3842,3843,3,929,464,
        0,3843,3844,3,955,477,0,3844,3845,3,943,471,0,3845,3846,3,921,460,
        0,3846,3847,3,969,484,0,3847,732,1,0,0,0,3848,3849,3,951,475,0,3849,
        3850,3,921,460,0,3850,3851,3,955,477,0,3851,3852,3,957,478,0,3852,
        3853,3,929,464,0,3853,3854,3,961,480,0,3854,3855,3,955,477,0,3855,
        3856,3,943,471,0,3856,734,1,0,0,0,3857,3858,3,951,475,0,3858,3859,
        3,921,460,0,3859,3860,3,955,477,0,3860,3861,3,959,479,0,3861,3862,
        3,937,468,0,3862,3863,3,959,479,0,3863,3864,3,937,468,0,3864,3865,
        3,949,474,0,3865,3866,3,947,473,0,3866,736,1,0,0,0,3867,3868,3,951,
        475,0,3868,3869,3,921,460,0,3869,3870,3,959,479,0,3870,3871,3,959,
        479,0,3871,3872,3,929,464,0,3872,3873,3,955,477,0,3873,3874,3,947,
        473,0,3874,738,1,0,0,0,3875,3876,3,951,475,0,3876,3877,3,929,464,
        0,3877,3878,3,955,477,0,3878,740,1,0,0,0,3879,3880,3,951,475,0,3880,
        3881,3,929,464,0,3881,3882,3,955,477,0,3882,3883,3,925,462,0,3883,
        3884,3,929,464,0,3884,3885,3,947,473,0,3885,3886,3,959,479,0,3886,
        742,1,0,0,0,3887,3888,3,951,475,0,3888,3889,3,929,464,0,3889,3890,
        3,955,477,0,3890,3891,3,925,462,0,3891,3892,3,929,464,0,3892,3893,
        3,947,473,0,3893,3894,3,959,479,0,3894,3895,3,1033,516,0,3895,3896,
        3,955,477,0,3896,3897,3,921,460,0,3897,3898,3,947,473,0,3898,3899,
        3,941,470,0,3899,744,1,0,0,0,3900,3901,3,951,475,0,3901,3902,3,929,
        464,0,3902,3903,3,955,477,0,3903,3904,3,925,462,0,3904,3905,3,929,
        464,0,3905,3906,3,947,473,0,3906,3907,3,959,479,0,3907,3908,3,937,
        468,0,3908,3909,3,943,471,0,3909,3910,3,929,464,0,3910,3911,3,1033,
        516,0,3911,3912,3,925,462,0,3912,3913,3,949,474,0,3913,3914,3,947,
        473,0,3914,3915,3,959,479,0,3915,746,1,0,0,0,3916,3917,3,951,475,
        0,3917,3918,3,929,464,0,3918,3919,3,955,477,0,3919,3920,3,925,462,
        0,3920,3921,3,929,464,0,3921,3922,3,947,473,0,3922,3923,3,959,479,
        0,3923,3924,3,937,468,0,3924,3925,3,943,471,0,3925,3926,3,929,464,
        0,3926,3927,3,1033,516,0,3927,3928,3,927,463,0,3928,3929,3,937,468,
        0,3929,3930,3,957,478,0,3930,3931,3,925,462,0,3931,748,1,0,0,0,3932,
        3933,3,951,475,0,3933,3934,3,929,464,0,3934,3935,3,955,477,0,3935,
        3936,3,937,468,0,3936,3937,3,949,474,0,3937,3938,3,927,463,0,3938,
        750,1,0,0,0,3939,3940,3,951,475,0,3940,3941,3,937,468,0,3941,3942,
        3,963,481,0,3942,3943,3,949,474,0,3943,3944,3,959,479,0,3944,752,
        1,0,0,0,3945,3946,3,951,475,0,3946,3947,3,949,474,0,3947,3948,3,
        957,478,0,3948,3949,3,937,468,0,3949,3950,3,959,479,0,3950,3951,
        3,937,468,0,3951,3952,3,949,474,0,3952,3953,3,947,473,0,3953,754,
        1,0,0,0,3954,3955,3,951,475,0,3955,3956,3,949,474,0,3956,3957,3,
        965,482,0,3957,3958,3,929,464,0,3958,3959,3,955,477,0,3959,756,1,
        0,0,0,3960,3961,3,951,475,0,3961,3962,3,949,474,0,3962,3963,3,957,
        478,0,3963,3964,3,929,464,0,3964,3965,3,967,483,0,3965,3966,3,951,
        475,0,3966,3967,3,943,471,0,3967,3968,3,949,474,0,3968,3969,3,927,
        463,0,3969,3970,3,929,464,0,3970,758,1,0,0,0,3971,3972,3,951,475,
        0,3972,3973,3,949,474,0,3973,3974,3,957,478,0,3974,3975,3,929,464,
        0,3975,3976,3,967,483,0,3976,3977,3,951,475,0,3977,3978,3,943,471,
        0,3978,3979,3,949,474,0,3979,3980,3,927,463,0,3980,3981,3,929,464,
        0,3981,3982,3,1033,516,0,3982,3983,3,949,474,0,3983,3984,3,961,480,
        0,3984,3985,3,959,479,0,3985,3986,3,929,464,0,3986,3987,3,955,477,
        0,3987,760,1,0,0,0,3988,3989,3,951,475,0,3989,3990,3,955,477,0,3990,
        3991,3,937,468,0,3991,3992,3,945,472,0,3992,3993,3,921,460,0,3993,
        3994,3,955,477,0,3994,3995,3,969,484,0,3995,762,1,0,0,0,3996,3997,
        3,951,475,0,3997,3998,3,961,480,0,3998,3999,3,955,477,0,3999,4000,
        3,933,466,0,4000,4001,3,929,464,0,4001,764,1,0,0,0,4002,4003,3,955,
        477,0,4003,4004,3,921,460,0,4004,4005,3,947,473,0,4005,4006,3,933,
        466,0,4006,4007,3,929,464,0,4007,766,1,0,0,0,4008,4009,3,955,477,
        0,4009,4010,3,929,464,0,4010,4011,3,925,462,0,4011,4012,3,949,474,
        0,4012,4013,3,955,477,0,4013,4014,3,927,463,0,4014,4015,3,965,482,
        0,4015,4016,3,955,477,0,4016,4017,3,937,468,0,4017,4018,3,959,479,
        0,4018,4019,3,929,464,0,4019,4020,3,955,477,0,4020,768,1,0,0,0,4021,
        4022,3,955,477,0,4022,4023,3,949,474,0,4023,4024,3,965,482,0,4024,
        4025,3,1033,516,0,4025,4026,3,947,473,0,4026,4027,3,961,480,0,4027,
        4028,3,945,472,0,4028,4029,3,923,461,0,4029,4030,3,929,464,0,4030,
        4031,3,955,477,0,4031,770,1,0,0,0,4032,4033,3,955,477,0,4033,4034,
        3,921,460,0,4034,4035,3,947,473,0,4035,4036,3,941,470,0,4036,772,
        1,0,0,0,4037,4038,3,955,477,0,4038,4039,3,929,464,0,4039,4040,3,
        933,466,0,4040,4041,3,929,464,0,4041,4042,3,967,483,0,4042,4043,
        3,951,475,0,4043,774,1,0,0,0,4044,4045,3,955,477,0,4045,4046,3,929,
        464,0,4046,4047,3,957,478,0,4047,4048,3,929,464,0,4048,4049,3,959,
        479,0,4049,776,1,0,0,0,4050,4051,3,955,477,0,4051,4052,3,929,464,
        0,4052,4053,3,963,481,0,4053,4054,3,949,474,0,4054,4055,3,941,470,
        0,4055,4056,3,929,464,0,4056,778,1,0,0,0,4057,4058,3,955,477,0,4058,
        4059,3,929,464,0,4059,4060,3,951,475,0,4060,4061,3,921,460,0,4061,
        4062,3,937,468,0,4062,4063,3,955,477,0,4063,780,1,0,0,0,4064,4065,
        3,955,477,0,4065,4066,3,937,468,0,4066,4067,3,933,466,0,4067,4068,
        3,935,467,0,4068,4069,3,959,479,0,4069,782,1,0,0,0,4070,4071,3,955,
        477,0,4071,4072,3,943,471,0,4072,4073,3,937,468,0,4073,4074,3,941,
        470,0,4074,4075,3,929,464,0,4075,784,1,0,0,0,4076,4077,3,955,477,
        0,4077,4078,3,949,474,0,4078,4079,3,943,471,0,4079,4080,3,943,471,
        0,4080,4081,3,923,461,0,4081,4082,3,921,460,0,4082,4083,3,925,462,
        0,4083,4084,3,941,470,0,4084,786,1,0,0,0,4085,4086,3,955,477,0,4086,
        4087,3,949,474,0,4087,4088,3,943,471,0,4088,4089,3,943,471,0,4089,
        4090,3,961,480,0,4090,4091,3,951,475,0,4091,788,1,0,0,0,4092,4093,
        3,955,477,0,4093,4094,3,949,474,0,4094,4095,3,965,482,0,4095,790,
        1,0,0,0,4096,4097,3,955,477,0,4097,4098,3,949,474,0,4098,4099,3,
        965,482,0,4099,4100,3,957,478,0,4100,792,1,0,0,0,4101,4102,3,957,
        478,0,4102,4103,3,929,464,0,4103,4104,3,925,462,0,4104,4105,3,949,
        474,0,4105,4106,3,947,473,0,4106,4107,3,927,463,0,4107,794,1,0,0,
        0,4108,4109,3,957,478,0,4109,4110,3,929,464,0,4110,4111,3,943,471,
        0,4111,4112,3,929,464,0,4112,4113,3,925,462,0,4113,4114,3,959,479,
        0,4114,796,1,0,0,0,4115,4116,3,957,478,0,4116,4117,3,929,464,0,4117,
        4118,3,959,479,0,4118,798,1,0,0,0,4119,4120,3,957,478,0,4120,4121,
        3,929,464,0,4121,4122,3,955,477,0,4122,4123,3,927,463,0,4123,4124,
        3,929,464,0,4124,800,1,0,0,0,4125,4126,3,957,478,0,4126,4127,3,935,
        467,0,4127,4128,3,949,474,0,4128,4129,3,965,482,0,4129,802,1,0,0,
        0,4130,4131,3,957,478,0,4131,4132,3,937,468,0,4132,4133,3,945,472,
        0,4133,4134,3,937,468,0,4134,4135,3,943,471,0,4135,4136,3,921,460,
        0,4136,4137,3,955,477,0,4137,804,1,0,0,0,4138,4139,3,957,478,0,4139,
        4140,3,941,470,0,4140,4141,3,937,468,0,4141,4142,3,951,475,0,4142,
        806,1,0,0,0,4143,4144,3,957,478,0,4144,4145,3,959,479,0,4145,4146,
        3,949,474,0,4146,4147,3,955,477,0,4147,4148,3,929,464,0,4148,4149,
        3,927,463,0,4149,808,1,0,0,0,4150,4151,3,957,478,0,4151,4152,3,949,
        474,0,4152,4153,3,955,477,0,4153,4154,3,959,479,0,4154,4155,3,929,
        464,0,4155,4156,3,927,463,0,4156,810,1,0,0,0,4157,4158,3,957,478,
        0,4158,4159,3,945,472,0,4159,4160,3,921,460,0,4160,4161,3,943,471,
        0,4161,4162,3,943,471,0,4162,4163,3,937,468,0,4163,4164,3,947,473,
        0,4164,4165,3,959,479,0,4165,812,1,0,0,0,4166,4167,3,957,478,0,4167,
        4168,3,959,479,0,4168,4169,3,921,460,0,4169,4170,3,925,462,0,4170,
        4171,3,941,470,0,4171,814,1,0,0,0,4172,4173,3,957,478,0,4173,4174,
        3,959,479,0,4174,4175,3,921,460,0,4175,4176,3,955,477,0,4176,4177,
        3,959,479,0,4177,816,1,0,0,0,4178,4179,3,957,478,0,4179,4180,3,959,
        479,0,4180,4181,3,921,460,0,4181,4182,3,959,479,0,4182,4183,3,937,
        468,0,4183,4184,3,925,462,0,4184,818,1,0,0,0,4185,4186,3,957,478,
        0,4186,4187,3,959,479,0,4187,4188,3,955,477,0,4188,4189,3,961,480,
        0,4189,4190,3,925,462,0,4190,4191,3,959,479,0,4191,820,1,0,0,0,4192,
        4193,3,957,478,0,4193,4194,3,949,474,0,4194,4195,3,955,477,0,4195,
        4196,3,959,479,0,4196,822,1,0,0,0,4197,4198,3,957,478,0,4198,4199,
        3,961,480,0,4199,4200,3,923,461,0,4200,4201,3,957,478,0,4201,4202,
        3,959,479,0,4202,4203,3,955,477,0,4203,4204,3,937,468,0,4204,4205,
        3,947,473,0,4205,4206,3,933,466,0,4206,824,1,0,0,0,4207,4208,3,957,
        478,0,4208,4209,3,961,480,0,4209,4210,3,945,472,0,4210,826,1,0,0,
        0,4211,4212,3,957,478,0,4212,4213,3,969,484,0,4213,4214,3,945,472,
        0,4214,4215,3,945,472,0,4215,4216,3,929,464,0,4216,4217,3,959,479,
        0,4217,4218,3,955,477,0,4218,4219,3,937,468,0,4219,4220,3,925,462,
        0,4220,828,1,0,0,0,4221,4222,3,957,478,0,4222,4223,3,969,484,0,4223,
        4224,3,957,478,0,4224,4225,3,959,479,0,4225,4226,3,929,464,0,4226,
        4227,3,945,472,0,4227,830,1,0,0,0,4228,4229,3,957,478,0,4229,4230,
        3,969,484,0,4230,4231,3,957,478,0,4231,4232,3,959,479,0,4232,4233,
        3,929,464,0,4233,4234,3,945,472,0,4234,4235,3,1033,516,0,4235,4236,
        3,959,479,0,4236,4237,3,937,468,0,4237,4238,3,945,472,0,4238,4239,
        3,929,464,0,4239,832,1,0,0,0,4240,4241,3,957,478,0,4241,4242,3,969,
        484,0,4242,4243,3,957,478,0,4243,4244,3,959,479,0,4244,4245,3,929,
        464,0,4245,4246,3,945,472,0,4246,4247,3,1033,516,0,4247,4248,3,961,
        480,0,4248,4249,3,957,478,0,4249,4250,3,929,464,0,4250,4251,3,955,
        477,0,4251,834,1,0,0,0,4252,4253,3,959,479,0,4253,4254,3,921,460,
        0,4254,4255,3,923,461,0,4255,4256,3,943,471,0,4256,4257,3,929,464,
        0,4257,836,1,0,0,0,4258,4259,3,959,479,0,4259,4260,3,923,461,0,4260,
        4261,3,943,471,0,4261,4262,3,951,475,0,4262,4263,3,955,477,0,4263,
        4264,3,949,474,0,4264,4265,3,951,475,0,4265,4266,3,929,464,0,4266,
        4267,3,955,477,0,4267,4268,3,959,479,0,4268,4269,3,937,468,0,4269,
        4270,3,929,464,0,4270,4271,3,957,478,0,4271,838,1,0,0,0,4272,4273,
        3,959,479,0,4273,4274,3,921,460,0,4274,4275,3,923,461,0,4275,4276,
        3,943,471,0,4276,4277,3,929,464,0,4277,4278,3,957,478,0,4278,4279,
        3,921,460,0,4279,4280,3,945,472,0,4280,4281,3,951,475,0,4281,4282,
        3,943,471,0,4282,4283,3,929,464,0,4283,840,1,0,0,0,4284,4285,3,959,
        479,0,4285,4286,3,929,464,0,4286,4287,3,955,477,0,4287,4288,3,945,
        472,0,4288,4289,3,937,468,0,4289,4290,3,947,473,0,4290,4291,3,921,
        460,0,4291,4292,3,959,479,0,4292,4293,3,929,464,0,4293,4294,3,927,
        463,0,4294,842,1,0,0,0,4295,4296,3,959,479,0,4296,4297,3,935,467,
        0,4297,4298,3,929,464,0,4298,4299,3,947,473,0,4299,844,1,0,0,0,4300,
        4301,3,959,479,0,4301,4302,3,937,468,0,4302,4303,3,945,472,0,4303,
        4304,3,929,464,0,4304,846,1,0,0,0,4305,4306,3,959,479,0,4306,4307,
        3,937,468,0,4307,4308,3,945,472,0,4308,4309,3,929,464,0,4309,4310,
        3,957,478,0,4310,4311,3,959,479,0,4311,4312,3,921,460,0,4312,4313,
        3,945,472,0,4313,4314,3,951,475,0,4314,848,1,0,0,0,4315,4316,3,959,
        479,0,4316,4317,3,937,468,0,4317,4318,3,945,472,0,4318,4319,3,929,
        464,0,4319,4320,3,957,478,0,4320,4321,3,959,479,0,4321,4322,3,921,
        460,0,4322,4323,3,945,472,0,4323,4324,3,951,475,0,4324,4325,5,40,
        0,0,4325,4326,5,51,0,0,4326,4327,5,41,0,0,4327,850,1,0,0,0,4328,
        4329,3,959,479,0,4329,4330,3,937,468,0,4330,4331,3,945,472,0,4331,
        4332,3,929,464,0,4332,4333,3,957,478,0,4333,4334,3,959,479,0,4334,
        4335,3,921,460,0,4335,4336,3,945,472,0,4336,4337,3,951,475,0,4337,
        4338,5,40,0,0,4338,4339,5,54,0,0,4339,4340,5,41,0,0,4340,852,1,0,
        0,0,4341,4342,3,959,479,0,4342,4343,3,937,468,0,4343,4344,3,945,
        472,0,4344,4345,3,929,464,0,4345,4346,3,957,478,0,4346,4347,3,959,
        479,0,4347,4348,3,921,460,0,4348,4349,3,945,472,0,4349,4350,3,951,
        475,0,4350,4351,5,40,0,0,4351,4352,5,57,0,0,4352,4353,5,41,0,0,4353,
        854,1,0,0,0,4354,4355,3,959,479,0,4355,4356,3,937,468,0,4356,4357,
        3,947,473,0,4357,4358,3,969,484,0,4358,4359,3,937,468,0,4359,4360,
        3,947,473,0,4360,4361,3,959,479,0,4361,856,1,0,0,0,4362,4363,3,959,
        479,0,4363,4364,3,949,474,0,4364,858,1,0,0,0,4365,4366,3,959,479,
        0,4366,4367,3,955,477,0,4367,4368,3,921,460,0,4368,4369,3,937,468,
        0,4369,4370,3,943,471,0,4370,4371,3,937,468,0,4371,4372,3,947,473,
        0,4372,4373,3,933,466,0,4373,860,1,0,0,0,4374,4375,3,959,479,0,4375,
        4376,3,955,477,0,4376,4377,3,961,480,0,4377,4378,3,929,464,0,4378,
        862,1,0,0,0,4379,4380,3,959,479,0,4380,4381,3,955,477,0,4381,4382,
        3,961,480,0,4382,4383,3,947,473,0,4383,4384,3,925,462,0,4384,4385,
        3,921,460,0,4385,4386,3,959,479,0,4386,4387,3,929,464,0,4387,864,
        1,0,0,0,4388,4389,3,961,480,0,4389,4390,3,947,473,0,4390,4391,3,
        937,468,0,4391,4392,3,949,474,0,4392,4393,3,947,473,0,4393,866,1,
        0,0,0,4394,4395,3,961,480,0,4395,4396,3,947,473,0,4396,4397,3,937,
        468,0,4397,4398,3,953,476,0,4398,4399,3,961,480,0,4399,4400,3,929,
        464,0,4400,868,1,0,0,0,4401,4402,3,961,480,0,4402,4403,3,947,473,
        0,4403,4404,3,941,470,0,4404,4405,3,947,473,0,4405,4406,3,949,474,
        0,4406,4407,3,965,482,0,4407,4408,3,947,473,0,4408,870,1,0,0,0,4409,
        4410,3,961,480,0,4410,4411,3,947,473,0,4411,4412,3,957,478,0,4412,
        4413,3,929,464,0,4413,4414,3,959,479,0,4414,872,1,0,0,0,4415,4416,
        3,961,480,0,4416,4417,3,947,473,0,4417,4418,3,951,475,0,4418,4419,
        3,937,468,0,4419,4420,3,963,481,0,4420,4421,3,949,474,0,4421,4422,
        3,959,479,0,4422,874,1,0,0,0,4423,4424,3,961,480,0,4424,4425,3,951,
        475,0,4425,4426,3,951,475,0,4426,4427,3,929,464,0,4427,4428,3,955,
        477,0,4428,876,1,0,0,0,4429,4430,3,961,480,0,4430,4431,3,951,475,
        0,4431,4432,3,957,478,0,4432,4433,3,929,464,0,4433,4434,3,955,477,
        0,4434,4435,3,959,479,0,4435,878,1,0,0,0,4436,4437,3,961,480,0,4437,
        4438,3,957,478,0,4438,4439,3,929,464,0,4439,4440,3,955,477,0,4440,
        880,1,0,0,0,4441,4442,3,961,480,0,4442,4443,3,957,478,0,4443,4444,
        3,937,468,0,4444,4445,3,947,473,0,4445,4446,3,933,466,0,4446,882,
        1,0,0,0,4447,4448,3,963,481,0,4448,4449,3,921,460,0,4449,4450,3,
        943,471,0,4450,4451,3,961,480,0,4451,4452,3,929,464,0,4452,884,1,
        0,0,0,4453,4454,3,963,481,0,4454,4455,3,921,460,0,4455,4456,3,943,
        471,0,4456,4457,3,961,480,0,4457,4458,3,929,464,0,4458,4459,3,957,
        478,0,4459,886,1,0,0,0,4460,4461,3,963,481,0,4461,4462,3,921,460,
        0,4462,4463,3,955,477,0,4463,4464,3,923,461,0,4464,4465,3,937,468,
        0,4465,4466,3,947,473,0,4466,4467,3,921,460,0,4467,4468,3,955,477,
        0,4468,4469,3,969,484,0,4469,888,1,0,0,0,4470,4471,3,963,481,0,4471,
        4472,3,921,460,0,4472,4473,3,955,477,0,4473,4474,3,925,462,0,4474,
        4475,3,935,467,0,4475,4476,3,921,460,0,4476,4477,3,955,477,0,4477,
        890,1,0,0,0,4478,4479,3,965,482,0,4479,4480,3,935,467,0,4480,4481,
        3,929,464,0,4481,4482,3,947,473,0,4482,892,1,0,0,0,4483,4484,3,965,
        482,0,4484,4485,3,935,467,0,4485,4486,3,929,464,0,4486,4487,3,955,
        477,0,4487,4488,3,929,464,0,4488,894,1,0,0,0,4489,4490,3,965,482,
        0,4490,4491,3,937,468,0,4491,4492,3,947,473,0,4492,4493,3,927,463,
        0,4493,4494,3,949,474,0,4494,4495,3,965,482,0,4495,896,1,0,0,0,4496,
        4497,3,965,482,0,4497,4498,3,937,468,0,4498,4499,3,959,479,0,4499,
        4500,3,935,467,0,4500,898,1,0,0,0,4501,4502,3,965,482,0,4502,4503,
        3,937,468,0,4503,4504,3,959,479,0,4504,4505,3,935,467,0,4505,4506,
        3,937,468,0,4506,4507,3,947,473,0,4507,900,1,0,0,0,4508,4509,3,965,
        482,0,4509,4510,3,937,468,0,4510,4511,3,959,479,0,4511,4512,3,935,
        467,0,4512,4513,3,949,474,0,4513,4514,3,961,480,0,4514,4515,3,959,
        479,0,4515,902,1,0,0,0,4516,4517,3,969,484,0,4517,4518,3,929,464,
        0,4518,4519,3,921,460,0,4519,4520,3,955,477,0,4520,904,1,0,0,0,4521,
        4522,3,945,472,0,4522,4523,3,921,460,0,4523,4524,3,959,479,0,4524,
        4525,3,929,464,0,4525,4526,3,955,477,0,4526,4527,3,937,468,0,4527,
        4528,3,921,460,0,4528,4529,3,943,471,0,4529,4530,3,937,468,0,4530,
        4531,3,971,485,0,4531,4532,3,929,464,0,4532,4533,3,927,463,0,4533,
        906,1,0,0,0,4534,4535,3,931,465,0,4535,4536,3,955,477,0,4536,4537,
        3,929,464,0,4537,4538,3,957,478,0,4538,4539,3,935,467,0,4539,4540,
        3,947,473,0,4540,4541,3,929,464,0,4541,4542,3,957,478,0,4542,4543,
        3,957,478,0,4543,908,1,0,0,0,4544,4545,3,955,477,0,4545,4546,3,929,
        464,0,4546,4547,3,931,465,0,4547,4548,3,955,477,0,4548,4549,3,929,
        464,0,4549,4550,3,957,478,0,4550,4551,3,935,467,0,4551,4552,3,1033,
        516,0,4552,4553,3,945,472,0,4553,4554,3,949,474,0,4554,4555,3,927,
        463,0,4555,4556,3,929,464,0,4556,910,1,0,0,0,4557,4558,3,955,477,
        0,4558,4559,3,929,464,0,4559,4560,3,925,462,0,4560,4561,3,949,474,
        0,4561,4562,3,963,481,0,4562,4563,3,929,464,0,4563,4564,3,955,477,
        0,4564,912,1,0,0,0,4565,4566,3,925,462,0,4566,4567,3,949,474,0,4567,
        4568,3,947,473,0,4568,4569,3,959,479,0,4569,4570,3,937,468,0,4570,
        4571,3,947,473,0,4571,4572,3,961,480,0,4572,4573,3,949,474,0,4573,
        4574,3,961,480,0,4574,4575,3,957,478,0,4575,914,1,0,0,0,4576,4577,
        3,957,478,0,4577,4578,3,961,480,0,4578,4579,3,957,478,0,4579,4580,
        3,951,475,0,4580,4581,3,929,464,0,4581,4582,3,947,473,0,4582,4583,
        3,927,463,0,4583,916,1,0,0,0,4584,4585,3,955,477,0,4585,4586,3,929,
        464,0,4586,4587,3,957,478,0,4587,4588,3,961,480,0,4588,4589,3,945,
        472,0,4589,4590,3,929,464,0,4590,918,1,0,0,0,4591,4592,3,955,477,
        0,4592,4593,3,929,464,0,4593,4594,3,931,465,0,4594,4595,3,955,477,
        0,4595,4596,3,929,464,0,4596,4597,3,957,478,0,4597,4598,3,935,467,
        0,4598,920,1,0,0,0,4599,4600,7,2,0,0,4600,922,1,0,0,0,4601,4602,
        7,3,0,0,4602,924,1,0,0,0,4603,4604,7,4,0,0,4604,926,1,0,0,0,4605,
        4606,7,5,0,0,4606,928,1,0,0,0,4607,4608,7,6,0,0,4608,930,1,0,0,0,
        4609,4610,7,7,0,0,4610,932,1,0,0,0,4611,4612,7,8,0,0,4612,934,1,
        0,0,0,4613,4614,7,9,0,0,4614,936,1,0,0,0,4615,4616,7,10,0,0,4616,
        938,1,0,0,0,4617,4618,7,11,0,0,4618,940,1,0,0,0,4619,4620,7,12,0,
        0,4620,942,1,0,0,0,4621,4622,7,13,0,0,4622,944,1,0,0,0,4623,4624,
        7,14,0,0,4624,946,1,0,0,0,4625,4626,7,15,0,0,4626,948,1,0,0,0,4627,
        4628,7,16,0,0,4628,950,1,0,0,0,4629,4630,7,17,0,0,4630,952,1,0,0,
        0,4631,4632,7,18,0,0,4632,954,1,0,0,0,4633,4634,7,19,0,0,4634,956,
        1,0,0,0,4635,4636,7,20,0,0,4636,958,1,0,0,0,4637,4638,7,21,0,0,4638,
        960,1,0,0,0,4639,4640,7,22,0,0,4640,962,1,0,0,0,4641,4642,7,23,0,
        0,4642,964,1,0,0,0,4643,4644,7,24,0,0,4644,966,1,0,0,0,4645,4646,
        7,25,0,0,4646,968,1,0,0,0,4647,4648,7,26,0,0,4648,970,1,0,0,0,4649,
        4650,7,27,0,0,4650,972,1,0,0,0,4651,4652,5,126,0,0,4652,974,1,0,
        0,0,4653,4654,5,124,0,0,4654,976,1,0,0,0,4655,4656,5,38,0,0,4656,
        978,1,0,0,0,4657,4658,5,94,0,0,4658,980,1,0,0,0,4659,4660,5,61,0,
        0,4660,982,1,0,0,0,4661,4662,5,62,0,0,4662,984,1,0,0,0,4663,4664,
        5,60,0,0,4664,986,1,0,0,0,4665,4666,5,33,0,0,4666,988,1,0,0,0,4667,
        4669,5,69,0,0,4668,4670,7,28,0,0,4669,4668,1,0,0,0,4669,4670,1,0,
        0,0,4670,4672,1,0,0,0,4671,4673,3,993,496,0,4672,4671,1,0,0,0,4673,
        4674,1,0,0,0,4674,4672,1,0,0,0,4674,4675,1,0,0,0,4675,990,1,0,0,
        0,4676,4678,7,29,0,0,4677,4676,1,0,0,0,4678,4681,1,0,0,0,4679,4680,
        1,0,0,0,4679,4677,1,0,0,0,4680,4683,1,0,0,0,4681,4679,1,0,0,0,4682,
        4684,7,30,0,0,4683,4682,1,0,0,0,4684,4685,1,0,0,0,4685,4686,1,0,
        0,0,4685,4683,1,0,0,0,4686,4690,1,0,0,0,4687,4689,7,29,0,0,4688,
        4687,1,0,0,0,4689,4692,1,0,0,0,4690,4688,1,0,0,0,4690,4691,1,0,0,
        0,4691,992,1,0,0,0,4692,4690,1,0,0,0,4693,4694,7,31,0,0,4694,994,
        1,0,0,0,4695,4703,3,1025,512,0,4696,4697,5,92,0,0,4697,4702,9,0,
        0,0,4698,4699,5,34,0,0,4699,4702,5,34,0,0,4700,4702,8,32,0,0,4701,
        4696,1,0,0,0,4701,4698,1,0,0,0,4701,4700,1,0,0,0,4702,4705,1,0,0,
        0,4703,4701,1,0,0,0,4703,4704,1,0,0,0,4704,4706,1,0,0,0,4705,4703,
        1,0,0,0,4706,4707,3,1025,512,0,4707,996,1,0,0,0,4708,4715,3,1023,
        511,0,4709,4710,5,92,0,0,4710,4714,9,0,0,0,4711,4714,5,92,0,0,4712,
        4714,8,33,0,0,4713,4709,1,0,0,0,4713,4711,1,0,0,0,4713,4712,1,0,
        0,0,4714,4717,1,0,0,0,4715,4713,1,0,0,0,4715,4716,1,0,0,0,4716,4718,
        1,0,0,0,4717,4715,1,0,0,0,4718,4719,3,1023,511,0,4719,998,1,0,0,
        0,4720,4728,3,1027,513,0,4721,4722,5,92,0,0,4722,4727,9,0,0,0,4723,
        4724,5,96,0,0,4724,4727,5,96,0,0,4725,4727,8,32,0,0,4726,4721,1,
        0,0,0,4726,4723,1,0,0,0,4726,4725,1,0,0,0,4727,4730,1,0,0,0,4728,
        4726,1,0,0,0,4728,4729,1,0,0,0,4729,4731,1,0,0,0,4730,4728,1,0,0,
        0,4731,4732,3,1027,513,0,4732,1000,1,0,0,0,4733,4734,5,46,0,0,4734,
        1002,1,0,0,0,4735,4736,5,91,0,0,4736,1004,1,0,0,0,4737,4738,5,93,
        0,0,4738,1006,1,0,0,0,4739,4740,5,40,0,0,4740,1008,1,0,0,0,4741,
        4742,5,41,0,0,4742,1010,1,0,0,0,4743,4744,5,123,0,0,4744,1012,1,
        0,0,0,4745,4746,5,125,0,0,4746,1014,1,0,0,0,4747,4748,5,44,0,0,4748,
        1016,1,0,0,0,4749,4750,5,59,0,0,4750,1018,1,0,0,0,4751,4752,5,64,
        0,0,4752,1020,1,0,0,0,4753,4754,5,36,0,0,4754,1022,1,0,0,0,4755,
        4756,5,39,0,0,4756,1024,1,0,0,0,4757,4758,5,34,0,0,4758,1026,1,0,
        0,0,4759,4760,5,96,0,0,4760,1028,1,0,0,0,4761,4762,5,58,0,0,4762,
        1030,1,0,0,0,4763,4764,5,42,0,0,4764,1032,1,0,0,0,4765,4766,5,95,
        0,0,4766,1034,1,0,0,0,4767,4768,5,45,0,0,4768,1036,1,0,0,0,4769,
        4770,5,43,0,0,4770,1038,1,0,0,0,4771,4772,5,37,0,0,4772,1040,1,0,
        0,0,4773,4774,5,124,0,0,4774,4775,5,124,0,0,4775,1042,1,0,0,0,4776,
        4777,5,45,0,0,4777,4778,5,45,0,0,4778,1044,1,0,0,0,4779,4780,5,47,
        0,0,4780,1046,1,0,0,0,4781,4782,5,63,0,0,4782,1048,1,0,0,0,4783,
        4784,5,61,0,0,4784,4785,5,62,0,0,4785,1050,1,0,0,0,4786,4790,3,995,
        497,0,4787,4790,3,997,498,0,4788,4790,3,999,499,0,4789,4786,1,0,
        0,0,4789,4787,1,0,0,0,4789,4788,1,0,0,0,4790,1052,1,0,0,0,4791,4793,
        3,993,496,0,4792,4791,1,0,0,0,4793,4794,1,0,0,0,4794,4792,1,0,0,
        0,4794,4795,1,0,0,0,4795,1054,1,0,0,0,4796,4798,3,993,496,0,4797,
        4796,1,0,0,0,4798,4799,1,0,0,0,4799,4797,1,0,0,0,4799,4800,1,0,0,
        0,4800,4802,1,0,0,0,4801,4797,1,0,0,0,4801,4802,1,0,0,0,4802,4803,
        1,0,0,0,4803,4805,5,46,0,0,4804,4806,3,993,496,0,4805,4804,1,0,0,
        0,4806,4807,1,0,0,0,4807,4805,1,0,0,0,4807,4808,1,0,0,0,4808,4840,
        1,0,0,0,4809,4811,3,993,496,0,4810,4809,1,0,0,0,4811,4812,1,0,0,
        0,4812,4810,1,0,0,0,4812,4813,1,0,0,0,4813,4814,1,0,0,0,4814,4815,
        5,46,0,0,4815,4816,3,989,494,0,4816,4840,1,0,0,0,4817,4819,3,993,
        496,0,4818,4817,1,0,0,0,4819,4820,1,0,0,0,4820,4818,1,0,0,0,4820,
        4821,1,0,0,0,4821,4823,1,0,0,0,4822,4818,1,0,0,0,4822,4823,1,0,0,
        0,4823,4824,1,0,0,0,4824,4826,5,46,0,0,4825,4827,3,993,496,0,4826,
        4825,1,0,0,0,4827,4828,1,0,0,0,4828,4826,1,0,0,0,4828,4829,1,0,0,
        0,4829,4830,1,0,0,0,4830,4831,3,989,494,0,4831,4840,1,0,0,0,4832,
        4834,3,993,496,0,4833,4832,1,0,0,0,4834,4835,1,0,0,0,4835,4833,1,
        0,0,0,4835,4836,1,0,0,0,4836,4837,1,0,0,0,4837,4838,3,989,494,0,
        4838,4840,1,0,0,0,4839,4801,1,0,0,0,4839,4810,1,0,0,0,4839,4822,
        1,0,0,0,4839,4833,1,0,0,0,4840,1056,1,0,0,0,4841,4842,3,991,495,
        0,4842,1058,1,0,0,0,32,0,1062,1071,1081,1086,1090,1094,1098,1102,
        1104,4669,4674,4679,4685,4690,4701,4703,4713,4715,4726,4728,4789,
        4794,4799,4801,4807,4812,4820,4822,4828,4835,4839,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SparkSQLLexer.__ATN) {
            SparkSQLLexer.__ATN = new antlr.ATNDeserializer().deserialize(SparkSQLLexer._serializedATN);
        }

        return SparkSQLLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SparkSQLLexer.literalNames, SparkSQLLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SparkSQLLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SparkSQLLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}