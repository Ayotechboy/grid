const body = document.body;
console.log(body);

const div = document.createElement('div');
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const img5 = document.createElement('img');
const img6 = document.createElement('img');
const img7 = document.createElement('img');
const img8 = document.createElement('img');
const img9 = document.createElement('img');



div.classList.add('container');
div2.classList.add('content');
div3.classList.add('content');
div4.classList.add('content');


body.append(div);
div.append(div2)
div.append(div3)
div.append(div4)

div2.append(img1);
div2.append(img2);
div2.append(img3);

div3.append(img4);
div3.append(img5);
div3.append(img6);

div4.append(img7);
div4.append(img8);
div4.append(img9);



img1.setAttribute('src','https://leadership.ng/wp-content/uploads/2022/10/Wizkid-1.webp' );
img2.setAttribute('src','https://media.premiumtimesng.com/wp-content/files/2022/11/WIZKID-2-e1668440491340.jpg' );
img3.setAttribute('src','https://dailypost.ng/wp-content/uploads/2023/04/unnamed-6.jpg' );

img4.setAttribute('src','https://leadership.ng/wp-content/uploads/2022/10/Wizkid-1.webp' );
img5.setAttribute('src','https://media.premiumtimesng.com/wp-content/files/2022/11/WIZKID-2-e1668440491340.jpg' );
img6.setAttribute('src','https://dailypost.ng/wp-content/uploads/2023/04/unnamed-6.jpg' );

img7.setAttribute('src','https://leadership.ng/wp-content/uploads/2022/10/Wizkid-1.webp' );
img8.setAttribute('src','https://media.premiumtimesng.com/wp-content/files/2022/11/WIZKID-2-e1668440491340.jpg' );
img9.setAttribute('src','https://dailypost.ng/wp-content/uploads/2023/04/unnamed-6.jpg' );

