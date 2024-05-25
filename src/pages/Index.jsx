import React from "react";
import { Container, Box, VStack, HStack, Text, Heading, Image, IconButton, Divider } from "@chakra-ui/react";
import { FaLaptop, FaCamera, FaStickyNote } from "react-icons/fa";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1597423498323-e7e7554b83c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaWNyb2NvbXB1dGVyJTIwcmVwYWlyfGVufDB8fHx8MTcxNjY0OTE2NXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, src: "https://images.unsplash.com/photo-1702146715426-2380c6ad54c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwYXQlMjB3b3JrfGVufDB8fHx8MTcxNjY0OTE2NXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, src: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvbXBvbmVudHN8ZW58MHx8fHwxNzE2NjQ5MTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const notes = [
  { id: 1, title: "How to Clean Your Computer", content: "Regular cleaning of your computer can prevent overheating and extend its lifespan. Use compressed air to remove dust from the fans and vents." },
  { id: 2, title: "Upgrading RAM", content: "Upgrading your RAM can significantly improve your computer's performance. Make sure to check compatibility with your motherboard before purchasing." },
  { id: 3, title: "Installing a New Hard Drive", content: "Installing a new hard drive can provide more storage space and improve speed. Follow the manufacturer's instructions for installation." },
];

const Home = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6} textAlign="center">
        Microcomputer Technician Blog
      </Heading>
      <VStack spacing={8}>
        {notes.map((note) => (
          <Box key={note.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{note.title}</Heading>
            <Text mt={4}>{note.content}</Text>
          </Box>
        ))}
        <Divider />
        <HStack spacing={4} wrap="wrap" justify="center">
          {photos.map((photo) => (
            <Box key={photo.id} boxSize="200px" overflow="hidden" borderRadius="md" shadow="md">
              <Image src={photo.src} alt={`Photo ${photo.id}`} objectFit="cover" width="100%" height="100%" />
            </Box>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

const Photos = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6} textAlign="center">
        Photos
      </Heading>
      <HStack spacing={4} wrap="wrap" justify="center">
        {photos.map((photo) => (
          <Box key={photo.id} boxSize="200px" overflow="hidden" borderRadius="md" shadow="md">
            <Image src={photo.src} alt={`Photo ${photo.id}`} objectFit="cover" width="100%" height="100%" />
          </Box>
        ))}
      </HStack>
    </Container>
  );
};

const Notes = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6} textAlign="center">
        Notes
      </Heading>
      <VStack spacing={8}>
        {notes.map((note) => (
          <Box key={note.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{note.title}</Heading>
            <Text mt={4}>{note.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [page, setPage] = React.useState("home");

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaLaptop />} onClick={() => setPage("home")} />
          <IconButton aria-label="Photos" icon={<FaCamera />} onClick={() => setPage("photos")} />
          <IconButton aria-label="Notes" icon={<FaStickyNote />} onClick={() => setPage("notes")} />
        </HStack>
        {page === "home" && <Home />}
        {page === "photos" && <Photos />}
        {page === "notes" && <Notes />}
      </VStack>
    </Container>
  );
};

export default Index;
