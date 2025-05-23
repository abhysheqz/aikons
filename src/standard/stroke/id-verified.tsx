import React from "react";
const IdVerified: React.FC<
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
        strokeWidth={1.5}
        d="M7.5 18c.917-.977 2.223-1.488 3.531-1.5M13 12c0 1.105-.881 2-1.969 2-1.087 0-1.968-.895-1.968-2s.881-2 1.968-2C12.12 10 13 10.895 13 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 22h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4m5 0h4a2 2 0 0 1 2 2v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.43 5.438-.182-1.453a2.266 2.266 0 0 0-4.496 0L8.57 5.438A.5.5 0 0 0 9.066 6h3.868a.5.5 0 0 0 .496-.562"
      />
      <path
        fill="currentColor"
        d="M16.53 17.47a.75.75 0 1 0-1.06 1.06zM17 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47a4.75 4.75 0 0 0-4.75-4.75v1.5A3.25 3.25 0 0 1 20.75 18zm-4.75-4.75A4.75 4.75 0 0 0 12.75 18h1.5a3.25 3.25 0 0 1 3.25-3.25zM12.75 18a4.75 4.75 0 0 0 4.75 4.75v-1.5A3.25 3.25 0 0 1 14.25 18zm4.75 4.75A4.75 4.75 0 0 0 22.25 18h-1.5a3.25 3.25 0 0 1-3.25 3.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
    </svg>
  );
};
export default IdVerified;
