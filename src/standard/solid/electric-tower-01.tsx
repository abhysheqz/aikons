import React from "react";
const ElectricTower_01: React.FC<
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
        d="M9 5.25a.75.75 0 0 0-.386.107L3.63 8.347a.75.75 0 0 0-.31.337l-.99 1.98a.75.75 0 1 0 1.342.671l.793-1.585h15.073l.792 1.585a.75.75 0 1 0 1.342-.67l-.998-1.995a.76.76 0 0 0-.293-.317l-4.994-2.996A.75.75 0 0 0 15 5.25zm8.292 3-2.5-1.5H9.208l-2.5 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.957 9.405a.75.75 0 1 0-.914 1.19l1.727 1.328-3.227 2.483a.75.75 0 0 0 .054 1.227l3.006 1.912-6.006 3.822a.75.75 0 1 0 .806 1.266L12 18.434l6.597 4.199a.75.75 0 1 0 .805-1.266l-6.005-3.822 3.006-1.912a.75.75 0 0 0 .054-1.227l-3.227-2.483 1.727-1.329a.75.75 0 1 0-.914-1.189L12 10.977zM12 12.87l-2.695 2.073L12 16.656l2.694-1.714z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.6 1.55a.75.75 0 0 0-1.2 0l-3 4a.75.75 0 0 0-.138.583l.398 2.203c.045.31.017.625-.088.93L4.464 21.25H3a.75.75 0 0 0 0 1.5h18a.75.75 0 1 0 0-1.5h-1.464L15.428 9.267a2 2 0 0 1-.088-.93l.398-2.204a.75.75 0 0 0-.138-.583zm5.35 19.7L14.01 9.753a3.5 3.5 0 0 1-.151-1.652l.003-.02.342-1.893L12 3.25 9.796 6.188l.342 1.893.003.02a3.5 3.5 0 0 1-.15 1.652L6.05 21.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricTower_01;
