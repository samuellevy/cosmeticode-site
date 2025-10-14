import { Outlet } from "react-router";
import { Footer } from "@/presentation/components/footer/footer.component";
import { Navigation } from "@/presentation/components/navigation/navigation.component";
import { Container, Content } from "./root.layout.style";

export const RootLayout = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};
