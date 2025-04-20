const container = document.getElementById("courses-cont");
const search_Input = document.getElementById("search-input");
// let element='';
let courses=[];
async function getCourses() {
    try {
      // const response = await fetch('db.json');
       courses = coursesData;
      return courses;
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
}
  
async function displayCourses(courses) {
    if (!courses || !Array.isArray(courses)) {
        container.innerHTML = '<div class="text-danger fs-3 p-4">⚠️ Error loading courses. write this in terminal json-server --watch db.json --port 3001</div>';
        return;
      }
    let element='';
    courses.forEach(i => {  
        element +=`
        <div class="course-card">
        <img id="course-image" src="${i.img}" alt="">
         <h4 id="course-title">${i.category}</h4>
         <p  id="course-desc">${i.description}</p>
         <p ><strong>Instructor:</strong> <span id="course-instructor">${i.instructor}</span></p>
            <div class="bottom d-flex justify-content-between px-3 align-items-center mt-auto">
                <p class="price"><strong>Price:</strong> <span id="course-price">$${i.price}</span></p>
                <button type="button" onclick="setTimeout(() => { window.location.href='course-details.html?id=${i.id}' }, 300)" class="btn book btn-outline-dark">Book Now</button>
            </div>   
               </div> 
      `
    });
    container.innerHTML =element;
} 

async function all(){
    const courses = await getCourses();
    displayCourses(courses);
    localStorage.setItem("courses", JSON.stringify(courses));
}
all();

function search(){
    const value = search_Input.value.toLowerCase();
    if(!value){
        displayCourses(courses);
        return;
    }

    const filtered = courses.filter(course => 
        course.category.toLowerCase().includes(value));
        if(filtered.length===0){
            container.innerHTML = '<div class="no-results text-light p-5  fs-5">No courses found matching your search</div>';
            return;
        }
    
       
        displayCourses(filtered);
}


const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const nameUser = document.getElementById("name");

if (currentUser) {
  nameUser.innerHTML = `
    <h3 class="welcome-text">
      Welcome <span>${currentUser.name}!</span>
    </h3>
  `;
}