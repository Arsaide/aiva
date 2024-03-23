import React, { FC } from 'react';
import { ILogo } from './ILogo';

const Logo: FC<ILogo> = ({ height, fill }) => {
    return (
        <svg
            style={{ height: `${height}px` }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 800 220"
        >
            <path fill={fill} d="M268.81,219.96V0.99h44.23v218.97H268.81z" />
            <path
                fill={fill}
                d="M438.91,219.96L356.84,0.99h52.23l57.75,168.61L523.58,0.99h52.23l-80.45,218.97H438.91z"
            />
            <path
                fill={fill}
                d="M712.63,0.66l82.15,218.97h-49.17l-12.83-36.6h-94.98l-12.83,36.6h-49.17L659.49,0.66H712.63z M718.74,142.05l-32.98-95.41
                    l-33.59,95.41H718.74z"
            />
            <g>
                <g>
                    <g>
                        <polygon
                            fill={fill}
                            points="225.89,219.29 176.53,219.29 163.65,182.82 105.6,182.82 120.08,141.95 149.56,141.95 134.92,99.93
				                            129.42,84.15 174.82,84.15 			"
                        />
                    </g>
                    <g>
                        <polygon
                            fill={fill}
                            points="119.93,36.78 92.59,113.89 92.67,113.92 82.72,141.95 55.38,219.05 55.49,219.08 55.41,219.29 6.05,219.29
				                            90.06,0.99 132.62,0.99 			"
                        />
                    </g>
                    <polygon
                        fill={fill}
                        points="100.4,92.09 82.72,141.95 100.38,92.09 		"
                    />
                </g>
            </g>
        </svg>
    );
};

export default Logo;
