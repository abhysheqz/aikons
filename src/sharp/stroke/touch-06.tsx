import React from "react";
const Touch_06: React.FC<
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
        strokeWidth={1.5}
        d="M10.702 8.011v2.998m0-2.998h1.688m-1.688 0V4.84c0-.272.057-1.4-.08-1.841-.424-1-1.634-1.305-2.436-.664-.34.273-.581.798-.581 1.183v10.61M12.39 8.01c.763 0 1.223.585 1.47 1.44l1.593.06m-3.063-1.5a1.497 1.497 0 0 1 1.388 1.493v2.514m-5.65 9.983v-2.004c-1.438-1.771-2.333-2.657-3.41-4.33-1.571-2.207-.516-4.001 2.705-6.495m8.03.338c.689-.029 1.438.832 1.55 1.442l1.713.072c.987.086 1.343 1.124 1.278 1.938l-.047 3.116c.047 2.042-1.368 3.015-2.094 3.906v2m-2.4-12.474.198.036c.712.13 1.23.75 1.23 1.474v1.972"
      />
    </svg>
  );
};
export default Touch_06;
