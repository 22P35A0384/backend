import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const Editimg = async (req, res) => {
    const { data } = req.body
    const reference_face_1 = `data:application/octet-stream;base64,${data}`;
    const input = {
        image: reference_face_1,
        codeformer_fidelity: 1
    };
    
    const output = await replicate.run("sczhou/codeformer:7de2ea26c616d5bf2245ad0d5e24f0ff9a6204578a5c876db53142edd9d2cd56", { input });
    return res.status(200).json(output)
  }

export default Editimg;  