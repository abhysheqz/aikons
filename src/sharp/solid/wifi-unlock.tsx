import React from "react";
const WifiUnlock: React.FC<
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
        d="M15.75 13.5a2.75 2.75 0 0 1 4.812-1.82l-1.124.993a1.25 1.25 0 0 0-2.188.827v.75h5.5v7h-8.5v-7h1.5zM11.25 2.75c3.457 0 6.869 1.276 10 3.75l-1.418 1.425c-2.78-2.14-5.703-3.175-8.582-3.175S5.448 5.784 2.668 7.925L1.25 6.5c3.131-2.474 6.543-3.75 10-3.75M12.75 13.503c-1.319-.464-2.864-.29-4.014.52l-1.421-1.428c1.958-1.562 4.77-1.763 6.948-.605z"
      />
      <path
        fill="currentColor"
        d="m4.46 9.726 1.42 1.427c3.03-2.272 6.686-2.5 9.695-.736l1.45-1.451c-3.87-2.528-8.728-2.253-12.565.76"
      />
    </svg>
  );
};
export default WifiUnlock;
