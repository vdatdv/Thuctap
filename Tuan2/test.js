console.log("Danh sách gốc");
console.log(students);

console.log("Học viên đạt");
console.log(getPassedStudents(students));

console.log("Điểm trung bình");
console.log(calculateAverageScore(students));

console.log("Thống kê");
console.log(getStatistics(students));

console.log("Sắp xếp");
console.log(sortStudentsDescending(students));

console.log("Mảng gốc sau khi sort");
console.log(students);

//Hiển thị lên giao diện

const container=document.getElementById("students");

sortStudentsDescending(students).forEach(student=>{

    container.innerHTML+=`
        <div class="card">
            <h3>${student.name}</h3>
            <p>Điểm: ${student.score}</p>
            <p>Xếp loại: ${classifyStudent(student.score)}</p>
        </div>
    `;

});