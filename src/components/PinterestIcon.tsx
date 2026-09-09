import React from 'react';

interface PinterestIconProps {
  className?: string;
}

export const PinterestIcon: React.FC<PinterestIconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-38.1 24.9-75 24.9-114.3 0-67.5-96.6-55.2-96.6 26.1 0 16.5 2.1 34.5 9.6 49.5-13.8 59.1-42 147.6-42 208.2 0 18.9 2.7 37.5 4.5 56.4 3.3 3.9 4.8 4.8 8.1 2.4 49.2-69 46.2-87.3 68.7-176.7 12.9 24.6 44.4 39.9 72.3 39.9 110.1 0 163.2-105 163.2-214.5C384 86.4 298.5 6.5 204 6.5z" />
    </svg>
  );
};

export default PinterestIcon;
