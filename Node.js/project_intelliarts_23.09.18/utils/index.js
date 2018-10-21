function printList(data) {
    const orderedDates = Object.keys(data).sort((a, b) => Date.parse(b) - Date.parse(a));

    orderedDates.forEach(key => {
        console.log(key);
        printData(data[key]);
        console.log('\n');
    })
}

function printData(data) {
    data.forEach((item) => {
        console.log(item.product, item.amount, item.currency);
    })
}

module.exports = {
    printList: printList,
    printData: printData,
};