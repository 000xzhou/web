/**
## **Part One: Solidify Terminology**

In your own terms, define the following terms:

- What is HTTP?
    A port to a server
- What is a URL?
    A link
- What is DNS?
    A system that converts URL to IP address
- What is a query string?
    Let's you pass key-value pairs into the url
- What are two HTTP verbs and how are they different?
    Get - Get data from server
    POST - Send data to server
- What is an HTTP request?
    Request to server from client
- What is an HTTP response?
    Response from server to client
- What is an HTTP header? Give a couple examples of request and response headers you have seen.
    To let HTTP know what you want to do
    - Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
    - Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
    change to IP with DNS
    make a request to server
    send back a response back to you
    -The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
    -The browser makes separate HTTP requests for those resources and receives response from the server for each
 */

/**
## ****Part Two: Practice Tools****

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
    curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate
    "What did the pirate say on his 80th birthday? Aye Matey!"

2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
    curl -v icanhazdadjoke.com  
    Connected to icanhazdadjoke.com (2606:4700:3033::6815:420f) port 80
3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.
 */

/**
## **Part Three: Explore Dev Tools**

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.
    getInput=cat
    It added ? name = value   after the url


Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.


Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.
    it did give me a 405 


 */
