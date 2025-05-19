import React from "react";
const CreativeMarket: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.009 6H18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.982 10.206 12 12m0 0L9.02 13.794M12 12l.019 3.5M12 12l-.018-3.5M12 12l3 1.706M12 12l-3-1.707"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.828 2H20a2 2 0 0 1 2 2v7.172a2 2 0 0 1-.586 1.414l-8 8a2 2 0 0 1-2.828 0l-7.172-7.172a2 2 0 0 1 0-2.828l8-8A2 2 0 0 1 12.828 2Z"
      />
    </svg>
  );
};
export default CreativeMarket;
