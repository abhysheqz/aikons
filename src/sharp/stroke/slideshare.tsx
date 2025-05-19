import React from "react";
const Slideshare: React.FC<
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
        strokeWidth={1.5}
        d="M8.494 12.013a1.5 1.5 0 0 0 1.499-1.502 1.5 1.5 0 1 0-2.999 0 1.5 1.5 0 0 0 1.5 1.502ZM15.49 12.013a1.5 1.5 0 0 0 1.499-1.502 1.5 1.5 0 1 0-1.5 1.502Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.986 9.01V2H3.997V9.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 11.02c1.014.988 2.94 2.205 4.94 3.113m0 0c1.138.425 1.422.4 2.039.658 2.522 1.053 1.985 4.391 1.983 6.232a.01.01 0 0 1-.01.01c-1.77-.002-5.323-.516-4.964-3.772 0-1.029.775-3.006.952-3.128ZM22 11.002c-1.014.988-2.888 2.219-4.889 3.126m0 0c-1.138.426-1.591.433-2.218.663-2.787 1.022-1.682 5.322-1.876 7.197q0 .01.01.01c1.568-.05 4.56.197 4.913-2.083.093-.597.102-1.215.084-1.819-.048-1.594-.767-3.867-.913-3.968Z"
      />
    </svg>
  );
};
export default Slideshare;
