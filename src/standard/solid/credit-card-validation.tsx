import React from "react";
const CreditCardValidation: React.FC<
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
        d="M16.75 2a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.576 4.73a.75.75 0 0 0-1.152-.96L16.2 8.139l-.92-.92a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 0 0 1.106-.05z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.77 5a7.5 7.5 0 0 0-.52 2.75c0 .784.12 1.54.343 2.25H1V7.75A2.75 2.75 0 0 1 3.75 5zM1 11.5v8.25a2.75 2.75 0 0 0 2.75 2.75h16a2.75 2.75 0 0 0 2.75-2.75v-7.184a7.48 7.48 0 0 1-5.75 2.684 7.5 7.5 0 0 1-6.497-3.75H1m9.5 6.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCardValidation;
