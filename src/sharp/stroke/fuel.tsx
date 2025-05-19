import React from "react";
const Fuel: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 6V3.5h4V6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14.5 5h4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 2h-9v4H3v16h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 10.5c-.887.835-3 2.623-3 4.087a2.933 2.933 0 0 0 3 2.913c1.864 0 3-1.477 3-2.913 0-1.464-2.113-3.252-3-4.087Z"
      />
    </svg>
  );
};
export default Fuel;
