import React from "react";
const PenConnectWifi: React.FC<
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
        d="M19.528 5.47a.75.75 0 0 0-1.06 0L16 7.938l4.06 4.061 2.468-2.469a.75.75 0 0 0 0-1.06zM19 13.06l-4.061-4.062-9.691 9.691v4.061h4.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.492 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1M1.25 3.98c1.582-1.678 3.784-2.73 6.228-2.73s4.645 1.052 6.227 2.73L12.25 5.352C11.017 4.044 9.33 3.25 7.478 3.25s-3.54.794-4.773 2.102zM4 6.897c.878-.931 2.108-1.522 3.478-1.522s2.599.59 3.477 1.522L9.5 8.27a2.77 2.77 0 0 0-2.022-.894 2.77 2.77 0 0 0-2.023.894z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PenConnectWifi;
