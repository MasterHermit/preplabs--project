import React from 'react';
import UserAddress from './user_profile/UserAddress';
import WorkExp from './user_profile/WorkExp';
import UserInterest from './user_interest/UserInterest';
import Home from './home/Home';
import TextEditor from './text_editor/TextEditor';
import SideBar from "./global_components/SideBar"
import LargeLoader from './global_components/LargeLoader';
import JobSection from './jobSection/JobSection';

const images = [
    "https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1680523127490-978b85b8bf71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1675107360276-b3f632199ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
]

export default function App() {
    return (
        <div>
            <JobSection />
        </div>
    )
}
