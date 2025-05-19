import React from "react";
const MapsSquare_02: React.FC<
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
        strokeWidth={2}
        d="M14.5 9.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 6C12.567 6 11 7.447 11 9.232c0 1.021.438 1.815 1.313 2.524.616.5 1.738 1.571 2.187 2.244.471-.66 1.57-1.745 2.188-2.244.875-.71 1.312-1.503 1.312-2.524C18 7.447 16.433 6 14.5 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h18V3H3zM17 21 3 7M10 14l-7 7"
      />
    </svg>
  );
};
export default MapsSquare_02;
