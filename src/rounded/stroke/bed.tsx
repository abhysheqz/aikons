import React from "react";
const Bed: React.FC<
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
        d="M2 3.5v17M22 8.5v12M2 8.5l4 2h16M2 15.5h4m16 0h-3M6 10.5v6c0 1.655.345 2 2 2h9c1.655 0 2-.345 2-2v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.814 10.5c.08-.424.206-.868.182-1.303a2.06 2.06 0 0 0-.87-1.583c-.201-.14-.646-.282-1.113-.403-.682-.177-1.023-.266-1.422-.175-.283.065-.528.216-.88.485-.039.03-.058.044-.088.07A2.1 2.1 0 0 0 2 8.5v0"
      />
    </svg>
  );
};
export default Bed;
