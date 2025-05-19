import React from "react";
const WhatsappBusiness: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.844.465 3.582 1.285 5.1l-1.26 4.706a.75.75 0 0 0 .919.918L6.9 21.466A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m.882 5.5H8.25v10.5h4.632c1.626 0 2.868-1.387 2.868-3 0-.88-.37-1.693-.97-2.25.6-.557.97-1.37.97-2.25 0-1.613-1.242-3-2.868-3m1.368 3c0 .872-.655 1.5-1.368 1.5H9.75v-3h3.132c.713 0 1.368.628 1.368 1.5m-1.368 3H9.75v3h3.132c.713 0 1.368-.628 1.368-1.5s-.655-1.5-1.368-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WhatsappBusiness;
