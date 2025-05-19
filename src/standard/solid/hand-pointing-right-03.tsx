import React from "react";
const HandPointingRight_03: React.FC<
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
        d="M10.46 2.793 3.266 7.75H2a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h1.237l1.199.959a4.75 4.75 0 0 0 2.967 1.04H11.5c1.354.001 2.48-.985 2.708-2.31.047-.272-.182-.498-.458-.498H11.5a.45.45 0 0 1 0-.9h2.458c.248 0 .493-.087.652-.277.4-.477.64-1.092.64-1.764a.486.486 0 0 0-.486-.486h-2.263a.45.45 0 0 1 0-.9h2.486a1.264 1.264 0 0 0 0-2.527H13.5a.45.45 0 0 1 0-.9h7.976a1.274 1.274 0 0 0 0-2.547H10.404a.45.45 0 0 1-.323-.763l2.355-2.014a1.623 1.623 0 0 0-1.976-2.57"
      />
    </svg>
  );
};
export default HandPointingRight_03;
