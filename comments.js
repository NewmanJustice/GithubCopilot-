// Create web server with express
// Create a route that handles GET requests to the root URL, which should respond with a JSON representation of all comments
app.get('/', function(req, res) {
  res.json(comments);
});
// Create a route that handles POST requests to the root URL, which should add a comment to the comments array and respond with a JSON representation of all comments
app.post('/', function(req, res) {
  comments.push(req.body);
  res.json(comments);
});
// Create a route that handles DELETE requests to the root URL, which should remove the last comment from the comments array and respond with a JSON representation of all comments
app.delete('/', function(req, res) {
  comments.pop();
  res.json(comments);
});