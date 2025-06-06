import React from "react";
const PaintBrush_03: React.FC<
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
        d="m21.793 4.793-2.086-2.086a1 1 0 0 0-1.414 0l-5.914 5.914a3 3 0 0 1-2.122.879H7.831a3 3 0 0 0-1.544.428l-.689.413a1 1 0 0 0-.192 1.565l7.188 7.188a1 1 0 0 0 1.565-.192l.413-.69A3 3 0 0 0 15 16.67v-2.426a3 3 0 0 1 .879-2.122l5.914-5.914a1 1 0 0 0 0-1.414"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 12.5-3.371 2.432a1.474 1.474 0 0 0-.197 2.25l4.886 4.886a1.474 1.474 0 0 0 2.25-.197L12 18.5m-8 0 2-2m0 4 1-1"
      />
    </svg>
  );
};
export default PaintBrush_03;
