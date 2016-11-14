let router = require("express").Router();

router.get("/", (req, res,next) =>
{
    let e = {message: "upps"};
    // let err = null;
    //
    // let e = new Error("upps");
    e.status = 408;
    return next(e);
    res.json({msg: "Hello World"});
});


module.exports = router;
