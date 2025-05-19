import React from "react";
const MoonLanding: React.FC<
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
        fillRule="evenodd"
        d="M1.25 22c0-5.937 4.813-10.75 10.75-10.75S22.75 16.063 22.75 22v.75h-10V22a3.75 3.75 0 1 0-7.5 0v.75h-4zm5.5.75h4.5V22a2.25 2.25 0 0 0-4.5 0zM14 16h2.009v2H14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.15 8.438v3.354c0 .529-.425.958-.95.958a.954.954 0 0 1-.95-.958V1.25h9.5v7.188z"
      />
    </svg>
  );
};
export default MoonLanding;
