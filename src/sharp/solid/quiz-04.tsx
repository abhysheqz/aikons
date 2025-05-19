import React from "react";
const Quiz_04: React.FC<
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
        d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0h6.103v19.5H3.25V3.25zm-3.604 6h5.5v1.5h-5.5zm8.75 3.81L18.56 9 17.5 7.94l-3 3-1-1L12.44 11zm-8.75 2.19h5.5v1.5h-5.5zm8.75 3.81L18.56 15l-1.06-1.06-3 3-1-1L12.44 17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_04;
