import React from "react";
const ChartDown: React.FC<
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
        d="M4.707 2.043a1 1 0 0 0-1.414 1.414c3.872 3.872 7.761 5.823 10.703 6.804 1.142.38 2.14.615 2.938.759l-.559.447a1 1 0 1 0 1.25 1.562l2.5-2a1 1 0 0 0 .156-1.406l-2-2.5a1 1 0 1 0-1.562 1.25l.539.673c-.707-.129-1.6-.34-2.63-.682-2.682-.894-6.293-2.693-9.92-6.321M4.5 8.748a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75zm5.25 5.25c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zm8.75.75a1.75 1.75 0 0 0-1.75 1.75v4c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-4a1.75 1.75 0 0 0-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartDown;
