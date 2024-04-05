import axios from "axios";
import parse from 'html-react-parser';

export const fetchData = async({text, user, companyName, companyDesc, motivation}) => {
    console.log("Anish")
    console.log(text);
    console.log(companyName);
    console.log(companyDesc);
    console.log(motivation);
    try {
        const commonBody = {
            inputText: text,
            company: companyName,
            whatItDoes: companyDesc,
            motivation: motivation,
            userid: "aheldc" //user.uid,
        }

        const headers = {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
          Accept: 'application/json'
        }

        const response1 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/1`, commonBody, {
          headers: headers
        })

        const response2 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/2`, commonBody, {
          headers: headers
        })
        
        const response3 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/3`, commonBody, {
          headers: headers
        })

        const response4 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/4`, commonBody, {
          headers: headers
        })

        const response5 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/5`, commonBody, {
          headers: headers
        })

        const response6 = await axios.post(`https://automatic-puzzle-kidney.glitch.me/quirkgen/rewrite/6`, commonBody, {
          headers: headers
        })

        console.log(parse(response1.data));

        return{
            whatsapp:parse(response1.data),
            email: parse(response2.data),
            twitter: parse(response3.data),
            instagram: parse(response4.data),
            linkedin: parse(response5.data),
            facebook: parse(response6.data)
        }
    } catch (error) {
        throw new Error("Failed to fetch data from APIs")
    }
}
