import React from "react";
const Telescope_02: React.FC<
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
        d="M14 12a1 1 0 0 1 .874.514l5 9a1 1 0 1 1-1.748.972L14 15.059l-4.126 7.427a1 1 0 1 1-1.748-.972l5-9A1 1 0 0 1 14 12M16.443 1.57a2.386 2.386 0 0 1 3.26.874l2.727 4.725a2.387 2.387 0 0 1-4.133 2.387L15.57 4.831a2.387 2.387 0 0 1 .873-3.26M7.37 13.007a1 1 0 0 1-.377 1.363l-2.898 1.643.279.5a1 1 0 0 1-1.748.974l-.768-1.38-.738-1.367a1 1 0 0 1 1.76-.95l.253.469 2.874-1.629a1 1 0 0 1 1.363.377"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.012 4.306 5.454 9.363a1.75 1.75 0 0 0-.646 2.344l2.041 3.744a1.75 1.75 0 0 0 2.427.668l8.57-5.064a3.7 3.7 0 0 1-.674-.85L14.446 5.48a3.7 3.7 0 0 1-.433-1.174"
      />
    </svg>
  );
};
export default Telescope_02;
