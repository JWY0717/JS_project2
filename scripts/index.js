//각 이미지 표시 함수
/*
const showFlower = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imageViewText");

    imgView1.setAttribute("src", "./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";
    
    
}
const showBird = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imageViewText");

    imgView1.setAttribute("src", "./images/cityBird.png");
    imgViewText.innerHTML = "갈매기";
    txtWrap.style.display = "block";
    
}
const showFish = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imageViewText");
    
    imgView1.setAttribute("src", "./images/cityFish.png");
    imgViewText.innerHTML = "고등어";
    txtWrap.style.display = "block";
}*/
//하나의 함수로 표현하기!
const show = (idx) => {
    const pngName = ['cityFlower','cityBird','cityFish'] ;
    const txt = ['동백꽃','갈매기','고등어'] ;

    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";
}

    

//DOM 로드 후

document.addEventListener("DOMContentLoaded", () => {
    //쿼리는 ID임을 아려주
   /* const imgIcon1 = document.querySelector("#imgIcon1");

    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src")
    imgIcon2.addEventListener("mouseover", ()=>show(1));
    imgIcon3.addEventListener("mouseover", ()=>show(2));
})*/

    const imgIconItems = document.querySelectorAll(".imgIconItem");
    console.log(imgIconItems);

    for(let[k, item] of imgIconItems.entries()) {
       console.log(item, k);
        item.addEventListener("mouseover",()=>show(k) );

    }

})
