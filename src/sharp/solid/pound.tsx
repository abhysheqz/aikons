import React from "react";
const Pound: React.FC<
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
        d="M7.5 8.5a4.5 4.5 0 0 1 9 0h2A6.5 6.5 0 1 0 7.31 13H3.5v2h5.055c-1.17 2.299-2.686 4.258-4.478 5.094A1 1 0 0 0 4.5 22h12.193l.03-.003c.258-.024.94-.087 1.29-.169.717-.167 1.686-.516 2.487-1.264l-1.365-1.462c-.448.419-1.042.654-1.576.778a5 5 0 0 1-.867.12H7.52c1.365-1.405 2.441-3.224 3.256-5H14.5v-2H12a4.5 4.5 0 0 1-4.5-4.5"
      />
    </svg>
  );
};
export default Pound;
