import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_a2NMceRlJTESaJ4PlP2JtCnsDWwjtJ73Zwgcs',
});

const Txt2vid = async (req, res) => {
    const { text } = req.body
    const input = {
        prompt: text
    };
    
    const output = await replicate.run("cjwbw/videocrafter:02edcff3e9d2d11dcc27e530773d988df25462b1ee93ed0257b6f246de4797c8", { input });
    return res.status(200).json(output)
  }

export default Txt2vid;