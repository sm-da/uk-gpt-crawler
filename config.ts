import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://health.gov.ua/",
  match: "https://health.gov.ua/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "health-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
