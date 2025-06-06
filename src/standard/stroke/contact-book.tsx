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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.003 16.5H10a3.5 3.5 0 0 1 3.502-3.5 3.5 3.5 0 0 1 3.501 3.5M15.252 9.25a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0M5 6H2.5M5 12H2.5M5 18H2.5"
      />
    </svg>
  );
};
export default ContactBook;
