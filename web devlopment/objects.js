let lecture = 10;
let sections = 3;
let title = "javascript";

const course = {
    lectures:10,
    sections:3,
    title:'javascript',
    notes : {
        introduction :"welcome to java script course"
    },
    enroll(){
        console.log("you are succesfully enrolled");
    }
}
 course.enroll()

//  constructor function

function Course(title){
    this.title=title,
    this.enroll=function(){
        console.log('you are sucessfully enrolled');
    }  
    }
    const course = new course('javascript');
    course.enroll()
}