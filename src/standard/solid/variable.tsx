import React from "react";
const Variable: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v2.75h20.5V5.5a3.75 3.75 0 0 0-3.75-3.75zm16.75 8H1.75v8.75a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75zM5.5 5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6.5a1 1 0 0 1-1-1m3.991 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1m-1.886 8.444a.75.75 0 0 0-1.21-.887A5.8 5.8 0 0 0 5.25 16a5.8 5.8 0 0 0 1.145 3.444.75.75 0 0 0 1.21-.887A4.3 4.3 0 0 1 6.75 16a4.3 4.3 0 0 1 .855-2.556m10-.887a.75.75 0 0 0-1.21.886A4.3 4.3 0 0 1 17.25 16a4.3 4.3 0 0 1-.855 2.557.75.75 0 1 0 1.21.887A5.8 5.8 0 0 0 18.75 16a5.8 5.8 0 0 0-1.145-3.443m-7.075.913a.75.75 0 1 0-1.06 1.06L10.94 16l-1.47 1.47a.75.75 0 0 0 1.06 1.06L12 17.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 16l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 14.94z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Variable;
