const nameInput = document.querySelector("[name = 'name']")
const priceInput = document.querySelector("[name = 'price']")
const quantityInput = document.querySelector("[name = 'quantity']")
const btn = document.querySelector("button")

const URL = "https://northwind.vercel.app/api/products/"


btn.addEventListener("click", function(){
    let newObj = {
        name: nameInput.value,
        unitPrice: priceInput.value,
        unitsInStock: quantityInput.value
    }

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(newObj)
    })
        .then(res=> res.json())
        .then(data=> {
            nameInput.value = ""
            quantityInput.value = ""
            priceInput.value = ""
            alert("Successfully created")
        })

})