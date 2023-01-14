let n = Number(prompt('Введіть число',''));
let s = Number(prompt('Введіть степінь введеного числа',''));
let i = 1;
let r = 1;

if (n != Number(n)) {
    alert('Число введено невірно')
} else if (s != Number(s)) {
    alert('Степінь введено невірно')
} else {
    while (i <= s) {
        r = r * n
        i += 1
    }
    alert(r)
}


