const home= (req,res)=>{
    res.write('Forms app home');
    res.end('\n');
};
module.exports = {home};