import React from "react";
const LayerBringForward: React.FC<
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
        d="M12 3.25a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L13 6.664v7.586a1 1 0 1 1-2 0V6.664L9.707 7.957a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 12 3.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.75 10.004-7.456 3.36c-1.392.628-1.392 2.644 0 3.271l8.6 3.877a2.69 2.69 0 0 0 2.212 0l8.6-3.877c1.392-.627 1.392-2.643 0-3.27l-7.456-3.361v4.246a2.25 2.25 0 0 1-4.5 0z"
      />
    </svg>
  );
};
export default LayerBringForward;
