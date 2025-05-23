import React from "react";
const FishFood: React.FC<
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
        strokeWidth={2}
        d="M6.008 12h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 16.042c.463.153.908.329 1.31.61m0 0C13.35 17.382 14 18.693 14 20c-2.917-.013-4.342-.507-4.89-1.322L8 16.857c-2.492-.503-4.782-2.094-6-4.774 3-6.597 12.5-6.597 15.5 0m-5.19 4.57c2.17-.66 4.105-2.184 5.19-4.57m-5.19-4.569C13.35 6.786 14 5.308 14 4c0 0-4.308.624-4.89 1.488L8 7.31m9.5 4.773c.333-.66 2.1-2.969 4.5-2.969-.833.825-2.2 3.959-1 5.938-1.2 0-3-2.309-3.5-2.969Z"
      />
    </svg>
  );
};
export default FishFood;
