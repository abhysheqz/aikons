import React from "react";
const TypeCursor: React.FC<
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
        d="M4 7h2.502a1 1 0 1 1 0 2H4L4 15h2.502a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m8.502 1a1 1 0 0 1 1-1H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5a1 1 0 1 1 0-2h6.5V9h-6.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.002 4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1v14h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1V5h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TypeCursor;
