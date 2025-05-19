import React from "react";
const SortingUp: React.FC<
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
        d="m6 17.5 2-2 2 2M8 21v-4.891M14 17.5l2-2 2 2M16 21v-4.891M10 4.5l2-2 2 2M12 8V3.109M6.5 8.5h11M3.5 12.5h17"
      />
    </svg>
  );
};
export default SortingUp;
