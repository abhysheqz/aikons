import React from "react";
const FavouriteSquare: React.FC<
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
        d="M19 2.25A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25zm-4.5 4.5c-.835 0-1.623.27-2.5 1.033-.876-.763-1.664-1.033-2.5-1.033-1.94 0-3.25 1.65-3.25 3.5 0 .967.391 1.885.9 2.679.514.8 1.186 1.531 1.836 2.144a20 20 0 0 0 1.788 1.487c.243.179.824.573.824.573l.095.052a.75.75 0 0 0 .71-.052l.005-.003c.148-.1.579-.393.82-.57.484-.358 1.134-.871 1.787-1.487.65-.613 1.322-1.345 1.835-2.144.51-.794.9-1.712.9-2.679 0-1.85-1.31-3.5-3.25-3.5"
      />
    </svg>
  );
};
export default FavouriteSquare;
