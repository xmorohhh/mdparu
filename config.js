/* Copyright (C) 2022 X-Electra.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

X-asena X-Electra
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZPWCtKbzExK3ZhZ01Jb24wUzBiV1BjeXRmSzQ4ZUh6b0VJMHMvTjMyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHVjSThNUUt1N2l0M21UaDBPQWh4T1pscWlDdDU0TnR1T3UzRy9MUnJsVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSUIrYitBdVNhd1BRMmJOZEZTazVvQ1lMeXVudjRTNTBteDlrUE1kQzB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZEhLVVlYZ2o0SXNrL2NSZlFDQVZiaWZjQ0pHR0FjU05oeStJSlZmWlZjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMQ3hJdFpPYnV3Q0ttWG03UHB2eU5FUHVGYjZLNk1nREZNTEdhK3h0Rjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZxV1hjamhGQVJ6bDk1NS9RSDhCODZjOGtweXNIVkZrMjI4VzlURkRjaUk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWTNsUG5HU3BJVkNNbCtVS05qakJ3bTVqcVoxZklXOTRYSDV2R0UzeEMySTRLRlVqeG5ueDRxemQ2UkdHTTZZeC9sMlhZaEdxT2ZjN0dUYzUvb0toUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjg2LCJhZHZTZWNyZXRLZXkiOiJhdmRFYURGTHp2L3U4ZElXTlJGTEtFTUdqcXZuT2NGTEZZZDRNU1pTdFJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTDduOGdGRUtqdzBhTUdHQVE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1COWxTVDdTU3FROEhTL2JrWGNLOG1lQVY5Q1NQazBNSVpMbm04ZlFQeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjYwVExqaVd4YjdsTjlac3o2VXNnMU03VDF5Tys3M2FacldRYTRuaDVKMzkyVUs5eWdaTHhuM2JJN2F0eDM5MmlybUh4dU1ScnNHOWN6Ly9tOTZpSkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzamdCTGpPMXY4NHhSZlFZQU0yNWw3Zll3aFVmU2JHTVBIVGxWa1ZUeXZiNXVzT1JOaVkvYmxpNHhLUlVtaGhIeWVjZS9KcWQzWEltTlprcGo4UmRoQT09In0sIm1lIjp7ImlkIjoiOTE4MTU2OTg0Mzk2OjQ4QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODE1Njk4NDM5Njo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZ2ZaVWsrMGtxa1BCMHYyNUYzQ3ZKbmdGZlFrajVORENHUzU1dkgwRDhnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjg1MzU0NTM5fQ==",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "X-asena",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "X-electra",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  SUDO: process.env.SUDO || "918113921898,919544951258",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "Neeraj-X0",
  BOT_NAME: process.env.BOT_NAME || "X-asena",
  WORK_TYPE: process.env.WORK_TYPE || "public",
};
