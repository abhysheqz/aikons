import React from "react";
const SecurityValidation: React.FC<
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
        d="M10.944 1.875C11.162 1.759 12 1.259 12 1.259s.839.5 1.057.616c.436.23 1.072.546 1.86.877 1.582.663 3.756 1.38 6.158 1.617l.675.067v6.62c0 4.043-2.45 6.96-4.78 8.82a20.3 20.3 0 0 1-3.213 2.084c-.438.23-1.757.799-1.757.799s-1.318-.57-1.756-.799a20.3 20.3 0 0 1-3.214-2.084c-2.33-1.86-4.78-4.777-4.78-8.82v-6.62l.676-.067c2.401-.238 4.576-.954 6.157-1.617.789-.331 1.424-.646 1.86-.877M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m7.78-.97-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecurityValidation;
