import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const Prmt2aud = async (req, res) => {
    const { text } = req.body
    const output = await replicate.run(
        "sakemin/musicgen-stereo-chord:fbdc5ef7200220ed300015d9b4fd3f8e620f84547e970b23aa2be7f2ff366a5b",
        {
          input: {
            bpm: 90,
            top_k: 250,
            top_p: 0,
            prompt: text,
            duration: 30,
            time_sig: "4/4",
            audio_start: 0,
            temperature: 1,
            text_chords: "C G:dim7 F:7 A:min",
            continuation: false,
            model_version: "stereo-chord-large",
            output_format: "wav",
            chroma_coefficient: 1,
            multi_band_diffusion: false,
            normalization_strategy: "loudness",
            classifier_free_guidance: 3
          }
        }
      );
    return res.status(200).json(output)
  }

export default Prmt2aud;