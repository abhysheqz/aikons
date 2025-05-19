import React from "react";
const Blender: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.002 1.625h-6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.68 21.102-1.93-4.633V5.276H20V3.375H4.235a1 1 0 0 0-.756.341.93.93 0 0 0-.213.78l1.06 5.624L7.25 12v4.479l-1.93 4.622a.9.9 0 0 0 .096.866c.18.255.481.408.803.408H19.78a.98.98 0 0 0 .802-.408.9.9 0 0 0 .098-.865m-11.866-3.37L7.65 20.518h10.701l-1.16-2.786zM7.25 9.716v-4.44H5.416l.699 3.71zm9.754-2.841h-3v1.5h3zm0 3h-3v1.5h3zm0 3h-3v1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blender;
