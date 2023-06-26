AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#ring1" },    
    },
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    init: function () {
      var duration = 120;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
    
    isCollided: function (elementId) {
    const element = document.querySelector(elementId);
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                element.setAttribute("visible", false);
                console.log("ring collision");
            }
            if (elementId.includes("#fish")) {
                console.log("fish collision");
            }
        })
    },

    updateScore: function() {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
            value : currentScore,
        });
    },

    startTimer : function(duration, timerEl) {
        var minutes;
        var seconds;

        setInterval(()=> {
            if (duration >=0) {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds,
                });

                duration -= 1;
            }
            else {
                this.gameOver();
            }
        }, 1000)
    }

});