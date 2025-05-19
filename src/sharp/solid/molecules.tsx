import React from "react";
const Molecules: React.FC<
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
        d="M7.25 13a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6v3h-2V6zM9.58 16.814l-3.5 2.5-1.162-1.628 3.5-2.5zm6-1.628 3.5 2.5-1.162 1.628-3.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Molecules;
