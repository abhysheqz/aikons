import React from "react";
const Seesaw: React.FC<
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
        strokeWidth={1.5}
        d="M8 17h8M13.5 17v-5m-3 1v4M15.904 5.636l1.423-.318m0 0 1.423-.317m-1.423.317.657 2.752m-14.415.32 1.424-.318m0 0 1.423-.318m-1.423.318.657 2.751m-3.084.689 18.502-4.13a.73.73 0 0 1 .875.53c.273 1.14-.463 2.276-1.642 2.54L4.647 13.946c-1.18.263-2.356-.448-2.628-1.588a.706.706 0 0 1 .547-.846"
      />
    </svg>
  );
};
export default Seesaw;
