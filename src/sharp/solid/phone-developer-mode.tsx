import React from "react";
const PhoneDeveloperMode: React.FC<
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
        d="M19.25 1.25H4.75V7.5h1.933V3.203H9.47l.484.977h4.095l.483-.977h2.786V7.5h1.933zM4.75 22.75h14.5V16.5h-1.933V19H6.683v-2.5H4.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.336 7.586 19.75 12l-4.414 4.414L13.922 15l3-3-3-3zM10.079 9l-3 3 3 3-1.414 1.414L4.25 12l4.415-4.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneDeveloperMode;
