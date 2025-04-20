  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const courses = JSON.parse(localStorage.getItem("courses"));
  console.log(courses)
  const selectedCourse = courses.find(c => c.id == id);
  const payment = document.getElementById("payment");
  
  
  payment.innerHTML+=
  `
    <div class="left align-self-start p-2 " id="left">
    <div class="info">
    <h1 class="p-3 mb-1">${selectedCourse.category}</h1>
    <p class="p-3">${selectedCourse.brief}</p>
    <div class="container d-flex justify-content-between gap-4 align-items-center p-2 mb-3">
    <div class=" text-center">
    <h5>👩‍🎓 Enrolled Students</h5>
    <h5 class="counter text-danger fs-3 mt-4 " data-target="178">0</h5>
    </div>
    <div class=" text-center">
    <h5>📚 Available Courses </h5>
    <h5 class="counter text-danger fs-3 mt-4" data-target="37">0</h5>
    </div>
    <div class=" text-center">
    <h5>🧑‍🏫 Qualified Instructors </h5>
    <h5 class="counter text-danger fs-3 mt-4" data-target="56">0</h5>
    </div>
    </div>
    </div>
    <form action="" class=" p-3 rounded-3">
    <div class="inputs p-2">
    <label for="">Card Holder Name</label> <br>
    <input type="text" class="p-2 rounded-2" placeholder="Full Name" >
    </div>
    <div class="inputs p-2">
    <label for="">Card Details</label> <br>
    <input type="text" class="p-2 rounded-2" placeholder="xxxx xxxx xxxx xxxx" >
    </div>
    <div class="inputs  p-2 d-flex gap-4 align-items-center ">
    <input type="text" class="p-2 rounded-2" placeholder="MM/YY" >
    <input type="text" class="p-2 rounded-2" placeholder="CVV" >
    </div>
    </form>
    </div>
    
    <div class="right ">
    <div class="image">
    <img src="${selectedCourse.img}" class="" alt="">
    </div>
    <button type="button" class="btn btn-outline-warning w-25 " id="pay">Pay</button>
    
    </div>
  
  `
  const counters = document.querySelectorAll(".counter");
  


  counters.forEach(i=>{
    const target =i.getAttribute("data-target");
    let count=0;
    const steps = 40;
    const increment =target / steps;
  const interval = setInterval(()=>{
    count+=increment;
    if(count >= target){
      i.innerText = Math.ceil(target) + "+";
      clearInterval();
    }else{
      i.innerText=Math.ceil(count) + "+";
    }
  },60)
})

const pay = document.getElementById("pay");
  

pay.addEventListener("click",()=>{
    setTimeout(() => {
      window.scrollTo(0, 0);
      Swal.fire({
        title: `Congratulations ✅!`,
        text: "Course Purchased successfully",
        icon: "success",
      });
      
    }, 300);
    
  })
  










  