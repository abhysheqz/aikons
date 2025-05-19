import React from "react";
const SignalNo_01: React.FC<
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
        d="m17.345 11.75 2.293 2.293-1.415 1.414-2.292-2.293-2.293 2.293-1.415-1.414 2.293-2.293-2.293-2.293 1.415-1.414 2.293 2.293 2.293-2.293 1.414 1.414zM8 17h2.5v2H8zm4 0h2.5v2H12zm4 0h2.5v2H16zm4 0h2.5v2H20z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m6.5 9.5 3-4.5h-8l3 4.5V19h2z" />
    </svg>
  );
};
export default SignalNo_01;
