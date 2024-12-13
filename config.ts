import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.kyivpost.com/",
  match: "https://www.kyivpost.com/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "kyivpost-com.json",
  maxTokens: 2000000,
  selector: "body",
};
