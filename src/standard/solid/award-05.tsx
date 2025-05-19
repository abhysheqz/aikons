import React from "react";
const Award_05: React.FC<
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
        d="M12 1.214c-4.265 0-7.785 3.311-7.785 7.47 0 4.54 3.46 8.101 7.786 8.101 4.321 0 7.785-3.497 7.785-8.1 0-4.16-3.52-7.471-7.785-7.471m2.768 6.926a1 1 0 1 0-1.536-1.28l-1.8 2.159-.725-.726a1 1 0 1 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.009 21.868 1-7.5 1.982.264-.774 5.804 3.412-1.364a1 1 0 0 1 .742 0l3.412 1.364-.774-5.803 1.982-.265 1 7.5a1 1 0 0 1-1.362 1.06L12 21.079l-4.629 1.85a1 1 0 0 1-1.362-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_05;
