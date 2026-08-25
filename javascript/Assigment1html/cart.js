let cost = {
    tea: 100,
    coffee: 100,
    aata: 100,
    chini: 100
};

document.getElementById("abc").addEventListener("click", function() {
let a = prompt("Enter product name").toLowerCase();
let b = Number(prompt("Enter quantity"));

if (cost[a] !== undefined) {
    let total = cost[a] * b;

    document.getElementById("result").innerText =
        "ORDERED: " + a +
        " Quantity: " + b +
        " Total Cost: " + total;
}
else {
    document.getElementById("result").innerText = "Invalid product name";
}});