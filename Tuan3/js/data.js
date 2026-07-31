let students = JSON.parse(localStorage.getItem("students")) || [
    {
        id: 1,
        name: "Nguyễn Văn A",
        status: "Đang học"
    },
    {
        id: 2,
        name: "Trần Thị B",
        status: "Đã nghỉ"
    },
    {
        id: 3,
        name: "Lê Văn C",
        status: "Đang học"
    }
];

let editId = null;

let currentFilter = "all";


function saveData() {
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}