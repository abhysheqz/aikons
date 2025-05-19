import React from "react";
const Heading_04: React.FC<
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
        d="M16 10a1 1 0 0 1 1 1v3h2v-3a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0v-3h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M4 4a1 1 0 0 1 1 1v6h7V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H5v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_04;
