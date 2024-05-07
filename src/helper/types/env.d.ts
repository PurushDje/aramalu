export {};

declare global{
    namespace NodeJS {
        interface ProcessENV {
            BROWSER: "firefox" | "webkit" | "chrome",
            ENV: "staging" | "prod" | "test",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }

}