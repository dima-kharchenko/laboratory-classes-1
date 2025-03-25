// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();
const logoutRouting = (method, response) => {
    response.setHeader("Content-Type", "text/html") 
    response.end() 
}

// 🔧 Wyeksportuj funkcję 'logoutRouting', aby inne moduł mogły jej używać.
module.exports = { logoutRouting }
