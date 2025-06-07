declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PROJECT_URL: string;
    }
  }
}

export { }