import React from "react";
const ShieldEnergy: React.FC<
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
        d="M12 1.25s-.838.5-1.056.616c-.437.231-1.073.546-1.861.877-1.581.663-3.756 1.38-6.158 1.618l-.675.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.438.229 1.756.798 1.756.798s1.319-.57 1.756-.798a20.3 20.3 0 0 0 3.215-2.085c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.676-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877A49 49 0 0 1 12 1.25M13.75 6a.75.75 0 0 0-1.327-.48l-5 6A.75.75 0 0 0 8 12.75h2.25V17a.75.75 0 0 0 1.326.48l5-6a.75.75 0 0 0-.577-1.23h-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShieldEnergy;
