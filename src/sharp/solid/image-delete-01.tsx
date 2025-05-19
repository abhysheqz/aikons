import React from "react";
const ImageDelete_01: React.FC<
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
        d="M21.293 9.703 18.5 6.91l-2.793 2.793-1.414-1.414 2.793-2.793-2.793-2.793 1.414-1.414L18.5 4.082l2.793-2.793 1.414 1.414-2.793 2.793 2.793 2.793zM21 11.253l-2.5-2.5-2.793 2.793-3.253-3.253L15.247 5.5l-2.5-2.5H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1zM6.232 21h12.769v-3.765l-4.932-3.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDelete_01;
