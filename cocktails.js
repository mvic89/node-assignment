const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = '3000';

http.createServer((req,res) => {
    const fullpath = url.parse(req.url, true)

    console.log('href :' + fullpath.href) // /manhattan?whiskey=bourbon
    console.log('path :' + fullpath.pathname)  // /manhattan
    console.log('search :' + fullpath.search) // ?whiskey=bourbon
    
    res.writeHead(200, 'Whoohoo connection is successful!', {'Content-type': 'text/html'}) //now we can send html back to the client.
    

    // if (req.url === '/') {
    //     res.write('<h1>Welcome to the Cocktail page!</h1>')
    //     res.write('<p>This is a page w. some History and Ingredients about The old Fashioned and Manhattan!</p>')
    //     res.write('<a href="/manhattan">Manhattan</a>')
    //     res.end()
    // }

    if (req.url === '/') {
        res.write('<h1>Welcome to the Cocktail page!</h1>')
        res.write('<p>This is a page with some History and Ingredients about The Old Fashioned and Manhattan!</p>')
        res.write('<a href="/manhattan">Manhattan</a>')
        res.write('<a href="/oldfashioned">The Old Fashioned</a>')
        res.end()
    } else if (req.url === '/manhattan') {
        res.write('<h1>Manhattan Cocktail</h1>')
        res.write('<p>History and Ingredients of the Manhattan Cocktail.</p>')
        res.write('<p>Whiskey: Bourbon or Rye, Vermouth: Sweet, Garnish: Cherry.</p>')
        res.end()
    } else if (req.url === '/oldfashioned') {
        res.write('<h1>The Old Fashioned Cocktail</h1>')
        res.write('<p>History and Ingredients of the Manhattan Cocktail.</p>')
        res.write('<p>Whiskey: Bourbon or Rye, Vermouth: Sweet, Garnish: Cherry.</p>')
        res.end()

    } else {
        res.write('<h1>404: Page not found</h1>');
        res.end();
    }

}).listen(PORT, () => console.log(`listening to port ${PORT}`));