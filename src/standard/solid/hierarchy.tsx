import React from "react";
const Hierarchy: React.FC<
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
        d="M12 1.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m0 5.5c-2.062 0-3.75 1.608-3.75 3.75 0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75c0-2.143-1.69-3.75-3.75-3.75M13 13a1 1 0 1 0-2 0v1.934l-2.015 1.208a1 1 0 0 0 1.029 1.716l1.985-1.192 1.986 1.192a1 1 0 0 0 1.029-1.716l-2.015-1.208zm3.75 2a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-1.5 7c0-2.142 1.688-3.75 3.75-3.75 2.06 0 3.75 1.607 3.75 3.75a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75M5 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m0 5.5c-2.062 0-3.75 1.608-3.75 3.75 0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75c0-2.143-1.69-3.75-3.75-3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hierarchy;
