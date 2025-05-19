import React from "react";
const ShoppingBasket_03: React.FC<
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
        d="M22 7.25h-3.605l-2.5-5-1.788.894L16.16 7.25H9.1l1.817-4.152-1.832-.802L6.918 7.25H1.999a.75.75 0 0 0-.75.75v3.54l1.606.536 1.911 9.078a.75.75 0 0 0 .734.596H18.5a.75.75 0 0 0 .734-.595l1.912-9.08 1.605-.534V8a.75.75 0 0 0-.75-.75m-7.501 4h-5v1.5h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasket_03;
