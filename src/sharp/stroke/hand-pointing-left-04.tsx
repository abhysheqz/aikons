import React from "react";
const HandPointingLeft_04: React.FC<
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
        strokeWidth={1.5}
        d="M12.508 13.618h-1.903c-.174 0-.455-.027-.61-.08m0 0c-.577-.197-.993-.686-.993-1.31v-1.71m.993 3.02v1.783c0 .625.432 1.117 1.009 1.315m2.189.082h-1.566c-.174 0-.468-.03-.623-.082m0 0v1.713c.086.988.775 1.471 1.582 1.471h6.44c1.641 0 2.86-1.303 2.972-2.87V7.922L16.45 4.327c-2.273-1.341-3.75.108-6.312 2.947m-1.136 3.243h2.991m-2.99 0H3.747q-.408 0-.744-.1c-.984-.296-1.312-1.598-.67-2.4.273-.341.626-.583 1.011-.583H14.51"
      />
    </svg>
  );
};
export default HandPointingLeft_04;
