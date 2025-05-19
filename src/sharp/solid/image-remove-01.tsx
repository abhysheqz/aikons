import React from "react";
const ImageRemove_01: React.FC<
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
        d="M1.995 3a1 1 0 0 1 1-1h10.7v5.3h8.3V21a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zm5.233 17h12.768v-3.765l-4.932-3.288zM22.995 4h-8v2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageRemove_01;
