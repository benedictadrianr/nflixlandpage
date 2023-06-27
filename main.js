const qnaList = document.querySelectorAll('.qna-list');
const qnaExtend = document.querySelectorAll('.qna-extend');

function selectList(e){
    removeShow();

    const qnaExtend = document.querySelector(`#${this.id}-content`);

    qnaExtend.classList.add('show-content');
}

function removeShow(){
    qnaExtend.forEach(item => {
        item.classList.remove('show-content');
    });
}

qnaList.forEach(item => {
    item.addEventListener('click', selectList);
});