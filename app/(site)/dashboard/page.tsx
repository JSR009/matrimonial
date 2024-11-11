import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the components with code splitting
const ContactAdminDashboard = dynamic(() => import('@/components/ContactDahboard'), {
  ssr: false, // Optional: disables server-side rendering for this component
  loading: () => <p>Loading Contacts...</p>, // Optional loading fallback
});

const AdminDashboard = dynamic(() => import('@/components/UserAdminDashboard'), {
  ssr: false, // Optional: disables server-side rendering for this component
  loading: () => <p>Loading Users...</p>, // Optional loading fallback
});

const Page = () => {
  return (
    <div>
      <ContactAdminDashboard />
      <AdminDashboard />
    </div>
  );
};

export default Page;
