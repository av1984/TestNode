var fortunes = [
    '11111', '22222', '333333', '44444'
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];    
};