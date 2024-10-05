function showmore(){
    let more = document.querySelector('#more')
    more.style.display = "block"
   }

   function showmore1(){
    let more = document.querySelector('#more1')
    more.style.display = "block"
   }

   function showmore2(){
    let more = document.querySelector('#more2')
    more.style.display = "block"
   }

   function showmore3(){
    let more = document.querySelector('#more3')
    more.style.display = "block"
   }

   function showmore4(){
    let more = document.querySelector('#num')
    more.style.display = "block"
   }

   let header1 = document.querySelector('.header1');
   header1.classList.toggle('sticky', window.scrollY > 100);

   function showMenu(){
    const btn = document.querySelector('.btn1')
    btn.style.visibility="visible"
   }

   function removeSideMenu(){
    const btn = document.querySelector('.btn1')
    btn.style.visibility="hidden"
   }



   let sections = document.querySelectorAll('section');
   let navLinks = document.querySelectorAll('header nav a');
   window.onscroll = ()=> {
   sections.forEach (sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let  height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks=forEach(links => {
            links.classList.remove('active');
            document.querySelector('.header nav a[href*=' + id +']').classList.add('active');

        });
    };
    });

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menubar.classList.remove('fa fa-times');
    navbar.classList.remove('active');
 };


 // script.js
    document.getElementById('client-information').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const style = document.getElementById('style').value;
    const date = document.getElementById('date').value

    // Create a client object
    const client = {
        name: name,
        phone: phone,
        style: style,
        date:date
    };

    // Store the client object in localStorage
    localStorage.setItem('client', JSON.stringify(client));

        alert('Client information saved!');
    });

    // To retrieve the client information later:
    const savedClient = JSON.parse(localStorage.getItem('client'));
    if (savedClient) {
        console.log('Client to call:', savedClient);
        // Here you would add code to make the call, send an email, etc.
    }