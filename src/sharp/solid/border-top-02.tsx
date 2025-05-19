import React from "react";
const BorderTop_02: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4h-2V4H4v3H2zm2 6v6H2V9zm16 6V9h2v6zM4 20v-3H2v4a1 1 0 0 0 1 1h4v-2zm16 0v-3h2v4a1 1 0 0 1-1 1h-4v-2zM9 20h6v2H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderTop_02;
