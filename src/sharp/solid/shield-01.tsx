import React from "react";
const Shield_01: React.FC<
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
        d="M10.943 1.866C11.161 1.75 12 1.25 12 1.25s.839.5 1.057.616c.436.231 1.072.546 1.86.877 1.582.663 3.756 1.38 6.158 1.618l.675.067v6.62c0 4.042-2.45 6.959-4.78 8.82a20.3 20.3 0 0 1-3.214 2.084c-.437.228-1.756.798-1.756.798s-1.319-.57-1.756-.799a20.3 20.3 0 0 1-3.214-2.084c-2.33-1.86-4.78-4.777-4.78-8.819v-6.62l.675-.067c2.402-.238 4.576-.955 6.158-1.618.788-.33 1.424-.646 1.86-.877"
      />
    </svg>
  );
};
export default Shield_01;
