import React from "react";
const MayanPyramid: React.FC<
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
        d="M8.967 11.99H3.984v4.996m10.962-4.996h4.983v4.996M5.977 11.99V6.994h11.959v4.996"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.967 6.994V1.998h5.98v4.996"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.451 6.994 2.492 14.988M10.46 6.994l-2.49 14.988"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.54 17.015H2.011a.01.01 0 0 0-.01.01v4.977h19.996v-4.977a.01.01 0 0 0-.01-.01h-6.45"
      />
    </svg>
  );
};
export default MayanPyramid;
