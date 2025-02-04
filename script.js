function hideButton() {
  const button = document.querySelector('.btn_div');
  const letter = document.querySelector('.letterdiv');
  const lett = document.querySelector('.letter');
  const surprise = document.querySelector('.btn_surprise');
  const audio = document.getElementById('aud');
  button.style.display = 'none';
  letter.style.display = 'block';
  const text = lett.innerHTML; // Get the text content
  lett.innerHTML = ''; // Clear the paragraph content

  let index = 0; // Initialize index for characters
  const speed = 50; // Speed of typing in milliseconds

  audio.play();

  function type() {
    if (index < text.length) {
      lett.innerHTML += text.charAt(index); // Add one character
      index++;
      setTimeout(type, speed); // Call type function again after a delay
    } else {
        surprise.style.display = 'block';
    }
  }

  type(); // Start the typing effect
}

function surprise() {
  const letter = document.querySelector('.letterdiv');
  const surp = document.querySelector('.flowers_div');
  letter.style.display = 'none';
  surp.style.display = 'inline-block';
}


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
