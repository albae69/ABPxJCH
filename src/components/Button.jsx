const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-6 py-2 rounded-md w-full bg-blue-500 hover:bg-blue-400'>
      <h1 className='text-white text-base font-semibold'>{title}</h1>
    </button>
  )
}

export default Button
