function LightBox() {
    this.images = document.querySelectorAll('.images-container img'); // select all the images with this css
    var that = this; // 

    this.init = function () {
        for (var i = 0; i < that.images.length; i++) { //
            (function (position) {
                that.images[position].addEventListener("click", function () { // click event 
                    var imageLocation = this.src;
                    that.createPopUp(imageLocation, position);
                });
            })(i); // this is provides position
        }
    };

    this.createPopUp = function (imageLocation, position) {
        var body = document.getElementsByTagName("body")[0]; // select all elements

        var lightBoxContainer = document.createElement("div"); // create div with id = light-box-container
        lightBoxContainer.setAttribute("id", "light-box-container");
        body.appendChild(lightBoxContainer); // visible in first layer

        var backgroundDiv = document.createElement("div"); // create div with class = light-box-background
        backgroundDiv.className = "light-box-background";
        lightBoxContainer.appendChild(backgroundDiv); // 

        var lightBoxImageDiv = document.createElement("div");
        lightBoxImageDiv.className = "light-box";
        lightBoxContainer.appendChild(lightBoxImageDiv);

        var productImage = document.createElement("img");
        productImage.setAttribute("src", imageLocation);
        lightBoxImageDiv.appendChild(productImage);

        var crossButton = document.createElement("div");
        crossButton.className = "light-box-cross-button";
        crossButton.innerHTML = "X"; // close
        lightBoxImageDiv.appendChild(crossButton);

        var rightArrow = document.createElement("div");
        rightArrow.className = "arrow right-arrow";
        rightArrow.innerHTML = ">"; // right arrow
        lightBoxImageDiv.appendChild(rightArrow);

        var leftArrow = document.createElement("div");
        leftArrow.className = "arrow left-arrow";
        leftArrow.innerHTML = "<"; // left arrow
        lightBoxImageDiv.appendChild(leftArrow);

        rightArrow.onclick = function () {
            if (position < that.images.length - 1) {
                var nextImageLocation = (that.images[position + 1]).src;
                closePopUp();
                that.createPopUp(nextImageLocation, position + 1)
            }
        };

        leftArrow.onclick = function () {
            if (position > 0) {
                var nextImageLocation = (that.images[position - 1]).src;
                closePopUp();
                thatreatePopUp(nextImageLocation, position - 1)
            }
        };

        crossButton.onclick = function () {
            closePopUp();
        };

        backgroundDiv.onclick = function () {
            closePopUp();
        };

        function closePopUp() {
            body.removeChild(lightBoxContainer);
        }
    };
}

var lb = new LightBox();
lb.init();
