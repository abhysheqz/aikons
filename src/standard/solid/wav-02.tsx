import React from "react";
const Wav_02: React.FC<
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
        d="M17.748 13.292a.75.75 0 0 1 .956.46l1.292 3.692 1.292-3.692a.75.75 0 0 1 1.416.496l-1.75 5a.75.75 0 0 1-.708.502h-.5a.75.75 0 0 1-.708-.502l-1.75-5a.75.75 0 0 1 .46-.956M5.996 13.25a.75.75 0 0 1 .75.75v2.862l.664-.83a.75.75 0 0 1 1.172 0l.664.83V14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.336.469L7.996 17.7l-1.414 1.768A.75.75 0 0 1 5.246 19v-5a.75.75 0 0 1 .75-.75m7.542.502a.75.75 0 0 1 .708-.502h.5a.75.75 0 0 1 .708.502l1.75 5a.75.75 0 0 1-1.416.496l-.349-.998h-1.886l-.349.998a.75.75 0 0 1-1.416-.496zm.54 2.998h.836l-.418-1.194z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H6.021A2 2 0 0 1 4 19v-5a2 2 0 0 1 2-2h12.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H4.168A2.924 2.924 0 0 0 1.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wav_02;
