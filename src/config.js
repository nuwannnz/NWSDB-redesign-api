module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET || "nwsdb-api",
    tokenOptions: {
      expiresIn: "10h",
      issuer: process.env.JWT_ISSUER || "nwsdb-api",
    },
  },
  db: {
    path: "nwsdb.sqlite",
  },
};
