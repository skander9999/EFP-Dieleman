/**
 * Fonction : what_are_words_worth
 * Objectif : Demander une entrée à l'utilisateur, calculer sa longueur, et demander
 *            à l'utilisateur de confirmer cette longueur.
 * 
 * La fonction utilise uniquement les propriétés et méthodes autorisées :
 * - length : pour obtenir la longueur de la chaîne.
 * - charAt() : pour accéder à un caractère spécifique (non utilisé ici, mais respecté).
 * - charCodeAt() : non utilisé ici, mais respecté pour les parties avancées.
 * 
 * Retourne :
 * - true si l'utilisateur confirme la longueur.
 * - false sinon.
 */
function what_are_words_worth() {
    // 1. Demander une entrée à l'utilisateur
    let userInput = prompt("Veuillez entrer un mot ou une phrase :");

    // 2. Calculer la longueur de l'entrée en utilisant la propriété `length`
    let length = userInput.length;

    // 3. Afficher une boîte de dialogue de confirmation
    //    pour demander à l'utilisateur de valider la longueur calculée.
    let isConfirmed = confirm(`Votre entrée "${userInput}" comporte ${length} caractère(s). Confirmez-vous cette longueur ?`);

    // 4. Retourner true si l'utilisateur confirme, sinon false
    return isConfirmed;
}
function count_words(string_of_words) {
    // Vérifier si la chaîne est vide ou ne contient que des espaces
    if (!string_of_words || string_of_words.trim() === "") {
      return 0; // Retourner 0 si la chaîne est vide
    }
  
    // Diviser la chaîne en mots en utilisant l'espace comme séparateur
    let words = string_of_words.split(" ");
  
    // Filtrer les éventuelles chaînes vides (cas où il y a plusieurs espaces)
    words = words.filter(word => word !== "");
  
    // Retourner le nombre de mots dans le tableau
    return words.length;
  }
  
  // Exemple d'utilisation
  let counter = count_words('Turing believes machines think');
  console.log(counter); // Affiche 4
  function count_words_by(string_of_words, separator = " ") {
    // Vérifier si la chaîne est vide ou ne contient que des espaces
    if (!string_of_words || string_of_words.trim() === "") {
      return 0; // Retourner 0 si la chaîne est vide
    }
  
    // Diviser la chaîne en mots en utilisant le séparateur spécifié
    let words = string_of_words.split(separator);
  
    // Filtrer les éventuelles chaînes vides (cas où il y a plusieurs séparateurs consécutifs)
    words = words.filter(word => word !== "");
  
    // Retourner le nombre de mots dans le tableau
    return words.length;
  }
  
  // Exemples d'utilisation
  let counter1 = count_words_by('Turing believes machines think');
  console.log(counter1); // Affiche 4
  
  let counter2 = count_words_by('Turing believes machines think', ' ');
  console.log(counter2); // Affiche 4
  
  let counter3 = count_words_by('Turing believes machines think', 'i');
  console.log(counter3); // Affiche 5
  // Fonction pour vérifier si une lettre est une voyelle
