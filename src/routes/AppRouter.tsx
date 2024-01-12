import Biography from '@/pages/Biography'
import Home from '@/pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} /> */}
            {/* <Route  path='/*' element={<Navigate to='/'/>} />   */}
        </>
    </Routes>
  )
}

export default AppRouter