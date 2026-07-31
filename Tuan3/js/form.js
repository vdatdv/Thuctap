form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = studentName.value.trim();
    const status = studentStatus.value;

    if (name === "") {
        error.textContent = "Tên học viên không được để trống!";
        studentName.focus();
        return;
    }

    // Giới hạn độ dài
    if (name.length > 30) {
        error.textContent = "Tên học viên tối đa 30 ký tự!";
        studentName.focus();
        return;
    }


    const isDuplicate = students.some(student => {

        if (editId === null) {
            return student.name.toLowerCase() === name.toLowerCase();
        }

        return (
            student.id !== editId &&
            student.name.toLowerCase() === name.toLowerCase()
        );

    });

    if (isDuplicate) {
        error.textContent = "Tên học viên đã tồn tại!";
        studentName.focus();
        return;
    }

    error.textContent = "";

    if (editId === null) {

        students.push({
            id: Date.now(),
            name: name,
            status: status
        });

    }

    else {

        const student = students.find(s => s.id === editId);

        student.name = name;
        student.status = status;

        editId = null;

        btnSave.textContent = "Thêm";

    }

    form.reset();

    render();

});