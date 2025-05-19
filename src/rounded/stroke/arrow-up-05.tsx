import React from "react";
const ArrowUp_05: React.FC<
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
        d="M6.001 4.013H18M11.996 12.51l.37-.002c2.972.02 4.004-.12 3.516-1.368l-.184-.307-.174-.248-.417-.532-.876-.994-.87-1.017-.457-.497-.228-.222-.381-.26-.337-.05-.334.055-.377.265-.225.224-.45.503-.857 1.029-.863 1.006-.41.538-.17.25-.18.309c-.472 1.253.562 1.381 3.533 1.321zm0 0 .05 7.503"
      />
    </svg>
  );
};
export default ArrowUp_05;
