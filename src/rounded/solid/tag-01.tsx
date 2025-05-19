import React from "react";
const Tag_01: React.FC<
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
        d="M19.46 1.572c.748.172 1.506.453 2.01.957.505.505.786 1.263.958 2.011.177.774.265 1.66.3 2.53.073 1.742-.056 3.522-.14 4.432a2.7 2.7 0 0 1-.647 1.515 93 93 0 0 1-8.585 8.768c-1.403 1.256-3.498 1.27-4.959.138a34.8 34.8 0 0 1-6.32-6.32c-1.131-1.461-1.118-3.556.138-4.96a93 93 0 0 1 8.768-8.584 2.7 2.7 0 0 1 1.515-.647c.91-.084 2.69-.213 4.433-.14.87.035 1.755.122 2.528.3M19 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M7.707 13.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tag_01;
