import React from "react";
const LaptopPhoneSync: React.FC<
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
        d="M13 20.5H2l2-4h9M21 7.5v-4H4v13M22 10.5h-6v10h6z"
      />
    </svg>
  );
};
export default LaptopPhoneSync;
