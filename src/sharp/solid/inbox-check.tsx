import React from "react";
const InboxCheck: React.FC<
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
        d="M1.25 4.225c0-.538.437-.975.975-.975H11.5V5.2H3.2V14h5.55v.75a2.25 2.25 0 1 0 4.5 0V14h5.55v-1.5h1.95v9.275a.975.975 0 0 1-.975.975H2.225a.975.975 0 0 1-.975-.975z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-.499 6.81 2.855-2.854-1.06-1.06L17.5 5.938l-.741-.74-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InboxCheck;
