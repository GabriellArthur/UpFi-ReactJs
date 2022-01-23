import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [urlImage, setUrlImage] = useState('');

  function handleViewImage(url: string): void {
    setUrlImage(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid spacing={10} columns={3}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}

        <ModalViewImage isOpen={isOpen} imgUrl={urlImage} onClose={onClose} />
      </SimpleGrid>
    </>
  );
}