import React from "react";
const Billiard_01: React.FC<
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
        d="M15 1.25A7.75 7.75 0 0 0 7.25 9c0 .561.08 1.248.276 1.979l3.558-3.262a3.68 3.68 0 0 1 5.199 5.199l-3.25 3.546A10 10 0 0 0 15 16.75a7.75 7.75 0 0 0 0-15.5m4.598 4.101a.75.75 0 0 0-1.128.99c.709.807.988 2.215.706 3.319a.75.75 0 1 0 1.453.371c.388-1.516.047-3.45-1.03-4.68m-7.5 3.472a2.18 2.18 0 0 1 3.08 3.08L5.455 22.506a.75.75 0 0 1-1.105-1.014l7.483-8.164a1.26 1.26 0 0 0-.38-.751c-.196-.18-.492-.31-.909-.297l-8.038 7.368a.75.75 0 1 1-1.014-1.105z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Billiard_01;
