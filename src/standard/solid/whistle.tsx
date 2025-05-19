import React from "react";
const Whistle: React.FC<
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
        d="M14.5 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-4.293.793a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 1 0 1.414-1.414zm8 1.414a1 1 0 0 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 1.414 1.414zM1.25 15A6.75 6.75 0 0 1 8 8.25h3.5a.75.75 0 0 1 .624.334l.777 1.166h1.558l.33-.987a.75.75 0 0 1 .711-.513H22a.75.75 0 0 1 .75.75v2.793c0 .331-.132.65-.366.884l-2.707 2.707a1.25 1.25 0 0 1-.884.366h-4.084A6.751 6.751 0 0 1 1.25 15m4.138 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Whistle;
