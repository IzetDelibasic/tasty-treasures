import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const FoodQuote = () => {
    const [quoteData, setQuoteData] = React.useState({
        quote: '',
        author: ''
    });

    const navigate = useNavigate(); 

    const fetchFoodQuote = async () => {
        try {
            const apiKey = 'o/uaU0Hb2BDYhBusG6vYeg==GfAjfgVquea6ofy8'; 

            const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=food', {
                headers: { 'X-Api-Key': apiKey }
            });

            const data = response.data;

            if (data && data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                const quoteText = randomQuote.quote;
                const quoteAuthor = randomQuote.author;

                setQuoteData({
                    quote: quoteText,
                    author: quoteAuthor
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFoodQuote();
    }, []);

    const handleGoBack = () => {
        navigate('/recipe'); 
    };

    const { quote, author } = quoteData;

    return (
        <div className="app">
            <div className="card">
                <p>Q U O T E</p>
                <h1 className="heading">{quote}</h1>
                <p className="author">- {author}</p>
                <button className="button" onClick={fetchFoodQuote}>
                    <span>GIVE ME A FOOD QUOTE!</span>
                </button>
                <button className="button" onClick={handleGoBack}>
                    <span>GO BACK TO RECIPES</span>
                </button>
            </div>
        </div>
    );
};

export default FoodQuote;
