const name = 'Parva'
const userAge = 27

const user = {
    name,
    age : userAge,
    location : 'Ahmedabad'
}

// console.log(user);

//pbject destructing 

const product  = {
    label : 'Red Book',
    price : 33,
    stock : 20 ,
    salesPrice : undefined,
}

// const label = product.label
// const stock =  product.stock

// const {label : productLabel , stock} = product

// console.log(productLabel);

const transaction = (type, { label , stock }) => {
    console.log(type , label , stock);
}

transaction('order' , product)