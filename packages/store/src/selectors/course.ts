import { selector } from "recoil";
import { courseState } from "../atoms/courses"; // Assuming this is the correct path

interface Course {
  description?: string;
  title?: string;
  price?: number;
  imageLink?: string;
}

export const courseDescription = selector<string>({
  key: "courseDescriptionState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.description : "";
  },
});

export const courseTitle = selector<string>({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.title : "";
  },
});

export const coursePrice = selector<number>({
  // Assuming price is a number
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.price : 0;
  },
});

export const courseImage = selector<string>({
  key: "courseImageState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.imageLink : "";
  },
});
