import React from "react";
const MailAtSign_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v11.667A6.5 6.5 0 0 0 11.4 20.25H2a.75.75 0 0 1-.75-.75zm5.166 2.876-.832 1.248L12 10.901l6.416-4.277-.832-1.248L12 9.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 14.66a3.34 3.34 0 0 0 0 6.68v1.91A5.25 5.25 0 1 1 22.75 18v.477a2.386 2.386 0 0 1-4.13 1.63A2.386 2.386 0 1 1 19.887 18v.477a.477.477 0 1 0 .955 0V18a3.34 3.34 0 0 0-3.341-3.34m.477 3.34a.477.477 0 1 0-.954 0 .477.477 0 0 0 .954 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAtSign_02;
