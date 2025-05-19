import React from "react";
const Dress_05: React.FC<
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
        d="m17.44 7.96 2.04 1.55a.01.01 0 0 0 .014-.003l2.504-3.497a.01.01 0 0 0 0-.012l-3.491-3.522-.006-.003L15.509 2l-.008.002-3.494 2.992-3.482-2.992L8.517 2l-3.01.495-.005.003-3.499 3.48a.01.01 0 0 0-.001.013L4.49 9.506a.01.01 0 0 0 .015.002l1.951-1.49"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.983 6.498c-1.4 1.852-1.117 4.651-.273 8.258.412 2.235 1.025 4.502 1.28 5.954-2.702 1.352-9.438 2.056-14 0 .35-2.058.98-4.38 1.45-6.602.613-2.904 1.022-5.629-.45-7.617"
      />
    </svg>
  );
};
export default Dress_05;
