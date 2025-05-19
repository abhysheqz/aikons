import React from "react";
const Sushi_02: React.FC<
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
        d="M16.272 8.985a1.256 1.256 0 1 0-2.513 0 1.256 1.256 0 0 0 2.513 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.014 3.206a5.779 5.779 0 1 1 0 11.558 5.779 5.779 0 0 1 0-11.558m.002 3.015a2.764 2.764 0 1 1 0 5.528 2.764 2.764 0 0 1 0-5.528"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.24 16.634 12.223 2.15l-1.453-.4-3.983 14.484zM6.696 22.25l.829-3.015-1.454-.4-.829 3.015z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.15 18.757 20.1-5.528-.4-1.453-20.1 5.527z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sushi_02;
