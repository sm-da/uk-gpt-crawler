import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://platformonline.com.ua/",
  match: "https://platformonline.com.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "platformonline.json",
  maxTokens: 2000000,
  selector: "body"
};
