import React from "react";
const Raw_01: React.FC<
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
        d="m3.251 1.25-.001 12.5h17.5V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236zM6.25 15.25a2.5 2.5 0 0 1 1.089 4.751l1.167 2.749H6.831l-1.045-2.5H4.75v2.5h-1.5v-7.5zm0 3.5h-1.5v-2h1.5a1 1 0 1 1 0 2m8.66 4h-1.456l-.54-2h-1.828l-.54 2H9.09l1.824-7.5h2.172zM12 17.092l.54 2.158h-1.08zm7.25-1.842h1.5v7.5h-1.625L18 21.25l-1.125 1.5H15.25v-7.5h1.5v5.167L18 18.75l1.25 1.667z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Raw_01;
