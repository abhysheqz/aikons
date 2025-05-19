import React from "react";
const PropertyEdit: React.FC<
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
        d="M20.038 11V2H2v18h9.019M2 7h18.038M10.017 15.5h3.006m-7.014 0h2.004m2.004-4h6.013m-10.021 0h2.004"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.033 19.446 5.433-5.417a.1.1 0 0 1 .142 0l2.362 2.37a.1.1 0 0 1 0 .14l-5.445 5.462-2.492-.018z"
      />
    </svg>
  );
};
export default PropertyEdit;
