import express from 'express';

export default function createApp() {
  const app = express();

  app.listen(parseInt(process.env.PORT, 10), () => console.info(`App up and running on port: ${process.env.PORT}`));
}
