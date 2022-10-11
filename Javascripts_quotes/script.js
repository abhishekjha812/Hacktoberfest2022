var quotes = document.getElementById("new_quote");
        const author = document.getElementById("author");
        const newQ = document.getElementById("newQ");
        const tweetMe = document.getElementById("tweerMe");
        let realData = "";
        let quotesData = "";
        
        const tweetNow = () => {
            let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}${quotesData.author}`;
            window.open(tweetPost);
        };
        
        
        const getNewQuotes = () => {
            console.log("inside the function");
            let rnum = Math.floor(Math.random() * 10);
            const getQuotes = async () => {
                const api = "https://type.fit/api/quotes";
                console.log("inside the get quote function");
                try {
                    let data = await fetch(api);
                    realData = await data.json();
                    console.log(String(realData[rnum].text));
                    console.log(quotes);
                    quotes = String(realData[rnum].text);
                    document.getElementById("quotes").innerHTML= quotes;
                    
                } catch (error) {console.log(error); }
            };    
            getQuotes();
        }
      