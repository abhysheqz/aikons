import React from "react";
const Savings: React.FC<
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
        d="M1.25 14.5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75V21A1.75 1.75 0 0 1 4 22.75H3A1.75 1.75 0 0 1 1.25 21zM8.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M7 21.75h7.57a4.75 4.75 0 0 0 2.999-1.066l4.396-3.579.01-.008a2.18 2.18 0 0 0 .134-3.209 2.19 2.19 0 0 0-2.876-.186l-2.62 1.92a3.25 3.25 0 0 1-1.921.628h-1.005a2.003 2.003 0 0 0-1.937-2.5H7z"
      />
    </svg>
  );
};
export default Savings;
