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
        d="M20 4.25A2.75 2.75 0 0 1 22.75 7v10A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17V7A2.75 2.75 0 0 1 4 4.25zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-6.5 2a1 1 0 1 0 0 2h.01l.102-.005a1 1 0 0 0 0-1.99L5.51 11zm13 0a1 1 0 1 0 0 2h.01l.102-.005a1 1 0 0 0 0-1.99L18.51 11z"
      />
    </svg>
  );
};
export default Money_02;
