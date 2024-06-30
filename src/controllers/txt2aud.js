import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.replicate_token,
});

const Txt2aud = async (req, res) => {
    let voiceType
    const { text,voice } = req.body
    if(voice==='male'){
        voiceType = 'en_speaker_1'
    }else{
        voiceType = 'announcer'
    }
// en_speaker_1
    const output = await replicate.run(
        "suno-ai/bark:b76242b40d67c76ab6742e987628a2a9ac019e11d56ab96c4e91ce03b79b2787",
        {
          input: {
            prompt: text,
            text_temp: 0.7,
            output_full: false,
            waveform_temp: 0.7,
            history_prompt:'announcer'
          }
        }
      );
    console.log(output)
    return res.status(200).json(output)
  }

export default Txt2aud;