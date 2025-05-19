import React from "react";
const HeartCheck: React.FC<
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
        d="m22.75 12.914-6.981 6.981-3.341-4.01 1.536-1.28 1.94 2.327 5.432-5.432z"
      />
      <path
        fill="currentColor"
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944a6.7 6.7 0 0 1-.357 2.095l-1.057-1.057-5.349 5.348-1.863-2.235-3.457 2.88 3.518 4.222-.194.14C13.514 20.42 12 21.25 12 21.25s-1.514-.83-1.991-1.163A38 38 0 0 1 6.5 17.335C5.226 16.2 3.927 14.859 2.942 13.41c-.98-1.441-1.692-3.053-1.692-4.716C1.25 5.452 3.652 2.75 7 2.75c1.592 0 3.134.513 5 2.215 1.866-1.702 3.408-2.215 5-2.215"
      />
    </svg>
  );
};
export default HeartCheck;
