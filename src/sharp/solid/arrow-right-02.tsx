import React from "react";
const ArrowRight_02: React.FC<
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
        d="m14.527 18-1.408-1.414L16.689 13H3.5v-2h13.189l-3.57-3.587L14.527 6l5.973 6z"
      />
    </svg>
  );
};
export default ArrowRight_02;
