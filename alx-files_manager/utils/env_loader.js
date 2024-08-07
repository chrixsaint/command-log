import { existsSync, readFileSync } from "fs";
import { URL } from "url";

/**
 * Loads the appropriate environment variables for an event.
 */
const envLoader = () => {
  const env = process.env.npm_lifecycle_event || "dev";
  const path =
    env.includes("test") || env.includes("cover") ? ".env.test" : ".env";

  if (existsSync(path)) {
    const data = readFileSync(path, "utf-8").trim().split("\n");

    for (const line of data) {
      const delimPosition = line.indexOf("=");
      const variable = line.substring(0, delimPosition);
      const value = line.substring(delimPosition + 1);
      process.env[variable] = value;
    }

    if (process.env.MONGODB_CONNECTION_STRING) {
      const { hostname, port, pathname } = new URL(
        process.env.MONGODB_CONNECTION_STRING
      );
      process.env.DB_HOST = hostname;
      process.env.DB_PORT = port || "27017";
      process.env.DB_DATABASE = pathname.split("/")[1];
    }
  }
};

export default envLoader;
