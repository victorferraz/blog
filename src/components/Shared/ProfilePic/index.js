import { PictureStyle } from './ui';


const ProfilePic = ({src}) => (
  <>
    <figure>
      <PictureStyle src={src} />
    </figure>
  </>
);

export default ProfilePic;
