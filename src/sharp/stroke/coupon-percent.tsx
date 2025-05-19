import React from "react";
const CouponPercent: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.5 14.458 5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 9.458h.011m4.978 5h.011"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.9 3.5H2.1a.1.1 0 0 0-.1.1v5.933c1.315-.042 2.225.348 2.792 1.614.237.529.27 1.137.066 1.678-.51 1.35-1.575 1.775-2.858 1.757V20.5h20v-5.926c-1.369-.045-2.158-.341-2.648-1.248a2.7 2.7 0 0 1 .047-2.622c.478-.808 1.222-1.123 2.601-1.146V3.6a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default CouponPercent;
