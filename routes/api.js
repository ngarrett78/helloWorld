module.exports = function(express) {
    
    var router = express.Router();
    
    router.get('/v1', function(req, res) {
        res.json({hello: "world v1 and done"});
    });
    
    router.get('/status', function(req, res){
        res.json({ healthy: true});
    });
    
    return router;
}