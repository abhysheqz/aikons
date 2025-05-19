import React from "react";
const Crop: React.FC<
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
        d="M2 5.5h14.5a2 2 0 0 1 2 2V22M4.5 3v2.5m0 3.5v8.5a2 2 0 0 0 2 2h8m4 0H21"
      />
    </svg>
  );
};
export default Crop;
