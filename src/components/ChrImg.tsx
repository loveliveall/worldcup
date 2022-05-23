import React from 'react';
import {
  Image,
} from '@chakra-ui/react';
import { CHARACTER } from '@/data/character';

type ChrImgProps = {
  chrId: string,
  onClick?: () => void,
};
function ChrImg({ chrId, onClick }: ChrImgProps) {
  const ch = CHARACTER[chrId]!;
  return (
    <Image
      w="80px"
      borderRadius="50%"
      cursor={onClick !== undefined ? "pointer" : undefined}
      _hover={onClick !== undefined ? {
        opacity: 0.7,
      } : {}}
      src={ch.img}
      alt={ch.name}
      onClick={onClick}
    />
  );
}

export default ChrImg;
