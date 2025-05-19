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
        d="M13.129 1.073a1 1 0 0 1 1.265.48l2 4-1.788.894-1.589-3.176L4.5 6.677v10.646l8.517 3.406 1.589-3.177 1.788.895-2 3.999a1 1 0 0 1-1.265.481l-10-3.999A1 1 0 0 1 2.5 18V6a1 1 0 0 1 .629-.929z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.915 12.997 1.293 1.293-1.415 1.414-3.707-3.707 3.707-3.707 1.415 1.414-1.293 1.293H21.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Login_03;
