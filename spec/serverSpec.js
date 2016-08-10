var req = require('request');
var server = require('../server.js');
var base_url = "http://localhost:8000/";

describe("Food Planner Server", function(){
	describe("GET /", function(){
		it("returns status code 200", function(done){
			req.get(base_url, function(err, res, body){
				expect(res.statusCode).toBe(200);
				if (err) {
					done.fail(err);
				} else {
					done();
				}
			});
		});
	});
});