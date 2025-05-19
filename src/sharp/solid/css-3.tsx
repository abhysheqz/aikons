import React from "react";
const Css_3: React.FC<
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
        d="M21.25 1.75H2.75l2.133 18.28 6.605 2.22 7.627-2.197zm-4 4H6.75l.134 1.5h7.024l-6.772 2.77.193 1.73h7.842l-.367 3.67-2.804.8-2.805-.8-.223-2.24-1.493.15.325 3.252L12 17.781l4.195-1.199.634-6.331h-6.293l6.714-2.747z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Css_3;
