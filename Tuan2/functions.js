// Tính tuổi
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();

    if (birthYear <= 0 || birthYear > currentYear) {
        return "Năm sinh không hợp lệ!";
    }

    return currentYear - birthYear;
}

function showAge() {
    const birthYear = Number(document.getElementById("birthYear").value);

    const age = calculateAge(birthYear);

    document.getElementById("resultAge").innerHTML =
        `Tuổi của bạn là: <b>${age}</b>`;
}


// Tính điểm trung bình
function calculateAverage(math, physics, chemistry) {
    return ((math + physics + chemistry) / 3).toFixed(2);
}

function showAverage() {

    const math = Number(document.getElementById("math").value);
    const physics = Number(document.getElementById("physics").value);
    const chemistry = Number(document.getElementById("chemistry").value);

    const average = calculateAverage(math, physics, chemistry);

    document.getElementById("resultAverage").innerHTML =
        `Điểm trung bình: <b>${average}</b>`;
}


// Tính tổng tiền
function calculateTotal(price, quantity) {
    return price * quantity;
}

function showTotal() {

    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);

    const total = calculateTotal(price, quantity);

    document.getElementById("resultTotal").innerHTML =
        `Tổng tiền: <b>${total.toLocaleString()} VNĐ</b>`;
}

const students = [
    {id:1,name:"An",score:9},
    {id:2,name:"Bình",score:6},
    {id:3,name:"Lan",score:8},
    {id:4,name:"Minh",score:4},
    {id:5,name:"Hoa",score:7}
];

//Lọc học viên đạt
function getPassedStudents(list){
    return list.filter(student=>student.score>=5);
}

//Điểm trung bình
function calculateAverageScore(list){
    if(list.length===0) return 0;

    const total=list.reduce((sum,student)=>sum+student.score,0);

    return total/list.length;
}

//Xếp loại
function classifyStudent(score){

    if(score>=8)
        return "Giỏi";

    if(score>=6.5)
        return "Khá";

    if(score>=5)
        return "Trung bình";

    return "Yếu";
}

//Thống kê
function getStatistics(list){

    return{
        gioi:list.filter(s=>classifyStudent(s.score)=="Giỏi").length,
        kha:list.filter(s=>classifyStudent(s.score)=="Khá").length,
        trungBinh:list.filter(s=>classifyStudent(s.score)=="Trung bình").length,
        yeu:list.filter(s=>classifyStudent(s.score)=="Yếu").length
    };
}

//Sắp xếp giảm dần (không làm thay đổi mảng gốc)
function sortStudentsDescending(list){

    return [...list].sort((a,b)=>b.score-a.score);

}