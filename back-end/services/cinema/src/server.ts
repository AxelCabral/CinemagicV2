import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3332, () => console.log("Server is running in port 3332"));