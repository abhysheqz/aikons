import React from "react";
const Feather: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m13 17 6.758-6.757a4.243 4.243 0 0 0-6-6L7 11v6zM3 21l9-9m3-3-3 3m2.5 0H12"
      />
    </svg>
  );
};
export default Feather;
