import React from "react";
const EraserAuto: React.FC<
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
        d="M9 10 7.875 7M2 10l1.125-3m0 0L5 2h1l1.875 5m-4.75 0h4.75M12.7 12l-5.029 5.293a1 1 0 0 0 .018 1.396l3.018 3.018a1 1 0 0 0 .707.293h2.154a1 1 0 0 0 .728-.315l3.922-4.167M12.7 12l3.093-3.256a1 1 0 0 1 1.433-.019l4.088 4.089a1 1 0 0 1 .021 1.393l-3.117 3.311M12.7 12l5.518 5.518"
      />
    </svg>
  );
};
export default EraserAuto;
