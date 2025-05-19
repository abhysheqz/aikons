import React from "react";
const Frameworks: React.FC<
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
        d="M9.25 1.25h5.5v5.5h-5.5zM9.25 17.25h5.5v5.5h-5.5zM2.25 9.25h5.5v5.5h-5.5zM16.25 9.25h5.5v5.5h-5.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 3.25h6.5v4.5h-1.5v-3h-5zM4.25 3.25h6.5v1.5h-5v3h-1.5zM19.75 16.25v4.5h-6.5v-1.5h5v-3zM5.75 16.25v3h5v1.5h-6.5v-4.5zM9.25 11.25h5.5v1.5h-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Frameworks;
