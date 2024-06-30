import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const Img2text = async (req, res) => {
    const { img } = req.body
    const input = {
        image: img
    };
    
    const output = await replicate.run("abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61", { input });
    return res.status(200).json(output)
  }

export default Img2text;