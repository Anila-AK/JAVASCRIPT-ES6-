// map object cannot have duplicate keys 
//can have duplicate values 
// key and value can be any Data type ...obj and primitive data type 
// map is iterable object...

//function within map object 
// clear() , delete(), ForEAch(), Has(), Values()
//set(key, value) get().key()

let map =new Map();
console.log(map);

map.set(11, 'JS');
map.set(12, "css");
map.set(11, "Javascript")
console.log(map);

//get (key )
console.log(12);
console.log(map.get(11));

//how to find avlue of Key using args as value 
function getByvalue(map, getvalue) {
    for(let [key, value]of map.entries())
    { if(value=== getvalue)
        {
            return key
        }

    }
    
}

let peopleName= new Map();
peopleName.set(1, 'ali');
peopleName.set(2, 'aaa');
console.log(getByvalue(peopleName, "ali"));
