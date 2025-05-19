import React from "react";
const Next: React.FC<
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
        d="M3.25 5.79c0-1.37 1.501-2.208 2.667-1.49l10.092 6.21a1.75 1.75 0 0 1 0 2.98L5.917 19.702c-1.166.718-2.667-.121-2.667-1.49zM20 3.5a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0v-15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Next;
