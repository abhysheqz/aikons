import React from "react";
const Store_01: React.FC<
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
        d="M2.5 19.5v-9h2v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9h2v9a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.244 16.336a1 1 0 0 1 1.412-.084c.466.414 1.302.748 2.335.748s1.869-.334 2.334-.748a1 1 0 1 1 1.328 1.496c-.902.8-2.243 1.252-3.662 1.252s-2.76-.451-3.663-1.252a1 1 0 0 1-.084-1.412M14.82 11.267c1.238 1.026 2.675 1.173 4.009.797 1.472-.416 2.815-1.457 3.749-2.586a.75.75 0 0 0 .139-.699l-1.783-5.794a1.75 1.75 0 0 0-1.673-1.235H4.74a1.75 1.75 0 0 0-1.673 1.235L1.283 8.78a.75.75 0 0 0 .1.648c.663.956 1.948 2.378 3.749 2.702.939.169 2.6.215 3.974-.854.94.718 2.578 1.408 4.52.643a5.2 5.2 0 0 0 1.195-.651"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Store_01;
