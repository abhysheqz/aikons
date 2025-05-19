import React from "react";
const OfficeChair: React.FC<
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
        d="M7.24 21.45c1.216-1.42 2.877-2.35 4.76-2.35 1.882 0 3.544.93 4.76 2.35l-1.52 1.3c-.916-1.07-2.056-1.65-3.24-1.65s-2.324.58-3.24 1.65z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 15.25c0-1.622 1.261-3 2.893-3h5.714c1.632 0 2.893 1.378 2.893 3v1.5H6.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.045 11.618 1.455-.724-.9-1.789-2.567 1.277V13c0 .552-.45 1-1.005 1v2a3.01 3.01 0 0 0 3.017-3zM3.4 9.106l2.566 1.276V13c0 .552.45 1 1.006 1v2a3.01 3.01 0 0 1-3.017-3v-1.382L2.5 10.894zM11 22v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.256 10.093A.75.75 0 0 0 8 10.75h8a.75.75 0 0 0 .744-.657l1-8A.75.75 0 0 0 17 1.25H7a.75.75 0 0 0-.744.843z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 13v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OfficeChair;
