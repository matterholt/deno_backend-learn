

interface CourseBook{
  id : string,
  title: string,
  gradeLevel : string,
}


interface CourseChapter {
  id : string,
  subject : string,
  numberOfChapters : number
  bookId : number
}
//MOC data
const Courses = new Map<sting, CourseBook>();
const CoursesDetails = new Map<sting, CurseChapter>();
Courses.set(
  '1',{
    id: '1',
    tilte:"beginner math",
    gradeLevel: "2"
  },
)
Courses.set(
  '2',{
    id : '2',
    tilte: "beginner reading",
    gradeLeve:"3"
  }
 )
CoursesDetails.set(
  '1',{
    id:'10',
    subject: 'math',
    numberOfChapters : 20,
    bookId: '1'
  }
)

CoursesDetails.set(
  '2',{
    id:'20',
    subject: 'reading',
    numberOfChapters : 22,
    bookId: '2'
    
  }
)
export default{
  Courses,
  CoursesDetails
}

