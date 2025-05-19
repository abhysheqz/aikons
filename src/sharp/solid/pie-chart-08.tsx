import React from "react";
const PieChart_08: React.FC<
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
        d="M11.25 1.25c-5.587.386-10 5.046-10 10.737 0 1.693.39 3.294 1.085 4.718l4.351-2.514a5.75 5.75 0 0 1-.436-2.204 5.756 5.756 0 0 1 5-5.708zM12.75 6.279V1.25c5.587.385 10 5.045 10 10.737 0 1.693-.39 3.294-1.086 4.72l-4.35-2.516a5.75 5.75 0 0 0 .436-2.204 5.756 5.756 0 0 0-5-5.708M7.437 15.49A5.74 5.74 0 0 0 12 17.745a5.74 5.74 0 0 0 4.562-2.253l4.351 2.515A10.74 10.74 0 0 1 12 22.75c-3.71 0-6.982-1.882-8.914-4.745z"
      />
    </svg>
  );
};
export default PieChart_08;
