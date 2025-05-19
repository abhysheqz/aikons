import React from "react";
const Flag_02: React.FC<
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
        d="M4 13a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.38 3.635c1.51-1.191 5.087-2.624 8.837-.685 2.376 1.229 4.946 1.25 7.369.147a1 1 0 0 1 1.414.91v10.016a1 1 0 0 1-.515.874c-1.594.885-5.339 1.97-9.187-.02-3.4-1.758-5.823-.224-6.544.604A1 1 0 0 1 3 14.825V4.42a1 1 0 0 1 .38-.785"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flag_02;
