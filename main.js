var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG-20170519-WA0044","20210221_124514","7c1cdc3f-85ee-47f2-9c6b-3e08749bdc21","IMG_2215","IMG_2207"];
var names = ["Fmaily Book","Pragyansa Kheti", "Jita Kheti", "Pranaba Nanda Khei", "Karuna Kara Kheti", "Basanti Kheti"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    document.getElementById("https://i.postimg.cc/MGn9GJXw/family.jpg").src = updatedImage;
    document.getElementById("IMG-20170519-WA0044").src = updatedImage;
    document.getElementById("20210221_124514").src = updatedImage;
    document.getElementById("7c1cdc3f-85ee-47f2-9c6b-3e08749bdc21").src = updatedImage;
    document.getElementById("IMG_2215").src = updatedImage;
    document.getElementById("IMG_2207").src = updatedImage;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i];
 
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("Family book").innerHTML = updatedName;
    document.getElementById("Pragyansa Kheti").innerHTML = updatedName;
    document.getElementById("Jita Kheti").innerHTML = updatedName;
    document.getElementById("Pranaba Nanda Kheti").innerHTML = updatedName;
    document.getElementById("Karuna Kara Kheti").innerHTML = updatedName;
    document.getElementById("Basanti Kheti").innerHTML = updatedName;
}
