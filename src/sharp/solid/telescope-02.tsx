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
        d="M14.251 12.014a1 1 0 0 1 .874.515l5 9-1.748.971-4.126-7.427-4.126 7.427-1.748-.971 5-9a1 1 0 0 1 .874-.515"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.695 1.82a2.386 2.386 0 0 1 3.26.874l2.727 4.726a2.387 2.387 0 0 1-4.133 2.386l-2.727-4.725a2.387 2.387 0 0 1 .873-3.26"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.963 16.27 2.91-1.65-.986-1.74-2.874 1.629-.253-.47-1.76.95 1.476 2.736 1.76-.95z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.346 4.505-10.1 5.968 3.719 6.818 10.145-5.995z"
      />
    </svg>
  );
};
export default Telescope_02;
