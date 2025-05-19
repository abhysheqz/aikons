import React from "react";
const GolfHole: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M11.01 19.046v-8.153" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.513 17.031C5.856 17.43 4 18.406 4 19.463c0 1.424 3.368 2.578 7.522 2.578s7.521-1.154 7.521-2.578c0-1.123-2.093-2.078-5.014-2.432"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.016 11.874v-9.73a.1.1 0 0 1 .145-.09l8.789 4.38a.1.1 0 0 1 .007.175l-8.788 5.35a.1.1 0 0 1-.153-.085Z"
      />
    </svg>
  );
};
export default GolfHole;
