const btns = document.querySelectorAll(".queston");
const answers = document.querySelectorAll(".answer");
const pluses = document.querySelectorAll(".plus");
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    const answer = answers[index];
    const plus = pluses[index];
    btn.addEventListener("click", () => {
        if (!answer.classList.contains("active_answer")) {
            answer.classList.add("active_answer");
            plus.classList.add("active_plus");
        } else {
            answer.classList.remove("active_answer");
            plus.classList.remove("active_plus");
        }
    });
}

const menu_btn = document.getElementById("menu_btn");
const bubble_menu = document.getElementById("bubble_menu");
menu_btn.addEventListener("click", () => {
    if (!bubble_menu.classList.contains("active_nav")) {
        bubble_menu.classList.add("active_nav");
    } else {
        bubble_menu.classList.remove("active_nav");
    }
});