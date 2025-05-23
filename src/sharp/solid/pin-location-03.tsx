import React from "react";
const PinLocation_03: React.FC<
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
        d="M5.451 16.642C4.267 17.242 4 17.794 4 18.066c0 .153.072.395.403.715.333.323.869.66 1.612.964 1.481.607 3.597 1.005 5.985 1.005s4.504-.398 5.985-1.005c.743-.304 1.279-.641 1.612-.964.331-.32.403-.562.403-.715 0-.272-.267-.825-1.451-1.424l.902-1.785c1.317.667 2.549 1.725 2.549 3.209 0 .863-.432 1.59-1.012 2.152-.577.559-1.36 1.016-2.245 1.378-1.776.727-4.16 1.154-6.743 1.154-2.582 0-4.967-.427-6.743-1.154-.885-.362-1.668-.82-2.245-1.378C2.432 19.657 2 18.93 2 18.066c0-1.484 1.232-2.542 2.549-3.209z"
      />
      <path
        fill="currentColor"
        d="M12 1.25a4.75 4.75 0 0 0-1 9.395V18h2v-7.355a4.752 4.752 0 0 0-1-9.395"
      />
    </svg>
  );
};
export default PinLocation_03;
