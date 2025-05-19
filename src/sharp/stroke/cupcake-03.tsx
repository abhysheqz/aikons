import React from "react";
const Cupcake_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0c0-.5.4-1.6 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6c-2.209 0-4.098 2.493-2.75 4.081C5.622 9.74 4 10.946 4 12.534c0 2.952 4.662 3.374 5.28.503.564 2.617 4.876 2.617 5.44 0 .618 2.87 5.28 2.449 5.28-.503 0-1.588-1.623-2.794-3.25-2.453C18.099 8.493 16.21 6 14 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 15 1.5 7h9l1.5-7"
      />
    </svg>
  );
};
export default Cupcake_03;
