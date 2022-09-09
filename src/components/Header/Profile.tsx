import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align='center' >
            { showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Gabi Gol</Text>
                    <Text color='gray.300' fontSize='small' >
                        Gabigol@gmail.com
                    </Text>
                </Box>
            )}

        <Avatar size='md' name='Gabi Gol' src='https://github.com/GaSoler.png' />
    </Flex>
    );
}