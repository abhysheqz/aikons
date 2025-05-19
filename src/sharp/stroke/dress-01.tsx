import React from "react";
const Dress_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.993 12.022h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 4.51c1.364 0 2.477-1.008 2.477-2.51l3.026.532L21 6.522l-2.524 2.456L16.5 7.49l-.502 4.538c.958.464 3.94 3.922 4.018 9.971H3.959c.121-4.42 1.733-8.22 4.05-10.03L7.5 7.492 5.524 9.026 3 6.506 6.496 2.5s2.261-.335 3.013-.469c0 1.285.99 2.48 2.492 2.48Z"
      />
    </svg>
  );
};
export default Dress_01;
