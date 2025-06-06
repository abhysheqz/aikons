import React from "react";
const NuclearPower: React.FC<
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
        d="M9.25 12.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M8.352 2.592c.84-.424 2.07-.842 3.649-.842 1.577 0 2.826.417 3.684.838.429.21.818.412 1.367.882a.75.75 0 0 1 .145.923l-2.67 4.689A4.23 4.23 0 0 0 12 8.25c-.935 0-1.8.302-2.5.814L6.886 4.388a.75.75 0 0 1 .133-.905c.368-.356.912-.68 1.332-.891M7.759 12.757l-5.69.01a.75.75 0 0 0-.732.597c-.085.405-.104 1.153-.07 1.633.065.96.325 2.26 1.095 3.642A8.4 8.4 0 0 0 4.87 21.45q.097.069.184.134c.288.212.54.398 1.233.627a.75.75 0 0 0 .89-.345l3.076-5.492a4.25 4.25 0 0 1-2.493-3.618M13.752 16.374l3.075 5.493a.75.75 0 0 0 .89.345c.468-.155 1.03-.49 1.417-.76a8.4 8.4 0 0 0 2.507-2.813 8.7 8.7 0 0 0 1.096-3.642c.033-.48.007-1.26-.07-1.633a.75.75 0 0 0-.734-.596l-5.69-.011a4.25 4.25 0 0 1-2.491 3.617"
      />
    </svg>
  );
};
export default NuclearPower;
