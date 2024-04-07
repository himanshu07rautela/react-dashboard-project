import imagemid from '../assets/mid_picture.png';

export const Mid = function () {
  return (
    <div className="md:w-full md:col-span-10">
      <img className="w-full" src={imagemid} alt="image description" />
    </div>
  );
};
