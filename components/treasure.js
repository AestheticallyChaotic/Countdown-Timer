AFRAME.registerComponent("target-coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coins${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
      var coinsEl = document.createElement("a-entity");
  
      coinsEl.setAttribute("id",id);
      coinsEl.setAttribute("position",position);
      coinsEl.setAttribute("material","color","#ff9100");
      coinsEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   

      coinsEl.setAttribute("static-body", {
        shape: "sphere", 
        sphereRadius: 2
      })
  
      coinsEl.setAttribute("game-play", {
        elementId: `#${id}`
      })
          
      islandEl.appendChild(coinsEl);
    }
  });