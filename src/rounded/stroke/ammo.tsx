import React from "react";
const Ammo: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 8.5c0-3-1.5-6-1.5-6s-1.5 3-1.5 6zM10 11l-.5-2.5h-3L6 11zM10 11H6v7.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM10 22.5H6v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM17.5 8.5c0-3-1.5-6-1.5-6s-1.5 3-1.5 6zM18 11l-.5-2.5h-3L14 11zM18 11h-4v7.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM18 22.5h-4v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"
      />
    </svg>
  );
};
export default Ammo;
