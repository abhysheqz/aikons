import React from "react";
const Knife_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.05 21.438c.818.917 2.224.636 3.024-.297l4.228-4.842a1 1 0 0 1 1.455-.055L13.542 18l7.362-7.653C23.187 7.973 22.987 4.184 20.52 2L3.05 18.68c-.754.767-.715 1.954 0 2.758"
      />
    </svg>
  );
};
export default Knife_02;
