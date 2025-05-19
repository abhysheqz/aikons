import React from "react";
const ShoppingCart_02: React.FC<
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
        d="M2 1.25h3a1 1 0 0 1 .978.79l.688 3.21H22v2h-1.424l-1.337 7.572a1 1 0 0 1-.843.816l-9.715 1.388-.717 1.049c.257.262.462.576.599.925h5.874a2.751 2.751 0 1 1 0 2H8.564a2.751 2.751 0 1 1-2.46-3.748l.83-1.212L4.191 3.25H2zm4 17.833a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834m11 0a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_02;
