import React from "react";
const Treadmill_01: React.FC<
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
        d="m21.33 1.75-1.366 2.367-5.22 1.898.513 1.41 2.363-.86-3.088 7.334-11.976 2.967h-.001c-1.004.246-1.347 1.207-1.3 1.918.025.384.159.793.437 1.12a1.6 1.6 0 0 0 1.24.566h2.257l-.72.72 1.06 1.06 1.781-1.78h9.94v1.78h1.5v-1.78h1.441c1.134 0 1.904-.652 2.277-1.522.352-.825.357-1.838.113-2.757-.246-.925-.768-1.852-1.584-2.478-.84-.643-1.944-.929-3.226-.616h-.003l-1.419.352 3.193-7.583 1.215-.442a.75.75 0 0 0 .415-.369l1.5-2.634zm-2.337 13.72c-.686 0-1.243.56-1.243 1.25s.557 1.25 1.243 1.25h.015c.686 0 1.242-.56 1.242-1.25s-.556-1.25-1.242-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Treadmill_01;
