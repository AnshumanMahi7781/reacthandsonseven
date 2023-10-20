import { configureStore } from "@reduxjs/toolkit";
import StudentSliceReducer from "../SLice/StudentSlice";

const StudentStore = configureStore({
   reducer: {
      Student: StudentSliceReducer
   }
})

export default StudentStore