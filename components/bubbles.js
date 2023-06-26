AFRAME.registerComponent("bubbles", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `bubble${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createBubbles(id, position);
      }
    } ,
  
    createBubbles: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var bubbleEl = document.createElement("a-entity");
  
      bubbleEl.setAttribute("id",id);
      bubbleEl.setAttribute("position",position);

      bubbleEl.setAttribute("animation-mixer",{})
  
      islandEl.appendChild(bubbleEl);
    }
  });  