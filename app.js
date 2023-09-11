const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { connectDb } = require("./db");

const app = express();
connectDb();

app.get("/", (req, res) => {
  res.send("Taller Grapql con uso de metodos crud y database en Mongodb api");
});

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });

  app.use((req, res, next) => {
    res.status(404).send("not found");
  });

  app.listen(process.env.PORT || 4000, () =>
    console.log("Server on port", process.env.PORT || 4000)
  );
}

start();
