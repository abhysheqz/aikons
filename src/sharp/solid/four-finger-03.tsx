import React from "react";
const FourFinger_03: React.FC<
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
        d="M12.295 1.25c-.757 0-1.37.598-1.37 1.335v8.301h-.801V4.202c0-.696-.602-1.281-1.37-1.281-.77 0-1.372.585-1.372 1.281v10.583h-.8v-4.146l-1.048.941c-.714.744-1.23 1.283-1.594 1.745-.362.46-.55.814-.629 1.179a2.7 2.7 0 0 0-.056.744c.05.776.487 1.535 1.694 3.212l.008.012 2.834 4.278h9.817c1.747 0 3.142-1.333 3.142-2.952V7.04c0-.737-.614-1.335-1.37-1.335-.758 0-1.371.598-1.371 1.335v5.175h-.801V4.813c0-.737-.614-1.335-1.37-1.335-.758 0-1.371.598-1.371 1.335v6.63h-.801V2.585c0-.737-.614-1.335-1.37-1.335"
      />
    </svg>
  );
};
export default FourFinger_03;
