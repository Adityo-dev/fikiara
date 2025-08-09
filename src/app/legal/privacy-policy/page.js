import DynamicCTA from '@/components/DynamicCTA'
import PrivacyPolicy from '@/modules/legal/PrivacyPolicy'
import React from 'react'

export default function page() {
  return (
    <>
        <DynamicCTA
        heading={"Welcome to the dashboard"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />
        {/* Privacy Policy Content */}
        <PrivacyPolicy />
    </>
    
  )
}
