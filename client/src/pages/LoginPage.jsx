import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, errors: signinErrors } = useAuth()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      {
        signinErrors.map((error, i) => (
                <div key={i} className='bg-red-700 text-white h-20'>
                    {error}
                </div>
            ))
        }
        <h1 className='text-2xl font-bold'>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            {...register('email', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Email'
          />
          { errors.email && <p className='text-red-500'>Email is required</p> }
          <input
            type='password'
            {...register('password', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Password'
          />
          { errors.password && <p className='text-red-500'>Password is required</p> }
          <button type='submit' className=' bg-green-600 py-2 px-4 rounded-md mt-2'>
            Login
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default LoginPage