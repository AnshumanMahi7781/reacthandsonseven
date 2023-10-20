import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateStudent } from '../SLice/StudentSlice';
function EditStudent() {
  let NavigateToStudent = useNavigate();
  let StudentData = useSelector((state) => state.Student)
  let ParamIndex = useParams().ID;
  let dispatch = useDispatch();

  const [tempObj, setTempObj] = useState({
    stuName: StudentData[ParamIndex].stuName,
    stuAge: StudentData[ParamIndex].stuAge,
    stuCourse: StudentData[ParamIndex].stuCourse,
    stuBatch: StudentData[ParamIndex].stuBatch,
  });
  

  const handleChange = (e) => {
    setTempObj({...tempObj, [e.target.name]: e.target.value });
  }

  const updateHandler = (e) => {
    e.preventDefault()
    dispatch(updateStudent({tempObj, ParamIndex }))
    NavigateToStudent('/student');
  }

  return (
    <section className='CommonSection updateStudentSection'>
      <form className='studneDescForm'>

        <div className="FormRow FormRow-1">
          <input type="text" name='stuName' placeholder={StudentData[ParamIndex].stuName} className='stuDescInput' onChange={handleChange} />
        </div>

        <div className="FormRow FormRow-2">
          <input type="number" name='stuAge' placeholder={StudentData[ParamIndex].stuAge} className='stuDescInput' onChange={handleChange} />
        </div>

        <div className="FormRow FormRow-3">
          <input type="text" name='stuCourse' placeholder={StudentData[ParamIndex].stuCourse} className='stuDescInput' onChange={handleChange} />
        </div>

        <div className="FormRow FormRow-4">
          <input type="text" name='stuBatch' placeholder={StudentData[ParamIndex].stuBatch} className='stuDescInput' onChange={handleChange} />
        </div>

        <div className="FormRow buttonsContainer">
          <button type="button" onClick={(e) => NavigateToStudent('/student')} className='cancleButton commonButton'>Cancel</button>

          <button className='updateButton commonButton' onClick={updateHandler} >Update</button>
        </div>

      </form>
    </section>
  )
}

export default EditStudent
