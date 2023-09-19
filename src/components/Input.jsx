const Input = (props) => {
  return (
    <div>
      <p className='mb-2'>{props.label}</p>
      <input
        {...props}
        className='h-10 border border-gray-500 rounded-md  w-[300px] px-2 mb-4'
      />
    </div>
  )
}

export default Input
