import React from "react";
const Computer: React.FC<
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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M1.25 2.25h21.5v15.5H1.25z" />
    </svg>
  );
};
export default Computer;
