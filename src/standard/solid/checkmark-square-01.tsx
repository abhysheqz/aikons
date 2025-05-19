import React from "react";
const CheckmarkSquare_01: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm11.94 8.148a1 1 0 1 0-.88-1.796c-1.956.958-3.47 2.602-4.473 3.942-.347.464-.64.902-.877 1.277a7.916 7.916 0 0 0-1.784-1.154l-.02-.01-.007-.002-.003-.002h-.002l-.394.919.394-.92a1 1 0 0 0-.79 1.838l.004.002a3 3 0 0 1 .18.088c.13.067.314.17.524.309.429.282.918.683 1.269 1.185a1 1 0 0 0 1.717-.134l.003-.005.014-.029.065-.123c.058-.11.147-.272.265-.473.237-.404.589-.96 1.043-1.568.922-1.231 2.208-2.587 3.752-3.344"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkSquare_01;
