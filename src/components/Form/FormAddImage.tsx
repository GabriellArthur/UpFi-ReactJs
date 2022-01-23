import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';

interface FormAddImageProps {
  closeModal: () => void;
}

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');
  const toast = useToast();

  const formValidations = {
    image: {
      required: true,
      validate: {
        lessThan10MB: files => files[0]?.size < 10000000 || 'Max 10MB',
        acceptedFormats: files =>
          ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
          'Only PNG, JPEG e GIF',
      },
    },
    title: {
      required: true,
      minLength: {
        value: 2,
        message: 'O título deve ter pelo menos 2 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'O título não deve ter mais do que 20 caracteres',
      },
    },
    description: {
      required: true,
      maxLength: {
        value: 65,
        message: 'A descrição não deve ter mais do que 65 caracteres',
      },
    },
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(image => api.post('/api/images', image), {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });

  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();
  const { errors } = formState;

  const onSubmit = async (data: Record<string, unknown>): Promise<void> => {
    try {
      if (!imageUrl) {
        toast({
          status: 'error',
          title: 'Opa',
          position: 'top',
          description: 'A imagem não foi carregada',
          isClosable: true,
        });
        return;
      }

      await mutation.mutateAsync({
        title: data.title,
        description: data.description,
        url: imageUrl,
      });
      toast({
        status: 'success',
        title: 'Sucesso',
        position: 'top',
        description: 'Sua imagem está salva',
        isClosable: true,
      });
    } catch {
      toast({
        status: 'error',
        title: 'Aff',
        position: 'top',
        description: 'Ocorreu um erro ao salvar a imagem',
        isClosable: true,
      });
    } finally {
      mutation.reset();
      setLocalImageUrl('');
      setImageUrl('');
      reset();
      closeModal();
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          error={errors.image}
          {...register('image', formValidations.image)}
        />

        <TextInput
          placeholder="Título da imagem..."
          maxLength={20}
          error={errors.title}
          {...register('title', formValidations.title)}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          maxLength={65}
          error={errors.description}
          {...register('description', formValidations.description)}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}