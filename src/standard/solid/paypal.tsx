import React from "react";
const Paypal: React.FC<
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
        d="M6.936 2.345 3.141 19.353a.5.5 0 0 0 .488.608H7.6a.5.5 0 0 0 .488-.394l1.437-6.635h3.333c.65 0 1.305-.09 1.898-.355 3.134-1.405 3.971-3.896 4.296-5.233.417-2.71-1.104-4.308-3.05-5.004-.558-.199-1.154-.249-1.746-.26l-6.821-.126a.5.5 0 0 0-.498.391"
      />
      <path
        fill="currentColor"
        d="m6.85 21.46-.077.307a.75.75 0 0 0 .727.933h4.066a.75.75 0 0 0 .728-.57l1.326-5.365c4.28.322 6.813-1.401 7.742-3.742.736-1.856.395-4.043-.832-5.437a2 2 0 0 1-.023.112c-.372 1.53-1.39 4.565-5.14 6.247-.851.381-1.735.486-2.512.486h-2.123l-1.18 5.453a2 2 0 0 1-1.955 1.577z"
      />
    </svg>
  );
};
export default Paypal;
