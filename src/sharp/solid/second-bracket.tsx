import React from "react";
const SecondBracket: React.FC<
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
        d="M1.75 1.75H7v2.5H4.25v15.5H7v2.5H1.75zm20.5 0v20.5H17v-2.5h2.75V4.25H17v-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecondBracket;
