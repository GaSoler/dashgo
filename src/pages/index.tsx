import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm()

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input 
            name='email' 
            type='email' 
            label='E-mail' 
            error={errors.email}
            {...register(('email'), {required: 'E-mail obrigatório!'})}
          />
          <Input 
            name='password' 
            type='password' 
            label='Senha' 
            error={errors.password}
            {...register(('password'), {required: 'Senha obrigatória!'})}
          />          
        </Stack>

        <Button 
          type='submit' 
          mt='6' 
          colorScheme="pink" 
          size='lg' 
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