function is_a_vowel(letter) {
    // Liste des voyelles (déjà définie dans le fichier HTML)
    const vowels = ['a', 'e', 'i', 'u', 'o', 'y', 'A', 'E', 'I', 'U', 'O', 'Y'];
    
    // Vérifier si la lettre est dans la liste des voyelles
    return vowels.includes(letter);
  }
  
  // Fonction pour compter les voyelles dans une phrase
  function count_vowels(string_of_words) {
    let vowelCount = 0; // Initialiser le compteur de voyelles
  
    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < string_of_words.length; i++) {
      let letter = string_of_words.charAt(i); // Récupérer le caractère à l'index i
      if (is_a_vowel(letter)) { // Vérifier si c'est une voyelle
        vowelCount++; // Incrémenter le compteur si c'est une voyelle
      }
    }
  
    return vowelCount; // Retourner le nombre total de voyelles
  }
  
  // Exemples d'utilisation
  console.log(count_vowels('Turing believes machines think')); // Renvoie 10
  console.log(count_vowels('zrtpmlkjhgfdsqe')); // Renvoie 1
  console.log(count_vowels('oui')); // Renvoie 3
  console.log(count_vowels('lmpt')); // Renvoie 0
  function count_consonants(string_of_words) {
    return string_of_words.split('').filter(letter => !is_a_vowel(letter) && letter !== ' ').length;
  }
  
  // Exemples d'utilisation
  console.log(count_consonants('Turing lies with men')); // Renvoie 11
  console.log(count_consonants('Turing believes machines think')); // Renvoie 17
  console.log(count_consonants('aeeiuouyuioz')); // Renvoie 1
  console.log(count_consonants('oui')); // Renvoie 0
  console.log(count_consonants('lmpt')); // Renvoie 4
  function remove(string_of_words, caracter) {
    // Utiliser split pour diviser la chaîne en tableau en fonction du caractère à supprimer
    // Puis utiliser join pour reconstruire la chaîne sans ce caractère
    return string_of_words.split(caracter).join('');
  }
  
  // Exemples d'utilisation
  let altered_string1 = remove('therefore machines do not think', 'e');
  console.log(altered_string1); // Affiche 'thrfor machins do not think'
  
  let altered_string2 = remove('Turing believes machines think', 'i');
  console.log(altered_string2); // Affiche 'Turng belves machnes thnk'
  
  let altered_string3 = remove('aeeiuouyuioz', 'o');
  console.log(altered_string3); // Affiche 'aeeiuyuiz'
  
  let altered_string4 = remove('ccccc', 'c');
  console.log(altered_string4); // Affiche '' (chaîne vide)
  
  let altered_string5 = remove('c c c c c', 'c');
  console.log(altered_string5); // Affiche '     ' (5 espaces)
  function remove_many(string_of_words, caracters) {
    // Convertir la chaîne de caractères à supprimer en un tableau de caractères uniques
    let charsToRemove = [...new Set(caracters)];
  
    // Parcourir chaque caractère à supprimer et les retirer de la chaîne
    for (let char of charsToRemove) {
      string_of_words = string_of_words.split(char).join('');
    }
  
    // Retourner la chaîne modifiée
    return string_of_words;
  }
  
  // Exemples d'utilisation
  let result1 = remove_many('Therefore machines do not think', 'dumber');
  console.log(result1); // Affiche 'Thfo achins o not think'
  
  let result2 = remove_many('Turing lies with men', 'good people read good books');
  console.log(result2); // Affiche 'Tuiniwithmn'
  
  let result3 = remove_many('aeeiuouyuioz', 'aeiouy');
  console.log(result3); // Affiche 'z'
  
  let result4 = remove_many('ccccc', 'c');
  console.log(result4); // Affiche '' (chaîne vide)
  
  let result5 = remove_many('c c c c c', 'c ');
  console.log(result5); // Affiche '' (chaîne vide)
  function crypto(a_string, a_number) {
    // Définir l'alphabet en minuscules et en majuscules
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    // Initialiser la chaîne cryptée
    let encryptedString = '';
  
    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < a_string.length; i++) {
      let char = a_string[i];
  
      // Vérifier si le caractère est une lettre minuscule
      if (alphabet.includes(char)) {
        // Trouver l'index du caractère dans l'alphabet
        let index = alphabet.indexOf(char);
        // Appliquer le décalage en utilisant le modulo pour gérer le débordement
        let newIndex = (index + a_number) % 26;
        // Ajouter le caractère crypté à la chaîne
        encryptedString += alphabet[newIndex];
      }
      // Vérifier si le caractère est une lettre majuscule
      else if (alphabetUpper.includes(char)) {
        // Trouver l'index du caractère dans l'alphabet majuscule
        let index = alphabetUpper.indexOf(char);
        // Appliquer le décalage en utilisant le modulo pour gérer le débordement
        let newIndex = (index + a_number) % 26;
        // Ajouter le caractère crypté à la chaîne
        encryptedString += alphabetUpper[newIndex];
      }
      // Si ce n'est pas une lettre, ajouter le caractère tel quel (espaces, ponctuation, etc.)
      else {
        encryptedString += char;
      }
    }
  
    // Retourner la chaîne cryptée
    return encryptedString;
  }
  
  // Exemples d'utilisation
  console.log(crypto('turing believes machines think', 1)); // Affiche 'uvsjoh cfmjfwft nbdijoft uijol'
  console.log(crypto('turing believes machines think', 2)); // Affiche 'vwtkpi dgnkgxgu ocejkpgu vjkpm'
  console.log(crypto('turing believes machines think', 25)); // Affiche 'stqhmf adkhdudr lzbghmdr sghmj'
  console.log(crypto('turing believes machines think', 26)); // Affiche 'turing believes machines think'
  console.log(crypto('turing believes machines think', 27)); // Affiche 'uvsjoh cfmjfwft nbdijoft uijol'
  function crypto(a_string, a_number) {
    // Définir l'alphabet en minuscules et en majuscules
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    // Initialiser la chaîne cryptée
    let encryptedString = '';
  
    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < a_string.length; i++) {
      let char = a_string[i];
  
      // Vérifier si le caractère est une lettre minuscule
      if (alphabet.includes(char)) {
        // Trouver l'index du caractère dans l'alphabet
        let index = alphabet.indexOf(char);
        // Appliquer le décalage en utilisant le modulo pour gérer le débordement
        let newIndex = (index + a_number) % 26;
        // Ajouter le caractère crypté à la chaîne
        encryptedString += alphabet[newIndex];
      }
      // Vérifier si le caractère est une lettre majuscule
      else if (alphabetUpper.includes(char)) {
        // Trouver l'index du caractère dans l'alphabet majuscule
        let index = alphabetUpper.indexOf(char);
        // Appliquer le décalage en utilisant le modulo pour gérer le débordement
        let newIndex = (index + a_number) % 26;
        // Ajouter le caractère crypté à la chaîne
        encryptedString += alphabetUpper[newIndex];
      }
      // Si ce n'est pas une lettre, ajouter le caractère tel quel (espaces, ponctuation, etc.)
      else {
        encryptedString += char;
      }
    }
  
    // Retourner la chaîne cryptée
    return encryptedString;
  }
  
  // Exemple d'utilisation
  let to_crypt = 'it is possible to invent a single machine which can be used to compute any computable sequence';
  let crypted = crypto(to_crypt, 3);
  console.log(crypted);
  // Affiche :
  // lw lv srvvleoh wr lqyhqw d vlqjoh pdfklqh zklfk fdq eh xvhg wr frpsxwh dqb frpsxwdeoh vhtxhqfh
  const decrypt = (a_string, a_number) => crypto(a_string, 26 - (a_number % 26));
  function enigma(crypted_string) {
    for (let i = 1; i <= 25; i++) console.log(`Décalage ${i}: ${decrypt(crypted_string, i)}`);
  }