import { DogIcon } from "lucide-react";
import styled from "../../styles/styled";

const ImageFrame = styled.div`
  & {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 1rem;
    background: #f1f5f9;
  }
`;

const Image = styled.img`
  & {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Fallback = styled.div`
  & {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
  }
`;

function AnimalImage({ src, alt }) {
  return (
    <ImageFrame>
      {src ? (
        <Image src={src} alt={alt} />
      ) : (
        <Fallback>
          <DogIcon size={32} />
        </Fallback>
      )}
    </ImageFrame>
  );
}

export default AnimalImage;
