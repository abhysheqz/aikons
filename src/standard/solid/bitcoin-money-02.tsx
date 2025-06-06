import React from "react";
const BitcoinMoney_02: React.FC<
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
        d="M22.085 4.08a.75.75 0 0 1 .415.67v15a.75.75 0 0 1-1.085.671l-.01-.005-.056-.025a6 6 0 0 0-.237-.1 10 10 0 0 0-.943-.32 12.5 12.5 0 0 0-3.419-.471c-1.826 0-3.465.36-4.683.93-1.447.675-3.309 1.07-5.317 1.07-1.121 0-2.659-.006-5.279-1.054A.75.75 0 0 1 1 19.75v-15a.75.75 0 0 1 1.029-.696C4.395 5 5.723 5 6.732 5h.018c1.826 0 3.465-.36 4.683-.93C12.88 3.395 14.742 3 16.75 3c1.583 0 2.903.264 3.831.529.465.133.833.266 1.088.368a8 8 0 0 1 .38.165l.024.011.008.004.003.001zM6.498 13.303a.75.75 0 0 0-.694-.802 12 12 0 0 1-.943-.104.75.75 0 1 0-.222 1.483q.517.078 1.057.117a.75.75 0 0 0 .802-.694m12.994-1.832a.75.75 0 0 0-.63-.853q-.518-.077-1.058-.117a.75.75 0 0 0-.108 1.496q.483.035.943.104a.75.75 0 0 0 .853-.63M12.5 8.25a.75.75 0 0 0-1.5 0v.25H9.25a.75.75 0 0 0 0 1.5h.25v4.5h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0V16h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 12.75 8.5h-.25zM11 11.5V10h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMoney_02;
