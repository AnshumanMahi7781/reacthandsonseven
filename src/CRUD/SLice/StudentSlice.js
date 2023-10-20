import { createSlice } from "@reduxjs/toolkit";

let studentData = [{
    stuName: "Mahi",
    stuAge: 21,
    stuCourse: 'Frontend',
    stuBatch: "March",
  },
  {
    stuName: "Anuj",
    stuAge: 23,
    stuCourse: 'AI/ML',
    stuBatch: "August",
  },
  {
    stuName: "Saptarsi",
    stuAge: 22,
    stuCourse: 'MERN',
    stuBatch: "June",
  },
  ]

const StudentSlice = createSlice({
    name : "StudentDetails",
    initialState : studentData,
    reducers : {
        updateStudent : (state, action)=>{
            state[action.payload.ParamIndex] = action.payload.tempObj
        },

        addStudent : (state, action)=>{
        state.push(action.payload)
        },

        deleteStudent : (state, action)=>{
          return state.filter((student, index) =>index !== action.payload);
        }
    }
});

export const {updateStudent, addStudent, deleteStudent} = StudentSlice.actions;
export default StudentSlice.reducer