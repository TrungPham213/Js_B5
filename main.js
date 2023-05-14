
function getEle(id) {
    return document.getElementById(id);
}

var toan=getEle('toan').value*1;
var ly=getEle('ly').value*1;
var hoa=getEle('hoa').value*1;

function region(){
    var kv = getEle('khuvuc');
    var n=0;
    switch(kv){
        case "A":
            n += 2;
            break;
        case "B":
            n += 1;
            break;
        case "C":
            n += 0.5;
            break;   
        case "X":
            n += 0;
            break;  
        default:
            console.log('Khu vực chưa đúng');
            n=null;
            break;
    }
    return n;
}
function doiTuong(){
    var kv = getEle('doituong');
    var n=0;
    switch(kv){
        case "1":
            n += 2.5;
            break;
        case "2":
            n += 1.5;
            break;
        case "3":
            n += 1;
            break;   
        case "0":
            n += 0;
            break;  
        default:
            console.log('Đối tượng chưa đúng');
            n=null;
            break;
    }
    return n;
}

function tinhTong(toan,ly,hoa){
    var kv=region();
    var dt=doiTuong();
return toan+ly+hoa+kv+dt;
}
function tinhDiem(){
var result = "";
    var diemchuan = getEle('diemChuan');
    var total = tinhTong(toan,ly,hoa);
    if(toan>0 && ly>0 && hoa>0){
        if(total > diemchuan){
            result='Thí sinh đã trúng tuyển';
            console.log(result);
        }else{
            result='Thí sinh không trúng tuyển';
            console.log(result);
        }
    }else{
        result='Thí sinh không trúng tuyển';
        console.log(result);

    }
    var KQ = document.createElement('p');
    KQ.innerHTML="Thông Báo: "+result;
    console.log(KQ);
document.getElementById('footer').appendChild(KQ);
    
    
}


function tinhTien(){
    var soKw = getEle('soKw').value*1;

const soKw50 =500*50 ;
const soKwHon50 = soKw50 + (soKw-50)*650;
const soKw100 = soKw50 + 50*650;
const soKwHon100 = soKw100 + (soKw - 100)*850;
const soKw200 = soKw100 + 100*850;
const soKwHon350 = soKw200 + (soKw - 200)*1100;
const soKw350 = soKw200 + 150*1100;
const soKwlon = soKw350 + (soKw-350)*1300;
    var tien=0;
    if(soKw<=50){
        tien = soKw * 500;
    }else if(soKw>50 && soKw<=100){
        tien = soKwHon50;
    }else if(soKw>100 && soKw<=200){
        tien = soKwHon100;
    }else if(soKw>200 && soKw>=350){
        tien = soKwHon350;
    }else{
        tien = soKwlon;
    }
    // return tien;
    var tienTra = document.createElement('p');
    tienTra.innerHTML="Thông Báo số tiền: "+tien;
    console.log(tienTra);
document.getElementById('footerTienDien').appendChild(tienTra);
}
// var tien = tinhTien(soKw);





function thueThuNhap(){
var hoten = getEle('hoten');
var thunhap = getEle('thunhap').value*1;
var nguoiphuthuoc = getEle('songuoi').value*1;
var thuNhapChiuThue = thunhap-4-nguoiphuthuoc*1.6;
var tienThue = 0;
if(thuNhapChiuThue<60){
    tienThue=0;
}else if(thuNhapChiuThue==60){
tienThue = 5/100 * thunhap;
}else if( thuNhapChiuThue<=120){
    tienThue= 10/100 *thunhap;
}else if( thuNhapChiuThue<=210){
    tienThue= 15/100 * thunhap;
}else if( thuNhapChiuThue<=384){
    tienThue= 20/100 * thunhap;
}else if( thuNhapChiuThue<=624){
    tienThue= 25/100 * thunhap;
}else if( thuNhapChiuThue<=960){
    tienThue= 30/100 * thunhap;
}else {
    tienThue= 35/100 * thunhap;
}
// return tienThue;
var thue = document.createElement('p');
thue.innerHTML="Thông Báo số tiền: "+tienThue;
    console.log(thue);
document.getElementById('footerthue').appendChild(thue);
}
// var tienThue = tinhTien();


function nhaDan(){
    const xuLyfee = 4.5;
    const serFee = 20.5;
    const channel = 7.5;

    var sokenh = getEle('sokenh').value*1;

    var tienThue = xuLyfee + serFee + channel*sokenh;
    return tienThue;
}

function doanhNghiep() {
    const xuLyfee = 10;
    const channel = 50;

    
    var soketnoi = getEle('soketnoi').value*1;
    var sokenh = getEle('sokenh').value*1;
    var serFee = 0;
    if(soketnoi<=10){
        serFee = 7.5*soketnoi;
    }else{
        serFee =75+((soketnoi-10)*5);
    }
    var tienThue = xuLyfee + serFee + channel*sokenh;
    return tienThue;
}

function tinhTienCap(){
    var loai = getEle('loai').value*1;
    var thueDN = doanhNghiep();
    var thueDan = nhaDan();
    var tienThue = 0;
    if(loai == 1 ){
        tienThue = thueDan;
    }else{
        tienThue = thueDN;
    }
    var thue = document.createElement('p');
thue.innerHTML="Thông Báo số tiền: "+tienThue;
    console.log(thue);
document.getElementById('footerthuecap').appendChild(thue);
}
