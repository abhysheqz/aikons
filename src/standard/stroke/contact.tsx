import React from "react";
const Contact: React.FC<
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
        d="M18.5 4h-13a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.503 17.5H8.5a3.5 3.5 0 0 1 3.502-3.5 3.5 3.5 0 0 1 3.501 3.5M13.752 10.25a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0M8 4V2M16 4V2"
      />
    </svg>
  );
};
export default Contact;
