import React from "react";
const ResizeFieldRectangle: React.FC<
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
        fillRule="evenodd"
        d="M21.75 2.25H2.25v19.5h19.5zM7.438 18.5l11.06-11.06v2.12l-8.94 8.94zm4 0 7.06-7.06v2.121l-4.94 4.94zm7.06-3.06-3.06 3.06h2.12l.94-.939z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResizeFieldRectangle;
