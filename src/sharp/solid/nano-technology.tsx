import React from "react";
const NanoTechnology: React.FC<
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
        d="M11.25 10V5h1.5v5zm-1.637 1.643-5-3 .772-1.286 5 3zm9.772-3-5 3-.772-1.286 5-3zm-9 5-5 3-.772-1.286 5-3zm8.228 3-5-3 .772-1.286 5 3zM11.25 19v-5h1.5v5zM10.835 4.17l-6 3-.67-1.34 6-3zm8.33 3-6-3 .67-1.34 6 3zM4.25 9v6h-1.5V9zm15.5 5.5V9h1.5v5.5zM4.835 16.83l6 3-.67 1.34-6-3zm8.306 3.012 5.5-3 .718 1.316-5.5 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M9.75 20.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 7.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M18.25 7.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M18.25 16.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 16.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M11.632 9.096a.75.75 0 0 1 .736 0l2 1.125a.75.75 0 0 1 .382.654v2.25a.75.75 0 0 1-.382.654l-2 1.125a.75.75 0 0 1-.736 0l-2-1.125a.75.75 0 0 1-.382-.654v-2.25a.75.75 0 0 1 .382-.654z"
      />
    </svg>
  );
};
export default NanoTechnology;
