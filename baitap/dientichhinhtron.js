function dientichhinhtron() {
let inputr=prompt("Nhập bán kính hình tròn")
    let inputpi=prompt("Nhập số pi")
    let r=parseInt(inputr);
    let pi=Math.round(inputpi,2);
    let dientichhinhtron= r*r*pi;
    document.write("Diện tích hình tròn là: <br>" + dientichhinhtron);
}
