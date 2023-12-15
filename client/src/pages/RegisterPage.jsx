import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage() {

    const onSubmit = handleSubmit(async (values) => {
        console.log(res)
        const res = await registerRequest(values)
    })

    const { register, handleSubmit } = useForm()
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md '>
        
        <form onSubmit={onSubmit}>
            <input type="text" {...register("username", { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Username' />
            <input type="email" {...register("email", { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Email' />
            <input type="password" {...register("password", { required: true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Password' />
            <button type="submit" className=' bg-blue-500 py-2 px-4 rounded-md'>
                Register
            </button>
        </form>

    </div>
  )
}

export default RegisterPage