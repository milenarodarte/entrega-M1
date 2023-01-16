

let objetosDoCarrinho = []

const ul = document.querySelector('.products')

function criandoProdutos (produtosLoja) {
    for (let i = 0; i < produtosLoja.length; i++) {
        

        const li = document.createElement('li')
        li.classList.add('product')

        const img = document.createElement('img')
        img.setAttribute('class','productImg')
        img.setAttribute('alt', `${produtosLoja[i].alt}`)
        img.setAttribute('src', `${produtosLoja[i].img}`)

        const p = document.createElement('p')
        p.classList.add('productType')
        p.innerText = `${produtosLoja[i].tag[0]}`

        const h1 = document.createElement('h1')
        h1.classList.add('productName')
        h1.innerText = `${produtosLoja[i].nameItem}`

        const p2 = document.createElement('p')
        p2.classList.add('productDescription')
        p2.innerText = `${produtosLoja[i].description}`

        const h3 = document.createElement('h3')
        h3.classList.add('price')
        h3.innerText= `R$ ${produtosLoja[i].value}`

        const button = document.createElement('button')
        button.innerText = "Adicionar ao carrinho"
        button.classList.add('addCart')
        button.setAttribute('id', `${produtosLoja[i].id}`)

        li.append(img, p, h1, p2, h3, button)
        ul.appendChild(li)
    }    
}
criandoProdutos(produtosLoja)



const ulCart = document.querySelector('.cartUl')

function desenharCarrinhoDeProdutos (objetosDoCarrinho) {
   
    
    for (let i = 0; i < objetosDoCarrinho.length; i++) {
        
        if ( objetosDoCarrinho[i] != objetosDoCarrinho || i == 0) {
            const liCart = document.createElement('li')
            liCart.classList.add('cartItens')

            ulCart.appendChild(liCart)
            


            const imgCart = document.createElement('img')
            imgCart.setAttribute('class','cartProductImg')
            imgCart.setAttribute('alt', `${objetosDoCarrinho[i].alt}`)
            imgCart.setAttribute('src', `${objetosDoCarrinho[i].img}`)
        
            const divCart = document.createElement('div')
            divCart.classList.add('cartDescription')
            
            liCart.append(imgCart,divCart)

            
            const pCart = document.createElement('p')
            pCart.classList.add('cartProductName')
            pCart.innerText = `${objetosDoCarrinho[i].nameItem}`
            

            const p2Cart = document.createElement('p')
            p2Cart.classList.add('cartProductPrice')
            p2Cart.innerText = `R$ ${objetosDoCarrinho[i].value}`
            

            const buttonCart = document.createElement('button')
            buttonCart.innerText = "Retirar do Carrinho"
            buttonCart.classList.add('cartProductRemove')
            buttonCart.setAttribute('id', i)
            

            divCart.append(pCart,p2Cart,buttonCart)
        }
        
    }
        
}



let totalCarrinho = 0

function adicionaEventoClickAdicionar (objetosDoCarrinho) {
    document.addEventListener('click', function (e){
        const el = e.target
        
        if(el.classList.contains('addCart')){
            
            for (let q= 0; q < produtosLoja.length; q++){
                if (produtosLoja[q].id == el.id) {

                    objetosDoCarrinho.push(produtosLoja[q])
                    ulCart.innerHTML = ""
                    totalCarrinho = 0
                    quantidadeCarrinhoETotal(objetosDoCarrinho)
                    desenharCarrinhoDeProdutos(objetosDoCarrinho)
                     
                }           
            }
        }      
    })      
}
    
    


adicionaEventoClickAdicionar(objetosDoCarrinho)



function quantidadeCarrinhoETotal (objetosDoCarrinho) {
    const quantidadeNumero = document.querySelector('.quantidadeNumero')
    quantidadeNumero.innerText = `${objetosDoCarrinho.length}`
    
    const totalNumero = document.querySelector('.totalNumero')
    for (let g =0; g<objetosDoCarrinho.length; g++) {
        totalCarrinho += Number(`${objetosDoCarrinho[g].value}`)
    }
    totalNumero.innerText = `R$ ${totalCarrinho}`

}


function adicionaEventoClickRemover (objetosDoCarrinho){
    document.addEventListener('click', function (b) {
        const elem = b.target
        console.log(objetosDoCarrinho)
        console.log(elem)
        
        if(elem.classList.contains('cartProductRemove')) {
            console.log(elem)

            objetosDoCarrinho.splice(elem.id, 1)
            
            ulCart.innerHTML = ""
            desenharCarrinhoDeProdutos(objetosDoCarrinho)
            totalCarrinho = 0
            quantidadeCarrinhoETotal(objetosDoCarrinho)
            
        }
    })
}

adicionaEventoClickRemover(objetosDoCarrinho)