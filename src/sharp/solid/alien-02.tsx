import React from "react";
const Alien_02: React.FC<
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
        d="M3.784 9.25a8.25 8.25 0 0 1 16.432 0h.284a2.25 2.25 0 0 1 0 4.5h-.25v7.75a.75.75 0 0 1-1.085.67l-3.641-1.82-3.152 1.801a.75.75 0 0 1-.744 0l-3.152-1.8-3.64 1.82A.75.75 0 0 1 3.75 21.5v-7.75H3.5a2.25 2.25 0 0 1 0-4.5zm4.466.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.75 6h-2.01v2H13z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.484 4.178C2.866 3.442 2.5 2.532 2.5 1.75h2c0 .218.134.688.516 1.142.359.427.888.78 1.603.865l-.238 1.986a4.43 4.43 0 0 1-2.897-1.565m15.5-1.286c.382-.454.516-.924.516-1.142h2c0 .782-.366 1.693-.984 2.428a4.44 4.44 0 0 1-2.897 1.565l-.238-1.986a2.44 2.44 0 0 0 1.603-.865"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Alien_02;
