import React from "react";
const LinkBackward: React.FC<
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
        d="M10.787 3.307a.75.75 0 0 0-.817.163l-7.5 7.5a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 0 0 1.28-.53v-3.724c2.69.19 4.896 1.367 6.484 2.572a15.5 15.5 0 0 1 1.989 1.802c.226.245.557.652.67.79A.751.751 0 0 0 21.75 20v-1.5c0-5.853-4.678-10.614-10.5-10.747V4a.75.75 0 0 0-.463-.693"
      />
    </svg>
  );
};
export default LinkBackward;
