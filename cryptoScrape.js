const axios     = require('axios'),
      cheerio   = require('cheerio');

// Immediately Invoked Function
async function getPrice(stock) {
    try {
        // Extract data from req
        let { data } = await axios.get(`https://finance.yahoo.com/quote/${stock}?p=${stock}&.tsrc=fin-srch`);

        // deconstruct obj returned from req website axios - using cheerio
        let $ = cheerio.load(data);

        /* Stocks */
        // GME/AMC/OncolyticsBiotech/Pfizer(PFE)/Merck & Co., Inc. (MRK) 
        if (   stock == 'TSLA' 
            || stock == 'AMC' 
            || stock == 'GME' 
            || stock == 'ONCY'
            || stock == 'PFE'
            || stock == 'MRK') 
        {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="50"]').first().text()} | (${$('span[data-reactid="51"]').first().text()})`);
        } 
        // Luminar Tech LAZR stock
        else if (stock == 'LAZR') {
            console.log(`${stock} IS Temporarily OUT OF SERVICE: ${stock} !== $${$('span[data-reactid="46"]').first().text()}`);
            console.log(`BROKEN: ${stock} ${$('span[data-reactid="46"]').first().text()} | (${$('span[data-reactid="46"]').next().text()}`);
            /* Oddly below doesn't work anymore! ? ! */
            // console.log(`The current price of ${stock} is: $${$('span[data-reactid="46"]').first().text()} | (${$('span[data-reactid="47"]').first().text()})`);
        }
        // Sundial Growers Marijuana Stock SNDL
        // GOLD Barrick Gold Corp GOLD
        else if (  stock == 'SNDL'
                || stock == 'VFF'
                || stock == 'GOLD') {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="50"]').first().text()} | (${$('span[data-reactid="51"]').first().text()})`);
            console.log(`The AfterHouse price of ${stock} is: $${$('span[data-reactid="55"]').first().text()} | (${$('span[data-reactid="58"]').first().text()})`);
        }
        // BTC/ETC/ETH/DOGE/Celo/XRP stock
        else if (  stock == 'BTC-USD' 
                || stock == 'ETC-USD' 
                || stock == 'ETH-USD' 
                || stock == 'DOGE-USD' 
                || stock == 'LTC-USD'
                || stock == 'CELO-USD'
                || stock == 'USDT-USD'
                || stock == 'XRP-USD') 
        {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="33"]').eq(1).text()} | (${$('span[data-reactid="34"]').first().text()})`);
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
    getPrice('ONCY');
    getPrice('LAZR');
    getPrice('SNDL');
    getPrice('VFF');
    getPrice('GOLD');

    /* DONT WANT just wathcing! */
    getPrice('PFE');
    getPrice('MRK');
    getPrice('GME');
    getPrice('AMC');

    /* CryptoCurrencies */
    getPrice('BTC-USD');
    getPrice('ETC-USD');
    getPrice('ETH-USD');
    getPrice('DOGE-USD');
    getPrice('XRP-USD');
    getPrice('LTC-USD');
    getPrice('CELO-USD');
    getPrice('USDT-USD');
}, 20000);