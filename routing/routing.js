// 📦 Zaimportuj moduł odpowiedzialne za routing poszczególnych części aplikacji.
const { homeRouting } = require("./home.js")
const { productRouting } = require("./product.js")
const { logoutRouting } = require("./logout.js")
// 📦 Zaimportuj obiekt STATUS_CODE.
const { STATUS_CODE } = require("../constants/statusCode.js")
// 🏗 Stwórz tutaj funkcję 'requestRouting', która będzie obsługiwać zapytania HTTP.
// Podpowiedź: const requestRouting = (request, response) => {
const requestRouting = (request, response) => {
// 🏗 Tutaj stwórz logowanie do konsoli informacji, mówiące o typie logowania (INFO), dacie, metodzie oraz url żądania.
    const { url, method } = request;
    console.log(`INFO (${new Date().toUTCString()}): ${method} - ${url}`)
// 🏗 Tutaj stwórz podstawowy 'request routing' dla ścieżek '/', zawierającej /product' oraz '/logout'. Przekaż `request` i `routing` do odpowiednio routingu.
    if (url === "/") {
        return homeRouting(method, response)
    }
    if (url.startsWith("/product")) {
        return productRouting(request, response)
    }
    if (url === "/logout") {
        return logoutRouting(method, response)
    }

// 🏗 Obsłuż specjalny przypadek, jeśli użytkownik zostanie przekierowany na ścieżkę /kill, aplikacja się zamknie.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.
    if (url === "/kill") {
        console.warn(`PROCESS [${new Date().toUTCString()}]: logout has been initiated and the application will be closed`)
        process.exit()
    }

// 🏗 Tutaj stwórz obsługę przypadku, jeśli żądany URL nie istnieje. Zwróć wtedy błąd 404.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html")
    response.write("<html><body><h1>404 - Not Found</h1></body></html>")
    response.end()

    console.warn(`ERROR [${new Date().toUTCString()}]: requested url ${url} doesn't exist`)
//  };
}
// 🔧 Wyeksportuj funkcję 'requestRouting', aby inne moduł mogły jej używać.
module.exports = { requestRouting }
