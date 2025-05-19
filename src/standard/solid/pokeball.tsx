import React from "react";
const Pokeball: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 19.546A8.796 8.796 0 0 1 3.204 12c0-.118 0-.178.018-.227a.31.31 0 0 1 .279-.198c.052-.001.112.02.234.062 1.514.524 2.92.918 4.269 1.183Q8 12.91 8 13a4 4 0 1 0 7.996-.172c1.356-.265 2.767-.662 4.286-1.19a1 1 0 0 1 .19-.056.3.3 0 0 1 .313.222c.01.038.01.09.01.196A8.795 8.795 0 0 1 12 20.796M10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pokeball;
