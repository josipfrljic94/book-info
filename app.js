
class Book{
    constructor(title,author,pages,genre,serial,year,amazon,price,img){
        this.title= title;
        this.author=author;
        this.pages=pages;
        this.genre= genre;
        this.serial=serial,
        this.year=year,
        this.amazon=amazon;
        this.price=price;
        this.img=img;
    }
}

class UI{ 
    // function get a books
    static showBooks(){
        let xhr=new XMLHttpRequest();
        xhr.open('GET',"https://raw.githubusercontent.com/josipfrljic94/book-info/master/data.json");
      xhr.onload=function (){
    if(xhr.readyState==4 && xhr.status==200){
       UI.display(JSON.parse(xhr.responseText));
        }else{
           console.log("false") ;
        }
}      
xhr.send();      
}
static display(data){
    data.forEach(book => {
        UI.addBookToList(book)
    });    
  }


static addBookToList(book) {
    const bookstable= document.getElementById('books-table');
        const row=document.createElement('tr');
       
   row.innerHTML=`
    <td><h5 class="mt-5 font-weight-bolder">${book.title}</h5></td>
    <td><p class="mt-5 font-weight-bolder">${book.author}</p></td>
    <td><p class="mt-5 font-weight-light">${book.pages}</p></td>
    <td><p class="mt-5 font-weight-bolder">${book.genre}</p></td>
    <td><p class="mt-5 font-weight-bolder">${book.serial}</p></td>
    <td><p class="mt-5 font-weight-bolder">${book.year}</p></td>
    <td><p class="mt-5 font-weight-bolder">${book.price} $</p> </td>
    <td><img src="${book.img}" style="height:180px;width:100px;" alt="${book.title}"></img></td>
   `
    bookstable.appendChild(row);
  
}

}
document.addEventListener('DOMContentLoaded',UI.showBooks())
