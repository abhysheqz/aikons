import React from "react";
const Login_02: React.FC<
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
        d="M10.894 2.553a1 1 0 0 1-.447 1.342L5.553 6.342A1 1 0 0 0 5 7.236v9.528a1 1 0 0 0 .553.894l4.894 2.448a1 1 0 1 1-.894 1.788l-4.895-2.447A3 3 0 0 1 3 16.764V7.236a3 3 0 0 1 1.658-2.683l4.895-2.447a1 1 0 0 1 1.341.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.883 8.576a1 1 0 0 1 .617.924V11H20a1 1 0 1 1 0 2h-6.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Login_02;
