function getValue() {
  var inputField = document.getElementById("inputValue");
  var userName = inputField.value;
  var errorContainer = document.getElementById("errorContainer");
  var userCard = document.getElementById("userCard");


  fetch("https://api.github.com/users/" + userName)
    .then((response) => {
      if (!response.ok) {

        throw new Error("Enter valid username");
      }
      return response.json();
    })
    .then((value) => {
      errorContainer.textContent = "";
      var imageUrl = document.getElementById("userImage")
      if (value.name) {
        var nameheading = document.getElementById("nameHeading");
        nameheading.innerHTML = "Name"
        var name = document.getElementById("yourName");
        name.innerHTML = value.name;
        name.style.fontFamily = "Times New Roman, Times, serif;";
        name.style.fontWeight = "bold"
      }
      else {

        var nameheading = document.getElementById("nameHeading");
        nameheading.innerHTML = "Name";
        var name = document.getElementById("yourName");
        name.innerHTML = "Not found";
      }

      var lineBreak = document.createElement("br");
      name.appendChild(lineBreak);
      if (value.company) {
        var nameheading = document.getElementById("companyHeading");
        nameheading.innerHTML = "Company"
        var name = document.getElementById("companyName");
        name.innerHTML = value.company;
        name.style.fontFamily = "Times New Roman, Times, serif;";
        name.style.fontWeight = "bold"
      }
      else {

        var nameheading = document.getElementById("companyHeading");
        nameheading.innerHTML = "Company";
        var name = document.getElementById("companyName");
        name.innerHTML = "Not Found";
      }


      if (value.html_url) {
        var url = document.getElementById("yourURL");


        url.innerHTML = "";

        var urlHeading = document.getElementById("urlHeading").textContent = "URL";
        var link = document.createElement("a");
        link.href = value.html_url;
        link.target = "-blank";
        link.textContent = "This is my GitHub URL:  " + value.html_url;
        url.appendChild(link);
      } else {
        // Display message if URL is null
        var url = document.getElementById("yourURL");
        var urlHeading = document.getElementById("urlHeading");
        urlHeading.textContent = "URL";
        url.innerHTML = "Not Found";
      }






      if (value.bio) {
        var bioId = document.getElementById("bioHeading");
        bioId.innerHTML = "Bio";
        bioId.style.textAlign = "center";
    
        var bio_info = document.getElementById("bio");
        bio_info.innerHTML = value.bio;
    
        bio_info.style.textAlign = "justify";
        bio_info.style.marginLeft = "20px";
        bio_info.style.marginRight = "20px";
        bio_info.style.fontFamily = "Times New Roman, Times, serif;";
        bio_info.style.fontWeight = "bold"
        bio_info.style.color = "orange"
    }
    

      else {

        var bioId = document.getElementById("bioHeading");
        var bio_info = document.getElementById("bio")
        bioId.textContent = "Bio";
        bioId.style.textAlign="center"
        bio_info.innerHTML = "Not Found";
        bio_info.style.color = "orange"
        bio_info.style.fontSize = "20px"
        bio_info.style.fontWeight = "bold"
        bio_info.style.textAlign = "Center"

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
      userCard.style.display = "block";
      inputField.value = "";

    })
    .catch((error) => {
      console.error("Error fetching GitHub data:", error);
      errorContainer.textContent = "Error: " + error.message;
      userCard.style.display = "none";
    });
}

// Add event listener for Enter key press
var inputField = document.getElementById("inputValue");
inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getValue();
  }
});

