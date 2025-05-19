import React from "react";
const UserMinus_01: React.FC<
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
      <path fill="currentColor" d="M12.75 18h9v2h-9z" />
      <path
        fill="currentColor"
        d="M11.5 16.75v4.5H2.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.75a5.25 5.25 0 0 1 1.755 10.2 7.76 7.76 0 0 1 5.029 3.8z"
      />
    </svg>
  );
};
export default UserMinus_01;
