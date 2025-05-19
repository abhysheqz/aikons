import React from "react";
const ArrowLeft_04: React.FC<
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
        d="M10.602 6.5 3.5 11.998l7.102 5.502V13H20.5v-2h-9.898z"
      />
    </svg>
  );
};
export default ArrowLeft_04;
