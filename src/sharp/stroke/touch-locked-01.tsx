import React from "react";
const TouchLocked_01: React.FC<
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
        d="M19 17v-1.5a1.5 1.5 0 0 0-3 0V17M20.5 17h-6v5h6zM8.192 21.995v-2.028s-2.343-3.26-3.951-5.218c-1.609-1.957-.097-3.136-.097-3.136s1.222-1.021 2.46.426c.61.816 1.757 2.224 1.757 2.224V3.673a1.674 1.674 0 0 1 3.348 0l.013 5.858c1.33-.06 1.718.016 2.709.18.162.027.324.059.482.106.572.17 2.057.684 3.123 1.694"
      />
    </svg>
  );
};
export default TouchLocked_01;
