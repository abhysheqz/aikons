import React from "react";
const Move_01: React.FC<
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
        d="m17.69 1.25 2.03 2.03-1.06 1.061-.22-.22v1.44h1.439l-.22-.22 1.06-1.06 2.031 2.03-2.03 2.03-1.06-1.06.219-.22h-1.44V8.5l.22-.22 1.06 1.061-2.03 2.03-2.03-2.03 1.06-1.06.22.219V7.06H15.5l.22.22-1.06 1.061-2.031-2.03 2.03-2.03 1.06 1.06-.219.22h1.44V4.12l-.22.22-1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m6.102 21.25-4.319-5.703a2.53 2.53 0 0 1-.006-3.101 2.4 2.4 0 0 1 3.503-.337l.024.022.946.993V4.75a2.5 2.5 0 0 1 5 0v4.997c1.864.064 4.569.639 6.603 2.686.936.942.991 2.32.82 3.46-.176 1.177-.626 2.343-.998 3.12l-.697 1.454-.336.7v1.583H6.102z"
      />
    </svg>
  );
};
export default Move_01;
