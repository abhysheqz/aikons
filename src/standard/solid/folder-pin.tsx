import React from "react";
const FolderPin: React.FC<
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
        d="M16.42 12.525a.75.75 0 0 1 .58-.275h4a.75.75 0 0 1 .735.897l-.443 2.216 1.351 2.251A.75.75 0 0 1 22 18.75h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1-.643-1.136l1.35-2.251-.442-2.216a.75.75 0 0 1 .155-.623"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h13V20h-1a2 2 0 0 1-1.715-3.029l1.102-1.837-.348-1.742A2 2 0 0 1 17 11h5.75V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderPin;
