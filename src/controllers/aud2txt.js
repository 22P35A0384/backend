import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const Aud2txt = async (req, res) => {
    const { audio } = req.body
    const reference_face_1 = `data:application/octet-stream;base64,${audio}`;
    const input = {
        audio: reference_face_1
    };
    
    const output = await replicate.run("openai/whisper:4d50797290df275329f202e48c76360b3f22b08d28c196cbc54600319435f8d2", { input });
    return res.status(200).json(output)
  }

export default Aud2txt;