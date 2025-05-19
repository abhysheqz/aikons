import React from "react";
const VrGlasses: React.FC<
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
        d="M5.953 5.6a1 1 0 0 1 .863-.496h10.368a1 1 0 0 1 .863.496l1.577 2.702A4 4 0 0 0 19 8.25H5q-.318 0-.624.052zm-4.695 6.156v-.726a5 5 0 0 1 .68-2.52l2.287-3.918a3 3 0 0 1 2.591-1.488h10.368a3 3 0 0 1 2.591 1.488l2.286 3.919a5 5 0 0 1 .681 2.52v.725q.008.12.008.244v5A3.75 3.75 0 0 1 19 20.75h-3.095a3.75 3.75 0 0 1-2.88-1.35L12 18.173 10.976 19.4a3.75 3.75 0 0 1-2.881 1.349H5A3.75 3.75 0 0 1 1.25 17v-5q0-.123.008-.244M4 12.75a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VrGlasses;
