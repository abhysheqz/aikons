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
        fill="currentColor"
        d="M5 14v-1.27a2 2 0 0 1 1.097-1.785l2.744-1.388a2 2 0 0 0 1.097-1.785V3a1 1 0 0 1 1-1h3.007a1 1 0 0 1 1 1V7.76a2 2 0 0 0 1.114 1.793l2.827 1.398A2 2 0 0 1 20 12.743V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1M15.5 19C12 22 9 22 4 22c1.35-2.159 1.788-4.135 1.931-5.5h13.52c.455 1.721.533 2.961.546 4.5A.995.995 0 0 1 19 22h-2.5a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default PaintBrush_04;
