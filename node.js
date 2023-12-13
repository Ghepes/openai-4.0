import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-l74B16OhtCStEqa7MFc52h67",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();