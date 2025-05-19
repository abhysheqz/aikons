import React from "react";
const Flag_03: React.FC<
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
        d="M4.004 2.75a.75.75 0 0 0-.75.75v17.75h2v-5H20a.75.75 0 0 0 .624-1.166L16.9 9.5l3.723-5.584A.75.75 0 0 0 20 2.75z"
      />
    </svg>
  );
};
export default Flag_03;
