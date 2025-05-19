import React from "react";
const Login_03: React.FC<
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
        d="M12.693 4.742a1 1 0 0 0-1.279-.628L5.34 6.241A2 2 0 0 0 4 8.128v7.744a2 2 0 0 0 1.34 1.887l6.074 2.127a1 1 0 0 0 1.28-.628l.357-1.074a1 1 0 0 1 1.898.632l-.358 1.074a3 3 0 0 1-3.837 1.883l-6.075-2.126A4 4 0 0 1 2 15.872V8.128a4 4 0 0 1 2.679-3.775l6.075-2.126A3 3 0 0 1 14.59 4.11l.358 1.074a1 1 0 0 1-1.898.632z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.883 8.577a1 1 0 0 1 .617.924V11H21a1 1 0 1 1 0 2h-7.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Login_03;
