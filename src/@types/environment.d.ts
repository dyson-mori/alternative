declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_RAILS_URL: string;
    }
  }
}

export { }