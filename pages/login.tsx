import { Button, Container, Typography } from "@material-ui/core";

import { signIn, signOut, useSession } from "next-auth/client";

const Login = () => {
  const [session, loading] = useSession();

  return (
    <Container>
      {!!loading && <Typography>Loading...</Typography>}
      {!session && <Button onClick={() => signIn()}>Sing in</Button>}
      {!!session && <Button onClick={() => signOut()}>Sing out</Button>}
    </Container>
  );
};

export default Login;
