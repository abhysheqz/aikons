import React from "react";
const AiComputer: React.FC<
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
        d="M1.25 1.25h9.787v1.955H3.205v13.682h17.59v-3.91h1.955v5.864h-9.773v1.954h2.932v1.955H8.091v-1.954h2.932V18.84H1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 16h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 3V1.25h1.5V3H18V1.25h1.5V3H21v1.5h1.75V6H21v1.5h1.75V9H21v1.5h-1.5v1.75H18V10.5h-1.5v1.75H15V10.5h-1.5V9h-1.75V7.5h1.75V6h-1.75V4.5h1.75V3z"
      />
    </svg>
  );
};
export default AiComputer;
