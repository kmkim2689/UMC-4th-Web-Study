// 문의하기 버튼 클릭 시 폼 보이기/감추기
const contactBtn = document.getElementById("contact-btn");
const contactForm = document.getElementById("contact-form");
const exitBtn = document.getElementById("exit");
const inquireForm = document.getElementById("inquire-form");
const inquiryBtn = document.getElementById("button-inquiry");

contactForm.style.display = "none";
inquireForm.style.display = "none";
contactBtn.addEventListener("click", function() {
    console.log("클릭함");
    console.log("현재 상태"+contactForm.style.display.toString());
    if (contactForm.style.display === "none") {
        contactForm.style.display = "flex";
        contactForm.style.flexDirection = "column";
    } else {
        contactForm.style.display = "none";
    }
});

exitBtn.addEventListener("click", function() {
    console.log("닫기");
    if (contactForm.style.display === "flex") {
        contactForm.style.display = "none";
    }
});

inquiryBtn.addEventListener("click", function() {
    console.log("질의하기");
    if (contactForm.style.display === "flex") {
        contactForm.style.display = "none";
        inquireForm.style.display = "flex";
        inquireForm.style.flexDirection = "column";
    }
})