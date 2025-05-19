import React from "react";
const Heading_06: React.FC<
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
        d="M15 13a3 3 0 1 1 6 0 1 1 0 1 1-2 0 1 1 0 1 0-2 0v1.17A3 3 0 1 1 15 17zm2 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 4a1 1 0 0 1 1 1v6h7V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H5v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_06;
