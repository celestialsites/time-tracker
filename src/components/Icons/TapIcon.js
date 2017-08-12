import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

function TapIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 511.448 511.448">
      <G fill="#FFF">
        <Path d="M282.788 114.33c0 37.204-21.364 71.117-54.127 87.498v-21.662c21.917-14.56 35.35-39.358 35.35-65.836 0-43.556-35.438-78.982-78.983-78.982s-78.982 35.426-78.982 78.982c0 26.478 13.432 51.277 35.348 65.836v21.662c-32.764-16.382-54.127-50.294-54.127-87.498 0-53.906 43.854-97.76 97.76-97.76s97.762 43.854 97.762 97.76z"/>
        <Path d="M424.182 257.248v157.544c0 44.163-35.923 80.086-80.086 80.086H213.373c-34.52 0-65.063-22.004-75.977-54.757l-31.394-94.203c-5.015-15.045.287-31.34 13.19-40.562l22.202-15.863v72.277c0 4.572 3.712 8.284 8.285 8.284s8.284-3.712 8.284-8.285V114.33c0-7.61 3.226-14.913 8.87-20.027 5.7-5.192 13.123-7.644 20.877-6.904 13.676 1.302 24.38 13.796 24.38 28.454v175.218c0 4.573 3.712 8.285 8.285 8.285s8.285-3.712 8.285-8.285V238.05c0-7.61 3.226-14.913 8.87-20.027 5.7-5.192 13.123-7.655 20.877-6.904 13.675 1.302 24.38 13.796 24.38 28.454V299.91c0 4.573 3.71 8.285 8.284 8.285 4.574 0 8.286-3.712 8.286-8.285v-53.023c0-7.61 3.226-14.913 8.87-20.027 5.7-5.192 13.123-7.655 20.877-6.904 13.675 1.303 24.38 13.797 24.38 28.455v60.337c0 4.573 3.71 8.285 8.284 8.285s8.285-3.712 8.285-8.285v-53.023c0-7.61 3.226-14.913 8.87-20.027 5.7-5.192 13.123-7.655 20.877-6.904 13.678 1.303 24.382 13.797 24.382 28.455z"/>
      </G>
      <Path fill="#C2E95D" d="M247.44 114.33c0 16.934-6.948 32.985-18.78 44.594v-43.07c0-23.11-17.298-42.85-39.38-44.96-12.27-1.16-24.52 2.895-33.602 11.147-9.08 8.253-14.283 20.028-14.283 32.29v44.594c-11.83-11.61-18.78-27.67-18.78-44.594 0-34.41 28.004-62.412 62.413-62.412S247.44 79.92 247.44 114.33z"/>
      <Path fill={color} d="M440.75 257.248v157.544c0 53.3-43.356 96.656-96.655 96.656H213.373c-41.667 0-78.518-26.556-91.696-66.09l-31.394-94.194c-7.336-21.993.42-45.82 19.275-59.286l31.836-22.744v-49.1C98.92 202.48 70.696 160.58 70.696 114.33 70.696 51.288 121.986 0 185.026 0s114.33 51.288 114.33 114.33c0 31.04-12.725 60.114-33.923 81.19 12.24 2.862 22.524 11.213 28.456 22.293 1.004-1.127 2.065-2.198 3.18-3.214 9.08-8.253 21.332-12.307 33.603-11.147 14.604 1.392 27.12 10.505 33.912 23.197 1.005-1.127 2.066-2.198 3.18-3.214 9.082-8.252 21.333-12.306 33.604-11.146 22.083 2.11 39.38 21.85 39.38 44.958zm-16.568 157.544V257.248c0-14.66-10.704-27.152-24.38-28.455-7.754-.75-15.176 1.712-20.876 6.904-5.645 5.114-8.87 12.416-8.87 20.027v53.023c0 4.573-3.712 8.285-8.285 8.285s-8.284-3.712-8.284-8.285V248.41c0-14.658-10.704-27.15-24.38-28.454-7.754-.75-15.176 1.712-20.876 6.904-5.645 5.114-8.87 12.416-8.87 20.027v53.023c0 4.573-3.712 8.285-8.285 8.285s-8.285-3.712-8.285-8.285V239.574c0-14.66-10.704-27.152-24.38-28.455-7.754-.752-15.176 1.71-20.876 6.903-5.645 5.114-8.87 12.416-8.87 20.027v53.023c0 4.573-3.712 8.285-8.285 8.285-4.574 0-8.286-3.712-8.286-8.285V115.855c0-14.66-10.704-27.152-24.38-28.455-7.754-.74-15.176 1.712-20.876 6.904-5.645 5.114-8.87 12.416-8.87 20.027v247.44c0 4.573-3.712 8.285-8.285 8.285s-8.285-3.712-8.285-8.285v-72.277l-22.203 15.863c-12.903 9.224-18.204 25.517-13.19 40.562l31.395 94.204c10.914 32.753 41.457 54.757 75.977 54.757H344.1c44.16-.002 80.082-35.925 80.082-80.088zM228.662 201.83c32.763-16.383 54.126-50.295 54.126-87.5 0-53.905-43.854-97.76-97.76-97.76s-97.76 43.854-97.76 97.76c0 37.204 21.363 71.117 54.126 87.498v-21.662c-21.916-14.56-35.348-39.358-35.348-65.836 0-43.556 35.437-78.982 78.982-78.982s78.982 35.426 78.982 78.982c0 26.478-13.432 51.277-35.348 65.836v21.663zm0-42.906c11.83-11.61 18.778-27.66 18.778-44.594 0-34.41-28.003-62.412-62.412-62.412s-62.412 28.003-62.412 62.412c0 16.923 6.948 32.985 18.78 44.594V114.33c0-12.26 5.202-24.037 14.282-32.29 9.08-8.25 21.332-12.305 33.603-11.145 22.083 2.11 39.38 21.85 39.38 44.96v43.07z"/>
    </Svg>
  );
}

TapIcon.defaultProps = {
  width: 50,
  height: 50,
  color: '#999'
};

TapIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default TapIcon;