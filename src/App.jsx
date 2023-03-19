import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import { AllRoutes } from "./pages/AllRoutes";
export const App = () => {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
};
