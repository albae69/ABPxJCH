export const useAuth = () => {
  let token = localStorage.getItem('token')
  // console.log('token', token)
  if (token != null) {
    return true
  }
  return false
}
