import React from "react";
const Pin: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 21 6-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.504 3s-.538.724-.998 1.577c-.573 1.059-1.017 2.397-1.857 3.27 0 0-1.524-.12-3.231-.312-1.75-.197-2.95.477-4.455 2.008L4 10.506 13.494 20l.963-.962c1.532-1.504 2.206-2.704 2.008-4.455a104 104 0 0 1-.31-3.231c.87-.84 2.21-1.285 3.268-1.857.853-.46 1.577-.999 1.577-.999-.066-1.522-.604-2.723-1.688-3.808S17.027 3.066 15.504 3Z"
      />
    </svg>
  );
};
export default Pin;
