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
        fillRule="evenodd"
        d="M5.892 15.299a1 1 0 0 1-.44 1.343C4.266 17.242 4 17.794 4 18.066c0 .154.072.395.403.715.333.323.869.66 1.612.964 1.481.607 3.597 1.005 5.985 1.005s4.504-.398 5.985-1.005c.743-.304 1.279-.64 1.612-.964.331-.32.403-.561.403-.715 0-.271-.267-.824-1.451-1.424a1 1 0 0 1 .902-1.784c1.317.666 2.549 1.724 2.549 3.208 0 .863-.432 1.591-1.012 2.152-.577.559-1.36 1.016-2.245 1.378-1.776.727-4.16 1.154-6.743 1.154-2.582 0-4.967-.427-6.743-1.154-.885-.362-1.668-.819-2.245-1.378C2.432 19.657 2 18.93 2 18.066c0-1.484 1.232-2.542 2.549-3.208a1 1 0 0 1 1.343.44"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a4.75 4.75 0 0 0-1.236 9.338.314.314 0 0 1 .236.3v6.862a1 1 0 1 0 2 0v-6.863c0-.141.1-.263.236-.3A4.752 4.752 0 0 0 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinLocation_03;
