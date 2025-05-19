import React from "react";
const Vimeo: React.FC<
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
        d="M21.346 4.6c-2.309-1.838-5.885.993-6.75 2.482C15.897 7.388 18.5 7.5 16 12c-1 1.667-3.3 3.8-4.5-1C10 5 9.5.433 2 7.958h4c1 3.5 2.5 12.029 6 12.029 3.634.496 12.461-12.904 9.346-15.386"
      />
    </svg>
  );
};
export default Vimeo;
