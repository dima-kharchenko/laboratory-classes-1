// 📦 Musisz zaimportować tutaj moduł 'http'.
// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
const http = require("http");
const { PORT } = require("./config.js");
const {requestRouting } = require("./routing/routing.js");
// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.
const requestListener = (request, response) => {
    requestRouting(request, response)
}
// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
const server = http.createServer(requestListener)
// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);
server.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
})
