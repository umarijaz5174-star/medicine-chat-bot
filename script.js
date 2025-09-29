async function getQueryAnswer () {
    try {
        const divRef = document.querySelector("#weather");
        const queryInputRef =  document.querySelector("#query");
        const query = queryInputRef.value;


        const res = await axios.post (
             "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
             {
                contents: [
                    {
                         parts: [
                        {
                        text: "You are an Expert in medicine, who knows every medicine. For other queries say: 'I don't know'."

                        },
                        {
                            text: query,
                        }
                    ],
                    },
                   
                ],
             },
             {
                headers: {
                     "X-goog-api-key": "AIzaSyCZXerMjJRxePtH9vtLBhUFImlr6VomPyg",
          "Content-Type": "application/json"
                }
             }
        );
        const answer = res.data.candidates[0].content.parts[0].text;
        divRef.innerHTML = answer;

    }catch (err) {
        console.error(err);
        alert("Something went wrong, please check your internet connection.")
    }
    
}