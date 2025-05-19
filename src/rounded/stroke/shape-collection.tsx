import React from "react";
const ShapeCollection: React.FC<
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
        d="M3.889 9.663C4.393 10 5.096 10 6.5 10s2.107 0 2.611-.337a2 2 0 0 0 .552-.552C10 8.607 10 7.904 10 6.5s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C8.607 3 7.904 3 6.5 3s-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 4.393 3 5.096 3 6.5s0 2.107.337 2.611a2 2 0 0 0 .552.552M14.809 10h5.382a.81.81 0 0 0 .724-1.17l-2.691-5.383a.809.809 0 0 0-1.448 0l-2.69 5.382A.81.81 0 0 0 14.808 10"
      />
      <circle
        cx={6.5}
        cy={17.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 15v2.5c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44H15m-.5-6 5 5"
      />
    </svg>
  );
};
export default ShapeCollection;
