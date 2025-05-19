import React from "react";
const Framer: React.FC<
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
      <path fill="currentColor" d="m12 9 6 6H6V9zL6 3h12v6zM12 21l-6-6h6z" />
    </svg>
  );
};
export default Framer;
