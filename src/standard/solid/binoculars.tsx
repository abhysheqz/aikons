import React from "react";
const Binoculars: React.FC<
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
        d="M16.76 3.25c-1.702 0-3.08 1.402-3.007 3.106L14.25 16.5a4.25 4.25 0 1 0 8.314-1.247L19.65 5.394A3.01 3.01 0 0 0 16.76 3.25M15.75 16.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9.75 16.5l.498-10.137v-.007C10.32 4.652 8.942 3.25 7.24 3.25a3.01 3.01 0 0 0-2.889 2.144l-2.915 9.86A4.25 4.25 0 1 0 9.75 16.5m-7 0a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m14.58 7.5.42 9H9l.5-9z" />
    </svg>
  );
};
export default Binoculars;
