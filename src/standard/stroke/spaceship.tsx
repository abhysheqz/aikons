import React from "react";
const Spaceship: React.FC<
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
        d="M17 5.5c2.989.789 5 2.261 5 3.947 0 2.517-4.477 4.557-10 4.557S2 11.964 2 9.447C2 7.761 4.011 6.29 7 5.501"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17.005V21m4-4.996L18 21M8 16l-2 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.995 9.002q.005-.003.005-.01C17.996 4.999 14.81 3 12.011 3 8.504 3 6.003 4.998 6 8.993q0 .006.005.009c.143.046 3.09.998 6.006.998s5.841-.951 5.984-.998Z"
      />
    </svg>
  );
};
export default Spaceship;
