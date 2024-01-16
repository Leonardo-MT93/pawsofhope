import AdoptionAnimalPage from '@/pages/AdoptionAnimalPage'
import AdoptionPage from '@/pages/AdoptionPage'
import Biography from '@/pages/Biography'
import DonationPage from '@/pages/DonationPage'
import Home from '@/pages/Home'
import StorePage from '@/pages/StorePage'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/adoption/:id" element={<AdoptionAnimalPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/donations" element={<DonationPage />} />
            <Route  path='/*' element={<Navigate to='/'/>} />
        </>
    </Routes>
  )
}

export default AppRouter