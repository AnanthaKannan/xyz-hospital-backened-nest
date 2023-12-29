export default () => ({
  port: parseInt(process.env.MONGO_URL, 10),
  database: {
    host: process.env.MONGO_URL,
  },
});
