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
        d="M19.998 4.5A1.5 1.5 0 1 1 17 4.5a1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.479 7.82 1.075-.968a1.5 1.5 0 0 1 1.94-.057L17 8m-4.521-.18L15.3 9.7 17 8m-4.521-.18L6 3.5m6.5 9-1.393-.929a1.5 1.5 0 0 1-.476-1.984M12.5 12.5l2.36 1.686a1 1 0 0 1 0 1.628L12.5 17.5m0-5 1-1M17 8l.5 3.167L21 13.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 12 14 9 2.5-.5"
      />
    </svg>
  );
};
export default Ski;
