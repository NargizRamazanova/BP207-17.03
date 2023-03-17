const tbody = document.querySelector("tbody");

const URL = "https://northwind.vercel.app/api/products/"

fetch(URL)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i<data.length; i++){
            let tr = document.createElement("tr")

            tr.addEventListener("click", function(){
                console.log(this)
                this.style.backgroundColor = "blue"
            })

            let id = document.createElement("td")
            id.innerText = data[i].id
    
            let name = document.createElement("td")
            name.innerText = data[i].name

            let price = document.createElement("td")
            price.innerText = data[i].unitPrice

            let quantity = document.createElement("td")
            quantity.innerText = data[i].unitsInStock

            let country = document.createElement("td")
            if(data[i].supplier?.address?.country){
                country.innerText = data[i].supplier.address.country
            }else{
                country.innerText= "-"
            }

            let btnsRow = document.createElement("tr")


            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete"
            deleteBtn.classList.add("btn")
            deleteBtn.classList.add("btn-outline-danger")

            btnsRow.append(deleteBtn)


            tr.append(id)
            tr.append(name)
            tr.append(price)
            tr.append(quantity)
            tr.append(country)
            tr.append(btnsRow)

            tbody.append(tr)

            deleteBtn.addEventListener("click", function(){
                fetch(URL+data[i].id, {
                    method: "DELETE"
                })
                    .then(res=> res.json())
                    .then(data=> {
                        window.location.reload()
                    })
            })

        }
    })

