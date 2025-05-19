import React from "react";
const StoreVerified_02: React.FC<
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
        d="M9.25 6.75q.001-.721.131-1.405A.75.75 0 0 0 8.75 5h-4A1.75 1.75 0 0 0 3 6.75v.809l-1.908 3.498a.75.75 0 0 0-.092.36c0 .837.28 1.618.755 2.236a1 1 0 0 0-.005.097v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-4.823q.339.072.7.073c1.144 0 2.14-.57 2.763-1.438.203.228.435.428.684.599.835.57 1.889.839 2.853.839.81 0 1.637-.231 2.334-.579a.75.75 0 0 0 .369-.933A7.5 7.5 0 0 1 9.25 6.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 1a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.576 4.73a.75.75 0 0 0-1.152-.96L16.2 7.139l-.92-.92a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 0 0 1.106-.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreVerified_02;
