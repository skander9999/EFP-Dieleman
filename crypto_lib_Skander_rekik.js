function what_are_words_worth() {
  let str = prompt('Entrez un mot');
  if (str === null) return false; // Si l'utilisateur annule
  return confirm(`La longueur de votre mot est-elle de ${str.length} lettres ?`);
}
function count_words(string_of_words) {
  if (!string_of_words || string_of_words.trim() === "") return 0;
  return string_of_words.split(" ").filter(word => word !== "").length;
}
function count_letter_occurrences(string_of_words, letter) {
  let count = 0;
  for (let i = 0; i < string_of_words.length; i++) {
      if (string_of_words[i] === letter) count++;
  }
  return count;
}
function is_a_vowel(letter) {
  return vowels.includes(letter);
}
function count_vowels(string_of_words) {
  let count = 0;
  for (let char of string_of_words) {
      if (is_a_vowel(char)) count++;
  }
  return count;
}
function count_consonants(string_of_words) {
  return string_of_words.length - count_vowels(string_of_words) - (count_words(string_of_words) - 1);
}
function remove(string_of_words, caracter) {
  return string_of_words.split(caracter).join("");
}
function remove_strings(string_of_words, caracters) {
  let altered_string = "";
  for (let char of string_of_words) {
      if (!caracters.includes(char)) altered_string += char;
  }
  return altered_string;
}
function crypto(to_crypt, offset) {
  let crypted = "";
  for (let char of to_crypt) {
      let charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) { // Majuscules
          crypted += String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Minuscules
          crypted += String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
      } else {
          crypted += char; // Caractères non alphabétiques
      }
  }
  return crypted;
}
function decrypt(to_decrypt, offset) {
  return to_decrypt.split('').map(char => {
      let charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) { // Majuscules
          return String.fromCharCode(((charCode - 65 - offset + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Minuscules
          return String.fromCharCode(((charCode - 97 - offset + 26) % 26