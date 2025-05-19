import React from "react";
const Money_02: React.FC<
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
        d="M22.75 19.75H1.25V4.25h21.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-7.5 4h2.01v-2H4.5zm13 0h2.01v-2H17.5z"
      />
    </svg>
  );
};
export default Money_02;
