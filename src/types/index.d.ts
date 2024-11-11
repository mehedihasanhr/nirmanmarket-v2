export type Category = {
  header: string;
  uuid: string;
  icon: string;
  links: {
    label: string;
    link: string;
    uuid: string;
  }[];
};

// slider image data
export type SliderImageData = {
  id: string | number;
  image: string;
};
