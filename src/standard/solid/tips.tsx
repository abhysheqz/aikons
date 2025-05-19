import React from "react";
const Tips: React.FC<
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
        d="M4 12.25a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.722l6.254 1.769a2.75 2.75 0 0 0 1.978-.187l7.585-3.792a1.627 1.627 0 0 0 .783-2.06 2.75 2.75 0 0 0-3.423-1.587h-.002l-2.701.908c.146.308.229.632.229.958a.5.5 0 0 1-.353.478l-3.693 1.137a1.5 1.5 0 0 1-.915-.01l-2.696-.9a.5.5 0 0 1 .316-.948l2.696.899a.5.5 0 0 0 .305.003l3.28-1.01a1.7 1.7 0 0 0-.19-.39c-.558-.792-1.54-1.385-2.749-1.385h-.807l-1.881-1.034a2.75 2.75 0 0 0-1.326-.341z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 8.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 2.25a4.25 4.25 0 0 0-.297 8.49 5.751 5.751 0 0 1 3.006-7.515A4.23 4.23 0 0 0 11.5 2.25"
      />
    </svg>
  );
};
export default Tips;
