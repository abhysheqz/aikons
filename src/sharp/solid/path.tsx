import React from "react";
const Path: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4.75 8.143C7.75 8.47 9.559 6.75 12 6.75s4.25 1.72 4.25 3.643c0 1.714-2.112 3.466-4.5 2.579V9.905h-1.5v5.94c0 .507 0 .83-.024 1.062a1 1 0 0 1-.039.21c-.107.12-.24.16-.439.116a1.14 1.14 0 0 1-.634-.436l-1.228.861c.351.5.913.896 1.528 1.037.644.147 1.395.015 1.934-.626.26-.311.337-.688.37-1.01.032-.318.032-.718.032-1.176v-1.342c3.084.795 6-1.426 6-4.148 0-2.928-2.668-5.143-5.75-5.143s-5.75 2.215-5.75 5.143c0 1.184.447 2.267 1.18 3.124l1.14-.975c-.522-.61-.82-1.354-.82-2.149"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Path;
