import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.';

const Content = {
  lightSections: [
    {
      isTextOnRight: true,
      title: 'MONSOON III',
      text,
      image: image1,
    },
  ],
  darkSections: [
    {
      isTextOnRight: false,
      title: 'BEAMS',
      text,
      image: image2,
    },
    {
      isTextOnRight: true,
      title: 'Move 2',
      text,
      image: image3,
    },
  ],
};

export default Content;
//export default darkSections;
