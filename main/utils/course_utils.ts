
function get_book_data(key,obj){
  let found  
  obj.forEach((value)=> {
    if(value.bookId === key){
      found = value
    }else
    return
  })
  const {subject,numberOfChapters}=found
  return {subject,numberOfChapters}
}

export {get_book_data}