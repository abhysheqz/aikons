import React from "react";
const BoundingBox: React.FC<
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
        d="M1.25 1.25h5.5v5.5h-5.5zM9.25 1.25h5.5v5.5h-5.5zM1.25 9.25h5.5v5.5h-5.5zM9.25 9.25h5.5v5.5h-5.5zM9.25 17.25h5.5v5.5h-5.5zM17.25 17.25h5.5v5.5h-5.5zM17.25 9.25h5.5v5.5h-5.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 5H6V3h4zM5 6v4H3V6zm6 4V6h2v4zm-1 3H6v-2h4zm8 0h-4v-2h4zm-7 5v-4h2v4zm8 0v-4h2v4zm-1 3h-4v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BoundingBox;
