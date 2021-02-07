const axios     = require('axios'),
      cheerio   = require('cheerio');

// Immediately Invoked Function
async function getPrice(stock) {
    try {
        // Extract data from req
        let { data } = await axios.get(`https://finance.yahoo.com/quote/${stock}?p=${stock}&.tsrc=fin-srch`);

        // deconstruct obj returned from req website axios - using cheerio
        let $ = cheerio.load(data);

        // GME/AMC/OncolyticsBiotech stock 
        if (stock == 'AMC' 
            || stock == 'GME' 
            || stock == 'ONCY'
            || stock == 'TSLA') 
        {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="50"]').first().text()} | (${$('span[data-reactid="51"]').first().text()})`);
        } 
        // Luminar Tech LAZR stock
        else if (stock == 'LAZR') {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="46"]').first().text()} | (${$('span[data-reactid="47"]').first().text()})`);
        }
        // BTC/ETC/ETH/DOGE/XRP stock
        else if (stock == 'BTC-USD' 
                || stock == 'ETC-USD' 
                || stock == 'ETH-USD' 
                || stock == 'DOGE-USD' 
                || stock == 'XRP-USD'
                || stock == 'LTC-USD') 
        {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="33"]').eq(1).text()}`);
        }

    } 
    catch(err) 
    {
        console.log(err);
    }
}
setInterval(() => {
    /* Stock */
    getPrice('TSLA');
    getPrice('GME');
    getPrice('AMC');
    getPrice('ONCY');
    getPrice('LAZR');

    /* CryptoCurrencies */
    getPrice('BTC-USD');
    getPrice('ETC-USD');
    getPrice('ETH-USD');
    getPrice('DOGE-USD');
    getPrice('XRP-USD');
    getPrice('LTC-USD');
}, 10000);