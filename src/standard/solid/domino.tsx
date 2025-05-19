import React from "react";
const Domino: React.FC<
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
        d="M8 1.25A3.75 3.75 0 0 0 4.25 5v6.25h15.5V5A3.75 3.75 0 0 0 16 1.25zm11.75 11.5H4.25V19A3.75 3.75 0 0 0 8 22.75h8A3.75 3.75 0 0 0 19.75 19zM8.492 16a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1m4.999 2a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M12.008 8a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Domino;
