import React from "react";
const Wardrobe_03: React.FC<
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
        d="M6 1h5.25v16H4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-7.25V1H18a4 4 0 0 1 4 4v12a4 4 0 0 1-3 3.874V22a1 1 0 1 1-2 0v-1H7v1a1 1 0 1 1-2 0v-1.126A4 4 0 0 1 2 17V5a4 4 0 0 1 4-4m9.75 8a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM9 8.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_03;
