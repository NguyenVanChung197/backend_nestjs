export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    password: process.env.PASSWORD,
  },
});
