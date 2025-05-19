import React from "react";
const SignalNo_02: React.FC<
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
        d="M17 17.5h4v2h-4zM10 17.5h4v2h-4zM3 17.5h4v2H3zM12.914 9.207l3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293L6.793 12.5l3.293-3.293-3.293-3.293L8.207 4.5 11.5 7.793 14.793 4.5l1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalNo_02;
