import React from "react";
const Php: React.FC<
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
        d="M7 11.25h-.5v-1H7a.5.5 0 0 1 0 1M17 11.25h-.5v-1h.5a.5.5 0 0 1 0 1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm2.75 6.5A.75.75 0 0 0 5 9.5V15h1.5v-2.25H7a2 2 0 1 0 0-4zm10 0a.75.75 0 0 0-.75.75V15h1.5v-2.25h.5a2 2 0 1 0 0-4zm-4.25 0H10V15h1.5v-2.25h1V15H14V8.75h-1.5v2.5h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Php;
