import React from "react";
const PropertyAdd: React.FC<
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
        d="M20 12V2H2v18h10M2 7h18M10 15.5h2m-6 0h2m2-4h6m-10 0h2M14 18h8m-4 4v-8"
      />
    </svg>
  );
};
export default PropertyAdd;
