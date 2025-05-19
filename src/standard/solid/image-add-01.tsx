import React from "react";
const ImageAdd_01: React.FC<
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
        d="M16 2.25H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20V8H20.5v1.25a2.25 2.25 0 0 1-4.5 0V8h-1.25a2.25 2.25 0 0 1 0-4.5H16zm3.798 17.571c0 .54-.437.976-.977.976H6.336l7.51-6.758a2 2 0 0 1 2.447-.178l3.505 2.337zM7.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 1.25a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageAdd_01;
