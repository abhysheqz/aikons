import React from "react";
const HeartAdd: React.FC<
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
        d="M16.5 19.5V17H14a1 1 0 0 1 0-2h2.5v-2.5a1 1 0 1 1 2 0V15H21a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 0 1-2 0"
      />
      <path
        fill="currentColor"
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944 0 1.662-.712 3.274-1.692 4.716q-.118.172-.243.34H19.75V12.5a2.25 2.25 0 0 0-2.02-2.238l-.23-.012a2.25 2.25 0 0 0-2.25 2.25v1.25H14a2.25 2.25 0 0 0 0 4.5h1.25v.919c-.457.345-.882.655-1.259.918-.477.333-1.325.877-1.605 1.057a.75.75 0 0 1-.772 0c-.28-.18-1.128-.724-1.605-1.057A38 38 0 0 1 6.5 17.335C5.226 16.2 3.927 14.859 2.942 13.41c-.98-1.441-1.692-3.053-1.692-4.716C1.25 5.452 3.652 2.75 7 2.75c1.592 0 3.134.513 5 2.215 1.866-1.702 3.408-2.215 5-2.215"
      />
    </svg>
  );
};
export default HeartAdd;
