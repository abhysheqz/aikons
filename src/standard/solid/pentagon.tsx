import React from "react";
const Pentagon: React.FC<
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
        d="M10.28 2.413a2.75 2.75 0 0 1 3.436 0l7.661 6.13a2.75 2.75 0 0 1 .891 3.016l-3.101 9.31a2.75 2.75 0 0 1-2.61 1.88H7.442a2.75 2.75 0 0 1-2.609-1.88l-3.103-9.31a2.75 2.75 0 0 1 .89-3.017z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pentagon;
