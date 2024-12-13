import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://minagro.gov.ua/timeline?&type=posts&category_id=10",
  match: "https://minagro.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "minagro.json",
  maxTokens: 2000000,
  selector: "body",
};
