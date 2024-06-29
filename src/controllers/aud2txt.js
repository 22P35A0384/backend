import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_a2NMceRlJTESaJ4PlP2JtCnsDWwjtJ73Zwgcs',
});

const Aud2txt = async (req, res) => {
    const { audio } = req.body
    const input = {
        audio: audio
    };
    
    const output = await replicate.run("openai/whisper:4d50797290df275329f202e48c76360b3f22b08d28c196cbc54600319435f8d2", { input });
    return res.status(200).json(output)
  }

export default Aud2txt;