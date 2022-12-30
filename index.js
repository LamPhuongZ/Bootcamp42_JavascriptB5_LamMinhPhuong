// Bài tập 1: Quản lý sinh viên
// Tính điểm ưu tiên theo khu vực
function calcArea(area) {
    if (area === 'A') {
        return 2;
    }
    else if (area === 'B') {
        return 1;
    }
    else if (area === 'C') {
        return 0.5;
    }
    else {
        return 0;
    }
}

// Tính điểm ưu tiên theo đối tượng
function calcType(type) {
    switch (type) {
        case 1:
            return 2.5;

        case 2:
            return 1.5;

        case 3:
            return 1;

        default:
            return 0;
    }
}

document.getElementById("calculate").onclick = function () {
    let numberstander = +document.getElementById("numberstander").value;
    let area = document.getElementById("area").value;
    let type = +document.getElementById("type").value;
    let subject1 = +document.getElementById("subject1").value;
    let subject2 = +document.getElementById("subject2").value;
    let subject3 = +document.getElementById("subject3").value;

    let point = 0;
    let sum = 0;
    let result;

    // Tính toán:
    // Tính điểm ưu tiên
    point = calcArea(area) + calcType(type);

    // Tính điểm tổng kết
    sum = subject1 + subject2 + subject3 + point;

    // Tính điểm kiểm tra
    if (sum <= 0) {
        result = ("Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0");
    }
    else {
        if (subject1 > 0 && subject2 > 0 && subject3 > 0 && sum >= numberstander) {
            result = ("Bạn đã đậu. Tổng điểm: " + sum);
        }
        else {
            result = ("Bạn đã rớt. Tổng điểm: " + sum);
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result-b1").innerHTML = result;
}

// Kết thúc bài tập 1

// Bài tập 2: Tính tiền điện 
function calcKW(numberkw) {
    let bac1 = 500; // 50kw đầu = 500d/kw
    let bac2 = 650; // 50kw kế = 650d/kw
    let bac3 = 850; // 100kw  kể = 850d/kw
    let bac4 = 1100; // 150kw kể = 1100d/kw
    let bac5 = 1300; // còn lại = 1300d/kw 

    if (numberkw === 0) {
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    }
    else {
        if (numberkw <= 50) {
            return bac1 * numberkw;
        }
        else if (numberkw > 50 && numberkw <=100) {
            return 50 * bac1 + (numberkw - 50) * bac2;
        }
        else if (numberkw > 100 && numberkw <= 200) {
            return (50 * bac1) + (50 * bac2) + (numberkw - 100) * bac3;
        }
        else if (numberkw > 200 && numberkw <= 350) {
            return (50 * bac1) + (50 * bac2) + (50 * bac3) + (numberkw - 200) * bac4;
        }
        else if (numberkw > 350) {
            return (50 * bac1) + (50 * bac2) + (50 * bac3) + (50 * bac4) + (numberkw - 350) * bac5;
        }
    }
}

document.getElementById("calcmoney").onclick = function () {
    let name = document.getElementById("txtname").value;
    let numberkw = +document.getElementById("numberkw").value;

     // Hiển thị kết quả
     document.getElementById("result-calcmoney").style.display = "block";
     document.getElementById("result-b2").innerHTML = "Họ tên: " + name + "; Tiền điện: " + Intl.NumberFormat('vn-VN').format(calcKW(numberkw)) + " VND";
}
// Kết thúc bài tập 2
