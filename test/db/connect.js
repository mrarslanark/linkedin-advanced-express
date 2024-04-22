/* eslint-disable no-unused-expressions */
const chai = require("chai");

const { MongoClient, ServerApiVersion } = require("mongodb");
const { database } = require("../../server/config");

const client = new MongoClient(database.cs, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const should = chai.should();
const { expect } = chai;
const configDev = require("../../server/config").development;
const configProd = require("../../server/config").production;
const configTest = require("../../server/config").test;

describe("The DSN", () => {
  it("should be configured for development", async () => {
    expect(configDev.database.name).to.be.a("string");
  });
  it("should be configured for production", async () => {
    expect(configProd.database.name).to.be.a("string");
  });
  it("should be configured for testing", async () => {
    expect(configTest.database.name).to.be.a("string");
  });
});

describe("The database", () => {
  it("development should be reachable", async () => {
    await client.connect();
    const db = client.db(configDev.database.name);
    expect(db).to.not.be.null;
    await client.close();
  });

  it("test should be reachable", async () => {
    await client.connect();
    const db = client.db(configTest.database.name);
    expect(db).to.not.be.null;
    await client.close();
  });

  it("production should be reachable", async () => {
    await client.connect();
    const db = client.db(configTest.database.name);
    expect(db).to.not.be.null;
    await client.close();
  });
});
