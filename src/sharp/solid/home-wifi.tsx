import React from "react";
const HomeWifi: React.FC<
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
        d="M17.114 13.75c-1.73 0-3.32.64-4.626 1.702l1.262 1.551c.992-.806 2.146-1.253 3.364-1.253 1.222 0 2.38.45 3.373 1.261l1.265-1.549c-1.308-1.069-2.903-1.712-4.638-1.712M17.114 17.11c-.98 0-1.898.288-2.697.784l1.054 1.7a3.1 3.1 0 0 1 1.643-.483c.582 0 1.14.17 1.65.488l1.059-1.698a5.1 5.1 0 0 0-2.71-.79M17.121 20.75a1 1 0 1 0 0 2h.006a1 1 0 1 0 0-2z"
      />
      <path
        fill="currentColor"
        d="M11.953 1.404a.75.75 0 0 0-.912 0l-8.498 6.5a.75.75 0 0 0-.283.725l2 11.5a.75.75 0 0 0 .74.621h9.378l-4-5.515 1.163-.946c1.542-1.255 3.46-2.039 5.573-2.039 1.02 0 1.995.183 2.905.514l.719-4.135a.75.75 0 0 0-.283-.725z"
      />
    </svg>
  );
};
export default HomeWifi;
