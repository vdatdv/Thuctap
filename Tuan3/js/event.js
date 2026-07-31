studentTable.addEventListener("click", function (e) {

    const id = Number(e.target.dataset.id);

    if (e.target.classList.contains("edit")) {

        const student = students.find(s => s.id === id);

        if (!student) return;

        studentName.value = student.name;
        studentStatus.value = student.status;

        editId = id;

        btnSave.textContent = "Cập nhật";

        studentName.focus();
    }

    if (e.target.classList.contains("delete")) {

        const confirmDelete = confirm("Bạn có chắc muốn xóa học viên này?");

        if (!confirmDelete) return;

        students = students.filter(s => s.id !== id);

        // Nếu đang sửa đúng học viên vừa xóa
        if (editId === id) {
            editId = null;
            form.reset();
            btnSave.textContent = "Thêm";
        }

        render();

    }

});


search.addEventListener("input", function () {
    render();
});

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        currentFilter = this.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        render();

    });

});