import React from "react";
const Zoom: React.FC<
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
        d="M3.955 5.25h3.101c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.1c0 .434 0 .83-.043 1.153-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.955c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M18.24 8.672l.77-.768c1.594-1.589 2.392-2.384 3.066-2.096s.674 1.423.674 3.692v5.002c0 2.27 0 3.405-.674 3.693-.674.287-1.472-.507-3.066-2.097l-.77-.767c-.977-.973-.99-1.005-.99-2.394v-1.871c0-1.39.013-1.422.99-2.394"
      />
    </svg>
  );
};
export default Zoom;
