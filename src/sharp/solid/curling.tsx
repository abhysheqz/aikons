import React from "react";
const Curling: React.FC<
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
        d="M1.25 17a3.75 3.75 0 0 0 3.752 3.75H20.75a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2h-1.283l-3.002-6H5.247v3.5h7.79l1.067 2.5H5.002A3.75 3.75 0 0 0 1.25 13v1.25H12v1.5H1.25z"
      />
    </svg>
  );
};
export default Curling;
