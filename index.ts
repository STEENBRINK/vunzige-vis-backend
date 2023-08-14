import createApp from './src/app';

const service = createApp();
const port = parseInt(process.env.PORT, 10) || 5000;
service.listen(port, () => console.info(`App listening on port ${port}!`));

export default service;
