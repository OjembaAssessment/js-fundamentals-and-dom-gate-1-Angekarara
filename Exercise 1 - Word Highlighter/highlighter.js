const paragraph = document.getElementById("myParagraph");
const words = paragraph.textContent.toLowerCase().match(/\b\w+\b/g);
const wordFrequency = words.reduce((freq, word) => (freq[word] = -~freq[word], freq), {});

Object.keys(wordFrequency)
  .sort((a, b) => wordFrequency[b] - wordFrequency[a])
  .slice(0, 5)
  .forEach(word => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.backgroundColor = "yellow";
    if (wordFrequency[word] > 1) {
      span.style.textDecoration = "underline";
    }
    paragraph.innerHTML = paragraph.innerHTML.replace(
      new RegExp(`${word}`, "gi"),
      span.outerHTML
    );
  });
