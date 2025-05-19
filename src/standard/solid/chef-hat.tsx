import React from "react";
const ChefHat: React.FC<
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
        d="M7.88 4.636a4.75 4.75 0 1 0-2.63 9.055v2.034l.39-.157c1.735-.675 3.962-1.068 6.363-1.068 2.4 0 4.627.393 6.362 1.068l.016.006.372.16-.003-2.043a4.751 4.751 0 1 0-2.63-9.055A4.75 4.75 0 0 0 12 2.25c-1.764 0-3.302.96-4.12 2.386m10.877 13.276-1.133-.486c-1.46-.566-3.429-.926-5.621-.926-2.199 0-4.17.362-5.633.93l-1.12.45v3.827c1.774-.592 4.13-.957 6.75-.957s4.988.37 6.763.962z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21c-2.6 0-4.94.367-6.683.949a1 1 0 1 1-.633-1.898C6.67 19.388 9.232 19 12 19c2.769 0 5.33.388 7.317 1.051a1 1 0 0 1-.633 1.898C16.94 21.367 14.6 21 12 21"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChefHat;
