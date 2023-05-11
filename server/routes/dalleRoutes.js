import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();
<<<<<<< HEAD
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
router.route('/').get((req, res) => {
  res.send('Hello from Dall-E');
})
router.route('/').post(async (req, res) => {
=======

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
});
router.route("/").post(async (req, res) => {
>>>>>>> e1a29180cfb8e0b65b1a9547a1b41ba165aa0e1a
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
<<<<<<< HEAD
      size: '1024x1024',
      response_format: 'b64_json',
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image })

  } catch (error) {
    res.status(500).send(error?.response.data.error.message)
  }
})
export default router;
=======
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
>>>>>>> e1a29180cfb8e0b65b1a9547a1b41ba165aa0e1a
