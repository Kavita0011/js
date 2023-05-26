const customer={
    id:"C_001",
    name:"kavita",
    age:22,
    city:"mohali",
    product_id:"P_034",
    price:5000,
    delivery_before:"2023-05-30"
}
document.getElementById('demo').innerHTML="Dear, "+customer['name']+" your product will be delivered bfeore"+customer['delivery_before'];