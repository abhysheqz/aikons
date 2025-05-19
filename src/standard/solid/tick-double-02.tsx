import React from "react";
const TickDouble_02: React.FC<
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
        d="M16.69 5.277a1 1 0 0 1 .033 1.413l-5.25 5.5a1 1 0 0 1-1.446-1.38l5.25-5.5a1 1 0 0 1 1.414-.033m-15.348 6.97a1 1 0 0 1 1.41.095l2.78 3.176.2-.209a1 1 0 0 1 1.446 1.382l-.955 1a1 1 0 0 1-1.476-.032l-3.5-4a1 1 0 0 1 .095-1.412"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.69 5.277a1 1 0 0 1 .033 1.413l-10.5 11a1 1 0 0 1-1.476-.032l-3.5-4a1 1 0 1 1 1.506-1.316l2.78 3.176L21.276 5.31a1 1 0 0 1 1.413-.033"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_02;
