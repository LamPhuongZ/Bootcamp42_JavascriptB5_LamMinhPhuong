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
};

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
};

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
};

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
        else if (numberkw > 50 && numberkw <= 100) {
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
};

document.getElementById("calcmoney").onclick = function () {
    let name = document.getElementById("txtname").value;
    let numberkw = +document.getElementById("numberkw").value;

    // Hiển thị kết quả
    document.getElementById("result-calcmoney").style.display = "block";
    document.getElementById("result-b2").innerHTML = "Họ tên: " + name + "; Tiền điện: " + Intl.NumberFormat('vn-VN').format(calcKW(numberkw)) + " VND";
};
// Kết thúc bài tập 2

// Bài tập 3: Tính thuế thu nhập cá nhân
function calcTax(total, calc) {
    let bac1 = 0.05; // Thu nhập chịu thuế: <= 60 (triệu) Thuế suát: 5%
    let bac2 = 0.1; // Thu nhập chịu thuế: > 60  <= 120 (triệu) Thuế suát: 10%
    let bac3 = 0.15; // Thu nhập chịu thuế: > 120  <= 210 (triệu) Thuế suát: 15%
    let bac4 = 0.2; // Thu nhập chịu thuế: > 210  <= 384 (triệu) Thuế suát: 20%
    let bac5 = 0.25; // Thu nhập chịu thuế: > 384 <= 624 (triệu) Thuế suát: 25%
    let bac6 = 0.3; // Thu nhập chịu thuế: > 624 <= 960 (triệu) Thuế suát: 30%
    let bac7 = 0.35; // Thu nhập chịu thuế: > 960 (triệu) Thuế suát: 35%

    if (total <= 0) {
        alert("Số tiền thu nhập không hợp lệ! Vui lòng nhập lại");
    }
    else {
        if (calc <= 60_000_000) {
            return calc * bac1;
        }
        else if (calc > 60_000_000 && calc <= 120_000_000) {
            return calc * bac2;
        }
        else if (calc > 120_000_000 && calc <= 210_000_000) {
            return calc * bac3;
        }
        else if (calc > 210_000_000 && calc <= 384_000_000) {
            return calc * bac4;
        }
        else if (calc > 384_000_000 && calc <= 624_000_000) {
            return calc * bac5;
        }
        else if (calc > 624_000_000 && calc <= 960_000_000) {
            return calc * bac6;
        }
        else if (calc > 960_000_000) {
            return calc * bac7;
        }
    }
};

document.getElementById("calctax").onclick = function () {
    let name = document.getElementById("txtnameb3").value;
    let total = +document.getElementById("number__total").value;
    let dependent = +document.getElementById("number__dependent").value;

    let calc = total - 4_000_000 - dependent * 1_600_000;

    // Hiển thị kết quả
    document.getElementById("result-tax").style.display = "block";
    document.getElementById("result-b3").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + Intl.NumberFormat('vn-VN').format(calcTax(total, calc)) + " VND";
};
// Kết thúc bài tập 3

// Bài tập 4: Tính tiền cáp
function showConnect() {
    let choose = document.getElementById("choose");
    let output = document.getElementById("connect");
    choose.addEventListener("change", function () {

        if (choose.value === 'X') {
            output.classList.add("d-none");
        }
        else if (choose.value === 'ND') {
            output.classList.add("d-none");
        }
        else if (choose.value === 'DN') {
            output.classList.remove("d-none");
        }
    })
};

showConnect();

document.getElementById("calcchannel").onclick = function () {
    let choose = document.getElementById("choose").value;
    let numberID = +document.getElementById("numberID").value;
    let channel = +document.getElementById("channel").value;
    let connect = +document.getElementById("connect").value;

    let billfee = 0;
    let servicefee = 0;
    let channelrental = 0;

    let result = 0;

    switch (choose) {
        case 'ND':
            billfee = 4.5;
            servicefee = 20.5;
            channelrental = channel * 7.5;
            break;

        case 'DN':
            billfee = 15;

            if (connect <= 10) {
                servicefee = 75;
            }
            else {
                servicefee = (connect - 10) + 75 * 5;
            }

            channelrental = channel * 50;
            break;

        default:
            alert("Hãy chọn loại khách hàng");
            break;
    }

    result = billfee + servicefee + channelrental;

    // Hiển thị kết quả
    document.getElementById("result-channel").style.display = "block";
    document.getElementById("result-b4").innerHTML = "Mã khách hàng: " + numberID + "; Tiền cáp: " + Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(result);

};
// Kết thúc bài tập 4