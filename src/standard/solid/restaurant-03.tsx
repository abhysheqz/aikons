import React from "react";
const Restaurant_03: React.FC<
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
        d="m8.19 18.188-1.378-1.38-3.277 3.278a.975.975 0 0 0 1.38 1.378zm4.693-7.451.835-.835a2.884 2.884 0 0 1 .127-3.944l3.422-3.423a.975.975 0 1 1 1.38 1.38l-3.423 3.422a.934.934 0 0 0 0 1.321l1.118 1.118a.934.934 0 0 0 1.32 0l3.423-3.422a.975.975 0 0 1 1.38 1.379l-3.423 3.422a2.884 2.884 0 0 1-3.945.126l-.835.835zm7.631-6.252c.381.38.381.998 0 1.378L17.59 8.788A.975.975 0 0 1 16.21 7.41l2.925-2.925a.975.975 0 0 1 1.38 0m-17.6-1.95a.975.975 0 0 0-1.664.69c0 4.004 1.59 7.845 4.422 10.676l2.688 2.688a.975.975 0 0 0 1.38 0l2.235-2.235 7.11 7.11a.975.975 0 1 0 1.38-1.378z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Restaurant_03;
