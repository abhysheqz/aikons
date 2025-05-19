import React from "react";
const ShieldBlockchain: React.FC<
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
        d="M12 1.25s-.839.5-1.057.616a23 23 0 0 1-1.86.877c-1.582.663-3.756 1.38-6.158 1.618l-.675.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.437.229 1.756.798 1.756.798s1.319-.57 1.756-.798a20.3 20.3 0 0 0 3.214-2.085c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.675-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877A49 49 0 0 1 12 1.25m4.75 7.562L12 6.14 7.25 8.812v5.377L12 16.86l4.75-2.672zm-8 4.5v-2.78l2.5 1.407v2.779zm4 1.406v-2.78l2.5-1.405v2.779zM12 7.86l2.47 1.39L12 10.64 9.53 9.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShieldBlockchain;
