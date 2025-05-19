import React from "react";
const SmartWatch_02: React.FC<
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
        d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.359 2.608A2 2 0 0 1 10.32 1h3.36a2 2 0 0 1 1.962 1.608l.839 4.196a1 1 0 0 1-1.961.392L13.68 3h-3.36l-.84 4.196a1 1 0 1 1-1.96-.392zM8.359 21.392A2 2 0 0 0 10.32 23h3.36a2 2 0 0 0 1.962-1.608l.839-4.196a1 1 0 0 0-1.961-.392L13.68 21h-3.36l-.84-4.196a1 1 0 1 0-1.96.392z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartWatch_02;
