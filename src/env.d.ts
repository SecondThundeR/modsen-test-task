/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GOOGLE_BOOKS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
