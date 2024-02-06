function stove(pot) {
      const obj1  = {
        name:"pot",
        color: "green",
        size: "small",
      };  
    
      const obj2 ={
        name:"stove",
        color: "white",
        size: "large", 
      };
      pot(obj1, obj2);
    }

    module.exports= stove;
    