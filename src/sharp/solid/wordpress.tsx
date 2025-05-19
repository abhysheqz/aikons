import React from "react";
const Wordpress: React.FC<
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
        d="M19.212 2.75c-2.24 0-3.289 2.496-1.91 4.125.79.933 1.495 1.87 1.925 2.762.422.875.533 1.602.327 2.208l-1.707 3.24-2.643-7.835h.465v-1.5H9.596v1.5h.477l1.523 4.213-1.838 3.224L7.124 7.25h.448v-1.5H1.5v1.5h.477l4.88 13.502a.76.76 0 0 0 .67.497.76.76 0 0 0 .724-.414l2.016-3.983 2.005-3.518 2.682 7.418a.761.761 0 0 0 1.374.12l2.024-3.5.014-.026 2.56-4.856.026-.056 1.021-2.41.013-.033a8.3 8.3 0 0 0 .462-3.81c-.087-.771-.314-1.611-.819-2.276-.531-.7-1.335-1.155-2.417-1.155"
      />
    </svg>
  );
};
export default Wordpress;
