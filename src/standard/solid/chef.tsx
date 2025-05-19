import React from "react";
const Chef: React.FC<
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
        d="M7 16a1 1 0 0 1 1 1v.454C8 19.325 9.699 21 12 21s4-1.675 4-3.546V17a1 1 0 1 1 2 0v.454C18 20.604 15.222 23 12 23s-6-2.395-6-5.546V17a1 1 0 0 1 1-1M8.157 3.072A4.601 4.601 0 0 0 2 7.404a4.6 4.6 0 0 0 4 4.564v1.466q-.184.065-.363.134a1 1 0 0 0 .726 1.864c1.462-.57 3.436-.932 5.637-.932s4.175.363 5.637.932a1 1 0 0 0 .726-1.864q-.178-.069-.363-.134v-1.466a4.6 4.6 0 0 0 4-4.564 4.6 4.6 0 0 0-6.157-4.332A4.6 4.6 0 0 0 12 1c-1.607 0-3.02.825-3.843 2.072"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chef;
