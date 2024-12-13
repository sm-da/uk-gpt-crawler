import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://minagro.gov.ua/tag/roslinnictvo",
  match: "https://minagro.gov.ua/tag/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "minagro.json",
  maxTokens: 2000000,
  selector: "body",
};
