export const config = {
  db: {
    user: process.env.MONGODB_HOST as string,
    password: process.env.MONGODB_PASSWORD as string,
    host: process.env.MONGODB_DATABASE as string,
    database: process.env.SESSION_SECRET as string
  },
  session: {
    secret: process.env.SESSION_SECRET as string
  }
};
