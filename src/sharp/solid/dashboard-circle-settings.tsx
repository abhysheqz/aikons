import React from "react";
const DashboardCircleSettings: React.FC<
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
        d="M2.25 6.75a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M12.75 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M2.25 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 2.25v1.407q.25.08.48.2l.995-.996 1.414 1.414-.995.995q.118.231.2.48h1.406v2h-1.407q-.08.25-.199.48l.995.995-1.414 1.414-.995-.995a3 3 0 0 1-.48.2v1.406h-2V9.843a3 3 0 0 1-.48-.199l-.995.995-1.414-1.414.995-.995a3 3 0 0 1-.199-.48H12.75v-2h1.407q.08-.249.2-.48l-.996-.995 1.414-1.414.996.995q.23-.118.48-.199V2.25zm-1 3.25c-.345 0-.656.14-.884.366A1.24 1.24 0 0 0 16 6.75c0 .346.139.657.366.884.228.227.539.366.884.366.346 0 .657-.139.884-.366s.366-.538.366-.884c0-.345-.139-.656-.366-.884a1.24 1.24 0 0 0-.884-.366"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardCircleSettings;
