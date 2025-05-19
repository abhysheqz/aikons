import React from "react";
const Heading_02: React.FC<
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
        d="M18 12a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 6 0c0 .81-.247 1.661-.914 2.328L17.414 18H20a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1c0-.766.2-1.614.879-2.293l2.793-2.793c.21-.21.328-.507.328-.914a1 1 0 0 0-1-1M4 4a1 1 0 0 1 1 1v6h7V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H5v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_02;
