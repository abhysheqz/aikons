import React from "react";
const ImageUpload_01: React.FC<
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
        d="M19.25 12A2.25 2.25 0 0 1 17 9.75V6.986a2.25 2.25 0 0 1-1.841-3.827l.909-.909H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20v-8zm.548 7.821c0 .54-.437.976-.977.976H6.336l7.51-6.758a2 2 0 0 1 2.447-.178l3.505 2.337zM7.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 10.75a1 1 0 0 0 1-1V4.664l.793.793a1 1 0 1 0 1.414-1.414l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414l.793-.793V9.75a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageUpload_01;
