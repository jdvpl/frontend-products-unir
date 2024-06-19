import React from 'react'

const UnirLogo = () => {
  return (
    <svg width="160" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF7F7F', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="20" fill="url(#blueGradient)">
      unir
    </text>
    <text x="55" y="25" fontFamily="Arial, sans-serif" fontSize="20" fill="url(#redGradient)">
      shopping
    </text>
  </svg>
  )
}

export default UnirLogo
