import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json'
import colors from '../bg-colors.json'

const QuoteBox = () => {
    const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length))
    const [colorsIndex, setColorsIndex] = useState(Math.floor(Math.random() * colors.length))

    const changeQuote = () =>{
        setQuoteIndex(Math.floor(Math.random() * quotes.length))
        setColorsIndex(Math.floor(Math.random() * colors.length))
    }

    const body = document.body
    body.style = `background-color: ${colors[colorsIndex].hex}`

    return (
        <header className='card-container'>
            <article className="card">
                
            <div className="quote-info" style={{color: `${colors[colorsIndex].hex}`}}>
            <i className='bx bxs-quote-left bx-lg'></i>
            <p className="quote-text">
                {quotes[quoteIndex].quote}
            </p>
            </div>

            <p className="quote-author" style={{color: `${colors[colorsIndex].hex}`}}>
                ~ {quotes[quoteIndex].author}
            </p>

            <div className="btn-container">
            <p className="quote-btn" onClick={changeQuote} style={{background: `${colors[colorsIndex].hex}`}}>
            <i className='bx bx-chevron-right bx-md'></i>
            </p>
            </div>
           

            </article>
        </header>
    );
};

export default QuoteBox;