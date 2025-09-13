import React from 'react'

const AboutCard = ({title, description}) => {
  return (
<div className="bg-[var(--color-secondary-800)] border border-[var(--color-primary-500)] rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <span className="text-primary text-4xl mb-4">
            <i className="fas fa-user-plus"></i>
          </span>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-center">
            {description}
          </p>
        </div>  )
}

export default AboutCard