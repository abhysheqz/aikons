import React from "react";
const CheckmarkCircle_01: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m4.44-12.852.897-.44-.88-1.796-.897.44c-1.956.958-3.47 2.602-4.473 3.942-.348.464-.642.901-.877 1.277a8 8 0 0 0-.797-.602c-.267-.176-.797-.451-.997-.555l-.022-.012-.92-.394-.787 1.839.916.393c.13.067.499.26.709.399.428.282.917.683 1.268 1.185l.972 1.388.745-1.521c.058-.11.23-.43.348-.631.237-.404.588-.96 1.043-1.568.922-1.231 2.207-2.588 3.751-3.344"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_01;
