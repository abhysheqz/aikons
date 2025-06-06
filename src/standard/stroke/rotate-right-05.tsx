import React from "react";
const RotateRight_05: React.FC<
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
        d="M4 5.997c.864-1.776 2.142-2.943 3.894-3.629 1.22-.477 2.577-.462 3.815-.04C12.598 2.59 14.016 3.59 15 5M15 2v3.001m0 0h-2.4M15.743 11.062l3.685-2.581c.61-.428.755-1.276.322-1.894a1.36 1.36 0 0 0-1.889-.345l-7.37 5.163-.578.394.03-2.539c0-.91-.787-1.618-1.688-1.517a1.52 1.52 0 0 0-1.337 1.301l-.88 5.563c-.14.882.118 1.782.704 2.453l3.466 3.967a2.84 2.84 0 0 0 3.457.646l4.935-2.604.369-.258c.61-.428.755-1.276.322-1.894a1.36 1.36 0 0 0-1.882-.35m-1.666-5.505-1.106.775m1.106-.775a1.36 1.36 0 0 1 1.889.345 1.36 1.36 0 0 1-.323 1.894l-.737.516m.837 2.75-.007.005-.369.258zm0 0 .73-.511c.61-.428.755-1.276.322-1.894a1.36 1.36 0 0 0-1.889-.345m0 0-.368.258"
      />
    </svg>
  );
};
export default RotateRight_05;
