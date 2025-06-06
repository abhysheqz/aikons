import React from "react";
const Drag_01: React.FC<
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
        d="M17 4h3.14M19 6l2-2-2-2M7 4H3.86M5 2 3 4l2 2M19 22v-2l.999-2.31c.707-1.478 1.674-4.367.322-5.728C18.19 9.817 15.208 9.424 13.5 9.5V3.75a1.75 1.75 0 1 0-3.5 0V14l-2.217-2.329a1.65 1.65 0 0 0-2.414.234 1.78 1.78 0 0 0 .009 2.184L10 19.997V22"
      />
    </svg>
  );
};
export default Drag_01;
