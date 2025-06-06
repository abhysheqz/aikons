import React from "react";
const Configuration_01: React.FC<
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
        d="m12.129 10 2-2h-4c-1 0-2 1-2 2v3l-5.384 5.41a2.103 2.103 0 1 0 2.974 2.974L11.13 16h3c1 0 2-1 2-2v-3.999l-2 1.999a1.423 1.423 0 0 1-2 0 1.423 1.423 0 0 1 0-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.13 15.177 2.412-2.124v-2.106l-1.79-1.576a1 1 0 0 1-.2-1.261l1.365-2.295a1 1 0 0 1 1.1-.46l2.552.632L9.129 5 9.9 2.684A1 1 0 0 1 10.85 2h2.558a1 1 0 0 1 .949.684L15.129 5l1.56.987 2.552-.632a1 1 0 0 1 1.1.46l1.39 2.338a1 1 0 0 1-.154 1.22l-1.807 1.798v1.658l1.806 1.798a1 1 0 0 1 .154 1.22l-1.39 2.338a1 1 0 0 1-1.1.46l-2.552-.632-1.477.83-.705 2.435a1 1 0 0 1-.96.722h-2.863a1 1 0 0 1-.949-.684L9.629 21"
      />
    </svg>
  );
};
export default Configuration_01;
