import React from "react";
const SwipeLeft_08: React.FC<
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
        d="M7.753 1.25c-.769 0-1.37.585-1.37 1.281v12.254h-.801v-4.146l-1.048.941c-.714.744-1.23 1.283-1.594 1.745-.362.46-.55.814-.629 1.179a2.7 2.7 0 0 0-.056.744c.05.776.487 1.535 1.693 3.212l.01.012L6.79 22.75h9.818c1.747 0 3.142-1.333 3.142-2.952v-7.241c0-.707-.589-1.281-1.315-1.281h-1.433l.007 2.054h-.801v-1.887q-.001-.226-.075-.427a1.31 1.31 0 0 0-1.24-.854H13.46l.006 2.395h-.8v-2.228q-.002-.226-.075-.427a1.31 1.31 0 0 0-1.24-.854H9.924V12h-.8V2.531c0-.696-.602-1.281-1.371-1.281"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.543 2.25-3.207 3.207 3.207 3.207 1.414-1.414-.793-.793h3.586v-2h-3.586l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeLeft_08;
