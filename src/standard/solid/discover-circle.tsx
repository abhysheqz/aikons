import React from "react";
const DiscoverCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m5.353 5.396a.5.5 0 0 1 .121.512l-2.178 6.55a2.5 2.5 0 0 1-1.583 1.583l-6.556 2.183a.5.5 0 0 1-.632-.632l2.177-6.545a2.5 2.5 0 0 1 1.58-1.582l6.56-2.19a.5.5 0 0 1 .511.121m-4.355 5.338A1 1 0 0 1 12.015 13h-.006a1 1 0 0 1-.031-2h.006a1 1 0 0 1 1.015.984"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscoverCircle;
