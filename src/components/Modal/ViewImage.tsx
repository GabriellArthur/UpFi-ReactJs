import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalFooter,
   ModalBody,
   Image,
   Link,
 } from '@chakra-ui/react';
 
 interface ModalViewImageProps {
   isOpen: boolean;
   onClose: () => void;
   imgUrl: string;
 }
 
 export function ModalViewImage({
   isOpen,
   onClose,
   imgUrl,
 }: ModalViewImageProps): JSX.Element {
   return (
     <Modal onClose={onClose} isOpen={isOpen}>
       <ModalOverlay>
         <ModalContent bg="pGray.800">
           <ModalBody>
             <Image maxW={900} maxH={600} w="100%" h="100%" src={imgUrl} />
           </ModalBody>
           <ModalFooter justifyContent="flex-start">
             <Link href={imgUrl} color="white" fontSize="14px">
               Abrir original
             </Link>
           </ModalFooter>
         </ModalContent>
       </ModalOverlay>
     </Modal>
   );
 }