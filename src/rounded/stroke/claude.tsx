import React from "react";
const Claude: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 12 5.5-7M7.64 3l4.86 9 1.187-9M4.484 6.717 11.987 12M3 12l8.987.473m.237.704L7 20m-2.158-3.132 6.44-3.892M11.5 21l1.165-7.823M21 14l-7.815-1.332M21 10.578l-8 1.744m3.779 7.324-3.891-6.269m6.469 4.83-6.044-5.218"
      />
    </svg>
  );
};
export default Claude;
