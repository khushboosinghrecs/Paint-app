// your JS here
const box = document.getElementById('block_id')
const color = document.getElementById('colour_id')
const clr_btn = document.getElementById('change_button')
const reset_btn = document.getElementById('reset_button')

clr_btn.addEventListener('click', ()=>{
    var a= box.value;
if(a>=1 && a<=9){
var b= color.value;
document.getElementById(a).style.backgroundColor=b;
}else{
    alert("Enter between 1-9");
}
})

reset_btn.addEventListener('click', ()=>{
    document.querySelectorAll('.wall').forEach((bo)=>{
        bo.style.backgroundColor = "transparent"
    })

})
