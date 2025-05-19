import React from "react";
const Quiz_03: React.FC<
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
      <path fill="currentColor" d="M8 1.249h8v3.5H8z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 2.749h-3.5v20h17.5v-20h-3.5v3.25H6.75zm-1 6.5h5.5v1.5h-5.5zm8.75 3.81L18.56 9 17.5 7.94l-3 3-1-1-1.06 1.06zm-8.75 2.19h5.5v1.5h-5.5zm8.75 3.81L18.56 15l-1.06-1.06-3 3-1-1-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_03;
