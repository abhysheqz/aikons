import React from "react";
const AiSecurity_02: React.FC<
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
        d="M12 1.25s-.839.5-1.057.616c-.436.231-1.072.546-1.86.877-1.582.663-3.756 1.38-6.158 1.618l-.675.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.437.228 1.756.798 1.756.798s1.319-.57 1.756-.799a20.3 20.3 0 0 0 3.215-2.084c2.33-1.86 4.779-4.777 4.779-8.819v-6.62l-.675-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877C12.839 1.75 12 1.25 12 1.25m-1.129 6.5H9.266l-2.737 7.184 1.402.534.769-2.018h2.737l.77 2.018 1.4-.534zm-.005 4.2H9.271l.798-2.093zm5.381 3.3v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiSecurity_02;
