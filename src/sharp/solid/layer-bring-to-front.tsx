import React from "react";
const LayerBringToFront: React.FC<
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
        d="M16.414 5.664 15 7.078l-2-2v6.586h-2V5.078l-2 2-1.414-1.414L12 1.25zM5.824 14.84 1 17.252l11 5.5 11-5.5-4.824-2.412L12 17.928z"
      />
      <path
        fill="currentColor"
        d="M7.602 7.45 1 10.75l11 5.5 11-5.5-6.603-3.3L15 8.846l-.75-.75v4.818h-4.5V8.097l-.75.75z"
      />
    </svg>
  );
};
export default LayerBringToFront;
