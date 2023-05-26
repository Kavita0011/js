var fruitsDb=["apple","banana","orange","pineapple","grapes","avacado","strawberry"];
var mixedFruitArr=["grapes","cabage","tomato","banana"];
function filterfruits(fruitsDb,mixedFruitArr){
    var filtered_fruits=[];
    var Dblen=fruitsDb.length;
    var len=mixedFruitArr.length;
    for(let i=0;i<Dblen;i++){
        // console.log(fruitsDb[i]);
        for(let j=0;j<len;j++){
            // console.log(mixedFruitArr[j]);
            if(fruitsDb[i]===mixedFruitArr[j])
                {
                filtered_fruits.push(fruitsDb[i]);
                console.log(fruitsDb[i]);
                }    
        }
    }
    return filtered_fruits;
}
filterfruits(fruitsDb,mixedFruitArr);