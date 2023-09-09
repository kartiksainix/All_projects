    const APIURL = "https://api.github.com/users/";
    const main = document.querySelector("#main");
    const searchBox = document.querySelector("#search");
    
    const getUser = async(username) => {
        try{
            const responseObj = await fetch(APIURL + username);
            
            // if (responseObj.status === 404) {
                //     throw new Error("User not found");
                // }
                
                // if (!responseObj.ok) {
                //     throw new Error("User not found :C ");
                // }
                
                if (!responseObj.ok) {
                    throw new Error("User not found : (");
                }
    
                const data = await responseObj.json();
                const card = `
                <div class="card">
                <div class="image">
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
                </div>
                <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>Following</strong></li>
                <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                
                </div>
                </div>
                </div>
                `
                main.innerHTML = card;
                    getRepoInfo(username);
                }
                    catch(error){
                        // main.innerHTML = `<p>${error.message}</p>`;
                        main.innerHTML = `<div class="card">
                        //      <h1 class = "nf"> ${error.message} </h1> 
                        //  </div>`;
                        
                        console.log(error.message);
                    }
                }
                
                getUser("mojombo");
                
    const getRepoInfo = async(username) =>{
    const repos =  document.querySelector("#repos");
        // repos.innerHTML = "";
    
        try{
    
            const responseObj = await fetch(APIURL + username + "/repos");
        
            // if (responseObj.status === 404) {
            //     main.innerHTML += `<p>No repositories found for this user.</p>`;
            //     return;
            // }
    
            if (!responseObj.ok) {
                throw new Error("Repositories not found for this user");
            }
        
            const data = await responseObj.json();
        
            data.forEach(
                (item) => {
                        const elem = document.createElement("a");
                        elem.classList.add("repo");
                        elem.href = item.html_url;
                        elem.innerText = item.name;
                        elem.target = "_blank";
                        repos.appendChild(elem);
                    }
                );
        }catch(error){
            // repos.innerHTML = `<p>${error.message}</p>`;
            console.log(error.message);
        }
        
        }
    
    
        // Add event listener for the Enter key press
        const formSubmit = (event) => {
            event.preventDefault(); // Prevent the form from submitting
            const username = searchBox.value.trim();
            if (username !== "") {
                getUser(username);
                searchBox.value="";
            }
        };
        
        // Add event listener for the form submission
        const form = document.querySelector("#form");
        form.addEventListener("submit", formSubmit);

    
    
    // const formSubmit = () => {
        
//     if(searchBox.value != ""){
//         getUser(searchBox.value);
//         searchBox.value="";
//     }

// }

// searchBox.addEventListener(
    //     "focusout",
    //     function() {
        //         formSubmit()
        //     }
        //     )
        
        
        
        // const card = `
        //  <div class="card">
        //      <h1 class = "nf"> User not found : ( </h1> 
        //  </div>
        //  `
        //  main.innerHTML=card;

        //===============================================================
        // if (Array.isArray(data)) {
        //     data.forEach((item) => {
        //         const elem = document.createElement("a");
        //         elem.classList.add("repo");
        //         elem.href = item.html_url;
        //         elem.innerText = item.name;
        //         elem.target = "_blank";
        //         repos.appendChild(elem);
        //     });
        // } else {
        //     main.innerHTML += `<p>No repositories found for this user.</p>`;
        // }