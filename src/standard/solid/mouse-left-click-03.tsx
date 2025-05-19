import React from "react";
const MouseLeftClick_03: React.FC<
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
        d="M12 1c-1.05 0-2.15.06-3.14.136-2.537.197-4.588 2.102-4.925 4.64C3.708 7.49 3.5 9.69 3.5 12c0 2.403.225 4.684.462 6.425.33 2.414 2.236 4.28 4.698 4.457.946.069 2.07.118 3.34.118s2.393-.05 3.34-.118c2.462-.177 4.369-2.043 4.698-4.457.237-1.741.462-4.022.462-6.425 0-2.311-.208-4.51-.435-6.223-.337-2.54-2.388-4.444-4.926-4.641A41 41 0 0 0 12 1m-1 2.017c-.67.022-1.346.063-1.984.113a3.4 3.4 0 0 0-1.839.705L11 8.295zM5.918 6.04q.033-.248.1-.483l4.023 4.694H5.54c.068-1.55.218-3.001.378-4.21M18.46 10.25a49 49 0 0 0-.378-4.21c-.21-1.588-1.486-2.785-3.097-2.91-.639-.05-1.315-.09-1.985-.113v7.233z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_03;
