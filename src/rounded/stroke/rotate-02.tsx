import React from "react";
const Rotate_02: React.FC<
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 2v3.132a.314.314 0 0 1-.555.201A9.97 9.97 0 0 0 11.995 2C6.475 2 2 6.477 2 12c0 3.958 2.299 7.38 5.633 9M12.265 22q-.7 0-1.376-.092M21.735 8.667q.168.596.265 1.202m-.035 3.67q-.105.6-.273 1.186m-1.525 3.271a11 11 0 0 1-.774 1.019M16.57 21.36q-.53.303-1.103.547"
      />
    </svg>
  );
};
export default Rotate_02;
