document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.form__question');
  const contacts = document.querySelector('#contacts');
  const form = document.querySelector('#form');
  const formHeader = document.querySelector('.form__header');
  const formContent = document.querySelector('.form__content');
  const getCount = document.querySelector('#get-count');
  const formSubmit = document.querySelector('.form__submit');
  let currentQuestionIndex = 0;

  const showQuestion = (index) => {
    questions.forEach((question, i) => {
      question.style.display = i === index ? 'flex' : 'none';
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      formHeader.style.display = 'none';
      if (window.innerWidth <= 900) {
        formContent.style.padding = '0 20px 30px 20px';
      } else {
        formContent.style.padding = '0 71px 50px 71px';
      }
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      contacts.style.display = 'flex';
      questions[currentQuestionIndex].style.display = 'none';
      form.style.display = 'none';
    }
  };

  document.querySelectorAll('.navigation__goto').forEach((button) => {
    button.addEventListener('click', goToNextQuestion);
  });

  showQuestion(currentQuestionIndex);

  getCount.addEventListener('click', () => {
    contacts.style.display = 'none';
    formSubmit.style.display = 'flex';
  })
});
