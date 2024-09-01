// Інтерфейс Course
interface Course {
  title: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  title: string;
  durationHours: number;
  students: string[];

  constructor(title: string, durationHours: number) {
    this.title = title;
    this.durationHours = durationHours;
    this.students = [];
  }

  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
    } else {
      console.log(`${student} is already registered for ${this.title}.`);
    }
  }

  isStudentRegistered(student: string): boolean {
    for (const s of this.students) {
      if (s === student) {
        return true;
      }
    }
    return false;
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    if (!this.findCourse(course.title)) {
      this.courses.push(course);
    } else {
      console.log(`Course ${course.title} already exists.`);
    }
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.title !== courseName);
  }

  findCourse(courseName: string): Course | undefined {
    const result = this.courses.filter((course) => course.title === courseName);
    return result.length > 0 ? result[0] : undefined;
  }

  listCourses(): void {
    this.courses.forEach((course) => {
      console.log(`Course: ${course.title}`);
      console.log(`Duration: ${course.durationHours} hours`);
      console.log(`Students: ${course.students.join(", ")}`);
      console.log("---");
    });
  }
}

const course1 = new OnlineCourse("Marketing", 27);
const course2 = new OnlineCourse("WEB", 25);
const course3 = new OnlineCourse(".NET", 20);

const courseManager = new CourseManager();

courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

course1.registerStudent("David");
course1.registerStudent("Vik");
course2.registerStudent("Ivan");
course3.registerStudent("ALin");
course3.registerStudent("Ross");

courseManager.listCourses();
