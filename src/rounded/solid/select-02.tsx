import React from "react";
const Select_02: React.FC<
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
        fillRule="evenodd"
        d="M5.125 1.125a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1M11.125 5.125a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m9 1a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0v-11a1 1 0 0 1 1-1m-15 5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m1 9a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.08 2.375h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M20.08 17.375h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M5.08 17.375h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043"
      />
    </svg>
  );
};
export default Select_02;
