import React from "react";
const Hat: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m19.5 14 2.5 2.5v.5c-2.28 1.214-5.91 2-10 2s-7.72-.786-10-2v-.5L4.5 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 15c3.067 0 5.79-.393 7.5-1l-.703-6.331A3 3 0 0 0 15.815 5h-7.63a3 3 0 0 0-2.982 2.669L4.5 14c1.71.607 4.433 1 7.5 1ZM11 10h2"
      />
    </svg>
  );
};
export default Hat;
