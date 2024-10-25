// start settings part
let maincolors=localStorage.getItem("color_option");
if(maincolors!==null){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");
        if(element.dataset.color==maincolors){
            element.classList.add("active");
        }
    });

};

//-----------------

document.querySelector(".toggle-settings .i-setting").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
};

//---------------
// switch background
const colorli=document.querySelectorAll(".colors-list li");
colorli.forEach(li =>{
    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);//add color to loaclest
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
//-----------------
let backgrou_option=true;
let bacgrou_interval;

let backgro_locsto=localStorage.getItem("backgtound_option");
if(backgro_locsto!==null){
    if(backgro_locsto==="true"){
        backgrou_option=true;
    }
    else{
        backgrou_option=false;
    }
    document.querySelectorAll(".random-backgroung span").forEach(element =>{
        element.classList.remove("active")
    });
    if(backgro_locsto==='true'){
        document.querySelector(".random-backgroung .yes").classList.add("active");
    }
    else{
        document.querySelector(".random-backgroung .no").classList.add("active");
    }
        
}

const randbackgrouele=document.querySelectorAll(".random-backgroung span");
randbackgrouele.forEach(span =>{
    span.addEventListener("click",(e) =>{
            e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");

        if(e.target.dataset.background==='yes'){
            backgrou_option=true;
            rand_img();
            localStorage.setItem("backgtound_option",true);
        }
        else{
            backgrou_option=false;
            clearInterval(bacgrou_interval);
            localStorage.setItem("backgtound_option",false);
        }
    });
});



// end settings part
// ____________________________________________________________


let landing_p=document.querySelector(".landin-page");
let img_arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

function rand_img(){
    if(backgrou_option===true){
        bacgrou_interval= setInterval(()=>{
    
            let rand_num=Math.floor(Math.random()*img_arr.length);
            landing_p.style.backgroundImage ='url("images/'+ img_arr[rand_num]+'")';
            
        },10000);
        
    }
}
rand_img();

// _______________________________________________________
// start skills
let our_sk=document.querySelector(".skills");
window.onscroll=function(){
    let sk_top=our_sk.offsetTop;
    let sk_outer_hight=our_sk.offsetHeight;
    let win_height=this.innerHeight;
    let win_scr_top=this.scrollY;
    //console.log(win_scr_top +" "+ sk_top +" "+ sk_outer_hight +" "+ win_height)
    if(win_scr_top >= (sk_top + sk_outer_hight - win_height)){
        let all_skill=document.querySelectorAll(".skill-box .s-prog span");
        all_skill.forEach(skill =>{
            skill.style.width=skill.dataset.prog;
        })
    }
}

// end skills
// ______________________________________
// start gallery
let our_gall=document.querySelectorAll(".gallery img");
our_gall.forEach(img =>{
    img.addEventListener("click",(e) =>{
        
        let overly=document.createElement("div");
        overly.className="popup-overlay";
        document.body.appendChild(overly);
        
        let popup_box=document.createElement("div");
        popup_box.className="popup-box";
       
        if(img.alt !==null){
            let img_head=document.createElement("h3");
            let img_text=document.createTextNode(img.alt);
            img_head.appendChild(img_text);
            popup_box.appendChild(img_head);
        };
       
        let pop_img=document.createElement("img");
        pop_img.src=img.src;

        popup_box.appendChild(pop_img);
        document.body.appendChild(popup_box);

        let closebtn=document.createElement("span");
        let closebtn_tx=document.createTextNode("X");
        closebtn.appendChild(closebtn_tx)
        closebtn.className="close-btn";
        popup_box.appendChild(closebtn)
    });
});
document.addEventListener("click",function(e){
    if(e.target.className=="close-btn"){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
})

// end gallery
// ______________________________________
// start bullets
const allbull=document.querySelectorAll(".nav_bul .bullets");
allbull.forEach(bullet => {
    bullet.addEventListener("click",(e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});
// end bullets
// __________________-------------
// setting part
document.querySelector(".reset").onclick=function(){
    localStorage.removeItem("color_option")
    localStorage.removeItem("backgtound_option")
    window.location.reload();
};
// __________________-------------
// ______________________________________________________

// stsrt toggle menu
let togbtn=document.querySelector(".toggle-menu");
let thelinks=document.querySelector(".links");
togbtn.onclick=function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    
    thelinks.classList.toggle("open");
};
document.addEventListener("click",(e) =>{
    if(e.target !== togbtn && window.target!== thelinks){
        if(thelinks.classList.contains("open")){
            thelinks.classList.remove("open");
            togbtn.classList.remove("menu-active");
        }
    }
});
thelinks.onclick=function(e){
    e.stopPropagation();
};

// end toggle menu
