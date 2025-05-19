import React from "react";
const AiFolder_02: React.FC<
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
        d="M2 1.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h3V13.5h1.75V12h1.5v-1.75h7.5V12h1.5v1.5H19v5.25h3a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-9.625l-3-4z"
      />
    </svg>
  );
};
export default AiFolder_02;
