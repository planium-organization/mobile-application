const courses = {
  MATHS: "MATHS",
  PHYSICS: "PHYSICS"
};

export default class Card {
  key = -1;
  type;
  course;
  color;
  date;
  duration;
  startTimeHours;
  startTimeMinutes;

  constructor() {
      this.type = "todo";
      this.color = "#273baa";
      this.date = new Date();
      this.duration = 90;
      this.startTimeHours = 0;
      this.startTimeMinutes = 0;
  }

  get course() {
      return this.course;
  }
  /**
     * @param {courses} course
     */
  set course(course) {
      this.course = course;
  }
}
