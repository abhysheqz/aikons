import React from "react";
const Male_02: React.FC<
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
        d="m14.5 16.5 4.632 1.544a2 2 0 0 1 1.368 1.898v.558a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-.558a2 2 0 0 1 1.368-1.898L9.5 16.5v-1.938c-1.781-1.393-3-3.062-3-6.645 0-3.59 1.955-5.417 4.992-5.417 2.151 0 3.046 1 3.046 1 2.539 0 2.962 2.097 2.962 4.417 0 3.583-1.22 5.252-3 6.645z"
      />
    </svg>
  );
};
export default Male_02;
