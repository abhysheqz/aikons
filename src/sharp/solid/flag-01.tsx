import React from "react";
const Flag_01: React.FC<
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
        d="M4.45 2.664a1 1 0 0 1 .946-.082l14 6.045a1 1 0 0 1 .049 1.814L6 17.12v4.38H4v-18a1 1 0 0 1 .45-.836"
      />
    </svg>
  );
};
export default Flag_01;
