import React from "react";
const MapsEditing: React.FC<
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
        d="M13.75 19.75v2.5h2.5l6.5-6.5-2.5-2.5zM12.25 20.136l-3.5-1.503V1.75l5.5 2.36V17.13l-2 2z"
      />
      <path
        fill="currentColor"
        d="M22.75 13.629v-8.38a.75.75 0 0 0-.75-.75h-6.25v11.13l4.5-4.5zM1.658 4.664 7.25 1.797v16.747l-5.013 1.668a.75.75 0 0 1-.987-.712V5.331a.75.75 0 0 1 .408-.667"
      />
    </svg>
  );
};
export default MapsEditing;
