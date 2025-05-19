import React from "react";
const ShapeCollection: React.FC<
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
        d="M2.25 2.25h8.5v8.5h-8.5zM17 2.25h1l3.75 7.25v1.25h-8.5V9.5zM2.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.5 13.44 5.25 5.25v-4.44h1.5v7h-7v-1.5h4.44l-5.25-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShapeCollection;
