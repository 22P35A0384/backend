import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_a2NMceRlJTESaJ4PlP2JtCnsDWwjtJ73Zwgcs',
});

const Editimg = async (req, res) => {
    const { img } = req.body
    const input = {
        image: img,
        codeformer_fidelity: 1
    };
    
    const output = await replicate.run("sczhou/codeformer:7de2ea26c616d5bf2245ad0d5e24f0ff9a6204578a5c876db53142edd9d2cd56", { input });
    return res.status(200).json(output)
  }

export default Editimg;  