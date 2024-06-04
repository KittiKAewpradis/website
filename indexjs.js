var product = [{
    id:1,
    img:'https://www.haadthip.com/storage/beverage-category/coke/coke.png',
    name:'coke',
    price: 16,
    description:'โคคา-โคล่า ไลท์ สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่มาพร้อมกับรสชาติที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'sparking'
}, {

    id:2,
    img:'https://www.haadthip.com/storage/beverage-category/coke/coke-light.png',
    name:'coke light',
    price: 16,
    description:'สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'sparking' 
}, {

    id:3,
    img:'https://www.haadthip.com/storage/beverage-category/namthip/namthip.png',
    name:'namthip',
    price: 7,
    description:'สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'water' 
}, {

    id:4,
    img:'https://www.haadthip.com/storage/beverage-category/minute-maid/pulpy/mm-pulpy-orange.png',
    name:'minute maid',
    price: 20,
    description:'สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'juice' 

}, {

    id:5,
    img:'https://www.haadthip.com/storage/beverage-category/scheweppes/schweppes-blueberry-lemon.png',
    name:'schweppes',
    price: 17,
    description:'สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'schweppes' 

}, {

    id:6,
    img:'https://www.haadthip.com/storage/beverage-category/ooha/ooha-lychee.png',
    name:'ooha',
    price: 16,
    description:'สดชื่นและเพลิดเพลินไปกับเครื่องดื่มที่ชุ่มฉ่ำ ซึ่งจะช่วยเพิ่มพลังให้กับวันของคุณ',
    type:'ooha' 

}];

//length = 3
$(document).ready(() => {
    var html ='';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw; text-align: right;">${product[i].name}</p>
                    <p style="font-size: 1.2vw; text-align: right;">${numberWithCommas(product[i].price)}</p>
                </div>`;
    }
    $('#productlist').html(html);
});


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


function searchsomething(elem) {
    //console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html ='';
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.includes(value)) {
            html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw; text-align: right;">${product[i].name}</p>
                    <p style="font-size: 1.2vw; text-align: right;">${numberWithCommas(product[i].price)}</p>
                </div>`;
            }
    }
    if(html == '') {
        $('#productlist').html('<p>Not found product</p>');
    } else {
        $('#productlist').html(html);
    }
}



function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    } 
    else {
        $("."+param).css('display', 'block')
    }

}