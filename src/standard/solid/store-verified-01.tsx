import React from "react";
const StoreVerified_01: React.FC<
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
        d="M2.75 11.75a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 1 1 2 0v5a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.449 5.027A7.5 7.5 0 0 0 9.25 6.75a7.49 7.49 0 0 0 3.052 6.04l.162.502a.75.75 0 0 1-.485.944c-1.633.523-3.004-.032-3.828-.634-1.216.931-2.643.987-3.531.83-.882-.156-1.62-.677-2.178-1.203-.566-.534-1.013-1.134-1.305-1.546a.75.75 0 0 1-.092-.69l2-5.5A.75.75 0 0 1 3.75 5h5.5a.8.8 0 0 1 .199.027M11 6.75a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m8.23-2.076a.75.75 0 0 1 .096 1.056l-2.5 3a.75.75 0 0 1-1.106.05l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.92.919 1.974-2.37a.75.75 0 0 1 1.056-.095"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreVerified_01;
