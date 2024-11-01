// LÀM VIỆC VỚI ARRAY NÂNG CAO
// 1 forEach()
// để duyệt qua mỗi phần tử của mảng và thực hiện hành động nào đó
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
numbers.forEach((item)=>{
    sum += item;
})
console.log(sum);

// nếu muốn thay đổi mảng
numbers.forEach((item, index) =>{
    numbers[index] += 1;
})
console.log(numbers);

// 2 every
// Kiểm tra tất cả các phần tử của 1 mảng phải thỏa mãn một điều kiện gì đó
const monHoc =[
    {
        mon: "Toán",
        diem: 9,
    },
    {
        mon: "Lý",
        diem: 8.2,
    },
    {
        mon: "Toán",
        diem: 8,
    },
    {
        mon: "Văn",
        diem: 3,
    },
    {
        mon: "Tin",
        diem: 8,
    }
]
// const hocSinhGioi = monHoc.every((item) =>{
//     return item.diem >= 8;
// })
// // đối với every thì 1 điều kiện false thì sẻ trả về false
// console.log(hocSinhGioi);
// if(hocSinhGioi === true){
//     console.log("Đây là học sinh giỏi");
// }else{
//     console.log("Đây không phải học sinh giỏi");
// }

// 3 some()
// kiểm tra chỉ cần 1 phần tử của một mảng thỏa mãn một điều kiện gì đó là được
const oLaiLop = monHoc.some((item) =>{
    return item.diem < 4;
})
if(oLaiLop === true){
    console.log("Ở lại lớp");
}else{
    console.log("Được lên lớp");
}

// 4 find()
/*tìm xem trong mảng có giá trị giống giá trị đang cần tìm không
    nếu có trả về chính phần tử của mảng đó
    nếu không trả về undefined
chỉ tìm được 1 phần tử trong mảng
*/
const monTin = monHoc.find((item) =>{
    return item.mon === "Tin";
})
console.log(monTin);
// nếu không tìm thấy trả về undefined
const monHoa = monHoc.find((item) =>{
    return item.mon === "Hóa";
})
console.log(monHoa);

// 5 filter()
/*giống hàm find().
    tìm được nhiều phần tử trong mảng
    trả về 1 mảng các phần tử tìm được
*/
const monToan = monHoc.filter((item) =>{
    return item.mon === "Toán";
})
console.log(monToan);

// map()
/*Lặp qua từng phần tử của mảng và trả về mảng mới
    số lượng phần tử bằng mảng cũ
    giá trị trả về quyết định bằng từ khóa return.
*/
const mangMonHoc = monHoc.map((item) =>{
    return item.mon;
})
console.log("/-----------------/");
console.log(monHoc);
console.log(mangMonHoc);

// so sánh forEach với map
// forEach
const mangMoi = monHoc.forEach((item) =>{
    return item.mon;
})
console.log(mangMoi); // forEach không có return nên sẽ trả về undefiend
// map
const mangMoi1 = monHoc.map((item) =>{
    return item.mon;
})
console.log(mangMoi1);

// reduce
/*duyệt qua từng phần tử trong mảng để tính toán và trả về một giá trị cuối cùng
    cú pháp:
    arr.reduce(function(accumulator, currentValue, currentIndex, array){
        code xử lý
    }, initialValue);
trong đó:
    accumulator: là giá trị của lệnh return mỗi lần lặp
    initialValue: giá trị khởi tạo ban đầu(không bắt buộc)
*/
const array = [1,2,3,4];
const tinhTong = array.reduce((total, item) =>{
    console.log(total);
    console.log(item);
    console.log("/-----/");
    return total + item;
})
console.log(tinhTong);

const tongDiem = monHoc.reduce((total, item) =>{
    return total + item.diem;
}, 0)
console.log(tongDiem);

const diemTrungBinh = monHoc.reduce((avenger, item) =>{
    return avenger + item.diem / monHoc.length;
}, 0)
console.log(diemTrungBinh);

const arrayString = "Chẳng có gì hết"
const newArray = arrayString.split(" ").map((dataMap) =>{
    return dataMap.toUpperCase();
})
console.log(newArray);

const listFruits = ["Xoài", "Chuối", "Cam", "Ổi"];
let n = prompt("Nhập loại quả muốn thêm");
function addFruits(n) {
    if(listFruits.includes(n)){
        console.log("Loại quả này đã tồn tại");
    }
    else{
        listFruits.push(n);
        console.log(`Đã thêm ${n} vào mảng`);
        console.log(listFruits);
    };
}
const newFruits = addFruits(n);