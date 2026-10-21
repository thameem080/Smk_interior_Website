import React from 'react';

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  bubbleColor?: string;
  phoneColor?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-4 h-4',
  size,
  bubbleColor = '#25D366',
  phoneColor = '#FFFFFF',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fill={bubbleColor}
        d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.48 2.023 7.783L.667 31.333l7.74-2.008A15.932 15.932 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
      />
      <path
        fill={phoneColor}
        d="M23.518 19.348c-.378-.189-2.235-1.103-2.582-1.229-.346-.126-.598-.189-.85.189-.252.378-.976 1.229-1.196 1.481-.22.252-.44.283-.819.094-.378-.189-1.597-.588-3.04-1.876-1.123-1.002-1.881-2.24-2.102-2.618-.22-.378-.024-.582.165-.77.17-.17.378-.44.567-.661.189-.22.252-.378.378-.63.126-.252.063-.472-.031-.661-.094-.189-.85-2.05-1.165-2.808-.307-.738-.619-.638-.85-.649-.22-.011-.472-.011-.724-.011-.252 0-.661.094-.976.44-.315.346-1.228 1.2-1.228 2.927 0 1.727 1.259 3.397 1.435 3.633.176.236 2.476 3.781 6.002 5.302.839.362 1.494.578 2.005.74.842.267 1.608.229 2.214.139.676-.101 2.079-.85 2.372-1.67.293-.82.293-1.523.205-1.67-.088-.147-.34-.236-.718-.425z"
      />
    </svg>
  );
};
