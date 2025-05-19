import React from "react";
const CursorMagicSelection_01: React.FC<
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
        d="M13.5 4A5.92 5.92 0 0 0 17 7.5a5.92 5.92 0 0 0-3.5 3.5A5.92 5.92 0 0 0 10 7.5 5.92 5.92 0 0 0 13.5 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10.58c.63.604.956 1.012.993 1.409.038.4-.086.797-.344 1.103-.376.447-1.276.555-3.075.773-.758.091-1.137.137-1.367.339a1 1 0 0 0-.315.536c-.064.3.079.656.365 1.37l1.482 3.696c.172.427.257.64.256.837a1 1 0 0 1-.296.703c-.14.138-.352.224-.776.396s-.636.26-.83.258a.98.98 0 0 1-.7-.299c-.136-.14-.221-.354-.393-.78l-1.482-3.697c-.286-.713-.43-1.07-.683-1.24a1 1 0 0 0-.596-.165c-.304.015-.608.247-1.217.712-1.444 1.103-2.167 1.654-2.745 1.596-.396-.04-.76-.24-1.009-.553-.362-.457-.295-1.368-.16-3.188l.564-7.724c.178-2.678.273-4.103 1.376-4.552.861-.35 1.69.157 2.952 1.253M17.75 2c.214.58.67 1.036 1.25 1.25-.58.214-1.036.67-1.25 1.25a2.12 2.12 0 0 0-1.25-1.25A2.12 2.12 0 0 0 17.75 2"
      />
    </svg>
  );
};
export default CursorMagicSelection_01;
