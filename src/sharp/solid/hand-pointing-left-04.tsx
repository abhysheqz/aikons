import React from "react";
const HandPointingLeft_04: React.FC<
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
        d="M1.25 8.753c0-.769.585-1.37 1.281-1.37h12.254v-.801h-4.146l.941-1.048c.744-.714 1.283-1.23 1.745-1.594.46-.362.814-.55 1.179-.629q.369-.079.744-.056c.776.05 1.535.487 3.212 1.694l.012.008 4.278 2.834v9.817c0 1.747-1.333 3.142-2.952 3.142h-7.241c-.707 0-1.281-.589-1.281-1.315v-1.433l2.054.007v-.801h-1.887q-.226 0-.427-.075a1.31 1.31 0 0 1-.854-1.24V14.46l2.395.006v-.8h-2.228q-.226-.002-.427-.075a1.31 1.31 0 0 1-.854-1.24v-1.427H12v-.8H2.531c-.696 0-1.281-.602-1.281-1.37"
      />
    </svg>
  );
};
export default HandPointingLeft_04;
