import React from "react";
const ContactBook: React.FC<
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
        d="M22 2H5v20h17zM5 6H2m3 6H2m3 6H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.5h-8c0-2.455 1.79-4 4-4s4 1.545 4 4"
      />
    </svg>
  );
};
export default ContactBook;
