import React from "react";
const Gitbook: React.FC<
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
        d="m5.952 10.648-.008-.004c-1.338-.62-2.74.326-2.74 1.493 0 1.377.806 2.678 2.16 3.378l7.121 3.125 7.797-3.482c.337-.182.514-.495.514-.801v-1.162l-8.267 3.886-7.198-3.148v-2.106l7.169 3.135 10.25-4.818v4.213c0 1.071-.627 2.026-1.583 2.517l-.024.013-8.65 3.863-7.977-3.5-.025-.014c-1.978-1.006-3.241-2.95-3.241-5.1 0-1.835 1.026-3.512 2.665-4.45l.017-.01 8.485-4.426L22.75 6.998v1.455l-10.236 5.092z"
      />
    </svg>
  );
};
export default Gitbook;
