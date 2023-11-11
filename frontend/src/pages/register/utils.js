export const emailValidation = (email) => {
  if (email.length === 0) {
    return "Emailul nu poate fi gol!";
  }

  if (email.length < 6) {
    return "Emailul nu poate avea mai putin de 6 caractere!";
  }

  return "";
};

export const passwordValidation = (password) => {
    if(password.length === 0) {
        return "Parola nu poate fii vida";
    }

    if(password.length < 8) {
        return "Parola trebuie sa aibe cel putin 8 caracter";
    }

    return "";
}


export const confirmPasswordValidation = (password) => {
    if(password.length === 0) {
        return "Parola de confirmare nu poate fii vida";
    }

    if(password.length < 8) {
        return "Parola de confirmare trebuie sa aibe cel putin 8 caracter";
    }

    return "";
}