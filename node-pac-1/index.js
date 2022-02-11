// finding whitespace
var name = "arfat jcbj jba"

var j=0;
for(var i =0 ; i<name.length ; i++){
  console.log(name[i])
  if(name[i]===' '){
    console.log('white space founed')
    j+=1
  }
}
console.log(j)

// find arfat
var array =['my ' ,'name ','is', 'arfat']
var newArray =[]
for(let i=0;i<array.length;i++){
  if(array[i]==='arfat')
{
  
  console.log('we founed arfat')

}
  console.log(i,array[i])

}
console.log(newArray)

var array =['arfat','arfatu']
array.pop('arfatu')
console.log(array)

// prvate functions

(function(a){
  console.log(a)
})('arfat');

((a)=>{
  console.log(a)
})('arfat');
function arfat(){
  console.log('arfat')
}
let array=['arfat',['arfat',]]

console.log(ar=array[1][0][0])
this.a='arfat'
console.log(a)
var obj ={
  name:'arfat',
  age:18,
  gander:"male",
  myfunc: function(){
    console.log('my name is ',this.name,'my age',this.age,'my gender is',
    this.gander)
  }                                          
}


obj.myfunc.call(obj)

var obj ={
  name:'arfat',
  name:'arfats',
  age:18,
  gander:"male",
                                          
}

log(10)
console.log(obj.name.search())