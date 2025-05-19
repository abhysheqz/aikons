import React from "react";
const PresentationPodium: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.294 14H5.5L4 6h16l-1.5 8h-3.794M6 6l1-4h2M18 6l-1-4h-2M9.284 11 10 22m4.717-11-.838 11M8 22h8"
      />
    </svg>
  );
};
export default PresentationPodium;
