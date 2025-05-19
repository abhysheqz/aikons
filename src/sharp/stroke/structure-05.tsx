import React from "react";
const Structure_05: React.FC<
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
        d="M10 8V2H2v6zM22 12V6h-7v6zM21 22v-6h-8v6zM15 7l-5-2 3.571 11"
      />
    </svg>
  );
};
export default Structure_05;
