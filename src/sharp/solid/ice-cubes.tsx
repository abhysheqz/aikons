import React from "react";
const IceCubes: React.FC<
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
        d="M1.5 14h8v8h-8zM11.5 15.5 17 10l5.5 5.5L17 21zM7.168 2 14.5 4.668 11.832 12 4.5 9.332z"
      />
    </svg>
  );
};
export default IceCubes;
