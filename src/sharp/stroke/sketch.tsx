import React from "react";
const Sketch: React.FC<
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
        strokeWidth={1.5}
        d="m12 3 5 6.5M12 3 7 9.5M12 3l5.5 1M12 3 6.5 4M17 9.5 12 21m5-11.5h5m-5 0 .5-5.5M17 9.5H7M12 21 7 9.5M12 21 22 9.5M12 21 2 9.5m5 0H2m5 0L6.5 4M22 9.5 17.5 4m-11 0L2 9.5"
      />
    </svg>
  );
};
export default Sketch;
