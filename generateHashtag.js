function generateHashtag (str) {
  function capitalizeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
  };
  length = str.split(" ").join("").length
  if (str === '' || length === 0 || length >= 140) {
    return false;
  } else {
    str = str.split(' ');
    str = capitalizeWords(str);
    return '#'+str.join('');
  };
};

console.log(generateHashtag('Soft serve rules'));