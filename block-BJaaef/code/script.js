var container = document.querySelector('.container');

  function memberDescribe(){
      got.houses.forEach((item) =>{
          item.people.forEach((item)=>{
              container.innerHTML +=`
              <div class="box1">
              <div class="inline">
                  <img class="image" src= ${item.image} >
                  <h3>${item.name}</h3>
                  </div>
                  <p>${item.description}</p>
                  <div class=centre>
                  <button class="btn"> Learn More</button>
                  </div>
              </div>`
          })
      })
  }
  memberDescribe();