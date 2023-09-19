import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-1 flex-col items-center justify-center'>
      <h3 className='font-semibold text-base'>Page Not Found</h3>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default NotFound
