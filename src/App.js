import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import UserAddress from './user_profile/UserAddress';
import UserAddressChakra from './user_profile/UserAddressChakra';
import WorkExp from './user_profile/WorkExp';
import WorkExperienceForm from './user_profile/WorkExperienceForm';
import UserInterest from './user_interest/UserInterest';
import UserInterestChakra from './user_interest/UserInterestChakra';
import Home from './home/Home';
import TextEditor from './text_editor/TextEditor';
import SideBar from "./global_components/SideBar"
import AdvanceSidebar from './global_components/AdvanceSideBar';
import LargeLoader from './global_components/LargeLoader';
import JobSection from './jobSection/JobSection';
import MobileViewJobSection from './jobSection/MobileViewJobSection';
import CourseDetails from './course/CourseDetails';
import EventSection from './event_section/EventSection';
import MobileViewEventSection from './event_section/MobileViewEventSection';
import ResumeUploader from './test/ResumeUploader';
import FileUpload from './test/FileUpload';

const images = [
    "https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1680523127490-978b85b8bf71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1675107360276-b3f632199ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
]

export default function App() {
    return (
        <div>
            {/* <UserInterestChakra /> */}
            {/* <WorkExperienceForm /> */}
            {/* <SideBar /> */}
            {/* <AdvanceSidebar /> */}

            {/* <FileUpload /> */}
            <TextEditor />

            {/* <Router>
                <Routes>
                    <Route path="/events" element={<EventSection />} />
                    <Route path="/events/details" element={<MobileViewEventSection />} />
                </Routes>
                <Routes>
                    <Route path="/jobs" element={<JobSection />} />
                    <Route path="/jobs/details" element={<MobileViewJobSection />} />
                </Routes>
            </Router> */}
        </div>
    )
}
