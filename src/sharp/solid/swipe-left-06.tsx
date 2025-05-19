import React from "react";
const SwipeLeft_06: React.FC<
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
        d="M7.753 1.25c-.769 0-1.37.585-1.37 1.281v11.14h-.801v-4.17c-.41.347-1.35 1.147-1.732 1.52-.769.757-1.36 1.54-1.539 2.369a2.7 2.7 0 0 0-.056.744c.024.371.157.745.446 1.245.292.504.722 1.103 1.317 1.93l2.955 3.462v1.979h10.333v-1.993c.261-.269.822-.849 1.24-1.334.208-.243.405-.486.565-.707q.245-.344.32-.538c.152-.4.235-.863.277-1.52.042-.658.042-1.486.042-2.614v-1.487c0-.707-.589-1.281-1.315-1.281h-1.426v1.838h-.801v-2.228c0-.707-.589-1.281-1.315-1.281h-1.427V12h-.8V9.215c0-.707-.59-1.281-1.315-1.281H9.924v2.952h-.8V2.531c0-.696-.602-1.281-1.371-1.281"
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
export default SwipeLeft_06;
