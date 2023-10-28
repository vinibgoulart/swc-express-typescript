import { createServer } from "http";

import app from "./app";

export const server = async () => {
  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
