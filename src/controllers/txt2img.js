import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_a2NMceRlJTESaJ4PlP2JtCnsDWwjtJ73Zwgcs',
});

const Txt2img = async (req, res) => {
    const { text } = req.body
    const input = {
        prompt: text
    };
    
    const output = await replicate.run("bytedance/sdxl-lightning-4step:5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f", { input });
    return res.status(200).json(output[0])
  }

export default Txt2img;