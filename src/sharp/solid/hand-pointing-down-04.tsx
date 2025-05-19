import React from "react";
const HandPointingDown_04: React.FC<
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
        d="M8.753 22.75c-.769 0-1.37-.585-1.37-1.281V9.215h-.801v4.146l-1.048-.941c-.714-.744-1.23-1.283-1.594-1.745-.362-.46-.55-.814-.629-1.179a2.7 2.7 0 0 1-.056-.744c.05-.776.487-1.535 1.694-3.212l.008-.012L7.791 1.25h9.817c1.747 0 3.142 1.333 3.142 2.952v7.241c0 .707-.589 1.281-1.315 1.281h-1.433l.007-2.054h-.801v1.887q0 .226-.075.427c-.18.498-.668.854-1.24.854H14.46l.006-2.395h-.8v2.228q-.002.226-.075.427c-.18.498-.668.854-1.24.854h-1.427V12h-.8v9.469c0 .696-.602 1.281-1.37 1.281"
      />
    </svg>
  );
};
export default HandPointingDown_04;
