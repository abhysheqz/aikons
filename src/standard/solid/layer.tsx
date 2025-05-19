import React from "react";
const Layer: React.FC<
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
        d="M10.894 3.488a2.69 2.69 0 0 1 2.212 0l8.6 3.877c1.392.627 1.392 2.643 0 3.27l-8.6 3.877a2.69 2.69 0 0 1-2.212 0l-8.6-3.877c-1.392-.627-1.392-2.643 0-3.27z"
      />
      <path
        fill="currentColor"
        d="m3.496 12.822-1.202.542c-1.392.627-1.392 2.644 0 3.27l8.6 3.877a2.69 2.69 0 0 0 2.212 0l8.6-3.876c1.392-.627 1.392-2.644 0-3.27l-1.202-.543-6.781 3.057a4.19 4.19 0 0 1-3.446 0z"
      />
    </svg>
  );
};
export default Layer;
