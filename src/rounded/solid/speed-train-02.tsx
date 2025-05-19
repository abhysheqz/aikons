import React from "react";
const SpeedTrain_02: React.FC<
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
        d="M12.102 2.689c-1.333-.44-2.752-.44-5.226-.44L2 2.25a.75.75 0 0 0-.75.75v6.65c0 .283 0 .424.088.512s.23.088.512.088h4.403c2.443 0 3.868 0 5.197.499 1.709.642 3.095 2.016 4.456 3.182l1.938 1.592c.137.112.205.168.287.197.08.03.17.03.348.03.522.003 1.044.008 1.565 0a2.75 2.75 0 0 0 2.706-2.706c.029-1.84-.815-3.618-2.29-4.729l-.5-.37c-.132-.097-.198-.145-.274-.17s-.157-.025-.32-.025h-8.253a.75.75 0 0 1 0-1.5h5.336c.501 0 .752 0 .797-.138.045-.137-.156-.286-.56-.584l-.119-.087c-1.99-1.47-3.13-2.313-4.465-2.752"
      />
      <path
        fill="currentColor"
        d="M1.25 15v-2.65c0-.283 0-.424.088-.512s.23-.088.512-.088h4.245c2.648 0 3.784.011 4.827.403 1.047.393 1.947 1.15 4.014 2.922l.006.006c.318.26.477.391.452.51a.2.2 0 0 1-.019.052c-.056.107-.261.107-.673.107H2a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.113 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeedTrain_02;
