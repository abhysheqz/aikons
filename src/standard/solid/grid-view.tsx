import React from "react";
const GridView: React.FC<
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
        d="M2.25 4c0-.966.783-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 9 10.75H4A1.75 1.75 0 0 1 2.25 9zM13.25 4c0-.966.783-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 20 10.75h-5A1.75 1.75 0 0 1 13.25 9zM2.25 15c0-.966.783-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 9 21.75H4A1.75 1.75 0 0 1 2.25 20zM13.25 15c0-.966.783-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 20 21.75h-5A1.75 1.75 0 0 1 13.25 20z"
      />
    </svg>
  );
};
export default GridView;
