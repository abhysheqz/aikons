import React from "react";
const TwoFinger_04: React.FC<
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
        d="M12.295 1.25c-.757 0-1.37.598-1.37 1.335V12h-.801V4.202c0-.696-.602-1.281-1.37-1.281-.77 0-1.372.585-1.372 1.281v10.583h-.8v-4.146l-1.048.941c-.714.744-1.23 1.283-1.594 1.745-.362.46-.55.814-.629 1.179a2.7 2.7 0 0 0-.056.744c.05.775.487 1.535 1.694 3.212l.008.012 2.834 4.278h9.817c1.747 0 3.142-1.333 3.142-2.952v-7.241c0-.708-.589-1.281-1.315-1.281h-1.433q.006.082.007.167v1.887h-.801v-1.887q0-.226-.075-.427a1.31 1.31 0 0 0-1.24-.854h-1.427v2.395h-.8V2.585c0-.737-.614-1.335-1.37-1.335"
      />
    </svg>
  );
};
export default TwoFinger_04;
