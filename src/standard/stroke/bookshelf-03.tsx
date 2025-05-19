import React from "react";
const Bookshelf_03: React.FC<
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
        d="M11 19h2M3 15.992h18M3 8.996h18M10 9 9 5M6.5 9V5M12 9V5M13.5 16v-4m2 4 1-4m2 4v-4M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v17H3zM2 22h20"
      />
    </svg>
  );
};
export default Bookshelf_03;
