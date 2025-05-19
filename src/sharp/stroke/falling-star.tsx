import React from "react";
const FallingStar: React.FC<
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
        d="m22 2-8 8m2-8-5 5m9 3-3 3M7.97 10.035l.009-.013a.067.067 0 0 1 .098 0l.008.013 2.008 4.116h3.893l.002.001.002.001c.007.005.01.018.01.054a.01.01 0 0 1-.004.01l-2.954 3.28 1.484 4.424a.1.1 0 0 1 .002.02.067.067 0 0 1-.082.057l-.01-.004-4.412-2.367-4.43 2.366-.01.005a.067.067 0 0 1-.083-.057q-.001-.01.002-.02L5 17.496l-2.97-3.282c-.028-.035-.044-.048-.008-.06l.017-.002h3.948z"
      />
    </svg>
  );
};
export default FallingStar;
