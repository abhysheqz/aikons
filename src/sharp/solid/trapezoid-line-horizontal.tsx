import React from "react";
const TrapezoidLineHorizontal: React.FC<
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
        d="M18.99 3.93a.75.75 0 0 1 .26.57V11H4.752l.001-4.5c0-.37.27-.685.636-.741l12.999-2a.75.75 0 0 1 .602.172M4.75 13h14.5v6.5a.75.75 0 0 1-.863.741l-13.001-2a.75.75 0 0 1-.636-.741zM4.75 13H2v-2h2.751zM19.25 13v-2H22v2z"
      />
    </svg>
  );
};
export default TrapezoidLineHorizontal;
