// const video = document.getElementById("video");

// navigator.mediaDevices.getUserMedia({ video: true })
// .then(stream => {
//     video.srcObject = stream;
// })
// .catch(error => {
//     alert("Camera tidak bisa diakses!");
// });

// const button = document.getElementById("button-camera");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// button.addEventListener("click", () => {

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     ctx.drawImage(video, 0, 0);
// });

// button.addEventListener("click", () => {

//     canvas.width = 500;
//     canvas.height = 600;

//     // background putih
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // ukuran foto di tengah
//     let photoWidth = 400;
//     let photoHeight = 400;

//     let x = (canvas.width - photoWidth) / 2;
//     let y = 50;

//     ctx.drawImage(video, x, y, photoWidth, photoHeight);
// });

// const download = document.getElementById("download");

// button.addEventListener("click", () => {

//     canvas.width = 500;
//     canvas.height = 600;

//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     let photoWidth = 400;
//     let photoHeight = 400;

//     let x = (canvas.width - photoWidth) / 2;
//     let y = 50;

//     ctx.drawImage(video, x, y, photoWidth, photoHeight);

//     let image = canvas.toDataURL("image/png");

//     download.href = image;
//     download.style.display = "block";
// });