import React from "react";
const Gun: React.FC<
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
        d="m13.777 11.736-2.708-.005-.6 2.268c.562-.004.819-.018 1.04-.066a3 3 0 0 0 2.06-1.608c.07-.144.13-.31.208-.589m2.069.003 6.053.01a.85.85 0 0 0 .851-.85V8.743h-3.021a.75.75 0 0 1 0-1.5h3.021v-3.58a.85.85 0 0 0-1.23-.76l-2.697 1.346h-9.27L7.45 7.495a2.75 2.75 0 0 1-2.308 1.256H1.25v2.231c0 .415.336.75.75.75.93 0 1.347.81 1.255 1.266l-1.637 6.044a1.75 1.75 0 0 0 1.689 2.208H9.8c.7 0 1.1-.8.68-1.36l-1.09-1.452a.25.25 0 0 1-.04-.214L9.937 16h.054c.84 0 1.416 0 1.938-.112a5 5 0 0 0 3.433-2.68c.197-.4.327-.856.483-1.469m-8.08-7.49H3a1.75 1.75 0 0 0-1.75 1.75V7.25h3.893a1.25 1.25 0 0 0 1.049-.57z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gun;
