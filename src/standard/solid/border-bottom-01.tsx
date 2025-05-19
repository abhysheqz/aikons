import React from "react";
const BorderBottom_01: React.FC<
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
        d="M5.5 22.5h13a4 4 0 0 0 4-4v-1a1 1 0 1 0-2 0v1a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-1a1 1 0 1 0-2 0v1a4 4 0 0 0 4 4m16-7.5a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m-19 0a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m19-7.75a1 1 0 0 0 1-1V5.5a4 4 0 0 0-4-4h-.75a1 1 0 1 0 0 2h.75a2 2 0 0 1 2 2v.75a1 1 0 0 0 1 1m-19 0a1 1 0 0 0 1-1V5.5a2 2 0 0 1 2-2h.75a1 1 0 1 0 0-2H5.5a4 4 0 0 0-4 4v.75a1 1 0 0 0 1 1M9 2.5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.5a1 1 0 0 1 1 1v1.9a1 1 0 1 1-2 0V2.5a1 1 0 0 1 1-1m0 6.65a1 1 0 0 1 1 1V11h1.85a1 1 0 1 1 0 2H13v1.85a1 1 0 1 1-2 0V13H9.15a1 1 0 1 1 0-2H11V9.15a1 1 0 0 1 1-1M1.5 12a1 1 0 0 1 1-1h1.9a1 1 0 1 1 0 2H2.5a1 1 0 0 1-1-1m17.1 0a1 1 0 0 1 1-1h1.9a1 1 0 1 1 0 2h-1.9a1 1 0 0 1-1-1M12 18.6a1 1 0 0 1 1 1v1.9a1 1 0 1 1-2 0v-1.9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderBottom_01;
