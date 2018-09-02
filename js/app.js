/* 
 * Author: Amit Man Singh
 * Title: Cat Clicker Premium
 * Date: 09/01/2018
 */
 (function() {
/**************model********************/
    var data = {
        curID : 1,
        curCatImg : '',
        curCatCount : [],
        cats : ['cat_picture1.jpg','cat_picture2.jpg','cat_picture3.jpg','cat_picture4.jpg','cat_picture5.jpg','cat_picture6.jpg','cat_picture7.jpg','cat_picture8.jpg','cat_picture9.jpg','cat_picture10.jpg','cat_picture11.jpg']
    };
/**************octopus********************/
    var octopus = {
        init: function(){           
            view.init();
            view.admin();
        },

       
        bindButtonToCat: function(ID){
            var elem = document.getElementById("catlist");            
            var catBtn = document.createElement("BUTTON");
            catBtn.setAttribute('class', `cat${ID}`);
            var catLabel = document.createTextNode(`cat${ID}`);
            catBtn.appendChild(catLabel);

            this.elem = elem.appendChild(catBtn);  
            octopus.addClickCat(ID);
        },
        
        addClickCat: function(ID){     
            var cat = data.cats[ID-1];      
            this.elem.addEventListener('click', (function(ID) {
           /********closure**************/
                return function() {                    
                    data.CurID = ID;
                    data.curCatImg = `images/${data.CurID}`;
                   // alert(data.curCatImg);
                    octopus.showCat();  
                };
            })(cat));
            
        },
    
        
        setImage: function(){
            var cImg = document.createElement("img");
            var catImgView = document.getElementById("cat_placeholder");            
            cImg = document.createElement("img");
            cImg.setAttribute('src', 'images/cat_picture1.jpg');
            cImg.setAttribute('alt', 'na');
            cImg.setAttribute('width', '500px');
            this.cImg = cImg;
            catImgView.appendChild(cImg);                 
        },

        showCat: function(){
            // alert(data.curCatImg);
            this.cImg.setAttribute('src', data.curCatImg);
            let catNo = document.querySelector('.catNo');
            catNo.textContent = `Cat#: ${data.CurID}`;       
            let curCatClicks = document.querySelector('.clickNumber');
            let curCatIndex = parseInt(data.CurID.replace(/[^0-9\.]/g, ''), 10)-1;
            curCatClicks.textContent = `No. of clicks# ${data.curCatCount[curCatIndex]} Meow`;   
            /********req. 3**********/
            let CatDetail = document.getElementById("catDetails");   
            CatDetail.style.display = "inline";         

            let name = document.querySelector(".name");  
            let ImageUrl = document.querySelector(".ImageUrl");  
            let NoOfClicks = document.querySelector(".NoOfClicks");  
            name.textContent = `name: ${data.CurID}`;
            ImageUrl.textContent = `ImageUrl: ${data.curCatImg}`;
            NoOfClicks.textContent = `NoOfClicks: ${data.curCatCount[curCatIndex]}`;          
        },

        catClickCounter: function(){
            this.cImg.addEventListener('click', function(){
            let curCatClicks = document.querySelector('.clickNumber');
            let curCatIndex = parseInt(data.CurID.replace(/[^0-9\.]/g, ''), 10)-1;
            curCatClicks.textContent = `No. of clicks# ${data.curCatCount[curCatIndex]} Meow`;     
            data.curCatCount[curCatIndex]++;

            //alert(parseInt(data.CurID.replace(/[^0-9\.]/g, ''), 10));     
        });
        },

        admin: function(){
            let details = document.getElementById("details");
            if (details.style.display === "none") {
                details.style.display = "inline";
            } else {
                details.style.display = "none";
            }
        }


    };

/**************view********************/
    var view = {
        init: function(){        
        noOfCats = data.cats.length;
        view.render(noOfCats);        
        },

        render: function(noOfCats){
            for (var i=1; i<= noOfCats; i++){
                var id = i;
                octopus.bindButtonToCat(id);
                data.curCatCount.push(0);
            };
            octopus.setImage();   
            octopus.catClickCounter(); 
        },
        admin: function(){
            var admin = document.getElementById("admin");  
            admin.addEventListener('click',function(){
                octopus.admin();
            });
        }

    };

/**************************************/

    octopus.init();
}());