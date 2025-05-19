import React from "react";
const DeliverySecure_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7.764v13.687h9m9-13.687v2.632"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 10.5h5M20.5 16.713v-1.58c0-1.162-.895-2.105-2-2.105s-2 .942-2 2.105v1.58m-1.5 0h7v5.79h-7zM21.9 2.5H2.1c-.055 0-.1.047-.1.105v5.159h20V2.605a.103.103 0 0 0-.1-.105Z"
      />
    </svg>
  );
};
export default DeliverySecure_02;
