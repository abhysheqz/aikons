import React from "react";
const ProductLoading: React.FC<
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
        d="M20.255 17.28a.97.97 0 0 1-.97.97H4.724a.97.97 0 0 1-.97-.97V6.373L6.067 1.75h11.876l2.312 4.624zM7.268 3.69l-.97 1.941h11.418l-.97-1.94zm2.737 6.809h4v-2h-4zM22.531 19.22a.75.75 0 0 0-.53-.22h-20a.75.75 0 0 0-.75.75v2.5h1.5V20.5h3.5v1.75h1.5V20.5h3.5v1.75h1.5V20.5h3.5v1.75h1.5V20.5h3.5v1.75h1.5v-2.5a.75.75 0 0 0-.22-.53"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ProductLoading;
