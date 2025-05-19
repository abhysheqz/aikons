import React from "react";
const Voucher: React.FC<
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
        d="M13.063 6.25h3.874v1.938h-3.875zm7.75 1.938h-1.938V6.25h2.906c.535 0 .969.434.969.969v2.906h-1.937zm1.937 3.875v3.874h-1.937v-3.874zm-13.562.968v2.906H7.25v-2.906zm-1.938 7.75v-2.906h1.938v1.938h1.937v1.937H8.219a.97.97 0 0 1-.969-.968m13.563-.968v-1.938h1.937v2.906a.97.97 0 0 1-.969.97h-2.906v-1.938zm-3.875 1.937h-3.875v-1.937h3.874zM3.646 4.167a.48.48 0 1 1 0 .958.48.48 0 0 1 0-.958m2.396.479a2.396 2.396 0 1 0-1.46 2.206l1.314 1.132-1.38 1.138a2.396 2.396 0 1 0 1.362 1.361L7.38 9.245l2.84 2.366 1.227-1.472L8.88 8l2.567-2.139L10.22 4.39 7.393 6.744 5.9 5.46c.092-.254.142-.528.142-.813m-2.396 6.23a.48.48 0 1 1 0 .958.48.48 0 0 1 0-.959"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Voucher;
