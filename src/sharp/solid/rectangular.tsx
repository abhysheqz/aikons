import React from "react";
const Rectangular: React.FC<
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
        d="M1.25 3.543c0-.438.336-.793.75-.793h20c.414 0 .75.355.75.793v16.914c0 .438-.336.793-.75.793H2c-.414 0-.75-.355-.75-.793z"
      />
    </svg>
  );
};
export default Rectangular;
