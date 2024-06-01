/// <reference types="vite/client" />

interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "jwt-check-expiration" {
  export function isJwtExpired(token: string): boolean;
}
