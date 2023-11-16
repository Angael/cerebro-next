const verifyEnv = <T = string>(env: T | undefined): T => {
  if (!env) {
    throw new Error(`Missing env variable`);
  }
  return env;
};

export const BASE_API_URL = verifyEnv(process.env.BASE_API_URL);
