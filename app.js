let sumOfAllRequests = finalSum = offCode = 0;
const foods = {
    0: {
        name: "قیمه بادمجون با سس آلفردو",
        price: 37000,
        count: 0
    },
    1: {
        name: "رویال برگر با سس مخصوص",
        price: 45000,
        count: 0
    },
    2: {
        name: "پیتزا آمریکانو با سیبزمینی تنوری",
        price: 40000,
        count: 0
    },
    3: {
        name: "استیک ویژه مک دونالد با سس قارچ",
        price: 95000,
        count: 0
    },
    4: {
        name: "نوشابه",
        price: 3500,
        count: 0
    },
    5: {
        name: "دوغ",
        price: 3000,
        count: 0
    },
    6: {
        name: "سالاد",
        price: 15000,
        count: 0
    },
}

const takhfif = {}

function enNum2faNum(number) {
    const FA = "۰۱۲۳۴۵۶۷۸۹"
    if (typeof number === "number") {
        number = number.toString();
    }
    number = number.split('').reverse().join('')
    let ans = ""
    for (let i in number) {
        ans += FA[+number[i]]
        if ((i + 1) % 3 == 0 && i != number.length - 1) {
            ans += "٫"
        }
    }
    return ans.split('').reverse().join('')
}

function render() {
    $('#main').html('')
    sumOfAllRequests = 0
    for (let i in foods) {
        $('#main').append(`
        <div class="col-12 d-flex justify-content-center align-items-center items">
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <img src="./Assets/dish.png" alt="">
                </div>
                <div class="col-9 d-flex flex-column align-items-start details">
                    <h3>${foods[i].name}</h3>
                    <h5>
                        ${enNum2faNum(foods[i].price)}
                        <span class="toman">تومان</span>
                    </h5>
                    <div class="col-12 d-flex justify-content-between">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="count">${enNum2faNum(foods[i].count)}</span>
                            <div class="icons d-flex flex-column">
                                <img onclick="addItem(${i})" src="./Assets/group_3@3x.png">
                                <img onclick="deleteItem(${i})" src="./Assets/line-2@3x.png">
                            </div>
                        </div>
                        <span class="price">
                            ${enNum2faNum(foods[i].price * foods[i].count)}
                            <span class="toman">
                                تومان
                            </span>
                        </span>
                    </div>
                </div>
                <div class="under-line"></div>
            </div>
        `)
        sumOfAllRequests += foods[i].price * foods[i].count
    }
    finalSum = sumOfAllRequests + (sumOfAllRequests * (5 / 100))
    if(offCode){
        finalSum -= (finalSum * (offCode / 100)) ;
    }
    $('#resualt').html(`
                <div class="d-flex justify-content-between align-items-center bill-items">
                    <span class="bill-items-title">جمع کل سفارشات</span>
                    <span class="bill-items-value">
                        ${enNum2faNum(sumOfAllRequests)}
                        <span class="toman">تومان</span>
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center bill-items">
                    <span class="bill-items-title">حق سرویس و کارمزد</span>
                    <span class="bill-items-value">
                        ${enNum2faNum((sumOfAllRequests * (5 / 100)))}
                        <span class="toman">تومان</span>
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center bill-items">
                    <span class="bill-items-title">تخفیف</span>
                    <span class="bill-items-value">
                        ${enNum2faNum((finalSum * (offCode / 100)))}
                        <span class="toman">تومان</span>
                    </span>
                </div>
                <span id="bill-sum">
                    ${enNum2faNum(finalSum)}
                    <span class="toman">تومان</span>
                </span>
    `)
}
render()

function addItem(index){
    foods[index].count++
    render()
}
function deleteItem(index){
    if(foods[index].count){
        foods[index].count--
    }
    render()
}