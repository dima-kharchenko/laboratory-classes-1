// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.
const fs = require("fs");
const STATUS_CODE = require("../constants/statusCode");
// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.
const productRouting = (request, response) => {
    const { url, method } = request;
    if (method === "GET" && url.startsWith("/product/")) {
        const productId = url.split("/")[2]
        response.writeHead(200, {"Content-Type": "text/plain"})
        return response.end(`Details of product with id ${productId}`)
    }

    response.writeHead(404)
    response.end("Product not found")
}
// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
module.exports = { productRouting }
