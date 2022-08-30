const grpc = require("@grpc/grpc-js");

const { definition_proto } = require("config");

const client = new definition_proto.Definition(
  "localhost:3000",
  grpc.credentials.createInsecure()
);

client.getBooks({}, (err, response) => {
  console.log(JSON.stringify(response));
});
