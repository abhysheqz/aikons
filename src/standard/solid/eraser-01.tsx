import React from "react";
const Eraser_01: React.FC<
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
        d="M1.5 6a2.74 2.74 0 0 1 2.732-2.75h11.812c.941 0 1.817.488 2.316 1.293l3.725 6a2.77 2.77 0 0 1 0 2.915l-3.725 6a2.73 2.73 0 0 1-2.316 1.292H4.232A2.74 2.74 0 0 1 1.5 18zm13.367 2.293c.387.39.387 1.024 0 1.414L12.588 12l2.277 2.293c.388.39.388 1.024 0 1.414a.99.99 0 0 1-1.404 0l-2.278-2.293-2.277 2.293a.99.99 0 0 1-1.405 0 1.005 1.005 0 0 1 0-1.415L9.779 12 7.502 9.708a1.005 1.005 0 0 1 0-1.415.99.99 0 0 1 1.405 0l2.277 2.293 2.278-2.293a.99.99 0 0 1 1.405 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Eraser_01;
