import React from "react";
const Presentation_01: React.FC<
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
        d="M1.75 5A3.75 3.75 0 0 1 5.5 1.25h13A3.75 3.75 0 0 1 22.25 5v9a3.75 3.75 0 0 1-3.75 3.75h-13A3.75 3.75 0 0 1 1.75 14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.486 18.143a1 1 0 0 1 1.029 0l5 3a1 1 0 1 1-1.03 1.715L12 20.166l-4.485 2.692a1 1 0 0 1-1.03-1.716z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_01;
