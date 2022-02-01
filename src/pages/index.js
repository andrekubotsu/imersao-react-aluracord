import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

function Title({ tag, children }) {
  const Tag = tag || "h1";
  return (
    <>
      <Tag>{children}</Tag>
    </>
  );
}

export default function PaginaInicial() {
  const [username, setUsername] = useState("andrekubotsu");
  const router = useRouter();

  return (
    <>
      <Box>
        <Box>
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault();
              console.log("submit!!!");
              router.push(`/chat?username=${username}`);
              // window.location.href = '/chat'
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text>Nome</Text>

            <TextField
              name="input"
              type="text"
              placeholder="Digite seu usuário"
              onChange={async (event) => {
                if (event.target.value.length > 2) {
                  // await getUserData(username)
                  setUsername(event.target.value);
                }
              }}
            />
            <Button type="submit" label="Entrar" />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box>
            <Image src={`https://github.com/${username}.png`} />
            <Text>{username}</Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
