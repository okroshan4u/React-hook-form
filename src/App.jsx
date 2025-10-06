
import { Form, useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form is submitting...", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        {/* <input {...register("firstName", {required:true, minLength:3 , maxLength:6})}/>
        {errors.firstName && <p>Name length shlould be of 3 to 6 </p>} */}
        <input
        className={errors.firstName ? 'input-error' : ""}
        {...register("firstName",
           {required:true, 
           minLength:{value:3, message:'min length 3 required'} , 
           maxLength:6})}/>
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name:</label>
        <input {...register("middleName")}/>
      </div>
      <br/>
      <div>
        <label>Last Name:</label>
        <input {...register("lastName")}/>
      </div>
      <br/>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
