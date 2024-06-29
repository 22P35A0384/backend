import Replicate from "replicate";
import { readFile } from "node:fs/promises";


const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const ImgGeneration = async (req, res) => {
    const { data, gender, hairstyle } = req.body
    // const data = (await readFile("public/profiles/1708077067461_22P35A0384.jpg")).toString("base64");
    const reference_face_1 = `data:application/octet-stream;base64,${data}`;
    const output = await replicate.run(
        "zsxkib/flash-face:edb17f54faec253ee86e58e0b5f18f24a89c4e31fe7fcefa970e13d8ad934117",
        {
          input: {
            seed: 0,
            steps: 50,
            num_sample: 5,
            face_guidance: 2.5,
            lamda_feature: 0.9,
            output_format: "webp",
            output_quality: 80,
            negative_prompt: "nsfw",
            positive_prompt: `A handsome young ${gender} with ${hairstyle} hair cut is sitting in a chair in a empty room with plain background`,
            reference_face_1: reference_face_1,
            face_bounding_box: "[0., 0., 0., 0.]",
            text_control_scale: 7.5,
            default_negative_prompt: "blurry, ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, bad anatomy, watermark, signature, cut off, low contrast, underexposed, overexposed, bad art, beginner, amateur, distorted face",
            default_position_prompt: "best quality, masterpiece,ultra-detailed, UHD 4K, photographic",
            step_to_launch_face_guidance: 700
          }
        }
      );
      return res.status(200).json(output)
  }

export default ImgGeneration;
