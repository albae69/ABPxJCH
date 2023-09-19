import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen max-w-screen-lg mx-auto px-4'>
      <Header />
      <div className='mb-8' />
      {children}
    </div>
  )
}

export default Layout
