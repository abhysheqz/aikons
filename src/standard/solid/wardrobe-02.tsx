import React from "react";
const Wardrobe_02: React.FC<
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
        d="M6 1.25h5.25v19.5H7V22a1 1 0 1 1-2 0v-1.385A3.75 3.75 0 0 1 2.25 17V5A3.75 3.75 0 0 1 6 1.25m11 19.5h-4.25V1.25H18A3.75 3.75 0 0 1 21.75 5v12A3.75 3.75 0 0 1 19 20.615V22a1 1 0 1 1-2 0zM15.75 10.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM9 9.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 9 9.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_02;
