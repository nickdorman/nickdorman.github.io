// Duration is the amount of time in between slides,
 // and fade is value that determines how quickly the next image will fade in
 // $.backstretch([
 //     "./../images/big1.jpg"
 //   , "./../images/big1.jpg"
 //   , "./../images/big1.jpg"
 // ], {duration: 3000, fade: 750});

 $(".container").backstretch([
   "images/big1.jpg",
   "images/big2.jpg",
   "images/big3.jpg"
], {duration: 6000, fade: 750});
