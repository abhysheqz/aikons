import React from "react";
const PaintBrush_04: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14v-1.27a2 2 0 0 1 1.097-1.785l2.744-1.388a2 2 0 0 0 1.097-1.785V3a1 1 0 0 1 1-1h3.007a1 1 0 0 1 1 1V7.76a2 2 0 0 0 1.114 1.793l2.827 1.398A2 2 0 0 1 20 12.743V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15c0 1 0 3.8-2 7 5 0 9 0 11.5-4v3a1 1 0 0 0 1 1H19a.995.995 0 0 0 .997-1c-.017-1.95-.137-3.421-.997-6"
      />
    </svg>
  );
};
export default PaintBrush_04;
