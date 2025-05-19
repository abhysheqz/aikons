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
        fill="currentColor"
        d="m6.25 16.69-3.78 3.78a.75.75 0 1 0 1.06 1.06l3.78-3.78H7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M20.288 3.712a4.993 4.993 0 0 0-7.06 0L8.703 8.237c-1.05 1.05-1.729 1.727-2.091 2.602s-.362 1.834-.362 3.319v2.531l8.22-8.22a.75.75 0 1 1 1.06 1.061l-1.72 1.72h.69a.75.75 0 0 1 0 1.5h-2.19l-5 5h2.533c1.484 0 2.443 0 3.318-.361.875-.363 1.553-1.041 2.602-2.091l4.525-4.525a4.993 4.993 0 0 0 0-7.06"
      />
    </svg>
  );
};
export default Feather;
