var fruitsDb=["apple","banana","orange","pineapple","grapes","avacado","strawberry"];
var mixedFruitArr=["grapes","cabage","tomato","banana"];
function filterfruits(fruitsDb,mixedFruitArr){
    var filtered_fruits=[]; 
    for(let fruitsDb_element of fruitsDb){
        // console.log(fruitsDb[i]);
        for(let mixedFruitArr_element of mixedFruitArr)
        {
            // console.log(mixedFruitArr[j]);
            if(fruitsDb_element===mixedFruitArr_element)
                {
                filtered_fruits.push(fruitsDb_element);
                console.log(fruitsDb_element);
                }    
        }
    }
    return filtered_fruits;
}
filterfruits(fruitsDb,mixedFruitArr);