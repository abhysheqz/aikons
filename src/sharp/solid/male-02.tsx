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
        d="m14.5 16.5 6 2v3h-17v-3l6-2v-1.938c-1.78-1.393-3-3.062-3-6.645 0-3.59 1.955-5.417 4.992-5.417 2.151 0 3.047 1 3.047 1 2.538 0 2.961 2.097 2.961 4.417 0 3.583-1.22 5.252-3 6.645z"
      />
    </svg>
  );
};
export default Male_02;
