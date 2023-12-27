// header_fixed_on_scroll
window.addEventListener('scroll',function(e) {     
    if(scrollY> 0){
        document.querySelector('.header').classList.add('fixed')
    }else{
        document.querySelector('.header').classList.remove('fixed')
    }
})
const popupMenu =  () => {
    const menu = document.getElementById("menu");
    const bar = document.querySelectorAll(".bar")
    menu.classList.toggle("active");
    bar[0].classList.toggle("rotate_bar1");
    bar[1].classList.toggle("rotate_bar3");
    bar[2].classList.toggle("rotate_bar2");
};
// contact_form_data
let data={};
document.querySelectorAll("#hd_contact_form input,textarea").forEach((ele)=>{
    ele.addEventListener('input',(e)=>{    
        console.log(data)       
            data={
                ...data,[e.target.name]:e.target.value
            }         
        })
})
document.querySelector("#hd_contact_form").addEventListener('submit', function(e){
    e.preventDefault()
   const FormBtn  = document.querySelector('#form_btn_loading')
    FormBtn.classList.add('form_btn')  
    fetch("https://portfolio-8878.onrender.com/message", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) =>{
            // setbtnvalue('Message')
            document.querySelectorAll('form > .form_input').forEach((ele)=>{ele.value=''})  
            FormBtn.classList.remove('form_btn')              
            alert('Your message has been successfully sent')            
        });
})
