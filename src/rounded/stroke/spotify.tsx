import React from "react";
const Spotify: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 12.069c1.1-.37 2.276-.569 3.5-.569 2.024 0 3.92.547 5.549 1.5M18 10c-1.85-1.262-4.088-2-6.5-2-1.597 0-3.118.324-4.5.908M15.129 16c-1.236-.64-2.64-1-4.127-1-.82 0-1.614.11-2.37.315"
      />
    </svg>
  );
};
export default Spotify;
