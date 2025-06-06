import React from "react";
const Fan_01: React.FC<
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
        d="M5.638 4.097c.862-.715 3.14-2.346 6.112-2.346 1.713 0 3.008.627 3.756 1.116.71.463.994 1.25.994 1.962 0 .974-.358 2.23-.829 3.242-.204.44-.436.878-.683 1.304a4.49 4.49 0 0 0-3.238-1.374 4.5 4.5 0 0 0-2.585.816C8.35 8.159 7.378 7.713 6.512 7.45 5.69 7.203 5 6.456 5 5.493c0-.509.202-1.034.638-1.396m6.112 5.154a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m-4.5 3.25q.001-.567.134-1.094c-.486 0-.975.018-1.45.06-1.111.098-2.379.417-3.222.903-.617.357-1.156.996-1.202 1.842a6.9 6.9 0 0 0 .911 3.811c1.486 2.573 4.038 3.732 5.089 4.12a1.8 1.8 0 0 0 1.528-.145c.833-.482 1.135-1.453.94-2.288-.217-.923-.316-2.045-.12-3.125A4.5 4.5 0 0 1 7.25 12.5m5.836 4.298c.244.427.506.846.783 1.243.646.927 1.563 1.88 2.416 2.371.617.357 1.44.504 2.196.121a6.9 6.9 0 0 0 2.845-2.695c1.485-2.573 1.212-5.362 1.024-6.466a1.8 1.8 0 0 0-.89-1.25c-.834-.482-1.826-.258-2.452.33-.719.675-1.688 1.347-2.77 1.709q.012.168.012.339c0 2.02-1.331 3.73-3.164 4.298"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fan_01;
