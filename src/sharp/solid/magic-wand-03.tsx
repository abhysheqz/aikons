import React from "react";
const MagicWand_03: React.FC<
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
        d="m15.938 17-1.97-1.97 1.061-1.061 1.97 1.97.47-.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06z"
      />
      <path
        fill="currentColor"
        d="M13.262 1.8a.75.75 0 0 1 .479.664l.241 5.07 4.853 2.426a.75.75 0 0 1-.117 1.389l-5.65 1.72-1.72 5.65a.75.75 0 0 1-1.388.116l-2.426-4.853-5.07-.241a.75.75 0 0 1-.494-1.28L5.292 9.14 3.377 4.352a.75.75 0 0 1 .975-.975L9.14 5.292l3.323-3.322a.75.75 0 0 1 .8-.17"
      />
    </svg>
  );
};
export default MagicWand_03;
