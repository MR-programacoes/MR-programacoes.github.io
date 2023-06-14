
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
   const dropdownButton = item.querySelector('.dropdown__button') 

   // 2. Select each button click
   dropdownButton.addEventListener('click', () =>{
       // 7. Select the current show-dropdown class
       const showDropdown = document.querySelector('.show-dropdown')
       
       // 5. Call the toggleItem function
       toggleItem(item)

       // 8. Remove the show-dropdown class from other items
       if(showDropdown && showDropdown!== item){
           toggleItem(showDropdown)
       }
   })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
   // 3.1. Select each dropdown content
   const dropdownContainer = item.querySelector('.dropdown__container')

   // 6. If the same item contains the show-dropdown class, remove
   if(item.classList.contains('show-dropdown')){
       dropdownContainer.removeAttribute('style')
       item.classList.remove('show-dropdown')
   } else{
       // 4. Add the maximum height to the dropdown content and add the show-dropdown class
       dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
   }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
     dropdownContainer = document.querySelectorAll('.dropdown__container')


const removeStyle = () =>{
   
      
       dropdownContainer.forEach((e) =>{
           e.removeAttribute('style')
       })

       
       dropdownItems.forEach((e) =>{
           e.classList.remove('show-dropdown')
       })
   }


addEventListener('resize', removeStyle)


let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {
  
  let d = new Date();
  
  d.setMinutes(2 + d.getMinutes());
 
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

const checkCookie = () => {
  
  let input = document.cookie.split("=");
  
  if (input[0] == "myCookieName") {
    
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};