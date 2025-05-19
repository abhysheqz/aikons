import React from "react";
const QuillWrite_01: React.FC<
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
        d="M11.314 8.919a1 1 0 0 1-.233 1.395C7.784 12.669 5 16.89 5 21.5a1 1 0 1 1-2 0c0-5.39 3.216-10.169 6.919-12.814a1 1 0 0 1 1.395.233"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.792 5.403C9.127 2.52 13.16 1 19.75 1a.75.75 0 0 1 .75.75v.007c0 .527 0 1.927-.773 3.404-.677 1.292-1.91 2.575-4.085 3.42l.534.534c.872.872 1.124 2.325.259 3.386C13.043 16.661 7.557 17.5 4.75 17.5a.75.75 0 0 1-.75-.75c0-4.51.488-8.501 2.792-11.347"
      />
    </svg>
  );
};
export default QuillWrite_01;
