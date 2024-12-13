import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mcsc.gov.ua/  ",
  match: "https://mcsc.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mcsc.json",
  maxTokens: 2000000,
  selector: "body",
};
