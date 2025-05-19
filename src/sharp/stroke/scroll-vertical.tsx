import React from "react";
const ScrollVertical: React.FC<
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
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.007 6.513l3.976 1.483c.011.004.021-.007.015-.016l-4.033-5.964c-.005-.007-.017-.007-.022 0l-3.94 5.957c-.006.009.004.02.015.016zM12.007 17.491l3.976-1.483c.011-.003.021.008.015.016l-4.033 5.964a.013.013 0 0 1-.022 0l-3.94-5.956c-.006-.01.004-.02.015-.017z"
      />
    </svg>
  );
};
export default ScrollVertical;
