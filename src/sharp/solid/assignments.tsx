import React from "react";
const Assignments: React.FC<
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
        d="M8 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h5.871l-3.342-2.673 2.811-3.514 2.615 2.091 5.795-6.207V3a.75.75 0 0 0-.75-.75zm3.25 4h6.5v1.5h-6.5zm6.5 4h-6.5v1.5h6.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 14.68-6.48 7.07-3.633-2.907.937-1.171 2.538 2.03 5.533-6.036z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 2.25a.75.75 0 0 0-.75.75v3.25h4.5V3A.75.75 0 0 0 5 2.25zM5.75 7.75h-4.5V18a.75.75 0 0 0 .08.335l1.5 3a.75.75 0 0 0 1.34 0l1.5-3A.75.75 0 0 0 5.75 18z"
      />
    </svg>
  );
};
export default Assignments;
