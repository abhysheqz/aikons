import React from "react";
const Quiz_04: React.FC<
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
        d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0H18.5A2.75 2.75 0 0 1 21.25 6v14a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20V6A2.75 2.75 0 0 1 5.5 3.25zM5.75 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m12.28-.47a.75.75 0 0 0-1.06-1.06l-2.47 2.47-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM5.75 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m12.28-.47a.75.75 0 1 0-1.06-1.06l-2.47 2.47-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_04;
