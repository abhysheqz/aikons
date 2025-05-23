import React from "react";
const Ski: React.FC<
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
        strokeWidth={1.5}
        d="M20.248 4.5a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.729 7.82 1.075-.968a1.5 1.5 0 0 1 1.94-.057L17.25 8m-4.521-.18L15.55 9.7l1.7-1.7m-4.521-.18L6.25 3.5m6.5 9-1.393-.929a1.5 1.5 0 0 1-.476-1.984M12.75 12.5l2.36 1.686a1 1 0 0 1 0 1.628L12.75 17.5m0-5 1-1m3.5-3.5.5 3.167 3.5 2.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.25 12 14 9 2.5-.5"
      />
    </svg>
  );
};
export default Ski;
