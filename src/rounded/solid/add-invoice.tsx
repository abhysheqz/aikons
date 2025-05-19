import React from "react";
const AddInvoice: React.FC<
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
        d="M16.75 12.75a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.41 1.25c1.283 0 2.325 0 3.147.117.86.123 1.588.388 2.162.998.568.603.809 1.357.922 2.249.109.864.109 1.964.109 3.334v5.802H19a2.25 2.25 0 0 0-4.5 0v1.75h-1.75a2.25 2.25 0 0 0 0 4.5h1.75v.849a.7.7 0 0 0-.129.093l-1.938 1.222a8 8 0 0 1-.657.387c-.224.11-.477.199-.776.199s-.552-.089-.776-.2c-.2-.098-.423-.238-.657-.386l-1.938-1.222c-.591-.373-1.085-.156-1.258 0l-.509.35a7 7 0 0 1-.735.453c-.472.247-1.313.585-2.071.096-.514-.33-.674-.875-.741-1.354-.065-.467-.065-1.077-.065-1.786V7.948c0-1.37 0-2.47.11-3.334.112-.892.353-1.646.92-2.25.575-.609 1.302-.874 2.163-.997.822-.117 1.864-.117 3.147-.117zM7 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddInvoice;
