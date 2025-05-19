import React from "react";
const ShipmentTracking: React.FC<
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
        d="M2 11.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75zm3.5 4.5h3v-1.5h-3zM18.75 14v8a.75.75 0 0 1-.75.75h-4v-1.5h3.25V14zM18 1.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.494.753 2.777 1.607 3.82.616.753 1.353 1.457 1.977 2.055.231.22.447.427.636.615l.53.53.53-.53c.189-.188.405-.394.636-.615.624-.598 1.361-1.302 1.977-2.055.854-1.043 1.607-2.326 1.607-3.82 0-2.638-2.12-4.79-4.75-4.79m.008 6.5c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75h-.016c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShipmentTracking;
