import React from "react";
const Mochi: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21c1.751-.68 3-1.978 3-4.223C22 13.02 18.5 9 15 9s-7 4.019-7 7.777C8 19.022 9.249 20.32 11 21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 9.01C15.47 5.458 12.254 2 9.038 2 5.518 2 2 6.14 2 10.01c0 3.6 3.042 4.834 6.298 4.99M8 5 6.5 6.5M10 5l1.5 1.5M15 12c2 0 4 2.226 4 4.308 0 1.248-.848 1.967-1.905 2.343-.45.16-.793.56-.793 1.037v1.03a1.282 1.282 0 0 1-2.564 0v-1.03c0-.478-.342-.877-.793-1.035-1.07-.376-1.945-1.095-1.945-2.345C11 14.226 13 12 15 12Z"
      />
    </svg>
  );
};
export default Mochi;
