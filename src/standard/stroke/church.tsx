import React from "react";
const Church: React.FC<
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
        d="M12 2v4.997m2-2.999h-4M17 12l2.894 1.447A2 2 0 0 1 21 15.237V22h-4M7 12l-2.894 1.447A2 2 0 0 0 3 15.237V22h4M10 22v-4a2 2 0 1 1 4 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 11.992H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 10 5-3 5 3v12H7z"
      />
    </svg>
  );
};
export default Church;
