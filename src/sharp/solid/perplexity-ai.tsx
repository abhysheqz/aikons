import React from "react";
const PerplexityAi: React.FC<
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
        d="M12.75 22.75V1.25h-1.5v21.5zM2.25 7.25h7.61L4 12.622v4.128H2.25zm19.5 9.5H20v-4.128L14.14 7.25h7.61zM10 5.342 5 1.25h-.75V6H10zM14 6h5.75V1.25H19l-5 4.092zm-8.75 7.17L10 8.817v9.475l-4 3.46h-.75zM18 21.75l-4-3.46V8.817l4.75 4.355v8.58z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PerplexityAi;
