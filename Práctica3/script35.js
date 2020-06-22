let usua = parseFloat(prompt('Digite un número'));
let asterisco = '*';
let cont = 1;

while(cont <= usua){
    while (cont <= usua){
        console.log(asterisco);
        asterisco = asterisco + ' *';
        cont++
    }
    cont++
}