
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    filled?: boolean;
}

export const HomeIcon: React.FC<IconProps> = ({ filled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    {filled && <polyline points="9 22 9 12 15 12 15 22" />}
  </svg>
);
