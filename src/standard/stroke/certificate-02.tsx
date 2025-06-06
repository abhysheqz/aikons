import React from "react";
const Certificate_02: React.FC<
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
      <circle cx={12} cy={8.5} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.996 5.5C7.49 4.747 5.7 4.277 4.053 4.091a1.653 1.653 0 0 0-1.83 1.446C2.115 6.335 2.021 7.354 2 8.5c.022 1.146.116 2.165.222 2.963.122.91.92 1.549 1.831 1.446 1.647-.186 3.437-.656 4.943-1.409M15 5.5c1.506-.753 3.296-1.223 4.943-1.409a1.653 1.653 0 0 1 1.83 1.446c.107.798.201 1.817.223 2.963a27 27 0 0 1-.222 2.963 1.653 1.653 0 0 1-1.831 1.446c-1.647-.186-3.437-.656-4.943-1.409M10 12l-1.968 7.3c-.207.827.646 1.501 1.344 1.06L11.533 19a.87.87 0 0 1 .934 0l2.157 1.362c.698.44 1.551-.234 1.344-1.062L14 12"
      />
    </svg>
  );
};
export default Certificate_02;
