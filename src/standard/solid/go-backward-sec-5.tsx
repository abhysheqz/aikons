import React from "react";
const GoBackwardSec_5: React.FC<
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
        d="M14.422 3.33A9.005 9.005 0 0 1 21 12 9 9 0 1 1 6.6 4.799a1 1 0 1 0-1.2-1.6C2.73 5.206 1 8.402 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-5.323-3.78-9.76-8.801-10.78a11.05 11.05 0 0 0-4.398 0 1 1 0 0 0-.615 1.561l2 2.8a1 1 0 0 0 1.628 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.511 9.02a1 1 0 0 1 .989-.852h3a1 1 0 1 1 0 2h-2.139l-.135.9c.242-.04.501-.067.766-.068C13.62 10.979 15 12.32 15 14c0 .856-.39 1.603-.922 2.123-.526.515-1.26.877-2.051.877-1.442 0-2.196-.755-2.712-1.271l-.022-.022a1 1 0 1 1 1.414-1.414c.483.483.728.707 1.32.707.183 0 .435-.093.652-.306.212-.208.321-.46.321-.694 0-.57-.475-1.008-.984-1H12c-.349 0-.734.09-1.059.199a5 5 0 0 0-.473.186l-.02.01h-.004.002a1 1 0 0 1-1.435-1.043z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_5;
