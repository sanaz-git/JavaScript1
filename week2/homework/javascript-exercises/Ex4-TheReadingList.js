const books = [
    {title: 'The Forty Rules of Love',
     author: 'Elif Shafak',
     alreadyRead: true
    },
    {title: 'Blindness',
     author: 'José Saramago',
     alreadyRead: true
    },
    {title: 'The Feeling Good',
     author: 'David D. Burns',
     alreadyRead: false
    }];

for(let i = 0; i < books.length; i++){
    console.log('The ' + books[i].title + ' by ' + books[i].author);
    
    if (books[i].alreadyRead == true) {
        console.log('You already read ' + books[i].title);
      } else {
        console.log('You still need to read ' + books[i].title);
      }
}