import React from "react";
const ShoppingBasket_01: React.FC<
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
        d="M4.535 6.75h14.93c.492 0 .94 0 1.3.052.394.058.814.196 1.127.579.31.378.368.816.357 1.215-.01.368-.086.818-.17 1.32l-1.22 7.275c-.193 1.15-.349 2.08-.563 2.806-.223.755-.533 1.381-1.09 1.864-.56.485-1.22.696-1.99.795-.736.094-1.656.094-2.788.094H9.572c-1.13 0-2.051 0-2.788-.094-.77-.099-1.428-.31-1.988-.795-.558-.483-.868-1.109-1.09-1.864-.215-.727-.371-1.657-.564-2.806L1.93 9.964l-.008-.048c-.085-.502-.16-.952-.17-1.32-.012-.399.046-.837.355-1.215.314-.383.734-.52 1.129-.579.359-.052.807-.052 1.3-.052"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.25a4 4 0 0 0-4 4v.5a1 1 0 0 1-2 0v-.5a6 6 0 1 1 12 0v.5a1 1 0 1 1-2 0v-.5a4 4 0 0 0-4-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasket_01;
