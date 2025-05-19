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
        d="M16.5 17v3.5h2V17H22v-2h-3.5v-3.5h-2V15H13v2z"
      />
      <path
        fill="currentColor"
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944 0 1.662-.712 3.274-1.692 4.716q-.118.172-.243.34H19.75v-3.5h-4.5v3.5h-3.5v4.5h3.5v.919c-.457.345-.882.655-1.259.918C13.514 20.42 12 21.25 12 21.25s-1.514-.83-1.991-1.163A38 38 0 0 1 6.5 17.335C5.226 16.2 3.927 14.859 2.942 13.41c-.98-1.441-1.692-3.053-1.692-4.716C1.25 5.452 3.652 2.75 7 2.75c1.592 0 3.134.513 5 2.215 1.866-1.702 3.408-2.215 5-2.215"
      />
    </svg>
  );
};
export default HeartAdd;
