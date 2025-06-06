import React from "react";
const FingerPrintScan: React.FC<
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
        d="M8 2.5H4.5a2 2 0 0 0-2 2V8M16 2.5h3.5a2 2 0 0 1 2 2V8M16 21.5h3.5a2 2 0 0 0 2-2V16M8 21.5H4.5a2 2 0 0 1-2-2V16M16.515 8.942c.317.576.485 1.21.485 1.857v2.882c0 1.134-.536 2.252-1.464 3.054C14.606 17.537 13.313 18 12 18m-5-6.722v2.403c0 1.258.654 2.496 1.801 3.321M14.5 6.579a5.7 5.7 0 0 0-3.794-.432c-1.28.297-2.373 1.02-3.036 2.013m5.996 3.318v-.887c.01-.636-.533-1.21-1.27-1.36m-2.062 2.626v1.524c-.006.28.093.555.282.788.59.728 1.91.811 2.624.154"
      />
    </svg>
  );
};
export default FingerPrintScan;
