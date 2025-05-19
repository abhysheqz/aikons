import React from "react";
const Prison: React.FC<
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
        d="M2.75 21V3h2v18zm5.5 0V3h2v18zm5.5-12V3h2v6zm5.5 12V3h2v18zm-5.5 0v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 4H2V2h20zM22 22H2v-2h20zM13 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h7v-7.5zM17.125 11h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prison;
