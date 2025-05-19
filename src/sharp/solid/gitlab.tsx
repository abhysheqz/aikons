import React from "react";
const Gitlab: React.FC<
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
        d="M5.52 1.251a.74.74 0 0 1 .727.444l3.27 7.477h4.968l3.27-7.477a.742.742 0 0 1 1.392.09l3.604 12.36L12 22.75l-10.75-8.604L4.854 1.785a.74.74 0 0 1 .665-.534"
      />
    </svg>
  );
};
export default Gitlab;
