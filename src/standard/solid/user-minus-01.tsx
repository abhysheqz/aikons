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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 19a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.75 16.75A2.25 2.25 0 0 0 11.5 19v2.25H3a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.75a5.25 5.25 0 0 1 1.755 10.2 7.76 7.76 0 0 1 5.029 3.8z"
      />
    </svg>
  );
};
export default UserMinus_01;
