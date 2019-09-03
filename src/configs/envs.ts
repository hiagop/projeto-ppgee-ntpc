import dotenv from "dotenv";

dotenv.config();

export const config = {
  db: {
    user: process.env.MONGODB_USER as string,
    password: process.env.MONGODB_PASSWORD as string,
    host: process.env.MONGODB_HOST as string,
    port: process.env.MONGODB_PORT as string,
    database: process.env.MONGODB_DATABASE as string
  },
  session: {
    secret: process.env.SESSION_SECRET as string
  },
  server: {
    port: process.env.SERVER_PORT as string
  },
  fb: {
    client_id: process.env.FB_CLIENT_ID as string,
    client_secret: process.env.FB_CLIENT_SECRET as string
  }
};
