function input(item) {
    const itemsValue = document.getElementById(item).value;
    return itemsValue;
}

function addToTable(amount, sector, total) {
    const incomeAmountInput = parseInt(input(amount));
    const incomeSectorInput = input(sector);
    const income = document.getElementById(total);
    const incomePrevious = parseInt(income.innerText);
    const totalIncome = incomePrevious + incomeAmountInput;
    income.innerText = totalIncome;
}