import React from "react";
const Image_03: React.FC<
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
        d="M1.25 2.25h21.5v19.5H1.25zM10 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m10.794 11.3H3.204v-2.926L6.998 13.5l3 2.5 5.5-5 5.295 4.854z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Image_03;
