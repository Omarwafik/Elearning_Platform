const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const courses = JSON.parse(localStorage.getItem("courses"));
console.log(courses);
const selectedCourse = courses.find((c) => c.id == id);
const payment = document.getElementById("payment");

payment.innerHTML += `
<main class="text-light " >
  <h1 class="mb-1">${selectedCourse.category}</h1>
    <div class="content  d-flex py-3 rounded-4 gap-4">
      <div class="left align-self-start px-2 " id="left">
        <div class="info">
          <p class="px-5 mb-4">${selectedCourse.brief}</p>
          <div class="counts d-flex gap-4 align-items-center px-5 mb-3 w-75">
            <div class=" text-center">
            <h5>👩‍🎓 Enrolled Students</h5>
            <h5 class="counter text-danger fs-3 mt-3 " data-target="178">0</h5>
            </div>
            <div class=" text-center">
            <h5>📚 Available Courses </h5>
            <h5 class="counter text-danger fs-3 mt-3" data-target="37">0</h5>
            </div>
            <div class=" text-center">
            <h5>🧑‍🏫 Qualified Instructors </h5>
            <h5 class="counter text-danger fs-3 mt-3" data-target="56">0</h5>
            </div>
          </div>
        </div>
      <form action="" class=" p-3 rounded-3 ">
        <div class="inputs p-1">
          <label for="">Card Holder Name</label> <br>
          <input type="text" class="p-2 rounded-2" placeholder="Full Name" >
        </div>
        <div class="inputs p-1">
          <label for="">Card Details</label> <br>
          <input type="text" class="p-1 rounded-2" placeholder="xxxx xxxx xxxx xxxx">
        </div>
        <div class="inputs  p-1 d-flex gap-4 align-items-center ">
          <input type="text" class="p-1 rounded-2 " placeholder="MM/YY" >
          <input type="text" class="p-1 rounded-2" placeholder="CVV" >
        </div>
        <button type="button" class="btn btn-outline-warning w-25 mt-3" id="pay">Pay </button>
      </form>
    </div>
    <div class="right ">
    <div class="image">
    <img src="${selectedCourse.img}" class="" alt="">
    </div>
    </div>
  </main>
  `;
const counters = document.querySelectorAll(".counter");

counters.forEach((i) => {
  const target = i.getAttribute("data-target");
  let count = 0;
  const steps = 40;
  const increment = target / steps;
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      i.innerText = Math.ceil(target) + "+";
      clearInterval();
    } else {
      i.innerText = Math.ceil(count) + "+";
    }
  }, 60);
});

const pay = document.getElementById("pay");

pay.addEventListener("click", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    Swal.fire({
      title: `Congratulations ✅!`,
      text: "Course Purchased successfully",
      icon: "success",
    });
  }, 300);
});
