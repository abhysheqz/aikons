import React from "react";
const ThreeFinger_03: React.FC<
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
        d="M8.397 14.191V4.037a1.283 1.283 0 1 1 2.565 0v7.383a.45.45 0 0 0 .9 0V3a1.246 1.246 0 0 1 2.492 0v9.354a.45.45 0 0 0 .9 0V4.52a1.268 1.268 0 0 1 2.536 0v8.478a.45.45 0 0 0 .9 0v-1.465a1.281 1.281 0 0 1 2.563 0v6.965a3.75 3.75 0 0 1-3.75 3.75H9.597A2.75 2.75 0 0 1 7.28 20.98l-4.472-7.019a1.717 1.717 0 0 1 2.79-1.994l2.02 2.532a.45.45 0 0 0 .779-.308"
      />
    </svg>
  );
};
export default ThreeFinger_03;
