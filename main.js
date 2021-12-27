  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const cards = document.querySelectorAll(".testimonial-card");
  const content = document.querySelector(".content")
  let index = 1, idSlider, time = 3000;

  function showCard() {
      cards.forEach(card => {
        card.classList.add("hidden");
      });
      cards[index - 1].classList.remove("hidden");
    }

    function nextCard() {
      index++;
      if (index > cards.length) {
        index = 1;
      }
      showCard();
    }

    function prevCard() {
      index--;
      if (index <= 0) {
        index = cards.length;
      }
      showCard();
    }

    //autoSlider
    const autoSlider = () => idSlider = setInterval(nextCard, time);

    //add events buttons
    next.addEventListener('click', nextCard);
    prev.addEventListener('click', prevCard);

    //stop slider
    content.addEventListener("mouseenter", () => {
      clearInterval(idSlider);
    })
    //start slider
    content.addEventListener("mouseleave", autoSlider);

    showCard();// show first image
    autoSlider();// start slider

    //event key
    document.onkeydown = (e) => {
      if (e.code == "ArrowRight") {
        next.focus();
        clearInterval(idSlider);
        nextCard();
      }
      if (e.code == "ArrowLeft") {
        prev.focus();
        clearInterval(idSlider);
        prevCard();
      }
    }
