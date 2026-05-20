const REQUIRED_ENV_VARS = [
  "PORT",
  "DATABASE_URL",
  "JWT_SECRET",
  "STELLAR_NETWORK",
  "STELLAR_SECRET_KEY",
];

export function validateEnv(): void {
  const missing: string[] = [];

  for (const key of REQUIRED_ENV_VARS) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    for (const key of missing) {
      console.error(`Missing required environment variable: ${key}`);
    }
    process.exit(1);
  }

  console.log("✅ Environment variables validated successfully.");
}