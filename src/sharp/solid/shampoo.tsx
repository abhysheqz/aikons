import React from "react";
const Shampoo: React.FC<
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
        d="M9 4.25h5.5V8H13V5.75h-2.5V8H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 2.75V5H11V2.75H8.75v-1.5h7.22a.75.75 0 0 1 .53.22l1.5 1.5-1.06 1.06-1.281-1.28zM6 13a5.75 5.75 0 1 1 11.5 0v9.75H6zm5.75-4.25c2.092 0 3.83 1.51 4.185 3.5H7.566a4.25 4.25 0 0 1 4.184-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shampoo;
