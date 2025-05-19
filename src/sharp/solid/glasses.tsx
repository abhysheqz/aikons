import React from "react";
const Glasses: React.FC<
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
        d="M18.252 3.84a1 1 0 0 0-1.62-.297l-1.5 1.5 1.415 1.414.476-.475 3.27 7.268H13.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H21a.75.75 0 0 0 .75-.75v-3.823l.92-1.842a.75.75 0 0 0 .064-.488l.018-.007zM7.369 3.543a1 1 0 0 0-1.619.297l-4.426 9.835-.016.035-.058.13.016.007a.75.75 0 0 0 .063.488l.921 1.842V20c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75H3.708L6.98 5.982l.476.475 1.414-1.414z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 16.75h-3v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Glasses;
