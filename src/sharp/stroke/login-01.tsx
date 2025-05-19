import React from "react";
const Login_01: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.998 3.095a10 10 0 0 0-1.4-.095c-5.302 0-9.6 4.03-9.6 9s4.298 9 9.6 9q.714 0 1.4-.095"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.998 12h-9.332m2.332-3-3 3 3 3"
      />
    </svg>
  );
};
export default Login_01;
