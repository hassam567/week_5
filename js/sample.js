function getValue() {
    var inputField = document.getElementById("inputValue");
    var userName = inputField.value;
    var errorContainer = document.getElementById("errorContainer");

    fetch("https://api.github.com/users/" + userName)
        .then((response) => {
          if (!response.ok) {
          
            throw new Error("Enter valid userName");
        }
            return response.json(); 
        })
        .then((value) => {
          errorContainer.textContent = "";
           var imageUrl= document.getElementById("userImage")
           if(value.name)
           {
            var nameheading=document.getElementById("nameHeading");
            nameheading.innerHTML="Name"
            var name=document.getElementById("yourName");
            name.innerHTML=value.name;
           }
           if(value.url)
           {
            var url=document.getElementById("yourURL");
         
            var nameheading=document.getElementById("urlHeading").textContent="URL";
            var link=document.createElement("a");
            link.href=value.url;
            link.target="-blank";
            link.textContent="This is my gitHub URL:  "+value.url;
            url.appendChild(link);

         
           
           }
           if(value.company)
           {
            var nameheading=document.getElementById("companyHeading");
            nameheading.innerHTML="Company"
            var name=document.getElementById("companyName");
            name.innerHTML=value.company;
           }
           

           if(value.bio)
           {
            var bioId=document.getElementById("bioHeading")
            bioId.innerHTML="Bio"
            var bio_info= document.getElementById("bio")
            bio_info.innerHTML=value.bio

           }
          
           console.log(value)


           if (value.avatar_url) {
            // If there is an image source, set border-radius to 50%
            imageUrl.src = value.avatar_url;
            imageUrl.style.borderRadius = "50%";
            imageUrl.style.width = "100px";
            imageUrl.style.height = "100px"; // Or your desired border-radius
          } else {
            // If there is no image source, set border-radius to 0
            imageUrl.style.borderRadius = "0%";
          }
          inputField.value = "";
         
        })
        .catch((error) => {
            // console.error("Error fetching GitHub data:", error);
            errorContainer.textContent = "Error: " + error.message;
        });
}
