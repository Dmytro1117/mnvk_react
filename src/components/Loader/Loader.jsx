import { RotatingLines } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RotatingLines
        visible={true}
        height="80"
        width="80"
        strokeColor="#3a97e8"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </LoaderBackdrop>
  );
};
