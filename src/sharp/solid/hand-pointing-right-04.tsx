import React from "react";
const HandPointingRight_04: React.FC<
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
        d="M22.75 8.753c0-.769-.585-1.37-1.281-1.37H9.215v-.801h4.146l-.941-1.048c-.744-.714-1.283-1.23-1.745-1.594-.46-.362-.814-.55-1.179-.629a2.7 2.7 0 0 0-.744-.056c-.776.05-1.535.487-3.212 1.694l-.012.008L1.25 7.791v9.817c0 1.747 1.333 3.142 2.952 3.142h7.241c.707 0 1.281-.589 1.281-1.315v-1.433l-2.054.007v-.801h1.887q.226 0 .427-.075c.498-.18.854-.668.854-1.24V14.46l-2.395.006v-.8h2.228q.226-.002.427-.075c.498-.18.854-.668.854-1.24v-1.427H12v-.8h9.469c.696 0 1.281-.602 1.281-1.37"
      />
    </svg>
  );
};
export default HandPointingRight_04;
