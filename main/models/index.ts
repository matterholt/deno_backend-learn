
interface UserData{
  id: sting,
  name : string,
  
}

interface SeletedCourse {
  id: string,
  userId : sting,
  selectedCourseId :sting[]
}


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
const CoursesDetails = new Map<sting, CourseChapter>();
const User = new Map<sting, UserData> ();
const CourseSaved = new Map<sting,SeletedCourse>();

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

User.set(
  '1',{
    id: '1',
    name: 'Sam'
  }
)
User.set(
  '2',{
    id : '2',
    name : "Jill"
  }
)
User.set(
  '3',{
    id : '3',
    name : "Matterholt"
  }
)

CourseSaved.set(
  '1',{
  id: '1',
  userId : '2',
  selectedCourseId :['1']
  }
)
CourseSaved.set(
  '2',{
  id: '1',
  userId : '1',
  selectedCourseId :[]
  })

export default{
  Courses,
  CoursesDetails,
  User,
  CourseSaved
}

