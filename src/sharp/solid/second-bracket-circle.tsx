import React from "react";
const SecondBracketCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H10v-2H8.5V9H10V7zM14 9h1.5v6H14v2h2.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecondBracketCircle;
