import React from "react";
const Play: React.FC<
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
        fill="currentColor"
        d="M4.624 3.351a.75.75 0 0 1 .748-.002l14 8a.75.75 0 0 1 0 1.302l-14 8A.75.75 0 0 1 4.25 20V4a.75.75 0 0 1 .374-.649"
      />
    </svg>
  );
};
export default Play;
