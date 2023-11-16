import React, { Component } from 'react';
import axios from 'axios';

class FoodQuote extends Component {
    state = {
        quote: '',
        author: ''
    };

    fetchFoodQuote = async () => {
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

                this.setState({
                    quote: quoteText,
                    author: quoteAuthor
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchFoodQuote();
    }

    render() {
        const { quote, author } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <p>Q U O T E</p>
                    <h1 className="heading">{quote}</h1>
                    <p className="author">- {author}</p>
                    <button className="button" onClick={this.fetchFoodQuote}>
                        <span>GIVE ME A FOOD QUOTE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default FoodQuote;
