import React from "react";
const ThreeDView: React.FC<
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
        d="m17 8.161-5-2.5-5 2.5 5 2.5zM17.75 9.463l-5 2.5v6l5-2.5zM11.25 17.963v-6l-5-2.5v6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 1.5H9v2H3.5V9h-2zm19 2H15v-2h7.5V9h-2zm-17 17V15h-2v7.5H9v-2zm17 0V15h2v7.5H15v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThreeDView;
