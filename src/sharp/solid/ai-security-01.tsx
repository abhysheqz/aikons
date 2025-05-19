import React from "react";
const AiSecurity_01: React.FC<
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
        d="M12 1.25s-.839.5-1.057.616c-.436.231-1.072.546-1.86.877-1.582.663-3.756 1.38-6.158 1.618l-.675.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.213 2.084c.438.228 1.757.798 1.757.798s1.318-.57 1.756-.799a20.3 20.3 0 0 0 3.214-2.084c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.676-.067c-2.401-.238-4.576-.955-6.157-1.618a23 23 0 0 1-1.86-.877C12.838 1.75 12 1.25 12 1.25m-.754 7h1.5V6.5h1.5v1.75h1.5v1.5h1.75v1.5h-1.75v1.5h1.75v1.5h-1.75v1.5h-1.5v1.75h-1.5v-1.75h-1.5v1.75h-1.5v-1.75h-1.5v-1.5h-1.75v-1.5h1.75v-1.5h-1.75v-1.5h1.75v-1.5h1.5V6.5h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiSecurity_01;
