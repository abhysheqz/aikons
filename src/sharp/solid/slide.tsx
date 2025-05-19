import React from "react";
const Slide: React.FC<
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
        d="M10.772 4.251 12.128 6.5h-3.84L6.922 4.25H5.434L1.25 19.75l1.555-.007.869-3.243h3.442l-.87 3.243h1.55l2.055-7.778 4.727 7.785h8.172v-1.5H21l-8.463-14zM7.518 15l.67-2.5H4.747l-.67 2.5zm-2.37-4h3.443l.207-.77L6.41 6.296z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Slide;
