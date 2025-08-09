import DynamicCTA from '@/components/DynamicCTA'
import TermsAndConditions from '@/modules/legal/TermsAndConditions'
import React from 'react'

export default function page() {
  return (
    <div>
        <DynamicCTA
        heading={"Welcome to the dashboard"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />


        {/* Terms and Conditions Content */}    
        <TermsAndConditions />

    </div>
  )
}
