import React from "react";
const CustomerService: React.FC<
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
        d="M5.142 1.013a1 1 0 0 1 .735.54l3 6a1 1 0 0 1-.188 1.154l-3.826 3.826a16.08 16.08 0 0 0 6.586 6.586l3.826-3.826a1 1 0 0 1 1.154-.187l6 3a1 1 0 0 1 .26 1.601l-2.414 2.414a2.88 2.88 0 0 1-2.17.858C8.863 22.535 1.448 15.121 1.004 5.876a2.88 2.88 0 0 1 .858-2.169l2.414-2.414a1 1 0 0 1 .867-.28M10.232 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-1.25v1h1.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.5a.75.75 0 0 1 .75-.75h1.25v-1h-1.75a.75.75 0 0 1-.75-.75m5.608-.75a.75.75 0 0 1 .75.75v1.75h.642V7a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0v-1.75H15.84a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75m-4.016-2.54a6.117 6.117 0 0 1 7.355 9.73.75.75 0 1 0 .997 1.12q.166-.148.326-.307A7.617 7.617 0 1 0 9.422 3.807a.75.75 0 1 0 1.12.997 6.2 6.2 0 0 1 1.282-1.094"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerService;
