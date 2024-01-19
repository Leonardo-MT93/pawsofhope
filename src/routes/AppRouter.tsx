import AdoptionPage from '@/pages/AdoptionPage'
import Biography from '@/pages/Biography'
import ContactPage from '@/pages/ContactPage'
import DonationPage from '@/pages/DonationPage'
import Home from '@/pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Announcements from '@/pages/AnnouncementsPage'

const AppRouter = () => {
  return (
    <Routes>
        <>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donations" element={<DonationPage />} />
            <Route  path='/*' element={<Navigate to='/'/>} />
        </>
    </Routes>
  )
}

export default AppRouter