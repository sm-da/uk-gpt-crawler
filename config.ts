import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mtu.gov.ua/",
  match: "https://www.mtu.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mtu-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
