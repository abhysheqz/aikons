import React from "react";
const City_01: React.FC<
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
        d="M14 8h-4c-2.482 0-3 .518-3 3v11h10V11c0-2.482-.518-3-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 12h2m-2 3h2m-2 3h2M21 22V8.186c0-1.229 0-1.843-.299-2.336-.298-.494-.836-.769-1.912-1.318l-4.342-2.217C13.287 1.723 13 1.932 13 3.23v4.474M3 22v-9c0-.827.173-1 1-1h3M22 22H2"
      />
    </svg>
  );
};
export default City_01;
