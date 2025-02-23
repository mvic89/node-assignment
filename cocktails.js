const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = '3001';

http.createServer((req, res) => {
    const fullpath = url.parse(req.url, true);

    // console.log(fullpath)

    // console.log('href: ' + fullpath.href) // /manhattan?rye=ingredients
    // console.log('pathname: ' + fullpath.pathname) // /manhattan
    // console.log('search:' + fullpath.search) // ?rye=ingredients

    let queries = fullpath.query;
    // console.log('bourbon: ' + queries.bourbon); //bourbon=ingredients

    res.writeHead(200, 'Connection successful', {'Content-type': 'text/html'})
    if (req.url === '/') {
        res.write('<h1>Welcome to the Cocktails page!</h1>')
        res.write("<a style='margin-right: 16px' href='/manhattan'>Manhattan</a>")
        res.write("<a style='margin-right: 16px' href='/oldfashioned'>The Old Fashioned</a>")
    }
    

    if(fullpath.pathname === '/oldfashioned') {
        res.write('<h1>Welcome to The Old Fashioned page</h1>')
        res.write("<a style='margin-right: 16px' href='/'>Home</a>")
        res.write("<a style='margin-right: 16px' href='/manhattan'>Manhattan</a>")
        res.write('<div><p>Here is the history and the ingredients:</p></div>')
        res.write("<a style='margin-right: 16px' href='/oldfashioned?bourbon=history'>History</a>")
        res.write("<a style='margin-right: 16px' href='/oldfashioned?bourbon=ingredients'>Ingredients</a>")

        if (queries.bourbon === 'history') {
            fs.readFile('./data/ofhistory.html', (error, data) => {
                if (error) {
                    res.write('Something went wrong')                    
                } else {
                    res.write(data)
                }
                res.end();

            });
            
        }

        if (queries.bourbon === 'ingredients') {
            fs.readFile('./data/ofingredients.html', (error, data) => {
                if (error) {
                    res.write(`<div>Something went wrong, there's an ${error}</div>`)
                } else {
                    res.write(data)
                }
                res.end();
            });
            
        }
    }

    if(fullpath.pathname === '/manhattan') {
        res.write('<h1>Welcome to The Manhattan page</h1>')
        res.write("<a style='margin-right: 16px' href='/'>Home</a>")
        res.write("<a style='margin-right: 16px' href='/oldfashioned'>The Old Fashioned</a>")
        res.write('<div><p>Here is the history and the ingredients:</p></div>')
        res.write("<a style='margin-right: 16px' href='/manhattan?rye=history'>History</a>")
        res.write("<a style='margin-right: 16px' href='/manhattan?rye=ingredients'>Ingredients</a>")

        if (queries.rye === 'history') {
            fs.readFile('./data/manhistory.html', (error, data) => {
                if (error) {
                    res.write('Something went wrong')                    
                } else {
                    res.write(data)
                }
                res.end();

            });
            
        }

        if (queries.rye === 'ingredients') {
            fs.readFile('./data/maningredients.html', (error, data) => {
                if (error) {
                    res.write(`<div>Something went wrong, there's an ${error}</div>`)
                } else {
                    res.write(data)
                }
                res.end();
            });
            
        }
    }
    
    res.end();




    
}).listen(PORT, () => console.log(`Listening to port: ${PORT}`))