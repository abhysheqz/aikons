import React from "react";
const ImageDelete_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.5 16.502 4.97-4.97a1.81 1.81 0 0 1 2.56 0l3.97 3.97m1.5 1.5-1.5-1.5m7.5 1-2.97-2.97a1.81 1.81 0 0 0-2.56 0L14 15.502"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 11.502v8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h8M21.5 8.5l-3-3m0 0-3-3m3 3 3-3m-3 3-3 3"
      />
    </svg>
  );
};
export default ImageDelete_02;
