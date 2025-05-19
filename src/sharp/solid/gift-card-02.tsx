import React from "react";
const GiftCard_02: React.FC<
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
        d="M9.25 3.25h-8v8h5.175L4.172 8.996 7 6.168l2.25 2.25zm-8 9.5h5.168l-2.246 2.246L7 17.825l2.25-2.25v5.175h-8zm9.5 2.825v5.175h12v-8h-9.168l2.247 2.246L13 17.825zm12-4.325h-9.175l2.254-2.254L13 6.168l-2.25 2.25V3.25h12zM10 10.938l-3-3-1.06 1.06 3 3-3 3L7 16.058l3-3 3 3 1.06-1.06-3-3 3-3L13 7.938z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GiftCard_02;
