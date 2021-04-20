const { resolvePlugin } = require('@babel/core');
const { count } = require('console');
const { del } = require('superagent');

const { cache } = require('webpack');

const log4js = require('log4js');
log4js.configure('log4js_test.json');
const logger = log4js.getLogger();

log4js.configure({
    appenders: {
      out: { 
        type: 'dateFile', 
        filename: 'logs/foo.log', 
        pattern: '-yyyy-MM-ddThh-mm', 
        layout: {
          type: 'pattern',
          pattern: '%f{2}:%l  %d{yyyy-MM-dd} %r %p %m'
        }
      }
    },
    categories: { default:  { appenders: ['out'], level: 'info', enableCallStack: true } }
  });

module.exports = class DbManager {

    constructor() {
        try {
            this.util = require('util');
            this.mariadb = require('mariadb');
            this.pool = this.mariadb.createPool({
                host: 'localhost',
                user: 'bgsuser',
                password: 'bgsbgs',
                database: 'bgs00',
                connectionLimit: 5
            });
        } catch (err) {
            logger.info(err);
            throw err;
        }

    }

    // ユーザIDの取得
    async isLogin(email, password) {

        let conn;

        try {
            conn = await this.pool.getConnection();

            const rows = await conn.query("SELECT COUNT(*) AS chack FROM user WHERE email = ? AND password = ?", [email, password]);

            if (rows[0].chack != "1") {
                return false;
            }

            const ans = await conn.query("SELECT ID, channelID FROM user WHERE email = ?", [email]);

            delete ans.meta;

            return ans;

        } catch (err) {

            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }

    // 使ってない
    async getChannelID(ID) {
        let conn;

        try {
            conn = await this.pool.getConnection();

            const channel = await conn.query("SELECT channelID FROM user WHERE ID = ?", [ID]);
            delete channel.meta;

            return channel;

        } catch (err) {
            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }

    async getOnAir(streamingName) {
        let conn;

        try {
            conn = await this.pool.getConnection();

            const channel = await conn.query("SELECT streamingID FROM onair WHERE streamingName = ?", [streamingName]);
            delete channel.meta;

            return channel;

        } catch (err) {
            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }

    async setOnAir(streamingName, streamingID) {
        let conn;

        try {
            conn = await this.pool.getConnection();

            await conn.query("UPDATE onair SET streamingID = ? WHERE streamingName = ?", [streamingID, streamingName]);
            const rows = await conn.query("SELECT COUNT(*) AS chack FROM onair WHERE streamingID = ?", [streamingID]);

            if (rows[0].chack == "1") {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }

    // チャンネル一覧の取得
    // bgs_serverのdb.〇〇(引数)とasync〇〇が対応
    async showChannelList(count, category) {
        let conn;
        let channel;

        try {
            conn = await this.pool.getConnection();

            if (count == 1) {
                channel = await conn.query("SELECT ID, name, category, picture FROM channel WHERE category LIKE ?", [category[0]]);
            } else if (count == 2) {
                channel = await conn.query("SELECT ID, name, category, picture FROM channel WHERE category LIKE ? OR category LIKE ?", [category[0], category[1]]);
            } else {
                channel = await conn.query("SELECT ID, name, category, picture FROM channel WHERE category LIKE ? OR category LIKE ? OR category LIKE ?", [category[0], category[1], category[2]]);
            }
            delete channel.meta;

            return channel;

        } catch (err) {
            logger.info(err);
            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }

    // チャンネル詳細の取得
    async showDetail(ID) {
        let conn;

        try {
            conn = await this.pool.getConnection();

            const channel = await conn.query("SELECT ID, name, time_start, time_end, category, link, regular_holiday FROM channel WHERE ID = ?", [ID]);
            delete channel.meta;

            return channel;

        } catch (err) {
            throw err;

        } finally {
            if (conn) {
                conn.end();
            }
        }
    }
}