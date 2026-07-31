function render() {

    studentTable.innerHTML = "";

    const keyword = search.value.trim().toLowerCase();

    let data = students.filter(student => {

        const matchName = student.name
            .toLowerCase()
            .includes(keyword);

        if (currentFilter === "all") {
            return matchName;
        }

        return student.status === currentFilter && matchName;

    });

    if (data.length === 0) {

        studentTable.innerHTML = `
            <tr>
                <td colspan="4">
                    Không có dữ liệu
                </td>
            </tr>
        `;

    } else {

        data.forEach((student, index) => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.status}</td>

                <td class="action">

                    <button
                        class="edit"
                        data-id="${student.id}">
                        Sửa
                    </button>

                    <button
                        class="delete"
                        data-id="${student.id}">
                        Xóa
                    </button>

                </td>
            `;

            studentTable.appendChild(row);

        });

    }

    const studying = students.filter(
        student => student.status === "Đang học"
    ).length;

    const stopped = students.filter(
        student => student.status === "Đã nghỉ"
    ).length;

    count.textContent =
        `Tổng: ${students.length} | Đang học: ${studying} | Đã nghỉ: ${stopped}`;

    saveData();

}