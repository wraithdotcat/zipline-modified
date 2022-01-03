export interface ConfigCore {
  // Whether to return http or https links
  secure: boolean;

  // Used for signing of cookies and other stuff
  secret: string;

  // The host Zipline will run on
  host: string;

  // The port Zipline will run on
  port: number;

  // The PostgreSQL database url
  database_url: string

  // Whether or not to log stuff
  logger: boolean;

  // The interval to store stats
  stats_interval: number;
}

export interface ConfigUploader {
  // The route uploads will be served on
  route: string;

  // Length of random chars to generate for file names
  length: number;

  // Where uploads are stored
  directory: string;

  // Admin file upload limit
  admin_limit: number;

  // User file upload limit
  user_limit: number;

  // Disabled extensions to block from uploading
  disabled_extentions: string[];
}

export interface ConfigUrls {
  // The route urls will be served on
  route: string;

  // Length of random chars to generate for urls
  length: number;
}

// Ratelimiting for users/admins, setting them to 0 disables ratelimiting
export interface ConfigRatelimit {
  // Ratelimit for users
  user: number;

  // Ratelimit for admins
  admin: number;
}

export interface Config {
  core: ConfigCore;
  uploader: ConfigUploader;
  urls: ConfigUrls;
  ratelimit: ConfigRatelimit;
}
