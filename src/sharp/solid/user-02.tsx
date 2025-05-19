import React from "react";
const User_02: React.FC<
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
        d="M5.043 15.405C6.789 14.063 9.277 13.25 12 13.25s5.21.813 6.957 2.155l.293.226v5.119H4.75v-5.12zM7.75 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default User_02;
