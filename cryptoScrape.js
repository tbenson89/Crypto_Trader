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
        // CyberOptics Corporation CYBE
        if (   stock == 'TSLA' 
            || stock == 'AMC' 
            || stock == 'GME' 
            || stock == 'ONCY'
            || stock == 'PFE'
            || stock == 'MRK'
            || stock == 'CYBE') 
        {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="50"]').first().text()} | (${$('span[data-reactid="51"]').first().text()})`);
        } 
        // Luminar Tech LAZR stock
        else if (stock == 'LAZR') {
            /* Oddly: works again */
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="46"]').first().text()} | (${$('span[data-reactid="47"]').first().text()})`);

            /* Uncomment below if no work anymore! ? ! */
            // console.log(`${stock} IS Temporarily OUT OF SERVICE: ${stock} !== $${$('span[data-reactid="46"]').first().text()}`);
            // console.log(`BROKEN: ${stock} ${$('span[data-reactid="46"]').first().text()} | (${$('span[data-reactid="46"]').next().text()}`);
        }
        // Sundial Growers Marijuana Stock SNDL
        // Village Farms VFF
        // GOLD Barrick Gold Corp GOLD
        // Unity Biotechnology UBX
        // NRG Energy Inc NRG
        // BIO-Rad Labs BIO
        // NortonLifeLock NLOK
        else if (  stock == 'SNDL'
                || stock == 'VFF'
                || stock == 'GOLD'
                || stock == 'UBX'
                || stock == 'NRG'
                || stock == 'BIO'
                || stock == 'NLOK') {
            console.log(`The current price of ${stock} is: $${$('span[data-reactid="50"]').first().text()} | (${$('span[data-reactid="51"]').first().text()})`);
            console.log(`The AfterHouse price of ${stock} is: $${$('span[data-reactid="55"]').first().text()} | (${$('span[data-reactid="58"]').first().text()})`);
        }
        // BTC/ETC/ETH/DOGE/Celo/XRP stock
        // Cardano USD (ADA-USD)
        else if (  stock == 'BTC-USD' 
                || stock == 'ETC-USD' 
                || stock == 'ETH-USD' 
                || stock == 'DOGE-USD' 
                || stock == 'LTC-USD'
                || stock == 'CELO-USD'
                || stock == 'USDT-USD'
                || stock == 'XRP-USD'
                || stock == 'ADA-USD') 
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
    getPrice('UBX');
    getPrice('CYBE');

    /* DONT WANT just wathcing! */
    getPrice('PFE');
    getPrice('MRK');
    getPrice('NRG');
    getPrice('BIO');
    getPrice('NLOK');
    //getPrice('GME');
    //getPrice('AMC');

    /* CryptoCurrencies */
    getPrice('BTC-USD');
    getPrice('ETH-USD');
    //getPrice('ETC-USD');
    getPrice('LTC-USD');
    getPrice('CELO-USD');
    getPrice('ADA-USD');
    getPrice('XRP-USD');
    //getPrice('DOGE-USD');
    //getPrice('USDT-USD');
}, 20000);