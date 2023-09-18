import { Box, Image, Button, Container, Heading, Grid, Badge } from "@chakra-ui/react";
import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import rightArrow from "../assets/right-arrow.svg";
import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.jpg";


function Banner() {
    return <>
        <header>
            <Box
                d="flex"
                alignItems="center"
                justifyContent="space-between"
                ml={6}
                mr={6}
            >
                <Box>
                    <Image boxSize="90px" src={brandLogo} alt="brand"/>
                </Box>
                <Box>
                    <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
                        Log in
                    </Button>
                    <Button colorScheme="gray.600" fontSize="sm" variant="link">
                        Sign up
                    </Button>
                </Box>
            </Box>
        </header>

        {/* main punch line */}

        <Box>
            <Container maxWidth="container.xl">
                <Box 
                    d="flex"
                    alignItems="center"
                    py="20"
                    flexDirection="row">
                    <Box mr={6}>
                        <Heading as="h1" size="2xl">
                            <Box fontWeight="black">Dive in!</Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.
                        </Box>
                    </Box>
                    <Box w="100%">
                        <Image src={illustration} alt="illustration" />
                    </Box>
                </Box>
            </Container>
        </Box>

        {/* three boxes */}

        <Container maxW="container.xl" mt={10}>
            <Grid templateColumns="repeat(3, 1fr)">
                <Box>
                    <Image
                        w="100%"
                        borderRadius="lg"
                        src={imageOne}
                        alt="image three"
                    />
                    <Button colorScheme="teal" variant="link" mt="5">
                        Explore the outdoors
                    </Button>
                </Box>
                <Box>
                    <Image
                        w="100%"
                        borderRadius="lg"
                        src={imageTwo}
                        alt="image three"
                    />
                    <Button colorScheme="teal" variant="link" mt="5">
                        Explore the outdoors
                    </Button>
                </Box>
                <Box>
                    <Image
                        w="100%"
                        borderRadius="lg"
                        src={imageThree}
                        alt="image three"
                    />
                    <Button colorScheme="teal" variant="link" mt="5">
                        Explore the outdoors
                    </Button>
                </Box>
            </Grid>
        </Container>

        {/* Pills */}

        <Container maxW="container.xl">
            <Box
                direction="row"
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                my="10"
            >
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Boost your career
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Badge 2
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Badge 3
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Badge 4
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Badge 5
                </Badge>
                <Badge
                    borderRadius="3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform="normal"
                    color="#ffffff"
                    bg="blue.100"
                >
                    Badge 6
                </Badge>
            </Box>
        </Container>
    </>
}

export default Banner;