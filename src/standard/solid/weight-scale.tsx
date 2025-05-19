import React from "react";
const WeightScale: React.FC<
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
        d="M6.173 4.283A2 2 0 0 1 8.153 2h7.694a2 2 0 0 1 1.98 2.283l-.105.731Q17.86 5 18 5a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3.277-2.986zM15.847 4l-.715 5h-2.306l.636-2.225a1 1 0 0 0-1.923-.55L10.746 9H8.867l-.246-1.727-.006-.039L8.153 4zM10.5 16a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WeightScale;
