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
        d="M5 1.25a.75.75 0 0 0-.75.75v3h-3v2h3v4h-3v2h3v4h-3v2h3v3c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zm5.75 7.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.75 4.25c-2.592 0-4.75 1.85-4.75 4.75 0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75c0-2.9-2.158-4.75-4.75-4.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContactBook;
