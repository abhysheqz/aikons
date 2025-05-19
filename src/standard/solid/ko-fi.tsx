import React from "react";
const KoFi: React.FC<
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
        d="M1.25 6.5c0-.966.784-1.75 1.75-1.75h14a5.75 5.75 0 0 1 0 11.5h-.25v.25A2.75 2.75 0 0 1 14 19.25H4a2.75 2.75 0 0 1-2.75-2.75zM3 6.25a.25.25 0 0 0-.25.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 .75-.75h1a4.25 4.25 0 0 0 0-8.5zM15.25 8a.75.75 0 0 1 .75-.75h1a3.25 3.25 0 0 1 0 6.5h-1a.75.75 0 0 1-.75-.75zm1.5.75v3.5H17a1.75 1.75 0 1 0 0-3.5zm-8.409-.064a2.187 2.187 0 0 0-3.182 0 2.41 2.41 0 0 0 0 3.314L9 16l3.841-4a2.41 2.41 0 0 0 0-3.314 2.187 2.187 0 0 0-3.182 0L9 9.373z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KoFi;
