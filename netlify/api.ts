import serverless from "serverless-http";
import { app } from "../src/app"; // importa o mesmo app.ts

export const handler = serverless(app);
