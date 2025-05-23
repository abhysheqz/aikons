import React from "react";
const SolarPanel_01: React.FC<
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
        d="M12 15.25a.75.75 0 0 1 .75.75v3.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.207 3.25h-.924c-.696 0-1.282 0-1.763.057-.513.06-.976.191-1.399.5-.419.304-.695.707-.93 1.181-.225.453-.44 1.031-.7 1.73l-.928 2.494-.014.038h5.8zm-7.208 7.5c-.27.76-.483 1.42-.61 1.992-.21.952-.225 1.828.263 2.603.497.79 1.29 1.116 2.218 1.264.871.138 2.011.14 3.408.14l.857-5.999zm6.794 6h6.414l-.857-6h-4.7zm7.929 0c1.397 0 2.537-.003 3.407-.141.928-.148 1.721-.474 2.219-1.264.488-.775.473-1.651.262-2.603-.126-.572-.339-1.232-.609-1.992h-6.136zm4.729-7.5-.014-.038-.928-2.493c-.26-.7-.476-1.278-.7-1.73-.235-.475-.512-.878-.93-1.183-.423-.308-.886-.439-1.399-.5-.48-.056-1.067-.056-1.763-.056h-.924l.857 6zm-8.173-6h-2.556l-.857 6h4.27z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarPanel_01;
