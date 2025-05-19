import React from "react";
const ShopSign: React.FC<
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
        d="M18.86 2.517a.97.97 0 0 0-.948-.767H6.524L1.25 21.758l1.871.492 1.45-5.5h5.397l1.393 5.286h10.421a.968.968 0 0 0 .947-1.165zM9.44 14.75 7.27 6.512 5.098 14.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShopSign;
