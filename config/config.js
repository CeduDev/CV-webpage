let config = {};
const DATABASE_URL = Deno.env.toObject().DATABASE_URL;

//port is 7777 unless it's run on heroku
config.port = 7777;
if(Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  config.port = Number(lastArgument)
}

//database is either the heroku database or the one provided by the code
if (DATABASE_URL) {
  config.database = DATABASE_URL;
} else {
  config.database = {
    hostname: "hattie.db.elephantsql.com",
    database: "tvpjwaxh",
    user: "tvpjwaxh",
    password: "JBb59ZPhbfcNCHqx2GCkk9QteKn-NCfQ",
    port: 5432
  };
}

export { config };