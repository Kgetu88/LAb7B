


const  bookLaibrary=function(){
    
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then((response)=>response.json())
     .then((result)=>bookList(result));
     
       };

       
        const  bookList=function(empCollection){

            let items=document.getElementById("table");
                for(let j=0;j<empCollection.length;j++){
                    let tr = document.createElement("tr");
                    items.append(tr);
                    let num = document.createElement("td");
                     num.innerHTML=(j+1);
                       tr.append(num);
                    let bookIdTD = document.createElement("td");
                     bookIdTD.innerHTML=empCollection[j].bookId;
                       tr.append(bookIdTD);
                       
                       let isbnTd = document.createElement("td");
                         isbnTd.innerHTML=empCollection[j].isbn;
                       tr.append(isbnTd);
    
                     let titleTd = document.createElement("td");
                        titleTd.innerHTML=empCollection[j].title;
                       tr.append(titleTd);
    
                       let overduTd= document.createElement("td");
                          overduTd.innerHTML=empCollection[j].overdueFee;
                       tr.append(overduTd);
    
                       let publishdTd=document.createElement("td");
                        publishdTd.innerHTML=empCollection[j].publisher;
                          tr.append(publishdTd);
                    
                       let datePublishedTd = document.createElement("td");
                         datePublishedTd.innerHTML=empCollection[j].datePublished;
                      tr.append( datePublishedTd);
                }
    
               }

            bookLaibrary();
       


        

       




























