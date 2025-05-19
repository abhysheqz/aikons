import React from "react";
const Qwen: React.FC<
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
        d="M6.53 6.686 9.17 2h3.211l1.388 2.5h5.361l1.578 2.812-1.36 2.422L22 14.5l-1.645 2.663h-2.477L15 22h-3.217l-1.415-2.5H5l-1.653-2.854 1.279-2.177L2 9.87l1.755-3.184zM20 7.5l-1.31 2.162L21.5 14.5h-2.56l-1.538-2.434L12 21l-1.251-2H5.5l1-2.5h2.845l-5.154-9H6.75l2.751-5 1.345 2.47L9.39 7.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12 15.5 9 10h6z" />
    </svg>
  );
};
export default Qwen;
