/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKS_API_URL: string;
  readonly VITE_BOOKS_API_KEY: string;
  readonly VITE_BOOKS_MAX_RESULTS: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
