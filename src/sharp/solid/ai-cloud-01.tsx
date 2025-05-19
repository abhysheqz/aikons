import React from "react";
const AiCloud_01: React.FC<
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
        d="M9.75 13.5v-1.75h1.5v1.75h1.5v-1.75h1.5v1.75h1.5V15h1.75v1.5h-1.75V18h1.75v1.5h-1.75V21h-1.5v1.75h-1.5V21h-1.5v1.75h-1.5V21h-1.5v-1.5H6.5V18h1.75v-1.5H6.5V15h1.75v-1.5z"
      />
      <path
        fill="currentColor"
        d="M5.853 6.365A5.752 5.752 0 0 0 5 17.393V13.5h1.75V12h1.5v-1.75h7.5V12h1.5v1.5H19v4.033a5.252 5.252 0 0 0-.753-10.23 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default AiCloud_01;
