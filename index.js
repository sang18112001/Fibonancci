function findFibo(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return findFibo(n - 1) + findFibo(n - 2);
}
// Bài 1. In ra các số Fibonacci nhỏ hơn hoặc bằng một số n cho trước?
//Lời giải
listFibo = []
function bai1(index, n) {
    if (index > n) {
        return;
    }
    listFibo.push(findFibo(index));
    bai1(index + 1, n);
}
bai1(1, 6)
console.log("Bai 1:", listFibo.join(","))
// Bài 2. Tìm số Fibonacci thứ n trong dãy Fibonacci?
//Lời giải
console.log("Bai 2:", findFibo(6))

// Bài 3. Tính tổng các số Fibonacci nhỏ hơn hoặc bằng một số n cho trước?
//Lời giải
console.log("Bai 3:", listFibo.reduce((sumFibo, element) => sumFibo + element, 0))
// Bài 4. Kiểm tra xem một số có phải là số Fibonacci không?
//Lời giải
const checkFibo = (n) => {
    return Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) || Number.isInteger(Math.sqrt(5 * n ** 2 - 4))
}
console.log("Bai 4", checkFibo(8))
// Bài 5. Tìm số Fibonacci lớn nhất nhỏ hơn hoặc bằng một số n cho trước?
//Lời giải
console.log("Bai 5", listFibo.slice(-1))
// Bài 6. Liệt kê n số Fibonacci đầu tiên?
//Lời giải
console.log("Bai 6", listFibo)
// Bài 7. Tính tổng các số Fibonacci từ số thứ m đến số thứ n trong dãy Fibonacci?
//Lời giải
function bai7(m, n, sumOfFibo) {
    if (m > n) {
        return sumOfFibo
    }
    return bai7(m + 1, n, sumOfFibo + findFibo(m))
}
console.log("Bai7: Tong cua day fibo tu 5 den 8 la: ", bai7(5, 8, 0))
// Bài 8: Tìm số Fibonacci gần với một số n cho trước nhất?
//Lời giải
function nearlyFibo(n) {
    current = 1
    prev = 0
    while (current <= n) {
        const next = current + prev;
        prev = current;
        current = next;
    }
    return (n - prev < current - n) ? prev : current
}
console.log("Bai 8: ", nearlyFibo(100))
// Bài 9. Tìm số được hình thành bằng cách ghép các số Fibonacci liên tiếp trong dãy Fibonacci?
//Lời giải
console.log("Bai 9: ", listFibo.join(''))