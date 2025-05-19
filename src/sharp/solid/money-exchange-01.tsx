import React from "react";
const MoneyExchange_01: React.FC<
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
        d="M20.75 17.336v-1h2v3h-4.086l1 1-1.414 1.414-2.5-2.5v-1.914zm2-2h-5v1h-2v-3h4.086l-1-1 1.414-1.414 2.5 2.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 11.656-2.5-2.5-2.932 2.932H14.5v5.662H1.25V2.25h21.5zm-20 4.594h3.18a4 4 0 0 0-3.18-3.18zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyExchange_01;
