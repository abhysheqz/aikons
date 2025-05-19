import React from "react";
const Nut: React.FC<
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
        strokeWidth={1.5}
        d="M8.99 6.064c-2.997.996-6.655 3.742-6.948 6.949-.332 3.64 1.328 5.294.664 7.28 1.992-.662 3.652.992 7.303.661 3.218-.291 5.972-3.938 6.971-6.925"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.002 4.986c-.608-.51-2.238-1.094-4.277.44m-1.75-1.308c-2.531-1.353-4.619-1.224-5.761-.907q-.167.043-.311.133c-.32.202-.438.417-.544.563-.927 1.282.701 3.57 2.643 5.93.394.479.8.885 1.26 1.265 2.7 2.242 4.632 3.657 6.027 2.62.11-.083.329-.277.455-.434a.7.7 0 0 0 .12-.263c.391-1.463.359-3.565-.902-5.92a7.3 7.3 0 0 0-2.987-2.987Z"
      />
    </svg>
  );
};
export default Nut;
