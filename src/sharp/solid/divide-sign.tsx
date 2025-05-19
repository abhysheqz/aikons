import React from "react";
const DivideSign: React.FC<
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
        d="M21 13.25H3v-2.5h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M8.75 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
    </svg>
  );
};
export default DivideSign;
