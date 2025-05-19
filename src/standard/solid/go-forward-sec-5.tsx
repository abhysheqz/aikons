import React from "react";
const GoForwardSec_5: React.FC<
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
        d="M9.578 3.33A9.005 9.005 0 0 0 3 12a9 9 0 1 0 14.4-7.201 1 1 0 1 1 1.2-1.6C21.27 5.206 23 8.402 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12C1 6.677 4.78 2.24 9.801 1.22a11.05 11.05 0 0 1 4.398 0 1 1 0 0 1 .615 1.561l-2 2.8a1 1 0 0 1-1.628 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.44 9.706A1.5 1.5 0 0 1 10.91 8.5H14a1 1 0 1 1 0 2h-2.664l-.115.71a6 6 0 0 1 .85-.067 2.929 2.929 0 1 1 0 5.857h-.075c-.37.001-.954.003-1.477-.168a2.2 2.2 0 0 1-.905-.55 2.2 2.2 0 0 1-.557-1.06 1 1 0 1 1 1.95-.443.4.4 0 0 0 .032.094q.01.017.01.016-.001 0 .016.011a.4.4 0 0 0 .072.03c.08.027.197.048.366.06.163.01.334.01.538.01h.03a.929.929 0 1 0 0-1.857c-.482 0-.926.108-1.517.252l-.322.078a1 1 0 0 1-1.22-1.132l.42-2.598z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_5;
