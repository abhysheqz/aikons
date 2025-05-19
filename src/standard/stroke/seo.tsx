import React from "react";
const Seo: React.FC<
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
        d="m4 20.5 3.413-3.413m0 0a4.444 4.444 0 1 0 6.285-6.285 4.444 4.444 0 0 0-6.285 6.285"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 15V5.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-3"
      />
    </svg>
  );
};
export default Seo;
