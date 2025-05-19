import React from "react";
const BiomassEnergy: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9.501C4 5.358 7.582 2 12 2s8 3.358 8 7.501V11l-2.5-1.499M20 14.499C20 18.642 16.418 22 12 22s-8-3.358-8-7.501V13l2.5 1.499"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.034 11.182c-.683 1.268-1.295 3.275-.508 6.272m-.632-2.498c-4.075-3.137-.619-6.753 2.554-8.424 1.869 3.518 3.001 8.224-2.554 8.424Z"
      />
    </svg>
  );
};
export default BiomassEnergy;
