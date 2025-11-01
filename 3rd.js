// // let h1 = document.getElementById("one")
// // h1.style.color="red"
// // console.log(h1);

// let h1= document.getElementsByClassName("2")
// h1[0].style.color="blue"
// console.log(h1);

// // let a=document.querySelector("a")
// // a.setAttribute("href" ,"http://flipkart.com")
// // console.log();

document.addEventListener("DOMContentLoaded", function () {
  const image = [
    "https://www.99traveltips.com/wp-content/uploads/2014/01/9d2b08962913be28e08fc83199d8ebc2.jpg",
    "https://thvnext.bing.com/th/id/OIP.31WtILvKNlhzO17NKQRYrwHaE8?&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse4.mm.bing.net/th/id/OIP.gabnTIrb9_VUBujEuAZp1QHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.lrGQuffFmhYxAGa_E731nAHaEE?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  ];

  const imageElm = document.querySelector("#loopimages");
  let num = 0;

  imageElm.setAttribute("src", image[num]);

  setInterval(function () {
    num = (num + 1) % image.length;
    imageElm.setAttribute("src", image[num]);
  }, 2000);
});

