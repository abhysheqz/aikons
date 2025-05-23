import React from "react";
const Gnome: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12.5c2.583 0 4.903.386 6.5 1 0-.98-.278-1.94-.801-2.768l-4.932-7.81a.907.907 0 0 0-1.534 0l-4.932 7.81A5.2 5.2 0 0 0 5.5 13.5c1.597-.614 3.917-1 6.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 13s.5.8.5 2c0 0 0 2-1.5 2s-1.5-1.5-3-1.5S10.5 17 9 17s-1.5-2-1.5-2c0-1.2.5-2 .5-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 13.5s.5.9.5 2.5c0 2-1.262 3.13-3 4-1.41.705-2.572 1.66-3.135 2.16-.239.213-.545.34-.865.34s-.626-.127-.865-.34C10.572 21.66 9.41 20.705 8 20c-1.738-.87-3-2-3-4 0-1.6.5-2.5.5-2.5"
      />
    </svg>
  );
};
export default Gnome;
