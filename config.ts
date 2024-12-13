import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mfa.gov.ua/",
  match: "https://mfa.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mfa-gov-ua.json",
  maxTokens: 2000000,
  selector: "body"
};
