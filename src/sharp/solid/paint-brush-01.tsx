import React from "react";
const PaintBrush_01: React.FC<
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
        d="M18.53 2.47a.75.75 0 0 0-1.06 0L8.5 11.44l4.06 4.06 8.97-8.97a.75.75 0 0 0 0-1.06zM11.5 16.562 7.438 12.5l-1.44 1.44L10.06 18zM9 19.062 4.938 15 2.25 17.69v4.06h4.06z"
      />
    </svg>
  );
};
export default PaintBrush_01;
