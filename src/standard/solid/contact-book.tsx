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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 1a2.75 2.75 0 0 0-2.75 2.75v16A2.75 2.75 0 0 0 7.5 22.5H20a2.75 2.75 0 0 0 2.75-2.75v-16A2.75 2.75 0 0 0 20 1zM14 5.986a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5M14.003 12a4.25 4.25 0 0 0-4.252 4.25c0 .414.336.75.75.75h7.003a.75.75 0 0 0 .75-.75A4.25 4.25 0 0 0 14.002 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContactBook;
