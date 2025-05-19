import React from "react";
const Blocked: React.FC<
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
        d="M12 1.25s-.838.5-1.056.616c-.437.231-1.073.546-1.861.877-1.581.663-3.756 1.38-6.158 1.618l-.675.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.438.228 1.756.798 1.756.798s1.319-.57 1.756-.799a20.3 20.3 0 0 0 3.215-2.084c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.676-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877A49 49 0 0 1 12 1.25M9.25 9a2.75 2.75 0 0 1 5.5 0v.75h1.5v7h-8.5v-7h1.5zm4 0v.75h-2.5V9a1.25 1.25 0 1 1 2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blocked;
